/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#694aad',

          secondary: '#59dbb6',

          accent: '#f9c2f4',

          neutral: '#171C2B',

          'base-100': '#3D345B',

          info: '#5D8BCB',

          success: '#188152',

          warning: '#CA7412',

          error: '#F6371E',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};

