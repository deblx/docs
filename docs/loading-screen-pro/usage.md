
sidebar_position: 4
Usage
Getting Started
Open Edit → Project Settings → Plugins → Loading Screen Pro
Click ✚ Create & Assign Default Loading Screen Asset
The asset opens automatically — configure images, hints, music, and more
Click ▶ Preview Loading Screen to see the result live
Press Launch or package your game — the loading screen appears automatically on every Open Level
Configuring the Data Asset
General — Set Background Color as the base color. Optionally assign a Background Image for a quick full-screen backdrop without a slideshow.

Media Sequence — Add images and set duration and transition per slide. Enable Ken Burns for a cinematic zoom effect.

Progress Bar — Choose a Progress Bar Style (Bar / Segmented / Stepped). Enable Gradient Progress Bar for a colored fill.

Spinner — Choose a Spinner Style (Ring / Arc / Bars / Dots). Or assign a Spinner Texture to use your own rotating image.

Audio — Assign Background Music and set volume and fade-in duration.

Hints — Add entries to the Hints array. Set Hint Display Mode to Random or Sequential.

Per-Level Loading Screens
Create a second Data Asset (e.g. DA_BossLevel)
Open Project Settings → Loading Screen Pro
Add an entry to Level Loading Screen Overrides
Set the key to the short map name (e.g. BossLevel) and the value to your asset
Blueprint Integration
Use the Show Loading Screen node to display a screen manually. Use Set Loading Progress every Tick to drive the progress bar from Blueprint. Use Clear Loading Progress Override and Hide Loading Screen when done.

Bind to On Slide Changed on the LSP Subsystem to react to slide transitions.

Troubleshooting
Loading screen does not appear — Make sure a Data Asset is assigned in Project Settings. Loading screens do not appear in PIE — use Launch or a packaged build.

Progress bar stays at 0% — Ensure Minimum Display Time is greater than 0.

Music does not play — Check that Background Music is assigned in the Data Asset.

Support
📧 support@deblx.com
💬 Discord
