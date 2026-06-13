import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        'black': '#000000',
        'void': '#02010a',
        'deep': '#060412',
        'cosmic': '#0a0820',
        'nebula-purple': '#7b2fff',
        'nebula-pink': '#ff2d8a',
        'nebula-cyan': '#00f0ff',
        'nebula-orange': '#ff6b2b',
        'star': '#ffffff',
      },
      fontFamily: {
        'display': '"Syne", sans-serif',
        'mono': '"Space Mono", monospace',
      },
    },
  },
  plugins: [],
} satisfies Config
