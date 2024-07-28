const { transform } = require('lodash');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content:["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes:{
        'border-spin': {
          '100%': {
            transform: 'rotate(-360deg)'
          },
        },
        'border-spins': {
          '100%': {
            transform: 'rotate(-360deg)'
          },
        },
      }

    },
    animation: {
      'border-spin': 'border-spin 3s linear infinite',
      'border-spins': 'border-spin 1s linear infinite'
    }
  
  },
  plugins: [],
}

