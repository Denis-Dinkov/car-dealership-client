/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dev-blue": {
          100: '#405FF2'

        },
        'dev-dark': {
          100: '#050B20'
        },
        "dev-green": {
          100: "#3D923A"
        }
      }
    },
  },
  plugins: [],
}
