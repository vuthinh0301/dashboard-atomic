/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#304ffd',
        white: '#ffffff',
        bg: '#f8f8f8',
        border: '#e8e9eb',
        blue: '#22CCE2',
        orange: '#FF965D',
        red: '#FD7972',
        yellow: '#FFD240',
        'pink-1': '#F9DDC5',
        'pink-2': '#FD72DE',
        'green-1': '#49C96D',
        'green-2': '#AEE553',
        purple: '#B656EB',
        'dark-1': '#1E1F2D',
        'dark-2': '#3F434A',
        'body-light': '#8A9099',
        'grey-1': '#8A9099',
        'grey-2': '#C6C9CC',
        'grey-3': '#E8E9EB',
        'grey-4': '#F8F8F8',
        'body-dark': '#595F69'
      },
      backgroundColor: (theme) => ({
        ...theme('colors')
      }),
      borderColor: (theme) => ({
        ...theme('colors')
      }),
      textColor: (theme) => ({
        ...theme('colors')
      })
    }
  },
  plugins: [require('tailwindcss-animated')]
};
