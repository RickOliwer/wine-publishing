module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#fff",
          dark: "#2e2e2e",
          oranges: "#f16c20",
          bgwhite: "rgba(255, 255, 255, 0.7)",
          bggray: "#f4f4f4"
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
