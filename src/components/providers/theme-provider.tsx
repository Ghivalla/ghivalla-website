"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

type ThemeProviderProps = React.ComponentProps<typeof NextThemesProvider>;

/**
 * Theme Provider Component
 *
 * Wraps next-themes ThemeProvider with our app's default configuration.
 *
 * Features:
 * - Prevents flash of wrong theme on page load
 * - Syncs with system preference (prefers-color-scheme)
 * - Persists user choice in localStorage
 * - Provides useTheme hook to all child components
 *
 * Usage:
 * Wrap your app in layout.tsx:
 * <ThemeProvider>{children}</ThemeProvider>
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
