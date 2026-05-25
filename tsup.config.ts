import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/main/server.ts'],
  outDir: 'dist',
  format: ['cjs'],
  target: 'node20',
  sourcemap: true,
  clean: true
})