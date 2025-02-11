/** @type {import("prettier").Config & import("prettier-plugin-tailwindcss").PluginOptions} */
module.exports = {
  trailingComma: "all",
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: false,
  bracketSpacing: true,
  printWidth: 100,
  endOfLine: "lf",
  plugins: [
    require.resolve("prettier-plugin-tailwindcss"),
    require.resolve("prettier-plugin-organize-imports"),
  ],
  tailwindConfig: "./tailwind.config.ts",
};
