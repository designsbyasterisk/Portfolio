# React Portfolio Responsiveness Guide

> Engineering guidelines for building a responsive React portfolio while
> preserving a modular CSS architecture.

------------------------------------------------------------------------

# Responsive Design Philosophy

``` text
Component First
        ↓
Layout Second
        ↓
Page Third
        ↓
Viewport Last
```

Every component should be inherently responsive.

-   Components own responsiveness.
-   Layouts organize components.
-   Pages compose layouts.
-   React controls behavior.
-   CSS controls presentation.

------------------------------------------------------------------------

# Core Principles

-   Build responsive components, not responsive pages.
-   Keep CSS responsible for layout.
-   Keep React responsible for behavior.
-   Use design tokens for every reusable value.
-   Avoid one-off breakpoints.

------------------------------------------------------------------------

# Breakpoint System

  Token       Width Devices
  ------- --------- ---------------------------------
  xs          360px Small phones
  sm          480px Large phones
  md          768px Tablets
  lg         1024px Tablet landscape / Small laptop
  xl         1280px Laptop
  xxl        1440px Desktop
  ultra     1728px+ Large desktop

``` css
:root{
  --bp-xs:360px;
  --bp-sm:480px;
  --bp-md:768px;
  --bp-lg:1024px;
  --bp-xl:1280px;
  --bp-xxl:1440px;
}
```

------------------------------------------------------------------------

# Container Philosophy

Never set widths on pages.

Use:

-   Container
-   ContainerWide
-   ContainerNarrow
-   ContainerFluid

Containers control width. Pages control composition.

------------------------------------------------------------------------

# Grid System

Create reusable grids.

-   Grid2
-   Grid3
-   Grid4
-   GridAuto
-   ProjectGrid
-   GalleryGrid

------------------------------------------------------------------------

# Responsive Components

Every component should manage:

-   Internal spacing
-   Typography scaling
-   Image scaling
-   Button wrapping
-   Internal alignment

Pages should never override component responsiveness.

------------------------------------------------------------------------

# Typography

Use semantic tokens:

-   Display
-   H1
-   H2
-   H3
-   Body Large
-   Body
-   Caption

Update tokens through media queries rather than component styles.

------------------------------------------------------------------------

# Spacing

Use a consistent scale:

4 · 8 · 16 · 24 · 32 · 48 · 64 · 96 · 128 · 160

Avoid arbitrary values.

------------------------------------------------------------------------

# Images

``` css
width:100%;
height:auto;
object-fit:cover;
```

Avoid fixed widths.

------------------------------------------------------------------------

# Fluid Scaling

Use `clamp()` for typography, spacing and hero sections.

``` css
font-size: clamp(2rem, 4vw, 4rem);
```

------------------------------------------------------------------------

# Layout Strategy

Use CSS Grid for layouts.

Use Flexbox for:

-   Navigation
-   Buttons
-   Toolbars
-   Tags

------------------------------------------------------------------------

# React Responsibilities

Avoid viewport checks for layout.

Instead:

-   CSS handles layout.
-   React handles behavior.

Use React only when the experience changes.

------------------------------------------------------------------------

# Responsive Animations

Desktop: - Horizontal scrolling - Full GSAP timeline

Mobile: - Vertical layouts - Reduced motion

Use `ScrollTrigger.matchMedia()`.

------------------------------------------------------------------------

# CSS Architecture

    styles/
    ├── tokens/
    ├── base/
    ├── layout/
    ├── components/
    ├── pages/
    └── utilities/

React replaces HTML, not CSS.

------------------------------------------------------------------------

# React Structure

    src/
    ├── components/
    ├── layouts/
    ├── pages/
    ├── hooks/
    ├── animations/
    ├── styles/
    ├── tokens/
    ├── data/
    └── assets/

------------------------------------------------------------------------

# Component Rules

Every component must:

-   Resize correctly
-   Reflow gracefully
-   Scale typography
-   Scale images
-   Maintain accessible touch targets

------------------------------------------------------------------------

# Touch Targets

Minimum: 44×44px

Preferred: 48×48px

------------------------------------------------------------------------

# Responsive Testing

Test:

360, 390, 430, 768, 834, 1024, 1280, 1440, 1728

------------------------------------------------------------------------

# Scroll Behaviour

Desktop: - Horizontal interactions

Mobile: - Vertical layouts

Never force desktop interactions onto mobile.

------------------------------------------------------------------------

# Performance

-   Responsive images
-   Lazy loading
-   Deferred animations
-   Reduced motion
-   SVG assets
-   Optimized fonts

------------------------------------------------------------------------

# Accessibility

Every breakpoint must preserve:

-   Readable typography
-   Keyboard navigation
-   Focus states
-   Color contrast
-   Touch spacing

------------------------------------------------------------------------

# Responsive Checklist

-   No horizontal scrolling
-   No clipped content
-   No overlapping elements
-   No fixed-width layouts
-   Images scale correctly
-   Typography remains readable
-   Buttons remain tappable
-   GSAP refreshes correctly
-   `invalidateOnRefresh` enabled where needed

------------------------------------------------------------------------

# Responsive Responsibility Matrix

  -----------------------------------------------------------------------
  Layer        Responsible For             Should Not Control
  ------------ --------------------------- ------------------------------
  Design       Breakpoints, spacing,       Component layout
  Tokens       typography                  

  Base         Global defaults             Responsive layout

  Layout       Containers, grids, sections Component styling

  Components   Internal responsiveness     Page layout

  Pages        Composition                 Component responsiveness

  React        Conditional rendering,      Styling unless behavior
               interaction changes         changes
  -----------------------------------------------------------------------

------------------------------------------------------------------------

# Engineering Philosophy

1.  Build design tokens.
2.  Build layout primitives.
3.  Build responsive components.
4.  Compose pages.
5.  Let React manage behavior, not presentation.

The objective is to make responsiveness an inherent property of the
design system rather than a collection of media queries.
