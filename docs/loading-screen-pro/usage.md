---
sidebar_position: 4
---

# Usage

## Getting Started

1. Open **Edit → Project Settings → Plugins → Loading Screen Pro**
2. Click **✚ Create & Assign Default Loading Screen Asset**
3. The asset opens automatically — configure images, hints, music, and more
4. Click **▶ Preview Loading Screen** to see the result live
5. Press Launch or package your game — the loading screen appears on every level transition

## Configuring the Data Asset

**General**
Set `Background Color` as the base color. Optionally assign a `Background Image` for a quick full-screen backdrop without a slideshow.

**Media Sequence**
Add images to the array and set duration and transition per slide. Enable `Ken Burns` for a cinematic zoom effect. Enable `Loop Sequence` so the slideshow cycles if loading takes longer than one full pass.

**Progress Bar**
Choose a `Progress Bar Style` (Bar / Segmented / Stepped). Enable `Gradient Progress Bar` and set start and end colors for a colored fill.

**Spinner**
Choose a `Spinner Style` (Ring / Arc / Bars / Dots). Or assign a `Spinner Texture` to use your own rotating image.

**Audio**
Assign `Background Music` and set volume and fade-in duration. Assign `Transition Sound` for a sound on each slide change.

**Hints**
Add entries to the `Hints` array — each can have text and an optional icon. Set `Hint Display Mode` to Random or Sequential.

## Per-Level Loading Screens

1. Create a second Data Asset (e.g. `DA_BossLevel`)
2. Open **Project Settings → Loading Screen Pro**
3. Add an entry to **Level Loading Screen Overrides**
4. Set the key to the short map name (e.g. `BossLevel`) and the value to your asset

## Blueprint Integration

**Show a loading screen manually** — use the `Show Loading Screen` node and pass your Data Asset (or leave empty for the default).

**Drive progress from Blueprint** — call `Set Loading Progress` every Tick with your current progress value (0.0–1.0). Call `Clear Loading Progress Override` and `Hide Loading Screen` when done.

**React to slide changes** — bind to `On Slide Changed` on the LSP Subsystem.

## Troubleshooting

**Loading screen does not appear**
Make sure a Data Asset is assigned in Project Settings. Loading screens do not appear in PIE — use Launch or a packaged build.

**Progress bar stays at 0%**
Ensure `Minimum Display Time` is greater than 0. If using Blueprint-driven progress, call `Set Loading Progress` every Tick.

**Music does not play**
Check that `Background Music` is assigned in the Data Asset. Music requires a valid game world — it will not play if no level is loaded yet.
