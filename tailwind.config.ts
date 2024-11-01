import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx,css}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
