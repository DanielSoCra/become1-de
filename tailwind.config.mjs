/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        'warm-white': '#FAF9F7',
        'soft-gray': '#F0EDE8',
        'anthracite': '#1B1D1E',
        'forest-green': '#1A6B4A',
        'sage-green': '#4A9B7A',
        'warm-amber': '#F5A623',
        'deep-amber': '#C47D0E',
      },
      fontSize: {
        'display': ['56px', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '800' }],
        'h2': ['40px', { lineHeight: '1.15', letterSpacing: '-0.01em', fontWeight: '700' }],
        'h3': ['26px', { lineHeight: '1.25', fontWeight: '600' }],
        'h4': ['20px', { lineHeight: '1.35', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '1.75', fontWeight: '400' }],
        'body': ['16px', { lineHeight: '1.7', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '1.6', fontWeight: '400' }],
        'label': ['12px', { lineHeight: '1.5', letterSpacing: '0.1em', fontWeight: '600' }],
        'btn': ['15px', { lineHeight: '1', letterSpacing: '0.01em', fontWeight: '700' }],
      },
    },
  },
  plugins: [],
}
