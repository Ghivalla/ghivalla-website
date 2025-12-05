# Typography System

Modern & Bold typography scale for the Ghivalla Portfolio.

## Design Philosophy

- **Modern & Bold**: Large, impactful headings with dramatic size jumps
- **High Contrast**: Bold headings (700-800 weight) paired with regular body text (400 weight)
- **Readable**: Generous line-height (1.6) for body text
- **Responsive**: Scales down gracefully on mobile devices

---

## Type Scale

### Display Tier (Hero, Big Statements)

| Class | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| `.text-display-xl` | 72px (4.5rem) | 800 | 1.1 | Hero headline, major impact |
| `.text-display` | 64px (4rem) | 700 | 1.1 | Large section titles |

**Mobile**: Scales to 48px and 40px respectively

**Example**:
```tsx
<h1 className="text-display-xl">Hi, I'm Ghivalla</h1>
<p className="text-display">Projects</p>
```

---

### Heading Tier (Section Structure)

| Class | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| `.text-h1` | 48px (3rem) | 700 | 1.2 | Page titles, main sections |
| `.text-h2` | 32px (2rem) | 600 | 1.3 | Section headings |
| `.text-h3` | 24px (1.5rem) | 600 | 1.4 | Subsections, card titles |
| `.text-h4` | 20px (1.25rem) | 600 | 1.4 | Smaller headings |

**Mobile**: h1 scales to 32px, h2 to 24px

**Example**:
```tsx
<h1 className="text-h1">About Me</h1>
<h2 className="text-h2">Experience</h2>
<h3 className="text-h3">Portfolio Website</h3>
```

---

### Body Tier (Content)

| Class | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| `.text-body-lg` | 18px (1.125rem) | 400 | 1.6 | Intro paragraphs, emphasis |
| `.text-body` | 16px (1rem) | 400 | 1.6 | Default body text |
| `.text-body-sm` | 14px (0.875rem) | 400 | 1.5 | Secondary text |

**Example**:
```tsx
<p className="text-body-lg">
  I'm a front-end developer specializing in React and TypeScript.
</p>
<p className="text-body">
  I build modern, accessible web applications...
</p>
```

---

### Utility Tier (Labels, Captions)

| Class | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| `.text-label` | 14px (0.875rem) | 500 | 1.4 | Form labels, tags |
| `.text-caption` | 12px (0.75rem) | 400 | 1.4 | Metadata, timestamps, fine print |

**Example**:
```tsx
<label className="text-label">Email</label>
<p className="text-caption">React • Next.js • TypeScript</p>
```

---

## Special Features

### Letter Spacing (Tracking)

Large text uses negative letter spacing for a tighter, modern look:

- Display text: `-0.02em` (tighter)
- Headings (h1-h2): `-0.01em` (slightly tighter)
- Body text: Default (no adjustment)

### Mobile Responsiveness

Typography automatically scales down on screens ≤ 768px:

| Class | Desktop | Mobile |
|-------|---------|--------|
| `.text-display-xl` | 72px | 48px |
| `.text-display` | 64px | 40px |
| `.text-h1` | 48px | 32px |
| `.text-h2` | 32px | 24px |
| Other classes | No change | No change |

---

## Usage Examples

### Hero Section
```tsx
<section className="hero">
  <h1 className="text-display-xl">Hi, I'm Ghivalla</h1>
  <p className="text-body-lg">
    Front-end developer specializing in React, TypeScript, and modern web technologies.
  </p>
</section>
```

### Projects Section
```tsx
<section>
  <h1 className="text-h1">Projects</h1>

  <article className="project-card">
    <h3 className="text-h3">Portfolio Website</h3>
    <p className="text-body">
      A modern portfolio built with Next.js 15, React 19, and Tailwind CSS v4.
    </p>
    <p className="text-caption">React • Next.js • TypeScript</p>
  </article>
</section>
```

### Timeline
```tsx
<div className="timeline-item">
  <h3 className="text-h3">Senior Front-End Developer</h3>
  <p className="text-body-sm">Tech Company • 2023 - Present</p>
  <p className="text-body">
    Led front-end architecture decisions...
  </p>
</div>
```

---

## CSS Custom Properties

If you need direct access to values (for custom components):

```css
/* Display */
--font-size-display-xl: 4.5rem;
--font-size-display: 4rem;
--line-height-display: 1.1;
--font-weight-display: 700;
--font-weight-display-xl: 800;

/* Headings */
--font-size-h1: 3rem;
--font-size-h2: 2rem;
--font-size-h3: 1.5rem;
--font-size-h4: 1.25rem;
--font-weight-h1: 700;
--font-weight-heading: 600;

/* Body */
--font-size-body-lg: 1.125rem;
--font-size-body: 1rem;
--font-size-body-sm: 0.875rem;
--font-weight-body: 400;

/* Utility */
--font-size-label: 0.875rem;
--font-size-caption: 0.75rem;
--font-weight-label: 500;
```

**Example**:
```tsx
<p style={{ fontSize: 'var(--font-size-body-lg)' }}>
  Custom styled text
</p>
```

---

## Design Rationale

### Why Dramatic Size Jumps (1.5x scale)?

- **Visual hierarchy**: Instantly clear what's important
- **Modern aesthetic**: Matches industry leaders (Vercel, Stripe, Linear)
- **Memorable**: Large headlines create impact in a portfolio context

### Why High Contrast Weights?

- **Bold = Important**: Heavy headings (700-800) signal hierarchy
- **Regular = Readable**: Light body text (400) is easier to read in paragraphs
- **Maximum differentiation**: Makes scanning content faster

### Why Tight Line-Height on Display Text?

- **Compact impact**: 1.1 line-height on 72px text feels punchy and modern
- **Multi-line headings**: Prevents awkward gaps if title wraps
- **Industry standard**: Common in contemporary web design

### Why Generous Line-Height on Body (1.6)?

- **Readability**: Easier to read paragraphs with breathing room
- **Accessibility**: Benefits users with dyslexia or vision impairments
- **Web standard**: 1.5-1.6 is recommended for body text

---

## Testing

All typography classes are tested in the demo page at `/typography-demo`.

---

**Last updated**: December 4, 2025
**Design system version**: 1.0.0
