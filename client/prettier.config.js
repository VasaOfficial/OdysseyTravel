/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').options} */
const config = {
  plugins: ['prettier-plugin-tailwindcss'],
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 100,
  tabWidth: 2,
  semi: false,
  bracketSpacing: true,
}

export default config
