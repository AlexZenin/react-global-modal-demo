import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { esbuildCommonjs, viteCommonjs } from '@originjs/vite-plugin-commonjs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
