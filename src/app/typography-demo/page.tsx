export default function TypographyDemoPage() {
  return (
    <div className="min-h-screen p-8 md:p-16 max-w-6xl mx-auto">
      <header className="mb-16">
        <h1 className="text-display-xl mb-4">Typography System</h1>
        <p className="text-body-lg text-muted-foreground">
          Modern & Bold typography scale for the Ghivalla Portfolio
        </p>
      </header>

      {/* Display Tier */}
      <section className="mb-16 pb-16 border-b">
        <h2 className="text-h2 mb-8">Display Tier</h2>

        <div className="space-y-8">
          <div>
            <p className="text-caption text-muted-foreground mb-2">
              .text-display-xl (72px / 800 weight)
            </p>
            <p className="text-display-xl">Hi, I'm Ghivalla</p>
          </div>

          <div>
            <p className="text-caption text-muted-foreground mb-2">
              .text-display (64px / 700 weight)
            </p>
            <p className="text-display">Building Modern Web Experiences</p>
          </div>
        </div>
      </section>

      {/* Heading Tier */}
      <section className="mb-16 pb-16 border-b">
        <h2 className="text-h2 mb-8">Heading Tier</h2>

        <div className="space-y-8">
          <div>
            <p className="text-caption text-muted-foreground mb-2">
              .text-h1 (48px / 700 weight)
            </p>
            <h1 className="text-h1">Page Title or Main Section</h1>
          </div>

          <div>
            <p className="text-caption text-muted-foreground mb-2">
              .text-h2 (32px / 600 weight)
            </p>
            <h2 className="text-h2">Section Heading</h2>
          </div>

          <div>
            <p className="text-caption text-muted-foreground mb-2">
              .text-h3 (24px / 600 weight)
            </p>
            <h3 className="text-h3">Subsection or Card Title</h3>
          </div>

          <div>
            <p className="text-caption text-muted-foreground mb-2">
              .text-h4 (20px / 600 weight)
            </p>
            <h4 className="text-h4">Smaller Heading</h4>
          </div>
        </div>
      </section>

      {/* Body Tier */}
      <section className="mb-16 pb-16 border-b">
        <h2 className="text-h2 mb-8">Body Tier</h2>

        <div className="space-y-8">
          <div>
            <p className="text-caption text-muted-foreground mb-2">
              .text-body-lg (18px / 400 weight)
            </p>
            <p className="text-body-lg max-w-2xl">
              I'm a front-end developer specializing in React, TypeScript, and
              modern web technologies. I build accessible, performant, and
              delightful user experiences.
            </p>
          </div>

          <div>
            <p className="text-caption text-muted-foreground mb-2">
              .text-body (16px / 400 weight)
            </p>
            <p className="text-body max-w-2xl">
              This is the default body text size. It's optimized for
              readability with a generous line-height of 1.6. Perfect for
              paragraphs, descriptions, and long-form content. The regular
              weight (400) ensures comfortable reading without eye strain.
            </p>
          </div>

          <div>
            <p className="text-caption text-muted-foreground mb-2">
              .text-body-sm (14px / 400 weight)
            </p>
            <p className="text-body-sm max-w-2xl">
              Smaller body text for secondary information. Still readable but
              takes up less space. Good for supporting details, timestamps, or
              less critical content.
            </p>
          </div>
        </div>
      </section>

      {/* Utility Tier */}
      <section className="mb-16 pb-16 border-b">
        <h2 className="text-h2 mb-8">Utility Tier</h2>

        <div className="space-y-8">
          <div>
            <p className="text-caption text-muted-foreground mb-2">
              .text-label (14px / 500 weight)
            </p>
            <label className="text-label">Form Label or Tag</label>
          </div>

          <div>
            <p className="text-caption text-muted-foreground mb-2">
              .text-caption (12px / 400 weight)
            </p>
            <p className="text-caption">
              React • Next.js • TypeScript • Tailwind CSS
            </p>
          </div>
        </div>
      </section>

      {/* Real-World Examples */}
      <section className="mb-16">
        <h2 className="text-h2 mb-8">Real-World Examples</h2>

        <div className="space-y-12">
          {/* Hero Example */}
          <div className="p-8 border rounded-lg">
            <p className="text-caption text-muted-foreground mb-4">
              Hero Section Example
            </p>
            <h1 className="text-display-xl mb-4">Hi, I'm Ghivalla</h1>
            <p className="text-body-lg text-muted-foreground max-w-2xl">
              Front-end developer specializing in React, TypeScript, and
              modern web technologies.
            </p>
          </div>

          {/* Project Card Example */}
          <div className="p-8 border rounded-lg">
            <p className="text-caption text-muted-foreground mb-4">
              Project Card Example
            </p>
            <h3 className="text-h3 mb-2">Portfolio Website</h3>
            <p className="text-body mb-3 max-w-2xl">
              A modern portfolio built with Next.js 15, React 19, and Tailwind
              CSS v4. Features AI-powered chat interface with graceful
              fallbacks and comprehensive testing.
            </p>
            <p className="text-caption text-muted-foreground">
              React • Next.js • TypeScript • Tailwind CSS
            </p>
          </div>

          {/* Timeline Example */}
          <div className="p-8 border rounded-lg">
            <p className="text-caption text-muted-foreground mb-4">
              Timeline Item Example
            </p>
            <h3 className="text-h3 mb-1">Senior Front-End Developer</h3>
            <p className="text-body-sm text-muted-foreground mb-3">
              Tech Company • 2023 - Present
            </p>
            <p className="text-body max-w-2xl">
              Led front-end architecture decisions for a suite of enterprise
              applications. Mentored junior developers and established testing
              best practices across the team.
            </p>
          </div>
        </div>
      </section>

      {/* Mobile Preview Note */}
      <footer className="mt-16 p-8 bg-muted rounded-lg">
        <h2 className="text-h3 mb-4">Mobile Responsiveness</h2>
        <p className="text-body mb-4">
          Resize your browser to see responsive typography in action.
        </p>
        <ul className="text-body-sm space-y-2 list-disc list-inside">
          <li>Display XL: 72px → 48px on mobile</li>
          <li>Display: 64px → 40px on mobile</li>
          <li>H1: 48px → 32px on mobile</li>
          <li>H2: 32px → 24px on mobile</li>
          <li>Other sizes remain consistent</li>
        </ul>
      </footer>
    </div>
  );
}
