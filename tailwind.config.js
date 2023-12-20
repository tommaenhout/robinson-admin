// tailwind.config.js

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        'serif': ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        'mono': ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        'display': ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        'body': ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      weight: {
        'light': "Roboto-Light",
        'normal': "Roboto-Regular",
        'medium': "Roboto-Medium",
        'bold': "Roboto-Bold",
        "black": "Roboto-Black",
      },
    },
  },
  plugins: [],
}

