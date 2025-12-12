import { defineConfig } from 'vite'
import path from "path"
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

export default defineConfig(() => {

  return {
    plugins: [
      react(), 
      tailwindcss(), 
      svgr({
        include: '**/*.svg?react',
      }),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(__dirname, 'src/assets/icons')],
        symbolId: 'icon-[name]', 
      }),
    ],
    server: {
      port: 7000,
      strictPort: true,
      host: true,
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  }
})
