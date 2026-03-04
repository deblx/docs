---
sidebar_position: 3
---

# Features

## Viewport Notes

### Place Notes in 3D Space

Right-click anywhere in the Viewport to place a sticky note at that exact world location. The note appears as a colored card floating above the position with a visual connector line showing its anchor point.

### Visual Indicators

- **Color-coded categories:** TODO (blue), BUG (red), INFO (yellow), REMINDER (green)
- **Priority badges:** Visual indicators for Low, Medium, High priority
- **Connector lines:** Show exact placement in 3D space
- **Editor-only option:** Hide notes during Play-In-Editor for clean testing

### Context Preservation

Notes stay exactly where you placed them. When you return to that area weeks later, your note is still there reminding you what needs to be done.

## Blueprint Notes

### Attach to Specific Nodes

Right-click any Blueprint node to attach a note directly to it. The note is linked to that specific node via GUID, so even if you move or reorganize your Blueprint, the note stays attached.

### Jump to Blueprint

Click any Blueprint note in the Overview Panel and it will:
1. Open the Blueprint Editor
2. Navigate to the exact graph
3. Focus on the specific node
4. Highlight the note for you

Perfect for tracking complex logic issues or marking nodes that need refactoring.

## Overview Panel

### Centralized Management

Access all your notes from **Tools → Quick Notes**. The Overview Panel gives you a bird's-eye view of everything that needs attention across your entire project.

### Search & Filter

- **Text search:** Find notes by title or description
- **Filter by source:** Show only Viewport or Blueprint notes
- **Filter by status:** Hide resolved notes or show only unresolved
- **Sort options:** Organize by priority, date, or category

### One-Click Navigation

Click any note to jump directly to it:
- **Viewport notes:** Camera moves to the note location
- **Blueprint notes:** Opens the Blueprint and focuses on the node

### Mark as Resolved

Don't want to delete a note but want to track it as done? Mark it as resolved to keep it in your history without cluttering your active list.

## Note Categories

### TODO
- Default category for general tasks
- Blue color coding
- Perfect for feature work and improvements

### BUG
- Red color coding for critical issues
- High visibility for problems that need fixing
- Easy to spot during playtesting

### INFO
- Yellow color for informational notes
- Document design decisions or important context
- Reference material for you or your team

### REMINDER
- Green color for time-sensitive tasks
- Don't forget important deadlines or follow-ups
- Set priorities to track urgency

## Priority System

### Low Priority
- Nice-to-have improvements
- Polish and refinement tasks
- Can be deferred if needed

### Medium Priority
- Important but not blocking
- Should be addressed soon
- Default priority level

### High Priority
- Critical issues or must-have features
- Blocks progress or affects quality
- Visual indicator helps them stand out

## Export Functionality

### Text File Export

Export all your notes to a `.txt` file:
1. Click **Export** in the Overview Panel
2. Choose save location
3. File is organized by source with full context

### What's Included

Each note in the export shows:
- Title and description
- Category and priority
- Source (Viewport location or Blueprint path)
- Creation date
- Resolved status

### Use Cases

- **Team Handoffs:** Share your notes with other developers
- **Milestone Archives:** Keep a record of what was tracked
- **Task Lists:** Generate TODO lists for sprint planning
- **Bug Reports:** Export bug notes for QA documentation

## Error Diagnostic Codes

Quick Notes uses error codes (QN-100 to QN-700) for easy troubleshooting:

- **QN-100 series:** Initialization and setup
- **QN-200 series:** Viewport note operations
- **QN-300 series:** Blueprint note operations
- **QN-400 series:** Overview panel operations
- **QN-500 series:** Export functionality
- **QN-600 series:** Data storage
- **QN-700 series:** UI and rendering

If something goes wrong, check the Output Log for the error code and share it with support for instant diagnosis.

## Performance & Runtime

### Zero Runtime Impact

Quick Notes is **editor-only**. The plugin:
- Does not load in packaged builds
- Has no runtime performance cost
- Is completely stripped from shipping builds
- Uses no memory in your final game

### Efficient in Editor

- Notes update only when edited
- Minimal viewport rendering cost
- No frame rate impact during normal work
- Efficient data storage

## Data Management

### Local Storage

All notes are stored locally in your project:
- No cloud dependencies
- No network calls
- Fast and reliable
- Private and secure

### Version Control

By default, note data is not included in version control. This is intentional - notes are personal workflow tools. If you want to share notes with your team, use the export functionality.

## Support

Need help? Contact us:
- [Deblx Dev Discord](https://discord.gg/UJCnVjwTTt) - Fast community support
- Email: support@deblx.com
- Include error codes (QN-XXX) for faster diagnosis
