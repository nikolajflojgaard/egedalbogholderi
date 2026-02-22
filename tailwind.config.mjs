/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  safelist: [
    'bg-primary',
    'bg-primary-dark',
    'bg-primary-light',
    'bg-accent',
    'bg-accent-dark',
    'text-primary',
    'text-accent',
    'from-primary',
    'to-primary-dark',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e3a5f',
          dark: '#152a45',
          light: '#2d5a8e',
        },
        accent: {
          DEFAULT: '#2d7d46',
          dark: '#236838',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}