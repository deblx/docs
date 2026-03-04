---
sidebar_position: 4
---

# Usage Guide

## Quick Start

### Step 1: Open the Tool

**Method 1:** Via Tools Menu
1. Go to **Tools → Duplicate Asset Detector**

**Method 2:** Via Context Menu
1. Right-click any folder in Content Browser
2. Select **Find Duplicates**

### Step 2: Configure Scan Settings

**Basic Settings:**
- Choose scan scope (All Content or Current Folder)
- Set minimum file size threshold (skip tiny assets)
- Select asset types to include

**Advanced Settings:**
- Exclude specific folder patterns
- Include/exclude Engine content
- Include/exclude Plugin content

**Or use defaults** - the plugin comes preconfigured with sensible settings!

### Step 3: Run the Scan

1. Click **Scan** button
2. Wait for analysis (may take a few seconds for large projects)
3. Results appear in the table view

### Step 4: Review Duplicates

For each duplicate pair:
- **Thumbnails** show visual preview
- **Size** column shows wasted disk space
- **Dependencies** shows how many assets use it
- **Referencers** shows where it's used

Click any row to see detailed information.

### Step 5: Clean Up Duplicates

**Redirect & Delete (Recommended):**
1. Select duplicates you want to remove
2. Click **Redirect & Delete**
3. Confirm the operation
4. All references are automatically updated

**Delete Only (Advanced):**
1. Select duplicates
2. Click **Delete Only**
3. Use only if you've manually updated references

## Common Workflows

### Full Project Cleanup

Perfect for periodic maintenance:

1. Open Duplicate Asset Detector from Tools menu
2. Keep default settings
3. Click **Scan All Assets**
4. Review results by size (largest first)
5. Select all or batch-select duplicates
6. Click **Redirect & Delete**
7. Export report for documentation

### Folder-Specific Cleanup

When working on specific areas:

1. Right-click folder in Content Browser
2. Select **Find Duplicates**
3. Review folder-specific results
4. Clean up duplicates in that folder
5. Continue with next folder

### Pre-Build Optimization

Before shipping:

1. Run full project scan
2. Export report to CSV
3. Review with team
4. Clean up largest duplicates first
5. Document savings in build notes

## Tips & Best Practices

### Before Large Cleanups

✅ **Do:**
- Backup your project
- Close all open levels
- Run a full scan first
- Export report for reference
- Clean up largest duplicates first

❌ **Don't:**
- Clean up duplicates with many referencers without review
- Delete assets currently in use in open levels
- Skip the preview step

### Performance

- First scan may take longer (building asset database)
- Subsequent scans are much faster
- Filter by asset type to speed up targeted scans
- Use folder scans for incremental cleanup

### Team Workflows

1. **Weekly Scans:** Run automated scans and export reports
2. **Review Reports:** Discuss with team before cleanup
3. **Incremental Cleanup:** Clean up folder-by-folder
4. **Document Changes:** Keep cleanup logs for reference

## Troubleshooting

### "Asset is already in use" Warning

**Cause:** Asset is currently used in an open level

**Solution:** 
- Close the level before deletion
- Or reload project after redirect operation

### False Positive Detected

**Cause:** Rare edge cases with complex assets

**Solution:**
- Report to support@deblx.com or Discord
- Exclude the specific asset from cleanup

### Scan Takes Too Long

**Cause:** Very large project (100,000+ assets)

**Solution:**
- Scan specific folders instead of entire project
- Filter by asset type
- Exclude Engine/Plugin content

## Support

Need help? Contact us:
- [Deblx Dev Discord](https://discord.gg/UJCnVjwTTt) - Fast community support
- Email: support@deblx.com
- [Documentation](https://deblx.github.io/docs/)
