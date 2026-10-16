/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        mint: '#91D4B9',
        mintLight: '#E5F4EB',
        greenDeep: '#367A60',
        greenMid: '#75BFA0',
        cream: '#FFF9F0',
        beige: '#EDE1D1',
        chocolate: '#49372F',
        warmWhite: '#FFFCF7',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
