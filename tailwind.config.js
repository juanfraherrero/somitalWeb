/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        'open-menu': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'open-menu': 'open-menu 0.3s ease-out',
      },  
      colors: {
        'regal-blue': '#243c5a',
        'color-primary': '#781F1C',
        'color-secondary': '#FCBD30',
        'color-accent': '#9A5755',
        'color-text': '#777777',
        'color-white': '#FFFFFF',
        'color-white-soft': '#F6F8FB',
        'color-black': '#000000',
      },
      screens: {
        'xmd': '860px',
        "tope": "80rem",
      }
  },
    plugins: [],
  },
  
}
