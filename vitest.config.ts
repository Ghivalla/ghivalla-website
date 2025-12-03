  import { defineConfig } from 'vitest/config'
  import react from '@vitejs/plugin-react'
  import path from 'path'

  export default defineConfig({
    plugins: [react()],
    test: {
      // Use jsdom environment for React component testing
      environment: 'jsdom',

      // Global test utilities (describe, it, expect) without imports
      globals: true,

      // Setup file to run before all tests
      setupFiles: './vitest.setup.ts',

      // Coverage configuration
      coverage: {
        provider: 'v8',
        reporter: ['text', 'json', 'html'],
        exclude: [
          'node_modules/',
          'src/components/ui/**', // shadcn/ui components (already tested)
          '**/*.config.ts',
          '**/*.d.ts',
          '**/types/**',
        ],
      },
    },
    resolve: {
      // Match your tsconfig.json path aliases
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  })
