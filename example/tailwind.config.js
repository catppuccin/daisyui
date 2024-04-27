import catppuccin from 'catppuccin-daisyui'

// eslint-disable-next-line no-console
console.log(['latte', 'frappe', 'macchiato', 'mocha'].map(theme => catppuccin(theme)))

module.exports = {
  content: ['./src/**/*.{js,ts}', 'index.html'],
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      'light',
      catppuccin('latte'),
      catppuccin('frappe'),
      catppuccin('macchiato'),
      catppuccin('mocha'),
    ],
  },
}
