---
name: Obsidian Violet Developer Portfolio
colors:
  surface: '#14121b'
  surface-dim: '#14121b'
  surface-bright: '#3b3842'
  surface-container-lowest: '#0f0d16'
  surface-container-low: '#1c1a24'
  surface-container: '#211e28'
  surface-container-high: '#2b2933'
  surface-container-highest: '#36333e'
  on-surface: '#e6e0ee'
  on-surface-variant: '#cbc3d7'
  inverse-surface: '#e6e0ee'
  inverse-on-surface: '#322f39'
  outline: '#958ea0'
  outline-variant: '#494454'
  surface-tint: '#d0bcff'
  primary: '#d0bcff'
  on-primary: '#3c0091'
  primary-container: '#a078ff'
  on-primary-container: '#340080'
  inverse-primary: '#6d3bd7'
  secondary: '#cebdff'
  on-secondary: '#381385'
  secondary-container: '#4f319c'
  on-secondary-container: '#bea8ff'
  tertiary: '#7bd0ff'
  on-tertiary: '#00354a'
  tertiary-container: '#009bd1'
  on-tertiary-container: '#002d40'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e9ddff'
  primary-fixed-dim: '#d0bcff'
  on-primary-fixed: '#23005c'
  on-primary-fixed-variant: '#5516be'
  secondary-fixed: '#e8ddff'
  secondary-fixed-dim: '#cebdff'
  on-secondary-fixed: '#21005e'
  on-secondary-fixed-variant: '#4f319c'
  tertiary-fixed: '#c4e7ff'
  tertiary-fixed-dim: '#7bd0ff'
  on-tertiary-fixed: '#001e2c'
  on-tertiary-fixed-variant: '#004c69'
  background: '#14121b'
  on-background: '#e6e0ee'
  surface-variant: '#36333e'
typography:
  display-hero:
    fontFamily: Inter
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: -0.01em
  label-badge:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system embodies an elite, modern software engineering persona tailored for a full-stack developer portfolio. It combines technical precision with high-end aesthetic polish, signaling competence, modern architectural standards, and attention to detail.

The visual style marries deep obsidian darkness with refined atmospheric violet luminescence. It employs layered glassmorphism, crisp borders, and controlled lighting to create an immersive, tactile terminal-meets-editorial experience. The interface balances high-density engineering artifacts (code blocks, stack badges, commit feeds, timeline graphs) with generous negative space and cinematic focus.

## Colors

The palette operates on a strict dark chromatic scale optimized for prolonged viewing, visual depth, and luminescent contrast.

- **Background Canvas (`#0D0B14`)**: A near-black, deep violet canvas that forms the base void.
- **Surface Elevation 1 (`#13101C`)**: Recessed modules, terminal panels, and foundational structures.
- **Surface Elevation 2 (`#171421`)**: Primary card surfaces, feature showcases, and interactive panels.
- **Surface Elevation 3 (`#211D30`)**: Elevated dropdowns, flyouts, tooltips, and floating navigation bars.
- **Border / Outline (`#2A243D`)**: Precise hairline borders delineating surface tiers.
- **Border Hover / Focus (`#433868`)**: Subtle state enhancement on interactive containers.
- **Primary Accent (`#8B5CF6`)**: Vivid electric violet driving focal actions, badges, interactive states, and active visual markers.
- **Secondary Accent (`#A78BFA`)**: Softer lavender used for subtle highlights, interactive hovers, and gradient transitions.
- **Tertiary Accent (`#38BDF8`)**: Electric cyan used strictly for specialized semantic callouts, live statuses, and full-stack architecture markers.
- **Text Headings (`#FFFFFF`)**: Absolute high-contrast white for crisp readability.
- **Text Body (`#D1D5DB`)**: Soft silver-gray for sustained reading comfort across project descriptions.
- **Text Muted (`#9CA3AF`)**: Slate neutral for metadata, timestamps, secondary labels, and structural syntax.

## Typography

The type scale relies on Inter for structured visual hierarchy, supplemented by JetBrains Mono for engineering artifacts, metadata, and badge labels.

- **Hero & Section Titles**: Rendered in heavy weights (`700` and `800`) with tight letter-tracking (`-0.025em` to `-0.03em`) to create dense, impactful editorial headers.
- **Body Text**: Tuned for readability with ample line height (`1.5` to `1.6`) in neutral tones (`#D1D5DB`) to prevent eye fatigue against dark backgrounds.
- **Monospace Tags**: Applied to tech stacks, dates, shell commands, and component indicators, creating clear structural contrast against narrative copy.

## Layout & Spacing

The layout model is anchored by a 12-column responsive fluid grid with fixed max-width constraints (1280px) on desktop to preserve optimal line lengths and compositional balance.

