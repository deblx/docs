import test from 'node:test'
import assert from 'node:assert/strict'
import { spawnSync } from 'node:child_process'
import { chmodSync, existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const script = new URL('./merge-dependabot.mjs', import.meta.url).pathname
const sha = 'a'.repeat(40)

function scenario(verified) {
  const dir = mkdtempSync(join(tmpdir(), 'deblx-dependabot-test-'))
  try {
    const fakeGh = join(dir, 'gh')
    const log = join(dir, 'merged.json')
    writeFileSync(fakeGh, `#!/usr/bin/env node
const fs = require('node:fs')
const args = process.argv.slice(2)
if (args[0] === 'api' && args[1].includes('/pulls?')) {
  console.log(process.env.FIXTURE_PRS)
} else if (args[0] === 'api' && args[1].includes('/actions/workflows/deploy.yml/runs?')) {
  console.log(process.env.FIXTURE_RUNS)
} else if (args[0] === 'pr' && args[1] === 'merge') {
  fs.writeFileSync(process.env.FIXTURE_LOG, JSON.stringify(args))
} else {
  console.error('Unexpected gh command:', args)
  process.exit(2)
}
`)
    chmodSync(fakeGh, 0o755)
    const prs = [
      { number: 123, user: { login: 'dependabot[bot]' }, head: { sha, repo: { full_name: 'deblx/docs' } }, base: { ref: 'main' }, draft: false },
      { number: 124, user: { login: 'some-user' }, head: { sha, repo: { full_name: 'deblx/docs' } }, base: { ref: 'main' }, draft: false }
    ]
    const runs = verified ? [{ name: 'Build and Deploy Documentation', event: 'pull_request', conclusion: 'success', head_sha: sha, actor: { login: 'dependabot[bot]' } }] : []
    const result = spawnSync(process.execPath, [script], {
      encoding: 'utf8',
      env: {
        ...process.env,
        PATH: `${dir}:${process.env.PATH}`,
        GITHUB_REPOSITORY: 'deblx/docs',
        GITHUB_EVENT_NAME: 'workflow_dispatch',
        FIXTURE_PRS: JSON.stringify(prs),
        FIXTURE_RUNS: JSON.stringify({ workflow_runs: runs }),
        FIXTURE_LOG: log
      }
    })
    assert.equal(result.status, 0, result.stderr || result.stdout)
    if (verified) {
      assert.equal(existsSync(log), true)
      const args = JSON.parse(readFileSync(log, 'utf8'))
      assert.equal(args[2], '123')
      assert.equal(args[args.length - 1], sha)
      assert.ok(args.includes('--squash'))
    } else {
      assert.equal(existsSync(log), false)
      assert.match(result.stdout, /Skipping #123/)
    }
  } finally {
    rmSync(dir, { recursive: true, force: true })
  }
}

test('merges a Dependabot PR only when its exact head SHA passed documentation CI', () => scenario(true))
test('does not merge when the PR build is not successful', () => scenario(false))
