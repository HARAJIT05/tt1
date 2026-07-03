# Copilot Instructions for tt1 Repository

## Project Overview
This is a modern, fully responsive static portfolio website for Subhankar Majumdar, a physiotherapist in Kolkata. Built with vanilla HTML, CSS, and JavaScript—no build tools, frameworks, or package managers. **Completely redesigned with clean, maintainable code.**

**Live Site:** https://harajit05.github.io/tt1/
**Status:** ✅ Recently rebuilt with modern responsive design

---

## Architecture & Key Files

### Entry Point
- **index.html** – Single-page site with modern semantic HTML structure: hero, trust bar, about, services, why-me, testimonials, FAQ, **clinics**, contact, footer

### Styling
- **css/styles.css** – **Complete rewrite** with:
  - Modern CSS custom properties system (cleaner variable naming)
  - Mobile-first responsive design with 4 breakpoints (992px, 768px, 560px)
  - Flexbox and CSS Grid layouts (no floats, no hacks)
  - Smooth transitions and animations
  - Proper color contrast and accessibility
  - No overlapping issues, clean spacing throughout

### Interactivity
- **js/script.js** (or js/new-script.js) – Clean vanilla JavaScript handling:
  - Mobile hamburger menu with smooth slide animation and auto-sizing
  - Scroll-based header effects and active nav highlighting
  - WhatsApp floating button (always visible, fixed bottom-right corner)
  - Form validation and WhatsApp integration with time slot selection
  - Dynamic service "Other" field toggle
  - Footer year auto-update

