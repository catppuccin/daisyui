import { createCatppuccinPlugin } from '@catppuccin/daisyui'

export default createCatppuccinPlugin('mocha', {
  '--radius-selector': '0.25rem',
  '--radius-field': '0.5rem',
  '--radius-box': '0.5rem',
  '--size-field': '0.25rem',
  '--size-selector': '0.25rem',
  '--border': '1px',
  '--depth': true,
  '--noise': false,
}, {
  prefersdark: true,
})
