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
        primaria: '#f47878',
        'primaria-rgb': '244, 120, 120',
        'primaria-clara': '#f9a7a7',
        'primaria-fundo': '#fce4ec',
        'primaria-texto': '#f8b7c2',
        'texto-principal': '#333',
        'texto-secundario': '#555',
        'cor-fundo': '#fdfdfd',
        borda: '#ddd',
        branco: '#fff',
        botao: '#f5a1b6d3',
        'carrossel-fundo-legenda': '#000000',


      },
    },
  },
  plugins: [],
}