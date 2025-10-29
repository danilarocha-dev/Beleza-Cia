/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./html/**/*.html",
    "./html/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'],
        sans: ['Segoe UI', 'sans-serif'],
      },
      colors: {
        primario: '#ff69b4',
        secundario: '#fce4ec',
        texto: '#4a4a4a',
        fundo: '#ffffff',
        borda: '#e0e0e0',
      },
    },
  },
  plugins: [],
}