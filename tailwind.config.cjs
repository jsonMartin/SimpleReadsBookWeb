const config = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],

  plugins: [
    require('flowbite/plugin')
  ],

  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        primary: { 50: '#FFF5F2', 100: '#FFF1EE', 200: '#FFE4DE', 300: '#FFD5CC', 400: '#FFBCAD', 500: '#FE795D', 600: '#EF562F', 700: '#EB4F27', 800: '#CC4522', 900: '#A5371B' },
      },
      screens: {
        'sm': '576px',
        // => @media (min-width: 576px) { ... }

        'md': '960px',
        // => @media (min-width: 960px) { ... }

        'lg': '1280px',
        // => @media (min-width: 1280px) { ... }

        'xl': '1440px',
        // => @media (min-width: 1440px) { ... }
      },

      keyframes: {
        flipInX: {
          '0%': { transform: 'rotateX(85deg)', opacity: 0 },
          '100%': { transform: 'rotateX(0deg)', opacity: 1 },
        },
        slideUp: {
          '0%': { transform: `translateY(75%)` },
          '100%': { transform: `translateY(0%)` },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        }
      },
      animation: {
        flipInX: 'flipInX .8s cubic-bezier(0.68, -0.55, 0.27, 1.55) 1', // 1 indicates the animation will run once
        slideUp: 'slideUp 2s ease-in-out 1',
        fadeIn: 'fadeIn 2s ease-in-out 1',
      }
    },

  }
};

module.exports = config;