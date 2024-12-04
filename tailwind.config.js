/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
        screens: {
          'sm': "640px",
          'md': "768px",
          'lg': "1024px",
          'xl': "1180px",
        }
      },
      fontSize: {
        'custom-xl': "22px",
        'custom-2xl': "28px",
        'custom-3xl': "39.42px",
        'custom-4xl': "47px",
        'custom-5xl': "50px",
        'custom-6xl': "62.12px",
      },
      lineHeight: {
        'custom-xl': "18px",
        'custom-2xl': "22px",
        'custom-3xl': "30px",
        'custom-4xl': "45.15px",
        'custom-5xl': "55px",
        'custom-6xl': "66px",
        'custom-7xl': "68.71px",
      },
      colors: {
        'blue': "#4C57FF",
        'dusk-black': "#0E1122",
        'gray': "#76767F",
        'silver-gray': "#dddddf",
        'off-white': "#f2f2f3",
        'creamy': "#EFECE6"
      },
      // boxShadow: {
      //   'custom-xl': "0px 1px 30px 0px #0000001A",
      // },
      backgroundImage: {
        'hero-bg': "url('./assets/images/webp/hero-bg.webp')",
        'sales-serge': "url('./assets/images/webp/sales-serge-bg.webp')",
      },
      fontFamily: {
        'poppins': "'poppins' ,sans serif",
        'abril': "'abril display' ,sans serif",
      }
    },
  },
  plugins: [],
}

