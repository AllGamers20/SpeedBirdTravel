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
