/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-agrandir)'],
        heading: ['var(--font-raleway)'],
        body: ['var(--font-chivo)'],
      },
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
        background: {
          DEFAULT: 'hsl(var(--background))',
        },
        foreground: {
          DEFAULT: 'hsl(var(--foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        gradient: {
          stormToRock: 'linear-gradient(45deg, hsl(var(--color-storm-gray)) 0%, hsl(var(--color-rock-gray)) 100%)',
          primary: 'linear-gradient(45deg, hsl(var(--primary)) 0%, hsl(var(--primary-foreground)) 100%)',
        },
      },
      borderRadius: {
        'nav': '0.5rem 0.5rem 1.5rem 1.5rem', // Custom border radius for nav elements
        'menu': '0 1.5rem 1.5rem 0 ',
      },
      screens: {
        'xmd': '860px',
        "tope": "80rem",
      }
    },
    plugins: [],
  },
}
