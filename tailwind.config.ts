import { Config } from "tailwindcss"
import prelinePlugin from "preline/plugin"
import theme from "./tailwind-theme"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/preline/preline.js',
  ],
  plugins: [
    prelinePlugin,
  ],
  presets: [],
  darkMode: 'media', // or 'class'
  theme,
} satisfies Config
