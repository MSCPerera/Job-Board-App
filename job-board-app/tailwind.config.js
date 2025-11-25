module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/Components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    container: {
      screens: {
        'lg': '768px',
        'xl': '1080px',
        '2xl': '1080px',
      },
      center: true,
      padding: {
        DEFAULT: '1.5rem',
      }
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at center, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
