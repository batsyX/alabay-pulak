import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin';


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'text-gradient': 'linear-gradient(180deg, #FFF280 0%, #7EFF5E 100%)',
      },
      fontFamily:{
        'cheeseBurga': ['cheeseBurga', 'sans-serif'],
        'montserrat': ["Montserrat", 'sans-serif'],
        'baronKuffner':['baronKuffner', 'sans-serif'],
        'bebasNeue':['bebasNeue', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.bg-clip-text': {
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
        },
        '.text-transparent': {
          'color': 'transparent',
          '-webkit-text-fill-color': 'transparent',
        },
        '.text-stroke': {
          '-webkit-text-stroke': '4px #0F1B29', 
        },
        '.text-stroke-2': {
          '-webkit-text-stroke': '6px #0F1B29', 
        },
        '.text-stroke-white': {
          '-webkit-text-stroke': '1px white', 
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
export default config;
