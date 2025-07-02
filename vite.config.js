import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  base: "/Appiest-2/",
  plugins: [
    tailwindcss(),
  ],

})