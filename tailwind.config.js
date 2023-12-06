/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'lg': {'max': '575px'},
      // => @media (max-width: 1535px) { ... }

      'md': {'max': '428px'},
      // => @media (max-width: 1279px) { ... }

      'sm': {'max': '375px'},
      // => @media (max-width: 1023px) { ... }
    }
  },
  plugins: [],
}