- **Desktop (>= 1024px)**: 12-column grid, 1.5rem gutters, and 3rem side margins. Section stacks scale with `space-xl` and dynamic offsets up to 5rem.
- **Tablet (768px - 1023px)**: 8-column grid, 1.25rem gutters, and 2rem side margins. Multi-column project cards collapse into 2-column or single-column matrices.
- **Mobile (< 768px)**: 4-column grid, 1rem gutters, and 1.25rem side margins. All card grids and split timeline entries flatten into a linear vertical hierarchy.

## Elevation & Depth

Visual hierarchy is maintained without heavy solid drop shadows, utilizing low-contrast hairline outlines combined with diffuse radial violet glow fields.

- **Flat Canvas**: Background sits at `#0D0B14`, featuring subtle fixed ambient gradient spots (`radial-gradient(ellipse at top, rgba(139, 92, 246, 0.08), transparent 70%)`).
- **Base Cards & Surfaces**: Background `#171421` with a 1px solid border of `#2A243D`. Shadows are soft and tinted: `0 4px 20px -2px rgba(13, 11, 20, 0.8), 0 0 1px 0 rgba(139, 92, 246, 0.15)`.
- **Hover & Active Depth**: Interactive cards translate up (`-2px` to `-4px`) with an illuminated border (`#433868`) and an energized glow: `0 12px 32px -4px rgba(13, 11, 20, 0.9), 0 0 24px -2px rgba(139, 92, 246, 0.25)`.
- **Floating Controls & Modals**: Background `rgba(23, 20, 33, 0.8)` with `backdrop-filter: blur(16px)` and a crisp hairline rim of `rgba(167, 139, 250, 0.2)`.

## Shapes

The design uses balanced, modern curves (`roundedness: 2`). Standard components utilize 0.5rem (8px) corners, while cards and surface wrappers utilize 1rem (16px) corners (`rounded-lg`).

Pill geometry (`rounded-full`) is reserved strictly for status indicators, tech stack badges, and compact interactive action tags to create distinct silhouette contrast against angular card containers.

## Components

### Buttons
- **Primary**: Solid background `#8B5CF6`, text `#FFFFFF`, border none, 0.5rem radius, horizontal padding 1.25rem, height 42px. Includes an inner top highlight `inset 0 1px 0 rgba(255, 255, 255, 0.2)` and a soft ambient glow `0 0 16px rgba(139, 92, 246, 0.35)`. On hover: `#7C3AED` with an expanded glow.
- **Secondary / Glass**: Background `rgba(23, 20, 33, 0.7)`, border 1px solid `#2A243D`, text `#D1D5DB`. On hover: border `#8B5CF6`, text `#FFFFFF`, background `rgba(42, 36, 61, 0.6)`.
- **Ghost / Icon**: Transparent surface, text `#9CA3AF`, hover background `rgba(139, 92, 246, 0.1)`, hover text `#A78BFA`.

### Badges & Chips
- **Tech Stack Pill**: Background `rgba(23, 20, 33, 0.9)`, border 1px solid `#2A243D`, text `#A78BFA`, font `JetBrains Mono` 11px uppercase. On hover: border `rgba(139, 92, 246, 0.5)`, text `#FFFFFF`.
- **Status Beacon**: Rounded full, flex row with a glowing pulsing dot (e.g., green `#10B981` or purple `#8B5CF6`), text `#D1D5DB`.

### Project Cards
- Surface `#171421`, border 1px solid `#2A243D`, radius 1rem, inner padding 1.5rem.
- Incorporates a subtle gradient wash from top-left (`rgba(139, 92, 246, 0.04)`) to bottom-right (transparent).
- Hover trigger smoothly elevates the card, increases border intensity to `#433868`, and activates a localized purple sheen.

### Timeline Markers
- Vertical track: 2px wide line in `#2A243D`.
- Marker node: 12px circular node with 2px border `#8B5CF6`, hollow or filled with `#0D0B14`.
- Active / Current node: Outer pulsing radial ring `0 0 12px rgba(139, 92, 246, 0.6)`.
- Content block: Card surface `#171421` attached with a hairline connector.

### Form Inputs & Terminal Elements
- **Input Fields**: Background `#13101C`, border 1px solid `#2A243D`, text `#FFFFFF`, placeholder `#9CA3AF`, radius 0.5rem, padding 0.75rem 1rem. Focused state: border `#8B5CF6`, outline none, shadow `0 0 0 1px #8B5CF6, 0 0 12px rgba(139, 92, 246, 0.25)`.
- **Code Block**: Embedded `#0F0D17` container, top bar with mock window controls (red/yellow/green muted dots), monospaced text in `#D1D5DB`, syntax highlights using `#A78BFA`, `#38BDF8`, and `#F472B6`.