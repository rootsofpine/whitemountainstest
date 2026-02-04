# HTML Integration Guide

## How to Update Your HTML Files

This guide shows you the exact changes to make to each of your 6 HTML files to use the new CSS and JavaScript assets.

---

## Step 1: Remove Inline `<style>` Tags

**Remove the entire `<style>...</style>` block** from the `<head>` section of each HTML file (approximately 650+ lines).

This includes all CSS resets, variables, and component styles.

---

## Step 2: Add CSS Links in `<head>`

Replace the removed `<style>` block with these three `<link>` tags in the `<head>` section:

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><!-- Your Page Title --></title>
    
    <!-- Google Fonts (keep these) -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
    
    <!-- Font Awesome (keep this) -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <!-- NEW: Add these CSS files -->
    <link rel="stylesheet" href="css/global.css">
    <link rel="stylesheet" href="css/components.css">
    <link rel="stylesheet" href="css/pages.css">
</head>
```

---

## Step 3: Remove Inline `<script>` Tag

**Remove the entire `<script>...</script>` block** before the closing `</body>` tag.

This includes all the navigation and scroll event listeners.

---

## Step 4: Add JavaScript Links Before `</body>`

Add these `<script>` tags right before the closing `</body>` tag:

```html
    <!-- NEW: Add these JavaScript files -->
    <script src="js/main.js"></script>
    <script src="js/animations.js"></script>
</body>
</html>
```

---

## Complete `<head>` Example (index.html)

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
    
    <!-- New CSS Files -->
    <link rel="stylesheet" href="css/global.css">
    <link rel="stylesheet" href="css/components.css">
    <link rel="stylesheet" href="css/pages.css">
</head>
<body>
    <!-- Your page content here -->
    
    <!-- New JavaScript Files (before closing body) -->
    <script src="js/main.js"></script>
    <script src="js/animations.js"></script>
</body>
</html>
```

---

## Complete `</body>` Example

```html
    <!-- Footer content -->
    </footer>

    <!-- New JavaScript Files -->
    <script src="js/main.js"></script>
    <script src="js/animations.js"></script>
</body>
</html>
```

---

## Files to Update

Apply these changes to all 6 HTML files:
1. `index.html`
2. `history.html`
3. `people.html`
4. `transcendentalism.html`
5. `appeal.html`
6. `contact.html`

---

## What Each File Does

### CSS Files
- **`css/global.css`**: Design system variables, resets, base typography, animations, responsive utilities
- **`css/components.css`**: Reusable components (buttons, cards, forms, navigation, footer)
- **`css/pages.css`**: Page-specific layouts (hero, timeline, sections, special effects)

### JavaScript Files
- **`js/main.js`**: Core functionality (mobile nav, smooth scroll, active nav tracking, back-to-top button)
- **`js/animations.js`**: Advanced animations (scroll reveals, lazy loading, counters, progress bar, touch enhancements)

---

## Quick Checklist

For each HTML file:
- [ ] Remove entire `<style>...</style>` block from `<head>`
- [ ] Add three `<link rel="stylesheet" href="css/...">` tags
- [ ] Remove entire `<script>...</script>` block before `</body>`
- [ ] Add two `<script src="js/..."></script>` tags before `</body>`
- [ ] Save file

---

## New Features Included

✨ **Back-to-Top Button** - Auto-generated, appears when scrolling
✨ **Progress Bar** - Visual indicator of page scroll progress
✨ **Scroll Animations** - Fade-in effects as elements come into view
✨ **Form Validation** - Email validation on blur
✨ **Performance Logging** - Console metrics for page load time
✨ **Touch Enhancements** - Better mobile tap feedback
✨ **Lazy Loading Ready** - Support for `loading="lazy"` images

---

## Notes

- All CSS variables remain identical (colors, spacing, shadows)
- Mobile responsiveness unchanged
- No external dependencies beyond Font Awesome (already included)
- Vanilla JavaScript - no jQuery or frameworks required
- Fallbacks provided for older browsers

