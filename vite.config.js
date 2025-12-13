
// vite.config.js
import { defineConfig } from 'vite'
// import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
   base: './',
  plugins: [
    react()
    // tailwindcss(),
  ],
  build: {
    outDir: "dist",   // <-- Ensure this folder exists in your project root
  }
})

  