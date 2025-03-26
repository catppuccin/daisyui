const { appendFile } = require('node:fs/promises')
const { flavors } = require('@catppuccin/palette')
const daisyFuncs = require('daisyui/src/theming/functions.js')

const defaultColorConfig = Object.fromEntries(
  Object.entries(flavors).map(([name, flavor]) => {
    return [
      name,
      {
        'color-scheme': flavor.dark ? 'dark' : 'light',
        'base-100': flavor.colors.base.hex,
        'primary': flavor.colors.lavender.hex,
        'secondary': flavor.colors.subtext1.hex,
        'accent': flavor.colors.rosewater.hex,
        'neutral': flavor.colors.overlay1.hex,
        'success': flavor.colors.green.hex,
        'warning': flavor.colors.yellow.hex,
        'error': flavor.colors.red.hex,
        'info': flavor.colors.blue.hex,
      },
    ]
  }),
)

Object.entries(defaultColorConfig).forEach(([name, colors]) => {
  const style = JSON.stringify(daisyFuncs.convertColorFormat(colors)).replace(/"/g, '').replace(/,/g, ';')
  appendFile('dist/catppuccin.css', `[data-theme=${name}] ${style}\n`)
})
