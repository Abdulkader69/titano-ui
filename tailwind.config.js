module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        header: '0px 2px 8px rgba(69, 71, 82, 0.08);',
      },
      colors: {
        BrandBlue: '#4A6FFF',
        DarkGray: '#454752',
        PrimaryGray: '#676A7A',
        MidGray: '#9A9FB8',
        LightGray: '#FAFBFF',
        Green: '#61CF9F',
        Yellow: '#FFC75E',
      },
      maxWidth: {
        siteContainer: '1280px',
      },
      boxShadow: {
        Site: '0 8px 12px 0 rgb(0, 0, 0, 0.3',
      },
    },
  },
  plugins: [],
};
