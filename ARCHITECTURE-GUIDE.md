# Architecture & File Structure Guide

## Project Organization (After Modernization)

```
whitemountains/
├── index.html
├── history.html
├── people.html
├── transcendentalism.html
├── appeal.html
├── contact.html
│
├── css/                          ← NEW: Extracted stylesheets
│   ├── global.css               (445 lines) Variables, resets, base styles
│   ├── components.css           (520 lines) Nav, buttons, cards, forms, footer
│   └── pages.css                (560 lines) Hero, timeline, special sections
│
├── js/                           ← NEW: Organized JavaScript
│   ├── main.js                  (210 lines) Navigation, scroll tracking
│   └── animations.js            (340 lines) Scroll reveals, effects
│
├── images/                       (Existing images)
│
├── .github/
│   └── copilot-instructions.md  (Updated)
│
├── HTML-INTEGRATION-GUIDE.md    ← START HERE (instructions)
├── MODERNIZATION-SUMMARY.md     ← Architecture overview
└── README.md                     (existing)
```

---

## CSS Cascade & Loading Order

```
┌─────────────────────────────────────┐
│  Browser Default Styles             │
└──────────────┬──────────────────────┘
               ↓
┌─────────────────────────────────────┐
│  css/global.css                     │
│  • CSS variables (:root)            │
│  • Resets (*, body, h1-h5)          │
│  • Typography                       │
│  • Base colors & shadows            │
│  • Animation keyframes              │
│  • Responsive breakpoints           │
│  • Utility classes (.mt-1, etc)     │
└──────────────┬──────────────────────┘
               ↓
┌─────────────────────────────────────┐
│  css/components.css                 │
│  • Header & navigation              │
│  • Buttons (CTA, secondary)         │
│  • Cards (value-card, etc)          │
│  • Forms (inputs, validation)       │
│  • Footer                           │
│  • Component-specific breakpoints   │
└──────────────┬──────────────────────┘
               ↓
┌─────────────────────────────────────┐
│  css/pages.css                      │
│  • Hero sections (all pages)        │
│  • Timeline (history.html)          │
│  • About sections                   │
│  • Quote sections                   │
│  • Contact form section             │
│  • Page-specific overrides          │
└─────────────────────────────────────┘
```

---

## JavaScript Execution Flow

```
Page Load
   ↓
[HTML Document Parsed]
   ↓
<script src="js/main.js"> Executes
   │
   ├─ Get DOM elements (header, nav, buttons)
   ├─ Add event listeners:
   │  ├─ Mobile toggle / close
   │  ├─ Scroll events → header shadow, nav update
   │  ├─ Anchor click → smooth scroll
   │  └─ Form validation
   ├─ Initialize active nav on load
   └─ Create back-to-top button (auto-generated)
   ↓
<script src="js/animations.js"> Executes
   │
   ├─ Initialize Intersection Observer:
   │  ├─ Watch for .fade-in elements
   │  ├─ Watch for [data-reveal] elements
   │  └─ Watch for counters
   ├─ Setup lazy loading for images
   ├─ Create progress bar (auto-generated)
   ├─ Add touch enhancements (mobile)
   └─ Log performance metrics
   ↓
[Page Fully Interactive]
```

---

## HTML File Structure (Single File Example)

```html
<!DOCTYPE html>
<html>
<head>
    <!-- Meta tags -->
    <meta charset="UTF-8">
    
    <!-- External resources -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="...fonts..." rel="stylesheet">
    <link href="...fontawesome..." rel="stylesheet">
    
    <!-- ✨ NEW: CSS files (replaces inline <style>) -->
    <link rel="stylesheet" href="css/global.css">
    <link rel="stylesheet" href="css/components.css">
    <link rel="stylesheet" href="css/pages.css">
</head>

<body>
    <!-- ✨ Header element uses styles from components.css -->
    <header id="header">
        <nav class="nav-desktop">...</nav>
        <button class="mobile-toggle" id="mobileToggle">...</button>
    </header>
    
    <!-- Mobile nav (hidden by default, shown by main.js) -->
    <nav class="nav-mobile" id="navMobile">...</nav>
    
    <!-- ✨ Hero section uses styles from pages.css -->
    <section class="hero" id="hero">
        <div class="hero-content">
            <h1>Title</h1>
            <p>Description</p>
            <a href="#" class="cta-button">Action</a>
        </div>
    </section>
    
    <!-- ✨ Value cards get fade-in animation from animations.js -->
    <section class="values-section">
        <div class="values-grid">
            <div class="value-card fade-in">...</div>
        </div>
    </section>
    
    <!-- ✨ Footer uses components.css styles -->
    <footer>...</footer>
    
    <!-- ✨ NEW: JavaScript files (replaces inline <script>) -->
    <script src="js/main.js"></script>
    <script src="js/animations.js"></script>
</body>
</html>
```

---

## CSS Variable System

