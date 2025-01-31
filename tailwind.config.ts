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
    screens :{
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      "2xl": "1440px",
      "3xl" : "1920px"
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem'
      }
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
