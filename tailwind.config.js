/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./app/**/*.{css,xml,html,vue,svelte,ts,tsx}'],
  darkMode: ['class', '.ns-dark'],
  theme: {
    extend: {},
  },
  plugins: [
    /**
     * A simple inline plugin that adds the ios: and android: variants
     *
     * Example usage:
     *
     *   <Label class="android:text-red-500 ios:text-blue-500" />
     *
     */
    plugin(function ({ addVariant }) {
      addVariant('android', '.ns-android &')
    })
  ],
  corePlugins: {
    preflight: false // disables browser-specific resets
  }
}

