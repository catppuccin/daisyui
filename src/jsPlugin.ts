import type { AccentName, FlavorName } from '@catppuccin/palette'
import type { CustomThemeOptions, Theme } from './generateTheme'

import daisyThemePlugin from 'daisyui/theme'
import plugin from 'tailwindcss/plugin'
import { generateTheme } from './generateTheme'

type WithOptionsType = ReturnType<typeof plugin.withOptions>

interface DaisyOptions {
  default?: boolean
  prefersdark?: boolean
  root?: string
}

function createCatppuccinPlugin(theme: FlavorName, accent?: AccentName, daisyOptions?: DaisyOptions): WithOptionsType
function createCatppuccinPlugin(theme: FlavorName, customColors?: CustomThemeOptions, daisyOptions?: DaisyOptions): WithOptionsType
function createCatppuccinPlugin(themeName: FlavorName, options?: CustomThemeOptions | AccentName, daisyOptions = {}): WithOptionsType {
  let theme: Theme

  if (typeof options === 'string') {
    theme = generateTheme(themeName, {
      accent: options,
    })
  }
  else {
    theme = generateTheme(themeName, options)
  }

  return plugin.withOptions(() => {
    return (pluginAPI) => {
      daisyThemePlugin({
        name: themeName,
        ...daisyOptions,
        ...theme,
      }).handler(pluginAPI)
    }
  })
}

export { createCatppuccinPlugin }
