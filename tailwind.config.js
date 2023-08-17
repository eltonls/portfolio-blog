/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'foreground': '#9D8DF1', // Foreground
        'background': '#1E1E2E', // Backgrounds
        'backgroundtwo': '#181825', // BG-2
      },
      fontFamily: {
        sans: ['Glory', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif']
      },
      backgroundImage: {
        'hero-pattern': "url('./assets/images/bg.jpg')"
      }
    },
  },
  plugins: [],
}

