import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/assets/**/*.{js,ts,jsx,tsx,mdx,png,jpg,jpeg,svg,gif}",
  ],
  theme: {
    extend: {
      colors: {
        'primary':  '#4b8b3b', //'#15803d', // green-700
        'secondary': '#2c2c2c', //'#f3f4f6', // gray-100
      },
    },
  },
  plugins: [],
}

export default config

