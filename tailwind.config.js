/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 40px rgba(255, 121, 198, 0.15)'
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(circle at top left, rgba(255, 121, 198, 0.12), transparent 25%), radial-gradient(circle at 80% 10%, rgba(138, 43, 226, 0.14), transparent 15%)'
      }
    }
  },
  plugins: []
}
