import type { AccentName, ColorName, FlavorName, MonochromaticName } from '@catppuccin/palette'
import { flavors } from '@catppuccin/palette'

export const flavorNames = ['latte', 'frappe', 'macchiato', 'mocha'] satisfies FlavorName[]

interface ColorOptions {
  'primary': AccentName
  'primary-content': MonochromaticName
  'secondary': AccentName | MonochromaticName
  'secondary-content': MonochromaticName
  'accent': AccentName
  'accent-content': MonochromaticName
  'neutral': MonochromaticName
  'neutral-content': MonochromaticName
  'success': 'green'
  'success-content': MonochromaticName
  'warning': 'yellow'
  'warning-content': MonochromaticName
  'error': 'red'
  'error-content': MonochromaticName
  'info': AccentName
  'info-content': MonochromaticName
  'base-100': MonochromaticName
  'base-200': MonochromaticName
  'base-300': MonochromaticName
  'base-content': MonochromaticName
}

type Radius = '0rem' | '0.25rem' | '0.5rem' | '1rem' | '2rem'
type Sizes = '0.1875rem' | '0.21875rem' | '0.25rem' | '0.28125rem' | '0.3125rem'
type Border = '0.5px' | '1px' | '1.5px' | '2px'

interface OtherOptions {
  '--radius-selector': Radius
  '--radius-field': Radius
  '--radius-box': Radius
  '--size-field': Sizes
  '--size-selector': Sizes
  '--border': Border
  '--depth': boolean
  '--noise': boolean
}

type Theme = Record<`--color-${keyof ColorOptions}` | keyof OtherOptions, string> & {
  'color-scheme': 'dark' | 'light'
}

type ThemeOptions = ColorOptions & OtherOptions

const defaultThemeOption: ThemeOptions = {
  'primary': 'lavender',
  'primary-content': 'mantle',
  'secondary': 'surface0',
  'secondary-content': 'text',
  'accent': 'rosewater',
  'accent-content': 'mantle',
  'neutral': 'overlay1',
  'neutral-content': 'mantle',
  'success': 'green',
  'success-content': 'base',
  'warning': 'yellow',
  'warning-content': 'base',
  'error': 'red',
  'error-content': 'base',
  'info': 'sky',
  'info-content': 'mantle',
  'base-100': 'base',
  'base-200': 'mantle',
  'base-300': 'crust',
  'base-content': 'text',
  '--radius-selector': '0.25rem',
  '--radius-field': '0.5rem',
  '--radius-box': '0.5rem',
  '--size-field': '0.25rem',
  '--size-selector': '0.25rem',
  '--border': '1px',
  '--depth': true,
  '--noise': false,
}

type CustomThemeOptions = Partial<Omit<ThemeOptions, 'success' | 'warning' | 'error'>>

export function generateTheme(themeName: FlavorName, themeOptions: CustomThemeOptions = {}) {
  const options = {
    ...defaultThemeOption,
    ...themeOptions,
  } satisfies ThemeOptions

  const entries = Object.entries(options)
  const theme: Record<string, string> = {
    'color-scheme': flavors[themeName].dark ? 'dark' : 'light',
  }

  for (const [key, value] of entries) {
    if (!key.startsWith('--')) {
      const { l, c, h } = flavors[themeName].colors[value as ColorName].oklch
      theme[`--color-${key}`] = `oklch(${l} ${c} ${h})`
    }
    else {
      theme[key] = typeof value === 'boolean' ? (value ? '1' : '0') : value
    }
  }

  return theme as Theme
}

export type { CustomThemeOptions, Theme }
