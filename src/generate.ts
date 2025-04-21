import type { FlavorName } from './generateTheme'
import { appendFile } from 'node:fs/promises'
import { generateTheme } from './generateTheme'

const flavorNames = ['latte', 'frappe', 'macchiato', 'mocha'] as FlavorName[]

flavorNames.forEach((f) => {
  const fileName = `./${f}.css`
  const themeCSS = generateTheme(f)
  appendFile(fileName, `:root:has(input.theme-controller[value=${f}]:checked),[data-theme="${f}"]${JSON.stringify(themeCSS).replace(/"/g, '').replace(/,/g, ';')}`, { encoding: 'utf-8' })
})
