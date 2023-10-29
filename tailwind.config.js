/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'parallex': 'url("../public/img/bg1.jpg")',
        'parallex-2': 'url("../public/img/bg2.jpg")',
        'parallex-3': 'url("../public/img/bg3.jpeg")',
        'parallex-4': 'url("../public/img/bg4.jpg")',
      },
      fontFamily: {
        dale: ['var(--font-dale)'],
        nunito: ['var(--font-nunito)'],
        airspace: ['var(--font-AirSpace)'],
        campfire: ['var(--font-CampFire)'],
      },
      colors: {
        main: '#1E90FF',
        gradient: {
          'from': 'DodgerBlue',
          'to': 'Lime',
        },
      },
      linearGradientColors: {
        'gradient': ['from-DodgerBlue', 'to-Lime'],
      },
    },
  },
  plugins: [
    require('tailwindcss-gradients'), // Make sure to install this plugin
  ],
}
