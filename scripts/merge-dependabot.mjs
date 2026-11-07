import { execFileSync } from 'node:child_process'
import { readFileSync } from 'node:fs'

const repo = process.env.GITHUB_REPOSITORY
if (!/^[\\w.-]+\\/[\\w.-]+$/.test(repo ?? '')) {
  throw new Error('Expected a GitHub repository in owner/repo format')
}

function api(route) {
  return JSON.parse(execFileSync('gh', ['api', route], { encoding: 'utf8' }))
}

const eventName = process.env.GITHUB_EVENT_NAME
const event = eventName === 'workflow_run'
  ? JSON.parse(readFileSync(process.env.GITHUB_EVENT_PATH, 'utf8'))
  : null
const successfulEvent = event?.workflow_run
const allPRs = api(`repos/${repo}/pulls?state=open&per_page=100`)
const candidates = allPRs.filter(pr =>
  pr.user?.login === 'dependabot[bot]' &&
  pr.head?.repo?.full_name === repo &&
  pr.base?.ref === 'main' &&
  !pr.draft
)

console.log(`Found ${candidates.length} eligible Dependabot pull request(s) for verification.`)
let merged = 0
for (const pr of candidates) {
  const sha = pr.head.sha
  // Workflow completions and the daily fallback both require a successful
  // PR build for the exact commit being merged.
  let verified = successfulEvent &&
    successfulEvent.event === 'pull_request' &&
    successfulEvent.conclusion === 'success' &&
    successfulEvent.actor?.login === 'dependabot[bot]' &&
    successfulEvent.head_sha === sha &&
    successfulEvent.name === 'Build and Deploy Documentation'

  if (!verified) {
    const result = api(`repos/${repo}/actions/workflows/deploy.yml/runs?event=pull_request&head_sha=${sha}&status=success&per_page=100`)
    verified = (result.workflow_runs ?? []).some(run =>
      run.event === 'pull_request' &&
      run.conclusion === 'success' &&
      run.head_sha === sha &&
      run.actor?.login === 'dependabot[bot]' &&
      run.name === 'Build and Deploy Documentation'
    )
  }
  if (!verified) {
    console.log(`Skipping #${pr.number}: no successful PR build for ${sha}.`)
    continue
  }

  console.log(`Merging verified Dependabot PR #${pr.number} at ${sha}.`)
  execFileSync('gh', [
    'pr', 'merge', String(pr.number),
    '--repo', repo, '--squash', '--delete-branch', '--match-head-commit', sha
  ], { stdio: 'inherit' })
  merged++
}
console.log(`Merged ${merged} verified Dependabot PR(s).`)
