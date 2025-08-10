// import primePlugin from "tailwindcss-primeui";
import type { Config } from "tailwindcss";
// import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
  content: [
    "app.vue",
    "app/routes/**/*.{vue,js,jsx,mjs,ts,tsx}",
    "pages/**/*.{vue,js,jsx,mjs,ts,tsx}",
    "shared/**/*.{vue,js,jsx,mjs,ts,tsx}",
    "widgets/**/*.{vue,js,jsx,mjs,ts,tsx}",
  ],

  // darkMode: ["selector", '[class*="app-dark"]'],

  // plugins: [primePlugin],

  theme: {
    lineHeight: {
      "100": "1.0",
      "124": "1.24",
    },
  },
};
