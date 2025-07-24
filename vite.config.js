import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars'

export default defineConfig({
  plugins: [
    handlebars({
      partialDirectory: './src/partials',
    })
  ],
  root: './src',
  build: {
    outDir: '../dist',
    emptyOutDir: true
  }
})