### Assets
- **assets/** – SVG images (hero.svg, about.svg, og-image.svg, favicon.svg)

### Backup Files
- **index-old.html**, **css/old-styles.css**, **js/old-script.js** – Previous version (keep for reference)

---

## Key Conventions

### CSS Architecture
- **Variables:** Clean naming (--primary, --primary-light, --primary-dark, --secondary, --gray-50 through --gray-700, etc.)
- **Layout:** Modern flexbox and grid only (no outdated techniques)
- **Spacing:** Consistent rem-based sizing with variables for transitions and shadows
- **Breakpoints:** 
  - Desktop: 992px+ (multi-column layouts)
  - Tablet: 768px-991px (single column, mobile nav appears)
  - Mobile: 560px-767px (compact spacing)
  - Small Mobile: <560px (extra-compact)
- **Classes:** Simple, readable BEM-like naming (.header, .hero, .nav__link, .service-card, etc.)

### HTML Structure
- **Semantic:** Proper use of `<header>`, `<nav>`, `<section>`, `<footer>`
- **Forms:** Clean form groups with proper labels and validation
- **Images:** SVG assets with alt text and proper sizing
- **Data Attributes:** Used sparingly for JavaScript selectors
- **Accessibility:** ARIA labels on buttons, semantic heading hierarchy

### JavaScript Patterns
- **IIFE Wrapper:** All code in strict mode within an immediately-invoked function
- **Event Delegation:** Single listeners on containers (hamburger, overlay, form)
- **DOM Queries:** Cached references to frequently-used elements
- **State Management:** Classes (`.open`, `.scrolled`, `.show`) toggle on/off
- **Form Handling:** Validation before WhatsApp submission with user feedback
- **No Plugins:** Pure vanilla JS, no jQuery or other libraries

### Mobile Menu Behavior
- **Desktop (> 768px):** Horizontal nav bar visible, all links shown, hamburger hidden
- **Mobile (< 768px):** Hamburger icon appears, nav slides in from right as overlay
- **Menu Sizing:** Auto-height (only as tall as content needs) with max-height limit
- **Animation:** Hamburger transforms to X (rotate + translate), menu smoothly translateX(0)
- **Overlay:** Dark backdrop appears, clicking overlay closes menu
- **Display:** Menu uses flexbox with flex-direction: column for vertical stacking
- **Z-Index:** Header 100 > Nav 99 > Overlay 98 (proper layering)

### Form Integration
- **WhatsApp:** Phone number stored as constant `WHATSAPP_NUMBER` 
- **Validation:** Name, phone, service, and time slot are required
- **Time Slots:** 8 available slots from 9 AM to 7 PM (1-hour increments, no lunch 12-2 PM)
- **Conditional Field:** "Other" service selection reveals text input
- **Message Format:** Bold labels, line breaks, proper encoding for WhatsApp
- **User Feedback:** Success/error messages shown on submit
- **Floating Button:** Green WhatsApp button (#25D366) in fixed bottom-right position

### Responsive Strategy
- **Mobile-First CSS:** Default styles serve mobile, media queries add desktop features
- **Flexible Containers:** Use flex/grid with wrapping, not fixed widths
- **Clamp for Typography:** Font sizes use `clamp()` for smooth scaling
- **Image Scaling:** Images use `max-width: 100%` with aspect ratio preservation
- **Touch Targets:** Buttons min 40px, links have padding for mobile

---

## Working with This Project

### File Structure
```
tt1/
├── index.html              (Single-page app, all sections)
├── css/
│   ├── styles.css          (Main stylesheet - 900+ lines, fully responsive)
│   ├── old-styles.css      (Previous version for reference)
│   └── new-styles.css      (Backup of current version)
├── js/
│   ├── script.js           (All interactivity, clean vanilla JS)
│   ├── old-script.js       (Previous version)
│   └── new-script.js       (Backup)
├── assets/                 (SVG images)
│   ├── hero.svg
│   ├── about.svg
│   ├── og-image.svg
│   └── favicon.svg
└── .github/
    └── copilot-instructions.md (This file)
```

### Viewing Locally
```bash
python3 -m http.server 8000
# Then open http://localhost:8000
```

### Testing Responsive Design
Open DevTools (F12) and test these viewports:
- **Desktop:** 1200px (full 2-column layouts)
- **Tablet:** 768px-991px (mobile nav appears, single columns)
- **Mobile:** 560px-767px (compact spacing)
- **Small Mobile:** 320px-559px (minimal UI)

### Key Features Working
✅ Hero section full-height with stats (no overlap)
✅ Responsive hamburger menu with smooth animation (auto-sized)
✅ Mobile overlay with click-to-close
✅ WhatsApp floating button (green, always visible, bottom-right)
✅ Active nav link highlighting on scroll
✅ WhatsApp form integration with time slot selection
✅ Conditional "Other" service field
✅ All sections properly stack on mobile
✅ Footer year auto-updates
✅ All 7 menu items display without scrolling on mobile

### Editing Content
1. **Text Changes:** Edit directly in `index.html` (lines are well-organized by section)
2. **Add New Section:** Copy a section block, modify, add CSS for new classes
3. **Change Colors:** Edit CSS variables at top of `styles.css`:
   - `--primary` (main teal)
   - `--secondary` (orange accent)
   - `--dark` (text)
   - etc.
4. **Adjust Spacing:** Look for `padding`, `gap`, `margin` in CSS sections
5. **Modify Animations:** Search for `transition`, `transform`, `@keyframes`

### Adding Features
- **New Service Card:** Copy `.service-card` HTML block, add styling if needed
- **New Testimonial:** Copy `.testimonial-card` block
- **New FAQ Item:** Copy `<details class="faq-item">` block
- **New Clinic:** Copy `.clinic-card` block and update info
- **Mobile Menu Items:** Add `<a class="nav__link" href="#section">Label</a>` to `.nav`

### Updating Phone & Contact Info
- **WhatsApp Number:** Edit `WHATSAPP_NUMBER` in `js/script.js` line 22 (or `js/new-script.js`)
- **Contact Links:** Update `href="tel:..."` and `href="https://wa.me/..."` in HTML
- **Address:** Update in `.contact-item` and footer
- **Time Slots:** Edit options in contact form (lines 388-395 in index.html)

### Debugging Mobile Menu
If hamburger menu isn't working:
1. Check hamburger element has id="hamburger"
2. Check nav has id="nav-menu"
3. Check overlay has id="mobile-overlay"
4. Verify JS classes: `.open`, `.scrolled`, `.show`
5. Test with DevTools mobile emulation

### Performance Notes
- **No external JS libraries** - all vanilla
- **SVG assets** - lightweight and scalable
- **CSS Grid/Flexbox** - modern, efficient layouts
- **Passive scroll listeners** - smooth scrolling
- **Minimal repaints** - uses CSS transforms (cheaper than layout changes)

---

## WhatsApp Button & Features

### Floating WhatsApp Button
- **Position:** Fixed bottom-right corner (always visible)
- **Style:** Circular green button (#25D366) with white WhatsApp icon
- **Hover:** Darkens to #20BA5A and lifts up 4px
- **Size:** 56x56px (desktop), 48x48px (mobile)
- **Shadow:** Uses `box-shadow: var(--shadow-lg)` for depth
- **Link:** Direct WhatsApp chat with pre-filled greeting message
- **Opens:** In new tab with `target="_blank"`

### Contact Form Features
- **Fields:** Name, Phone, Email, Service, **Time Slot**, Message
- **Time Slots:** 8 options from 9 AM to 7 PM (lunch break 12-2 PM)
- **Validation:** Name, Phone, Service, Time Slot are required
- **Submit:** Opens WhatsApp with formatted appointment request
- **Message Format:** 
  ```
  *New Appointment Request*
  ━━━━━━━━━━━━━━━━━━━━━━
  *Name:* [user name]
  *Phone:* [user phone]
  *Email:* [if provided]
  *Service:* [selected service]
  *Time Slot:* [selected time]
  *Message:* [optional message]
  ```

### CSS Variables for Branding
- `--primary: #0f766e` (Teal - main color)
- `--secondary: #ea580c` (Orange - accent)
- `--gray-*`: Full grayscale from 50-700
- WhatsApp: Hard-coded `#25D366` (official WhatsApp green)

---

## Clinics Section

### Clinics Display
- **Location:** Between FAQ and Contact sections
- **Grid:** Responsive 2-column (desktop), 1-column (mobile)
- **Cards:** Clinic name, location, hours, "View on Map" button
- **Google Maps:** Direct links to clinic locations
- **Styling:** 
  - 3px teal border on top
  - Hover effect (lift up -4px, enhanced shadow)
  - Centered text with hospital emoji icon
  - Gradient background in section

### Updating Clinic Information
1. **Edit Clinic Name:** Change `<h3>` text in `.clinic-card`
2. **Edit Location:** Update `.clinic-card__location` text
3. **Edit Hours:** Update `.clinic-card__hours` text
4. **Update Maps Link:** Edit `href="https://maps.app.goo.gl/..."` to your Google Maps link
5. **Add Third Clinic:** Copy entire `.clinic-card` div, update info, grid will auto-layout

### Clinic Card Structure
```html
<div class="clinic-card">
  <div class="clinic-card__icon">🏥</div>
  <h3>Clinic Name</h3>
  <p class="clinic-card__location">Location</p>
  <p class="clinic-card__hours">Hours</p>
  <a href="https://maps.app.goo.gl/..." target="_blank" class="btn btn--primary btn--sm">View on Map</a>
</div>
```
