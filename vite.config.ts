import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import viteSvgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteSvgr()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
    coverage: {
      provider: 'c8',
      all: true,
      include: ['src/**/*.{ts,tsx}', 'utils/**/*.{ts,tsx}'],
    },
  },
});
