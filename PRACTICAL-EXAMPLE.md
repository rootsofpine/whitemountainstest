# Practical Example: Updating index.html

This document shows you exactly what to change in one HTML file as a practical reference.

---

## BEFORE (Current Structure)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>White Mountains Spirit | People, History & Nature</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <!-- 🔴 REMOVE THIS ENTIRE BLOCK (650+ lines) -->
    <style>
        :root {
            --pine-green: #0a5c36;
            --sky-blue: #87ceeb;
            ...
            /* ... hundreds of lines of CSS ... */
        }
        
        * {
            margin: 0;
            ...
        }
        
        /* ... all the styling ... */
    </style>
    <!-- 🔴 END OF BLOCK TO REMOVE -->
</head>
<body>
    <!-- Content here -->
    
    <!-- 🔴 REMOVE THIS ENTIRE BLOCK (100+ lines) -->
    <script>
        // Mobile navigation functionality
        const mobileToggle = document.getElementById('mobileToggle');
        ...
        /* ... hundreds of lines of JavaScript ... */
    </script>
    <!-- 🔴 END OF BLOCK TO REMOVE -->
</body>
</html>
```

---

## AFTER (New Structure)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>White Mountains Spirit | People, History & Nature</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <!-- 🟢 ADD THESE THREE LINES -->
    <link rel="stylesheet" href="css/global.css">
    <link rel="stylesheet" href="css/components.css">
    <link rel="stylesheet" href="css/pages.css">
    <!-- 🟢 END OF NEW LINKS -->
</head>
<body>
    <!-- Content here - NO CHANGES -->
    
    <!-- 🟢 ADD THESE TWO LINES (before closing </body>) -->
    <script src="js/main.js"></script>
    <script src="js/animations.js"></script>
    <!-- 🟢 END OF NEW SCRIPTS -->
</body>
</html>
```

---

## Side-by-Side Comparison

### Head Section

#### REMOVE (in `<head>`):
```
Lines: ~650 lines of <style>...</style>
```

#### ADD (in `<head>`, after Font Awesome link):
```html
<link rel="stylesheet" href="css/global.css">
<link rel="stylesheet" href="css/components.css">
<link rel="stylesheet" href="css/pages.css">
```

### Body Section

#### REMOVE (before `</body>`):
```
Lines: ~100 lines of <script>...</script>
```

#### ADD (before `</body>`):
```html
<script src="js/main.js"></script>
<script src="js/animations.js"></script>
```

---

## Step-by-Step Instructions for index.html

### Step 1: Open index.html in VS Code

### Step 2: Locate the `<style>` tag in the `<head>`

Look for the opening `<style>` tag around line 10-12.

### Step 3: Select and Delete the Entire Style Block

**Find:** `<style>` (around line 10)
**Delete until:** `</style>` (around line 670)

This removes ~660 lines from your file.

### Step 4: Replace with CSS Links

Paste this exactly after the Font Awesome link:

```html
    <link rel="stylesheet" href="css/global.css">
    <link rel="stylesheet" href="css/components.css">
    <link rel="stylesheet" href="css/pages.css">
```

Your `<head>` should now look like:

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>White Mountains Spirit | People, History & Nature</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <link rel="stylesheet" href="css/global.css">
    <link rel="stylesheet" href="css/components.css">
    <link rel="stylesheet" href="css/pages.css">
</head>
```

### Step 5: Find the `<script>` tag before `</body>`

Scroll to the bottom of the file.

Look for the `<script>` tag right before `</body>` (around line 920).

### Step 6: Select and Delete the Entire Script Block

**Find:** `<script>` (near the end)
**Delete until:** `</script>` (before `</body>`)

This removes ~100 lines from your file.

### Step 7: Replace with JavaScript Links

Paste these exactly before `</body>`:

```html
    <script src="js/main.js"></script>
    <script src="js/animations.js"></script>
</body>
```

Your closing should now look like:

```html
    </footer>

    <script src="js/main.js"></script>
    <script src="js/animations.js"></script>
