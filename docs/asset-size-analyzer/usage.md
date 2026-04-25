---
sidebar_position: 3
---

# Usage Guide

## Quick Start

### Step 1: Open Asset Size Analyzer

1. Go to **Window → Asset Size Analyzer**
2. A new window opens with the analyzer interface

### Step 2: Scan Your Assets

1. Click **"Scan All Assets"** to analyze your entire project
2. Wait for the scan to complete (5-30 seconds for large projects)
3. Results appear in the sortable table

That's it! You're ready to analyze.

## Understanding the Interface

### Main Table Columns

- **Asset Name:** The name of the asset
- **Asset Type:** Type (Texture, Mesh, Material, etc.)
- **Disk Size:** Actual file size on disk
- **Memory Size:** Estimated runtime memory usage
- **Path:** Full project path to the asset

### Sorting

Click any column header to sort by that column:
- Click once for ascending order
- Click again for descending order
- Visual indicator shows current sort

## Filtering Assets

### By Asset Type

Use the dropdown menu to filter by specific types:
- All Assets
- Textures
- Static Meshes
- Materials
- Sounds
- And more...

### By Size Threshold

Set a minimum size to hide small assets:
1. Enter size in MB in the threshold field
2. Only assets larger than threshold are shown
3. Perfect for finding the biggest offenders

### By Search

Use the search box to find specific assets by name or path.

## Scanning Options

### Scan All Assets

Analyzes every asset in your Content folder:
- Most comprehensive analysis
- Takes longer for large projects
- Recommended for full project audits

### Scan Specific Folder

Right-click any folder in Content Browser:
1. Select **"Analyze Folder Size"** (if available)
2. Or open analyzer and manually scan
3. Faster for targeted analysis

## Exporting Data

### CSV Export

1. Click **"Export to CSV"** button
2. Choose save location in file picker
3. CSV file includes all visible assets with full information

### What's Included

The CSV export contains:
- Asset Name
- Asset Type
- Disk Size (bytes)
- Memory Size (bytes)
- Full Asset Path

Perfect for:
- Sharing with team
- Creating reports
- Tracking size over time
- External analysis in Excel/Sheets

## Common Workflows

### Pre-Shipping Optimization

Before releasing your game:

1. Click **"Scan All Assets"**
2. Sort by **Disk Size** (descending)
3. Review the largest assets
4. Identify optimization opportunities
5. Export report for documentation

### Memory Budget Tracking

For performance optimization:

1. Scan all assets
2. Sort by **Memory Size**
3. Filter by asset type (e.g., Textures)
4. Identify assets exceeding your budget
5. Plan compression or LOD strategies

### Asset Audit

For quality reviews:

1. Scan project
2. Export to CSV
3. Share with team
4. Review unusual sizes
5. Plan cleanup or optimization

### Finding Specific Large Assets

Quick targeted search:

1. Set size threshold (e.g., 10 MB)
2. Filter by asset type
3. Sort by size
4. Immediate results

## Tips & Best Practices

### Performance Tips

✅ **Do:**
- Close other heavy Editor windows during scan
- Use folder scans for quick checks
- Filter by type for faster results

### Analysis Tips

✅ **Do:**
- Export regular reports to track size over time
- Focus on largest assets first (80/20 rule)
- Check both disk and memory sizes
- Share findings with team

❌ **Don't:**
- Don't scan during active builds
- Don't ignore memory sizes (affects runtime)
- Don't optimize everything - focus on impact

### Team Workflows

1. **Weekly Scans:** Run full scans weekly
2. **Size Budgets:** Set per-type size budgets
3. **Documentation:** Keep exported CSVs in version control
4. **Reviews:** Discuss large assets in team meetings

## Troubleshooting

### Scan Takes Too Long

**Cause:** Very large project (100,000+ assets)

**Solution:**
- Scan specific folders instead
- Filter by asset type first
- Close unnecessary Editor windows

### Asset Not Showing

**Cause:** Below size threshold or filtered out

**Solution:**
- Reset size threshold to 0
- Select "All Assets" in type filter
- Clear search box

### Memory Size Seems Wrong

**Cause:** Estimated value, not exact runtime size

**Note:**
Memory sizes are estimates based on asset properties. Actual runtime memory may vary based on compression, streaming, and engine settings.
