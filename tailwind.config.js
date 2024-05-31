/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ['Roboto'],
        PermanentMarker: ['Permanent Marker'],
        ShadowsIntoLightTwo: ['Shadows Into Light Two']
      },
      colors: {
        primary: ['#fddf28']
      },
      keyframes: {
        scroll: {
          to: { transform: 'translate( calc(-50% - 2.5rem) )' }
        }
      },
      animation: {
        scroll: 'scroll 90s linear forwards infinite',
        scroll_reverse: 'scroll 90s linear reverse infinite '
      }
    }
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-stroke-1': {
          '-webkit-text-stroke-width': '1px',
          '-webkit-text-stroke-color': 'black'
        },
        '.text-stroke-2': {
          '-webkit-text-stroke-width': '2px',
          '-webkit-text-stroke-color': 'black'
        },
        '.text-stroke-3': {
          '-webkit-text-stroke-width': '3px',
          '-webkit-text-stroke-color': 'black'
        }
        // Agrega más utilidades según sea necesario
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ]
}
