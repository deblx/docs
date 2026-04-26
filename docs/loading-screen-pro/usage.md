---
sidebar_position: 4
---

# Usage Guide

## Quick Setup (2 minutes)

### Step 1 — Open Plugin Settings

In Unreal Engine, go to **Edit → Project Settings**, then scroll down on the left side to **Plugins → Loading Screen Pro**.

### Step 2 — Create the Default Asset

Click the **✚ Create & Assign Default Loading Screen Asset** button.

This automatically creates a `DA_LoadingScreen` Data Asset in your project's `Content/` folder and assigns it as the active loading screen.

### Step 3 — The Asset Opens Automatically

The Data Asset opens in the Details panel. Here you configure everything:

- **Slideshow Images** — add your background images (Texture2D)
- **Background Color** — fallback color if no images are added
- **Hints** — add loading tips that cycle during loading
- **Music** — assign a background sound
- **Progress Bar** — choose style (Bar / Segmented / Stepped)
- **Spinner** — choose style (Ring / Arc / Bars / Dots)

### Step 4 — Preview the Loading Screen

At the top of the Data Asset, click the **▶ Preview Loading Screen** button.

A **1280×720 preview window** opens immediately — no Play-in-Editor required. You see all animations, transitions, and music playing live. Close the window when done.

### Step 5 — Play the Game

Press **Play** or package the game. The loading screen appears automatically on every level transition — no Blueprint nodes required for basic use.

---

## Per-Level Loading Screens

To use a different loading screen on a specific map:

1. Create a new Data Asset: **right-click in Content Browser → Miscellaneous → Data Asset → LSPDataAsset**
2. Configure it as desired
3. Go to **Project Settings → Plugins → Loading Screen Pro**
4. Under **Per-Level Overrides**, click **+** and set:
   - **Map** → select your level
   - **Loading Screen Asset** → select the new Data Asset

---

## Blueprint Integration

### Show / Hide Loading Screen manually

Use the **Show Loading Screen** and **Hide Loading Screen** Blueprint nodes to trigger loading screens manually — for example during a cutscene or custom transition.

### Drive Progress from Blueprint

Use the **Set Loading Progress** node and pass a float value between `0.0` and `1.0` to control the progress bar from code.

### Events

| Event | When it fires |
|---|---|
| On Slide Changed | Every time the active slide changes |
| On Loading Screen Shown | When the loading screen appears |
| On Loading Screen Hidden | When the loading screen disappears |

---

## Troubleshooting

**Loading screen does not appear**
→ Make sure a Data Asset is assigned in Project Settings. Loading screens only appear in **packaged builds** or **Launch** — not in Play-in-Editor (PIE).

**Progress bar stays at 0%**
→ Set a **Minimum Display Time** (e.g. 2.0 seconds) in the Data Asset so the bar has time to animate.

**Music does not play**
→ Music plays correctly in packaged builds. In the editor, use the **▶ Preview Loading Screen** button — not PIE.

**Images do not show**
→ Make sure the textures are set to **Texture2D** and use a compatible format (RGBA8 or DXT5).
