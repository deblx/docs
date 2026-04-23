---
sidebar_position: 3
---

# Features

## Visual Styles

### Progress Bar
Choose from three styles in the **Progress Bar** category of your Data Asset:

- **Bar** — classic solid or gradient-filled bar with a subtle leading-edge highlight
- **Segmented** — smooth fill divided by thin vertical dividers for a chunky, game-style look
- **Stepped** — 20 discrete cells that switch fully on or off as progress advances

All styles support gradient fill and an optional percentage label.

### Spinner
Choose from four styles in the **Spinner** category:

- **Ring** — rotating dot ring with a trailing opacity fade (default)
- **Arc** — 270° arc sweep where the head is bright and the tail fades out
- **Bars** — 8 radial bar segments that rotate (classic macOS-style)
- **Dots** — three horizontally arranged dots that bounce in a wave pattern

Assign a **Custom Spinner Texture** to replace any built-in style with your own PNG.

### Ken Burns Effect
Slowly zooms each image over its display duration — adds cinematic depth to any slide.  
Adjustable intensity (0–30%). Recommended: 4–12%.

### Cinematic Overlays
- **Vignette** — soft dark gradient around the screen edges
- **Letterbox** — black bars at top and bottom for a widescreen look
- **Screen fade-in** — automatic fade from black when the loading screen first appears

## Media Sequence

Add images to the **Media Sequence** array to create a slideshow. Each entry supports:

- Individual **display duration**
- Individual **transition effect** (Fade, Slide Left, Slide Right, Fade to Black, Zoom In, Cut)
- Individual **transition duration**
- **Per-slide hint override** — show a specific hint for a specific image
- **Per-slide transition sound** — play a sound when this slide transitions

Leave the Media Sequence empty for a plain spinner screen with background color.

## Audio

- **Background Music** — plays during loading, fades out automatically after the level loads
- **Fade-in duration** — configurable ramp-up time (0 = instant full volume)
- **Transition Sound** — global sound played on every slide change (overridable per slide)
- Music also plays in the **editor preview window**

## HUD Elements

### Hints / Tips
Add any number of hints to the **Hints** array. Each hint supports an optional icon texture.  
Display mode: **Random** or **Sequential**. Hints fade in and out smoothly.

### Logo
Display a studio or game logo in any corner. Configurable size, opacity, and position.

### Overlay Text
Show a line of custom text (game title, level name, etc.) at any anchor point on screen.

### Sequence Dots
Small animated dots at the bottom showing the active slide. Toggle via `Show Sequence Dots`.

## Workflow Tools

### Quick Setup
**Project Settings → Loading Screen Pro** contains a green **✚ Create & Assign Default Loading Screen Asset** button.  
One click creates `Content/LoadingScreenPro/DA_DefaultLoadingScreen`, assigns it as the default, and opens it for editing.

### In-Editor Preview
Every Data Asset has a **▶ Preview Loading Screen** button at the top.  
Opens a live 1280×720 window showing the exact loading screen — including animations, transitions, and music.

### Color Presets
Select a preset from the **Color Preset** dropdown to apply a complete color theme in one click:

- **Dark** — dark background, blue progress bar
- **Minimal** — light background, dark UI
- **Cinematic** — black background, gold gradient bar, vignette, letterbox
- **Bright** — blue background, white bar

The preset resets to **None** after applying so you can keep tweaking from there.

## Blueprint API

All nodes are available in Blueprints under the **Loading Screen Pro** category.

| Node | Description |
|---|---|
| `Show Loading Screen` | Display a loading screen (pass None for default) |
| `Hide Loading Screen` | Dismiss the loading screen |
| `Is Loading Screen Active` | Check if a loading screen is currently visible |
| `Set Loading Progress` | Push a custom progress value (0.0–1.0) from Blueprint |
| `Clear Loading Progress Override` | Revert to automatic progress |
| `Get Loading Progress` | Read current progress value |

### Events

| Event | Description |
|---|---|
| `On Loading Screen Shown` | Fires when a loading screen becomes visible |
| `On Loading Screen Hidden` | Fires when the loading screen is dismissed |
| `On Slide Changed` | Fires with the new slide index on every slide change |
