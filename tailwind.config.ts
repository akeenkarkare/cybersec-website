import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'terminal-bg': '#0a0e14',
        'terminal-green': '#00ff00',
        'terminal-cyan': '#00ffff',
        'terminal-yellow': '#ffff00',
        'terminal-red': '#ff0040',
        'terminal-purple': '#bd93f9',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      animation: {
        'cursor-blink': 'cursor-blink 1s infinite',
        'typing': 'typing 3.5s steps(30, end)',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        'cursor-blink': {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        'typing': {
          from: { width: '0' },
          to: { width: '100%' },
        },
        'glow': {
          from: { textShadow: '0 0 10px #00ff00, 0 0 20px #00ff00' },
          to: { textShadow: '0 0 20px #00ff00, 0 0 30px #00ff00' },
        },
      },
    },
  },
  plugins: [],
}

export default config