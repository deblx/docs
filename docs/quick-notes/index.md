---
sidebar_position: 1
---

# Quick Notes

Quick Notes is a lightweight editor tool that lets you place TODO notes, bug markers, and reminders directly in the Viewport and Blueprint Editor. Stay organized, track issues, and never lose context — all without leaving Unreal Engine.

## Why You Need This Tool

Game development is complex. Bugs appear during playtesting, level designers spot issues mid-work, and ideas pop up at the worst moments. Instead of switching to external tools like Trello or sticky notes on your monitor, Quick Notes lets you pin notes exactly where the problem is — right in your scene or on a Blueprint node.

## Key Features

### Viewport Notes
- Right-click anywhere in the Viewport to place a sticky note at that exact world location
- Notes appear as colored cards floating above their position with a connector line
- Choose from TODO, BUG, INFO, or REMINDER categories
- Set priority levels (Low, Medium, High)
- Toggle "Editor only" to hide notes during Play-In-Editor

### Blueprint Notes
- Right-click any Blueprint node to attach a note directly to it
- Notes are linked to the specific node via GUID
- Jump back to the exact Blueprint from the overview panel
- Never lose track of which node needs work

### Overview Panel
- View and manage all notes in one place under **Tools > Quick Notes**
- Search notes by title or description
- Filter by source (Viewport / Blueprint) and resolved status
- Jump to any note with one click — camera focuses on Viewport notes, Blueprint editor opens for BP notes
- Mark notes as resolved or delete them

### Export
- Export all notes to a .txt file with a file picker dialog
- Organized by source (Viewport / Blueprint) with category, priority, and context info
- Perfect for sharing with your team or archiving before a milestone

### Error Codes for Easy Support
Quick Notes includes built-in diagnostic codes (QN-100 to QN-700). If something goes wrong, check the Output Log and share the QN code with us — we can identify the issue immediately.

## Note Properties

Every note includes:
- **Title:** Short summary of the note
- **Description:** Optional detailed text
- **Category:** TODO, BUG, INFO, or REMINDER (color-coded)
- **Priority:** Low, Medium, or High
- **Source:** Viewport (world position) or Blueprint (linked to a specific node via GUID)
- **Resolved:** Mark notes as done without deleting them

## Technical Details

- **Supported Engine Versions:** 5.0, 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 5.7
- **Platforms:** Windows, Mac, Linux
- **Module Type:** Editor Only (no runtime impact)
- **Network Replicated:** No
- **Runtime Performance Impact:** None — the plugin runs exclusively in the editor and is completely stripped from packaged/shipping builds

## Data Storage

- All data is local and project-specific — not included in version control by default
- No external services, network calls, or cloud dependencies
- Your notes stay private and secure

## Get It Now

Available on [Fab Marketplace](https://www.fab.com/de/sellers/Deblx)

## Support

Need help? Join our Discord community:
- [Deblx Dev Discord](https://discord.gg/UJCnVjwTTt)
- [Documentation](https://deblx.github.io/docs/)
- Email: support@deblx.com
