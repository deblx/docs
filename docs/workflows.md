---
title: Common Workflows
description: Practical Unreal Engine workflows using Deblx editor plugins.
---

# Common Workflows

This collection covers everyday Unreal Engine tasks and links to the relevant Deblx plugin guides. The steps assume **Unreal Engine 5.1+** and a correctly installed plugin.

## Prepare a Project for a Release

Before packaging a game, inspect asset usage, review duplicate content and check loading transitions.

1. **Inspect asset sizes.** Run [Asset Size Analyzer](/asset-size-analyzer/usage) across your Content folder. Sort by file size and inspect unexpectedly large assets.
2. **Review duplicate content.** Use [Duplicate Asset Detector Pro](/duplicate-asset-detector/usage) to locate potentially redundant assets.
3. **Review references before cleanup.** Check referencers, save your work and keep a source-control checkpoint before deleting or consolidating assets.
4. **Check loading transitions.** Configure [Loading Screen Pro](/loading-screen-pro/usage) and verify the result in a packaged game or Launch session.
5. **Track follow-ups.** Add remaining TODOs with [Quick Notes / ToDo](/quick-notes/usage).

::: warning
Asset analysis and duplicate detection help highlight candidates for optimization, but do not replace performance profiling or a backup strategy. Validate changes in a separate build before shipping.
:::

## Investigate a Large Project

When disk usage grows unexpectedly:

1. Open [Asset Size Analyzer](/asset-size-analyzer/usage) and scan the affected folder.
2. Narrow the result set using file size and asset type filters.
3. Export a CSV report if you need to track changes between builds.
4. Scan related folders with [Duplicate Asset Detector Pro](/duplicate-asset-detector/usage).
5. Check project references and dependencies before removing any content.

::: tip
Disk size and estimated memory footprint are different measurements. Unreal Engine cooking, compression and streaming can change actual runtime memory use.
:::

## Manage Review Notes Inside the Editor

1. Place a **Quick Note** in the viewport where the issue is visible.
2. Attach a note to a specific Blueprint node when the issue belongs to a graph.
3. Use categories and priorities to distinguish bugs from ordinary follow-up tasks.
4. Review active notes from the Overview Panel and mark completed items as resolved.
5. Export notes when you need to share the findings outside the project.

See [Quick Notes features](/quick-notes/features) and the [usage guide](/quick-notes/usage).

## Create Loading Screens Without Custom UI Code

1. Install and enable [Loading Screen Pro](/loading-screen-pro/installation).
2. Create or select the loading screen Data Asset.
3. Configure the image sequence, visual style, music and tips.
4. Preview the settings in the editor.
5. Validate the loading screen during transitions in a packaged game.

See the [complete configuration guide](/loading-screen-pro/usage) and [troubleshooting](/loading-screen-pro/troubleshooting).

## Keeping the Project Clean

A regular maintenance pass can combine all four tools:

| Goal | Recommended guide |
| --- | --- |
| Reduce unnecessary duplicate content | [Duplicate Asset Detector Pro](/duplicate-asset-detector/usage) |
| Locate oversized project assets | [Asset Size Analyzer](/asset-size-analyzer/usage) |
| Track editor TODOs and bug markers | [Quick Notes / ToDo](/quick-notes/usage) |
| Improve level-loading presentation | [Loading Screen Pro](/loading-screen-pro/usage) |

Need help with a workflow? Use the [Deblx Help Center](https://deblx.com/help).
