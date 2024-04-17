/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-chaKy': '#e5c07b',
        'custom-coral': '#e06c75',
        'custom-dark': '#5c6370',
        'custom-error': '#f44747',
        'custom-fountainBlue': '#56b6c2',
        'custom-green': '#98c379',
        'custom-invalid': '#ffffff',
        'custom-lightDark': '#7f848e',
        'custom-lightWhite': '#abb2bf',
        'custom-malibu': '#61afef',
        'custom-purple': '#c678dd',
        'custom-whiskey': '#d19a66',
        'custom-deepRed': '#BE5046',
        "custom-custom-green": "#98c379",
        'custom-bg': "#282c34"
      },
      fontFamily: {
        customInter: ["Inter", "sans-serif"],
        customRoboto: ["Roboto", "sans-serif"],
        customMono: ["JetBrains Mono Variable", "sans-serif"],
        customEyeCatcher: ["Berkshire Swash", "sans-serif"],
      }
    },
  },
  plugins: [],
}
