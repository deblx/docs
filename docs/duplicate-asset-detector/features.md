---
sidebar_position: 3
---

# Features

## Smart Detection

### Content-Based Hashing
Duplicate Asset Detector uses advanced content-based hashing to find **true duplicates**, not just similarly named files. This means:
- Textures with identical pixels are detected, even with different names
- Materials with the same parameters are identified
- Static Meshes with identical geometry are found

### Intelligent Filtering
The plugin automatically excludes:
- Level actors and instances
- Engine content (unless you want to include it)
- System files and special assets
- Plugin content (optional)

### Special Asset Handling
Optimized detection for:
- Materials and Material Instances
- Textures (Texture2D, TextureCube, RenderTarget)
- Static Meshes and Skeletal Meshes
- Sounds (SoundWave, SoundCue)
- Blueprints and C++ Classes
- Data Tables and Curves
- And many more

## Safe Cleanup

### Redirect & Delete
The safest way to remove duplicates:
1. Automatically updates all references to point to the kept asset
2. Deletes the duplicate asset
3. Preserves all functionality in your project
4. No broken references or missing assets

### Delete Only
For advanced users who are certain:
- Quickly removes duplicates without redirection
- Useful when you've already manually updated references
- Use with caution

### Preview Before Delete
Always see what will be affected:
- List of all assets to be deleted
- All referencers that will be updated
- Estimated disk space savings
- Review before confirming

## Flexible Scanning

### Scan Options
- **Entire Project:** Analyze all assets in your Content folder
- **Specific Folders:** Right-click any folder → Find Duplicates
- **Custom Paths:** Enter manual paths for specialized scans

### Filtering
- Filter by asset type (Textures, Materials, Meshes, etc.)
- Set minimum file size threshold
- Exclude specific folder patterns
- Include/exclude Engine content
- Include/exclude Plugin content

## Detailed Analysis

### Asset Information
For each duplicate pair, see:
- File size (disk space)
- Number of dependencies
- Number of referencers
- Visual thumbnail preview
- Asset type and package path

### Wasted Space Calculation
The plugin calculates:
- Total duplicate size across your project
- Potential savings per duplicate pair
- Accumulated savings if all duplicates are removed

### Export Reports
Export your findings to:
- **CSV** - For spreadsheet analysis
- **Excel** - With formatting and charts
- **JSON** - For custom processing
- **Full Report** - Comprehensive project analysis

## Important Notes

### Assets in Use Warning
When deleting assets currently used in an open level, Unreal Engine may display a warning ("asset is already in use"). This is normal engine behavior - the redirect operation completes successfully.

**For best results:**
- Close levels that reference duplicate assets before deletion
- Alternatively, reload the project after performing redirects

### Detection Accuracy
While Duplicate Asset Detector uses advanced content-based hashing, in rare cases false positives may occur with:
- Complex procedurally generated assets
- Assets with similar but not identical content
- Special engine-internal assets

If you encounter an incorrectly flagged asset, please report it via Discord or email.
