import { appendFile } from 'node:fs/promises'
import { flavorNames, generateTheme } from '../src/generateTheme'

const themeCSSs = flavorNames.map(f =>
  `:root:has(input.theme-controller[value=${f}]:checked),[data-theme="${f}"]${JSON.stringify(generateTheme(f)).replace(/"/g, '').replace(/,/g, ';')}`,
)

await Promise.all(
  [
    ...themeCSSs.map((themeCSS, i) => {
      const flavorName = flavorNames[i]
      return appendFile(
        `./${flavorName}.css`,
        themeCSS,
        { encoding: 'utf-8' },
      )
    }),
    appendFile('./themes.css', themeCSSs.join('\n'), { encoding: 'utf-8' }),
  ],
)
