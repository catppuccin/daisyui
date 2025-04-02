import type { AccentName, ColorName, FlavorName, MonochromaticName } from '@catppuccin/palette'
import type themes from 'daisyui/theme/object'
import { flavors } from '@catppuccin/palette'
import daisyuiThemePlugin from 'daisyui/theme'
import plugin from 'tailwindcss/plugin'

interface DaisyuiOptions {
  'isDefault'?: boolean
  'prefersdark'?: boolean
  'color-scheme'?: string
  'root'?: string
}

type Theme = typeof themes[keyof typeof themes]

const defaultTheme: Theme = {
  // Colors
  'color-scheme': 'normal',
  '--color-primary': 'lavender',
  '--color-primary-content': 'text',
  '--color-secondary': 'subtext1',
  '--color-secondary-content': 'text',
  '--color-accent': 'rosewater',
  '--color-accent-content': 'text',
  '--color-neutral': 'overlay1',
  '--color-neutral-content': 'text',
  '--color-success': 'green',
  '--color-success-content': 'text',
  '--color-warning': 'yellow',
  '--color-warning-content': 'text',
  '--color-error': 'red',
  '--color-error-content': 'text',
  '--color-info': 'blue',
  '--color-info-content': 'text',
  '--color-base-100': 'base',
  '--color-base-200': 'mantle',
  '--color-base-300': 'crust',
  '--color-base-content': 'subtext1',
  // Radius
  '--radius-selector': '0.75rem',
  '--radius-field': '0.5rem',
  '--radius-box': '1rem',
  // Sizes
  '--size-field': '0.25rem',
  '--size-selector': '0.5rem',
  '--border': '1px',
  // Effects
  '--depth': '1',
  '--noise': '0',
}

interface ThemeOptions {
  [key: string]: ColorName
  primary: AccentName
  secondary: AccentName | MonochromaticName
  accent: AccentName
  neutral: MonochromaticName
  success: 'green'
  warning: 'yellow'
  error: 'red'
  info: AccentName
}

type CustomThemeOptions = Partial<Omit<ThemeOptions, 'success' | 'warning' | 'error'>> & Record<string, string>

function mergeTheme(themeName: FlavorName, options: CustomThemeOptions = {}) {
  const theme: Theme = {
    ...defaultTheme,
    ...Object.keys(options).reduce<Record<string, string>>((acc, key) => {
      acc[`--color-${key}`] = flavors[themeName].colors[options[key]].hex
      return acc
    }, {}),
  }
  return theme
}

function createCatppuccinPlugin(theme: FlavorName, accent?: AccentName, daisyuiOptions?: DaisyuiOptions): any
function createCatppuccinPlugin(theme: FlavorName, customColors?: CustomThemeOptions, daisyuiOptions?: DaisyuiOptions): any
function createCatppuccinPlugin(themeName: FlavorName, options?: CustomThemeOptions | AccentName, daisyuiOptions = {}): any {
  let theme: Theme

  if (typeof options === 'string') {
    theme = mergeTheme(themeName, {
      accent: options,
    })
  }
  else {
    theme = mergeTheme(themeName, options)
  }

  return plugin.withOptions(() => {
    return ({ addBase }) => {
      daisyuiThemePlugin({
        name: themeName,
        ...daisyuiOptions,
        ...theme,
      })({ addBase })
    }
  })
}

export type { AccentName, FlavorName, MonochromaticName }
export { createCatppuccinPlugin, createCatppuccinPlugin as default }
