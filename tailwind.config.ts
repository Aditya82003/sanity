import type { Config } from "tailwindcss";
import fluid, { extract, screens, fontSize } from 'fluid-tailwind'

const config: Config = {
  content:{
    files:[
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./section/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    extract
  } ,
  theme: {
    screens: {
      'mobile':'640px',
      'tablet': '768px',
      'laptop': '1024px',
      'desktop': '1440px',
      'desktopl':'1920px',
      '4k':'2560px'
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        tablet: '2rem',
        laptop: '4rem',
        desktop: '6rem',
        desktopl:'8rem',
        '4k': '20rem',
      },
    }, 
    fontSize,
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    fluid
  ],
};
export default config;
