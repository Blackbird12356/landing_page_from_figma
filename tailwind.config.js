/** @type {import('tailwindcss').Config} */
export default {
  // Указываем Tailwind искать классы в файлах .jsx и .tsx
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#2B59C3',
          black: '#181818',
          grey: '#868686',
        },
      },
      fontFamily: {
        sans: ['"20 Kopeek"', 'Inter', 'system-ui', 'sans-serif'],
        book: ['"20 Kopeek Book"', '"20 Kopeek"', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'h1-desk': ['55px', { lineHeight: '1', fontWeight: '400' }],
        'h2-desk': ['38px', { lineHeight: '1.1', fontWeight: '400' }],
        'h2-tab': ['34px', { lineHeight: '1.1', fontWeight: '400' }],
        'h3-desk': ['26px', { lineHeight: '1.1', fontWeight: '400' }],
        'body-desk': ['18px', { lineHeight: '1.4', fontWeight: '400' }],
        'notes-desk': ['15px', { lineHeight: '1.4', fontWeight: '400' }],
      },
      maxWidth: {
        content: '1110px',
      },
      borderRadius: {
        pill: '40px',
        form: '10px',
      },
    },
  },
  plugins: [],
}