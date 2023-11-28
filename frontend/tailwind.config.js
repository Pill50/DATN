/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%': { left: '-100%', opacity: 0 },
          '100%': { lef: '0', opacity: 1 },
        },
      },
      animation: {
        slide: 'slide 0.2s ease',
      },
    },
  },
  plugins: [require('flowbite/plugin'), require('tailwindcss-animated')],
};
