/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    './*.jsx'
  ],
  theme: {
    extend: {
      colors: {
        quentlex: {
          gold: 'hsl(42, 51%, 47%)',      // #B48D3A - Primary brand gold
          dark: 'hsl(220, 23%, 18%)',     // #212A35 - Dark text
          navy: 'hsl(220, 32%, 15%)',     // #1A2332 - Secondary dark
          warm: 'hsl(220, 13%, 46%)',     // #6B7280 - Body text
          light: 'hsl(220, 13%, 94%)',    // #F1F2F4 - Light background
          blue: 'hsl(217, 91%, 60%)',     // #3B82F6 - Accent blue
          green: 'hsl(162, 85%, 42%)',    // #10B981 - Success green
          amber: 'hsl(38, 92%, 50%)',     // #F59E0B - Primary CTA orange
          white: 'hsl(0, 0%, 100%)',      // #FFFFFF - Pure white
          off: 'hsl(0, 0%, 99%)',         // #FCFCFC - Off white
          charcoal: 'hsl(220, 13%, 36%)'  // #374151 - Medium text
        }
      },
      animation: {
        'scroll-left': 'scroll-left 30s linear infinite',
        'scroll-right': 'scroll-right 30s linear infinite',
        'luxury-glow': 'luxury-glow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        'scroll-left': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        'scroll-right': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' }
        },
        'luxury-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(180, 141, 58, 0.3), 0 0 40px rgba(180, 141, 58, 0.1)',
            transform: 'scale(1)'
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(180, 141, 58, 0.5), 0 0 60px rgba(180, 141, 58, 0.2)',
            transform: 'scale(1.02)'
          }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        }
      },
      backgroundImage: {
        'luxury-gradient': 'linear-gradient(135deg, hsl(0, 0%, 100%) 0%, hsl(220, 13%, 99%) 100%)',
        'gold-gradient': 'linear-gradient(135deg, hsl(42, 51%, 47%) 0%, hsl(38, 92%, 50%) 100%)',
        'light-gradient': 'linear-gradient(135deg, hsl(0, 0%, 100%) 0%, hsl(0, 0%, 98%) 100%)',
        'shimmer-gradient': 'linear-gradient(90deg, transparent, rgba(181,134,59,0.1), transparent)'
      }
    },
  },
  plugins: [],
}