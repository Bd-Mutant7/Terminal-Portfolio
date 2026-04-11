/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', 'Consolas', 'monospace'],
      },
      colors: {
        terminal: {
          bg: '#0a0e0a',
          surface: '#0f140f',
          border: '#1a2a1a',
          green: '#00ff41',
          cyan: '#00d4ff',
          yellow: '#ffdd00',
          red: '#ff3333',
          dim: '#4a6a4a',
          muted: '#2a3a2a',
          white: '#e0ffe0',
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        typewriter: 'typewriter 0.05s steps(1) forwards',
        scanline: 'scanline 8s linear infinite',
        flicker: 'flicker 0.15s infinite',
        glitch: 'glitch 1s infinite',
      },
      keyframes: {
        blink: { '0%, 100%': { opacity: '1' }, '50%': { opacity: '0' } },
        scanline: { '0%': { top: '0%' }, '100%': { top: '100%' } },
        flicker: { '0%, 100%': { opacity: '1' }, '50%': { opacity: '0.97' } },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 1px)' },
          '40%': { transform: 'translate(2px, -1px)' },
          '60%': { transform: 'translate(-1px, 2px)' },
          '80%': { transform: 'translate(1px, -2px)' },
        },
      },
    },
  },
  plugins: [],
}
