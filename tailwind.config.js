/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E91E63', // Pink
          light: '#F48FB1',
          dark: '#C2185B',
        },
        secondary: {
          DEFAULT: '#9C27B0', // Purple
          light: '#BA68C8',
          dark: '#7B1FA2',
        },
        dark: {
          DEFAULT: '#0f0f0f',
          light: '#1a1a1a',
          lighter: '#2a2a2a',
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #E91E63 0%, #9C27B0 100%)',
        'gradient-dark': 'linear-gradient(135deg, #E91E63 0%, #0f0f0f 100%)',
        'gradient-purple-dark': 'linear-gradient(135deg, #9C27B0 0%, #0f0f0f 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
