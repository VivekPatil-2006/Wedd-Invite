/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'cream': '#FAF8F3',
        'ivory': '#FFFFF0',
        'champagne': '#F7EAE2',
        'blush': '#FFE5EC',
        'dusty-rose': '#D4A5A5',
        'soft-gold': '#E6D7B8',
        'dark-charcoal': '#1A1A1A',
        'warm-brown': '#8B7355',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'Cormorant Garamond', 'serif'],
        'elegant': ['Cormorant Garamond', 'serif'],
        'sans': ['Poppins', 'sans-serif'],
      },
      backdropBlur: {
        'xs': '2px',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'scroll-down': {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0', transform: 'translateY(20px)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'reveal-text': {
          '0%': { opacity: '0', clipPath: 'inset(0 100% 0 0)' },
          '100%': { opacity: '1', clipPath: 'inset(0 0 0 0)' },
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
        'scroll-down': 'scroll-down 2s ease-in-out infinite',
        'fade-up': 'fade-up 0.8s ease-out',
        'reveal-text': 'reveal-text 1s ease-out',
      },
    },
  },
  plugins: [],
};
