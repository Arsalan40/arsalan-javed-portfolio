# Navbar Component System

A modern, responsive, animated navigation bar for your portfolio with the following features:

## Features

✅ **Glassmorphism Design**
- Semi-transparent background with backdrop blur
- Subtle border with opacity
- Dark theme optimized

✅ **Active Section Tracking**
- Automatically highlights the current section based on scroll position
- Custom `useActiveSection` hook

✅ **Smooth Scroll Navigation**
- Click any nav link to smoothly scroll to that section
- Offset for fixed navbar height

✅ **Responsive Mobile Menu**
- Hamburger icon on mobile
- Slide-in drawer from the right
- Backdrop overlay
- Close on link click or outside click

✅ **Animations**
- Framer Motion slide-down animation on page load
- Animated underline on hover and active state
- Smooth transitions throughout

✅ **Gradient Logo**
- "ArsalanJaved" with gradient text effect
- Primary to secondary color gradient

## File Structure

```
src/
├── components/
│   ├── Navbar.tsx (re-export)
│   └── navbar/
│       ├── Navbar.tsx (main component)
│       ├── NavLink.tsx (reusable link component)
│       └── MobileMenu.tsx (mobile drawer)
├── hooks/
│   └── useActiveSection.ts (scroll position tracker)
└── app/
    └── page.tsx (updated with sections)
```

## Components

### Navbar.tsx
Main navbar component with:
- Gradient logo text
- Desktop navigation (hidden on mobile)
- Mobile menu toggle
- Framer Motion animations

### NavLink.tsx
Reusable navigation link with:
- Active state highlighting
- Hover glow effect
- Animated underline
- Smooth scroll behavior
- Mobile/desktop variants

### MobileMenu.tsx
Mobile drawer menu with:
- Hamburger/close icons
- Backdrop overlay
- Slide-in animation
- Vertical navigation links

### useActiveSection Hook
Tracks scroll position and returns the active section ID:
- Monitors scroll events
- Calculates which section is in view
- Updates active state automatically

## Usage

The navbar is already integrated into your app. Each section must have an `id` attribute matching the href:

```tsx
<section id="home">...</section>
<section id="about">...</section>
<section id="skills">...</section>
<section id="projects">...</section>
<section id="automations">...</section>
<section id="contact">...</section>
```

## Customization

### Nav Items
Edit the `navItems` array in `components/navbar/Navbar.tsx`:

```tsx
const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  // Add more items...
];
```

### Colors
Adjust colors in `tailwind.config.ts`:
- `primary`: #00e5ff (cyan)
- `secondary`: #ff4f81 (pink)
- `background`: #0d0d0d (dark)

### Scroll Offset
Adjust the offset in `hooks/useActiveSection.ts`:
```tsx
const scrollPosition = window.scrollY + 100; // Change this value
```

## Styling Details

- **Background**: `rgba(13, 13, 13, 0.6)` with `backdrop-blur-md`
- **Border**: `1px solid rgba(255, 255, 255, 0.08)`
- **Height**: 16 on mobile, 20 on desktop (Tailwind units)
- **Gap**: 8 between desktop nav items
- **Mobile Width**: 280px drawer

## Notes

- Navbar is fixed at the top (`fixed top-0`)
- Uses `z-50` to stay above content
- Mobile menu is `z-40` for backdrop, `z-50` for drawer
- All animations use Framer Motion for consistency
- Works seamlessly with Next.js App Router