```
:root (css/global.css)
│
├─ Color Variables
│  ├─ --pine-green: #0a5c36      ← Primary brand
│  ├─ --sky-blue: #87ceeb        ← Secondary
│  ├─ --tree-brown: #8b4513      ← Tertiary
│  ├─ --cream: #fdfaf5           ← Background
│  └─ ... (8 more color vars)
│
├─ Spacing Variables
│  ├─ --spacing-xs: 0.5rem
│  ├─ --spacing-sm: 1rem
│  ├─ --spacing-md: 1.5rem
│  ├─ --spacing-lg: 2rem
│  ├─ --spacing-xl: 3rem
│  └─ --spacing-2xl: 5rem
│
├─ Typography Variables
│  ├─ --font-serif: 'Merriweather', serif
│  └─ --font-sans: 'Inter', sans-serif
│
├─ Shadow Variables
│  ├─ --shadow: 0 4px 20px rgba(0,0,0,0.1)
│  └─ --deep-shadow: 0 8px 30px rgba(0,0,0,0.15)
│
└─ Timing Variables
   └─ --transition-smooth: cubic-bezier(0.77, 0, 0.175, 1)
```

Used throughout CSS files:
```css
.button {
    background-color: var(--pine-green);     /* References :root variable */
    padding: var(--spacing-md);
    font-family: var(--font-sans);
    box-shadow: var(--shadow);
    transition: all 0.3s var(--transition-smooth);
}
```

**Benefit:** Change color scheme in ONE place, updates everywhere instantly!

---

## Component Layer

### Components (css/components.css)

```
Header & Navigation
├─ .logo
├─ .nav-desktop
├─ .nav-mobile (overlay menu)
└─ .mobile-toggle

Buttons
├─ .cta-button (primary)
└─ .cta-button-secondary

Cards
├─ .value-card
└─ Grid container: .values-grid

Forms
├─ .form-container
├─ .form-group (wrapper)
├─ .form-row (2-column layout)
├─ input, textarea, select
└─ .submit-button

Footer
├─ .footer-content
├─ .footer-column
├─ .footer-links
└─ .copyright
```

### Page-Specific (css/pages.css)

```
Heroes
├─ .hero (main)
├─ .history-hero
├─ .contact-hero
└─ .page-hero

About Section
├─ .about-content
├─ .about-text
└─ .about-image

Special Sections
├─ .values-section
├─ .flag-section
├─ .quote-section

Timeline (History)
├─ .timeline
├─ .timeline-item
├─ .timeline-content
├─ .timeline-marker
└─ .timeline-image
```

---

## Responsive Breakpoints

```
Desktop (> 992px)
├─ Full width navigation
├─ Side-by-side layouts (flex/grid)
└─ All features visible

Tablet (768px - 992px)
├─ Flexbox direction changes
├─ Adjusted spacing
└─ Some elements reorder

Mobile (< 768px)
├─ Mobile toggle visible
├─ Drawer navigation (300px)
├─ Single column layouts
├─ Parallax disabled (scroll instead)
└─ Touch-friendly spacing

Small Mobile (< 576px)
├─ Smaller headings
├─ Reduced padding
├─ Stacked form fields
└─ Single column everything
```

All defined in each CSS file's media queries!

---

## Data Flow: Mobile Navigation

```
User clicks .mobile-toggle (hamburger)
        ↓
Event listener in main.js triggers
        ↓
openMobileNav() function runs
        ↓
├─ Add .active class to .nav-mobile
├─ Add .active class to .nav-overlay
└─ Set body overflow: hidden

CSS for .nav-mobile.active:
    right: 0  (slides in from right)
    
CSS for .nav-overlay.active:
    opacity: 1, visibility: visible

User clicks link or overlay
        ↓
closeMobileNav() function runs
        ↓
├─ Remove .active classes
├─ Set body overflow: auto
└─ Smooth scroll to target

Result: Mobile menu fully open/close in 0.4s
```

---

## Animation Flow: Scroll Reveals

```
Element loads with class .fade-in
        ↓
JavaScript creates IntersectionObserver
        ↓
As user scrolls, checks if element enters viewport
        ↓
When visible (10% in view):
    ├─ Class .fade-in triggers CSS animation
    │   @keyframes fadeIn {
    │       from: opacity 0, transform translateY(20px)
    │       to: opacity 1, transform translateY(0)
    │   }
    │   duration: 0.8s ease
    │
    └─ Element "fades in" smoothly
        
Observer unobserves element (only animate once)
```

**Result:** Smooth, performant fade-in as scrolling!

---

## Build & Deployment Checklist

```
Pre-Deployment
├─ □ All 6 HTML files updated with new CSS/JS links
├─ □ No remaining inline <style> tags
├─ □ No remaining inline <script> tags
├─ □ All CSS files in /css/ directory
├─ □ All JS files in /js/ directory
├─ □ Test on desktop (Chrome, Firefox, Safari)
├─ □ Test on mobile (iOS Safari, Chrome)
├─ □ Test all animations work
├─ □ Form validation works
└─ □ Back-to-top button appears on scroll

Performance Check
├─ □ All images optimized
├─ □ CSS files load quickly
├─ □ JS executes without errors
├─ □ No console warnings
└─ □ Page loads in < 3 seconds

Final
├─ □ Commit to version control
├─ □ Update README with new structure
└─ □ Deploy to production
```

---

## File Sizes

| File | Size | Purpose |
|------|------|---------|
| global.css | ~9 KB | Design system |
| components.css | ~12 KB | UI components |
| pages.css | ~13 KB | Page layouts |
| main.js | ~6 KB | Core logic |
| animations.js | ~8 KB | Effects |
| **Total** | **~48 KB** | **All new assets** |

Compare to: Each HTML previously had ~20KB of duplicated inline CSS = 120KB total
**Saves ~72KB with asset caching!**

