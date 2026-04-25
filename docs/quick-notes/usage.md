---
sidebar_position: 4
---

# Usage Guide

## Quick Start

### Creating Your First Viewport Note

1. Open any level in your project
2. Right-click anywhere in the Viewport
3. Select **"Add Quick Note here"** from the context menu
4. Fill in the note dialog:
   - **Title:** Short summary (e.g., "Fix lighting here")
   - **Description:** Optional details
   - **Category:** Choose TODO, BUG, INFO, or REMINDER
   - **Priority:** Set Low, Medium, or High
   - **Editor Only:** Check to hide during Play-In-Editor
5. Click **Create**

The note appears as a colored card at that location!

### Creating Your First Blueprint Note

1. Open any Blueprint
2. Right-click on any node
3. Select **"Add Quick Note here"**
4. Fill in the same dialog as viewport notes
5. Click **Create**

The note is now attached to that specific node!

## Managing Notes with the Overview Panel

### Opening the Overview Panel

Go to **Tools → Quick Notes** to open the centralized management panel.

### Understanding the Interface

The Overview Panel shows:
- List of all notes in your project
- Search box at the top
- Filter options (Source, Status)
- Buttons for Export and navigation

### Searching Notes

Type in the search box to filter by:
- Note title
- Note description
- Partial matches work

### Filtering Notes

**By Source:**
- All Notes
- Viewport Only
- Blueprint Only

**By Status:**
- All
- Unresolved Only
- Resolved Only

### Jumping to Notes

Click any note in the list:
- **Viewport notes:** Camera moves to the note's location
- **Blueprint notes:** Opens Blueprint Editor and focuses on the node

### Marking Notes as Resolved

1. Select a note in the Overview Panel
2. Click **Mark as Resolved** button
3. Note stays in history but is marked complete
4. Filter to hide resolved notes when focusing on active work

### Deleting Notes

1. Select a note
2. Click **Delete** button
3. Confirm deletion
4. Note is permanently removed

## Common Workflows

### Level Design Bug Tracking

During playtesting:

1. Play your level
2. When you spot an issue, pause
3. Navigate to the problem area
4. Right-click and add a BUG note
5. Set priority based on severity
6. Continue playtesting
7. Later, open Overview Panel to see all bugs
8. Fix them one by one, marking as resolved

### Blueprint Refactoring

When working on complex Blueprints:

1. Review your Blueprint logic
2. Add TODO notes on nodes that need work:
   - "Optimize this loop"
   - "Add error handling"
   - "Clean up temp variables"
3. Continue building functionality
4. Later, use Overview Panel to find all refactoring tasks
5. Tackle them systematically

### Team Handoff

When passing work to another developer:

1. Add INFO notes explaining key decisions
2. Add TODO notes for remaining work
3. Add REMINDER notes for important deadlines
4. Export all notes to .txt
5. Share the file with team member
6. They can reference notes while working

### Pre-Milestone Cleanup

Before shipping or major milestones:

1. Open Overview Panel
2. Filter to show all unresolved notes
3. Review each one:
   - Fix critical bugs
   - Complete important TODOs
   - Mark "nice-to-haves" as resolved (defer to next milestone)
4. Export final list for documentation
5. Archive the export with milestone files

### Asset Review

When reviewing levels or systems:

1. Walk through level/system
2. Add notes for improvements:
   - "Add more detail here"
   - "Performance issue - too many lights"
   - "Polish pass needed"
3. Categorize as TODO or INFO
4. Set appropriate priorities
5. Work through high-priority items first

## Advanced Tips

### Organize by Priority

Use priorities strategically:
- **High:** Must be done before shipping
- **Medium:** Should be done but not blocking
- **Low:** Polish and nice-to-haves

### Use Categories Effectively

- **TODO:** Active work items
- **BUG:** Things that are broken
- **INFO:** Documentation and context
- **REMINDER:** Time-sensitive or easy-to-forget tasks

### Editor-Only Toggle

Use "Editor Only" for:
- Visual aids during development
- Notes that would break immersion during testing
- Temporary markers

Don't use it for:
- Important bugs that need testing in PIE
- Performance markers you want to see during play

### Blueprint Note Best Practices

✅ **Do:**
- Add notes to complex logic
- Mark nodes that need optimization
- Document why you made certain decisions

❌ **Don't:**
- Add too many notes (clutters the graph)
- Leave vague notes without context
- Forget to mark as resolved when done

### Export Regularly

Create periodic exports:
- Weekly for active projects
- Before major milestones
- When changing team members
- For sprint reviews

## Troubleshooting

### Note Doesn't Appear

**Cause:** Editor-only mode enabled and you're in PIE

**Solution:** Exit Play-In-Editor mode

### Can't Find a Note

**Cause:** Filtered out or deleted

**Solution:**
- Check filter settings in Overview Panel
- Make sure "Show Resolved" is enabled
- Try searching by keyword

### Blueprint Note Lost

**Cause:** Node was deleted or Blueprint was refactored

**Solution:**
- Check Overview Panel - note may show as orphaned
- Note is preserved even if node is gone
- Can be deleted manually if no longer needed

### Error Code QN-XXX in Output Log

**Solution:**
- Note the error code
- Check Output Log for details
- Contact support@deblx.com with the code
- Or ask in [Deblx Dev Discord](https://discord.gg/UJCnVjwTTt)

## Keyboard Shortcuts

Currently, Quick Notes uses context menus for creation. Keyboard shortcuts may be added in future updates based on user feedback!
