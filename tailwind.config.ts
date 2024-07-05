import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-main': '#DCB53F',
        'theme-bg': '#0D0D0D',
        'theme-gray': '#ABABAB'
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif']
      }
    }
  },
  plugins: []
};
export default config;
