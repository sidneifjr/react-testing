/// <reference types="vitest/config" />

import { defineConfig, loadEnv } from 'vite'

import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  test: {
    include: ['**/*.test.tsx'],
    globals: true, // desabilita a necessidade de importar funções do pacote "vitest" em todos os arquivos.
    environment: 'happy-dom',
    setupFiles: ['./src/tests/setup.ts'],
    env: loadEnv('', process.cwd(), ''), // https://github.com/vitest-dev/vitest/issues/2117#issuecomment-1890908753

    coverage: {
      provider: 'v8'
    }
  },

  // Import Alias
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  server: {
    port: 3000,
    open: true,
  },
})
