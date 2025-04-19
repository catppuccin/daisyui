import type { AccentName, FlavorName, MonochromaticName } from '@catppuccin/palette'
import { flavorEntries } from '@catppuccin/palette'

const themeKeys = [
  '--animation-btn',
  '--animation-input',
  '--btn-focus-scale',
  '--rounded-badge',
  '--rounded-box',
  '--rounded-btn',
  '--tab-border',
  '--tab-radius',
  'accent',
  'accent-content',
  'base-100',
  'base-200',
  'base-300',
  'base-content',
  'color-scheme',
  'error',
  'error-content',
  'fontFamily',
  'info',
  'info-content',
  'neutral',
  'neutral-content',
  'primary',
  'primary-content',
  'secondary',
  'secondary-content',
  'success',
  'success-content',
  'warning',
  'warning-content',
] as const

(() => themeKeys)()

const defaultColorOptions: ColorOptions = {
  primary: 'lavender',
  secondary: 'surface0',
  accent: 'rosewater',
  neutral: 'overlay1',
  success: 'green',
  warning: 'yellow',
  error: 'red',
  info: 'sky',
}

interface ColorOptions {
  primary: AccentName
  secondary: AccentName | MonochromaticName
  accent: AccentName
  neutral: MonochromaticName
  success: 'green'
  warning: 'yellow'
  error: 'red'
  info: AccentName
}

type CustomColorOptions = Partial<Omit<ColorOptions, 'success' | 'warning' | 'error'>>

function getSemanticColors(options: CustomColorOptions = {}): ColorOptions {
  return { ...defaultColorOptions, ...options }
}

function createFlavor(theme: FlavorName, accent?: AccentName): any
function createFlavor(theme: FlavorName, customColors?: CustomColorOptions): any
function createFlavor(theme: FlavorName, options?: CustomColorOptions | AccentName): any {
  const palette = flavorEntries.find(([name]) => name === theme)?.[1]

  if (!palette)
    throw new Error(`Flavor ${theme} not found!`)

  let customColors: ColorOptions
  if (typeof options === 'string') {
    customColors = getSemanticColors({
      accent: options,
    })
  }
  else {
    customColors = getSemanticColors(options)
  }

  const { primary, secondary, accent, neutral, info, success, error, warning } = customColors

  const daisyTheme: Record<string, Partial<Record<typeof themeKeys[number], string>>> = {
    [theme]: {
      'color-scheme': palette.dark ? 'dark' : 'light',
      'base-100': palette.colors.base.hex,
      'base-200': palette.colors.mantle.hex,
      'base-300': palette.colors.crust.hex,
      'primary': palette.colors[primary].hex,
      'secondary': palette.colors[secondary].hex,
      'accent': palette.colors[accent].hex,
      'neutral': palette.colors[neutral].hex,
      'success': palette.colors[success].hex,
      'warning': palette.colors[warning].hex,
      'error': palette.colors[error].hex,
      'info': palette.colors[info].hex,
    },
  }
  return daisyTheme
}

export type { AccentName, FlavorName, MonochromaticName }
export default createFlavor