</body>
</html>
```

### Step 8: Save the File

Press `Ctrl+S` (or `Cmd+S` on Mac).

---

## Verification Checklist for index.html

- [ ] No `<style>` tag in the `<head>` section
- [ ] Three `<link>` tags for CSS files are present
- [ ] No `<script>` tag with inline JavaScript before `</body>`
- [ ] Two `<script>` tags with `src` attributes are present
- [ ] File saved
- [ ] File size reduced from ~1,030 lines to ~370 lines

---

## Testing After Changes

### Open in Browser

1. Open `index.html` in your web browser (drag file or use Live Server)
2. Check that the page looks the same as before
3. Test that:
   - ✓ Styles are correct (colors, spacing, fonts)
   - ✓ Mobile menu toggle works (click hamburger)
   - ✓ Menu closes when you click a link
   - ✓ Smooth scrolling works (click "Discover Our Story")
   - ✓ Back-to-top button appears when you scroll down
   - ✓ Hover effects work on buttons

### Check Browser Console

1. Open Developer Tools (`F12` or `Right-click → Inspect`)
2. Go to Console tab
3. You should see:
   ```
   ✨ White Mountains Spirit - Animations Loaded
   ⚡ Page Load Time: XXXms
   ```
4. No red errors should appear

### Check Network Tab

1. In Developer Tools, go to Network tab
2. Refresh the page
3. You should see:
   - `css/global.css` - loaded ✓
   - `css/components.css` - loaded ✓
   - `css/pages.css` - loaded ✓
   - `js/main.js` - loaded ✓
   - `js/animations.js` - loaded ✓

If any are red (404 errors), check the file paths are correct.

---

## Common Issues & Fixes

### Issue: Styles not loading

**Cause:** CSS file paths are wrong
**Fix:** Make sure you're using relative paths:
- ✓ `css/global.css` (if in same directory as HTML)
- ✓ `./css/global.css` (explicit current directory)
- ✗ `/css/global.css` (absolute path - may break)

### Issue: Mobile menu not working

**Cause:** JavaScript files not loading
**Fix:** Check:
1. File paths are correct: `js/main.js` and `js/animations.js`
2. Scripts are BEFORE `</body>`
3. No typos in src attributes

### Issue: Old styles still showing

**Cause:** Browser cache not cleared
**Fix:** 
1. Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
2. Or clear cache: Dev Tools → Application → Clear Site Data

### Issue: Animations not working

**Cause:** `js/animations.js` loaded before `js/main.js`
**Fix:** Ensure order:
```html
<script src="js/main.js"></script>     <!-- First -->
<script src="js/animations.js"></script> <!-- Second -->
```

---

## What Changes & What Stays the Same

### What Stays the Same:
- ✓ All HTML content (no changes needed)
- ✓ Font links (Google Fonts)
- ✓ Icon library (Font Awesome)
- ✓ Visual appearance (same colors, fonts, layout)
- ✓ Functionality (nav, scrolling, forms)

### What Changes:
- ✓ CSS location (now in separate files)
- ✓ JavaScript location (now in separate files)
- ✓ File organization (cleaner structure)
- ✓ Maintainability (easier to update)
- ✓ Added features (back-to-top, progress bar, more animations)

---

## Next Steps After index.html

Once you've successfully updated index.html:

1. **Test thoroughly** - Make sure everything works
2. **Repeat for other 5 files**:
   - `history.html`
   - `people.html`
   - `transcendentalism.html`
   - `appeal.html`
   - `contact.html`

3. **For other files**, the process is identical:
   - Remove `<style>...</style>` block
   - Add three CSS `<link>` tags
   - Remove `<script>...</script>` block
   - Add two JS `<script>` tags

---

## Estimated Time

| Task | Time |
|------|------|
| Update 1 HTML file | 3-5 minutes |
| Test 1 HTML file | 2 minutes |
| Update all 6 files | ~20 minutes |
| Full testing | ~10 minutes |
| **Total** | **~30-40 minutes** |

---

## Success Criteria

You'll know the modernization is complete when:

✅ All 6 HTML files are updated
✅ No inline `<style>` blocks remain
✅ No inline `<script>` blocks remain
✅ All pages look identical to before
✅ All functionality works (nav, forms, animations)
✅ Mobile menu works perfectly
✅ Back-to-top button appears and works
✅ Scroll animations trigger when scrolling
✅ Form validation works
✅ No console errors
✅ File sizes are smaller
✅ Code is more maintainable

---

## Questions?

Refer back to:
- **HTML-INTEGRATION-GUIDE.md** - General integration steps
- **ARCHITECTURE-GUIDE.md** - File organization & structure
- **MODERNIZATION-SUMMARY.md** - Features & capabilities
- **Inline comments in CSS files** - Detailed style explanations

Good luck! 🎉
