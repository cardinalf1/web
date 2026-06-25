/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#000000",
        structure: "#333333",
        signal: "#FFFFFF",
        zerotwo: "#ff003c"
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        code: ['JetBrains Mono', 'monospace'],
        rajdhani: ['Rajdhani', 'sans-serif']
      },
      animation: {
        'typewriter': 'typewriter 2s steps(40) infinite alternate',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        typewriter: {
          '0%, 10%': { content: '""' },
          '100%': { content: 'attr(data-text)' }
        }
      }
    },
  },
  plugins: [],
}
