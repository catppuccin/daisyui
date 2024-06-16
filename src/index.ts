import type { AccentName, FlavorName, MonochromaticName } from '@catppuccin/palette'
import { flavorEntries } from '@catppuccin/palette'
import type { CustomTheme } from 'daisyui'

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

const defaultColorOptions: DefaultColorOptions = {
  primary: 'lavender',
  secondary: 'subtext1',
  accent: 'rosewater',
  neutral: 'overlay1',
  success: 'green',
  warning: 'yellow',
  error: 'red',
  info: 'blue',
}

interface DefaultColorOptions {
  primary: AccentName | MonochromaticName
  secondary: AccentName | MonochromaticName
  accent: AccentName | MonochromaticName
  neutral: AccentName | MonochromaticName
  success: AccentName | MonochromaticName
  warning: AccentName | MonochromaticName
  error: AccentName | MonochromaticName
  info: AccentName | MonochromaticName
}

type CustomColorOptions = Partial<typeof defaultColorOptions>

function getSemanticColors(options: CustomColorOptions = {}): typeof defaultColorOptions {
  return { ...defaultColorOptions, ...options }
}

function createFlavor(theme: FlavorName, customColors?: CustomColorOptions): CustomTheme {
  const palette = flavorEntries.find(([name]) => name === theme)?.[1]

  if (!palette)
    throw new Error(`Flavor ${theme} not found!`)

  const { primary, secondary, accent, neutral, success, warning, error, info } = getSemanticColors(customColors)

  const daisyTheme: Record<string, Partial<Record<typeof themeKeys[number], string>>> = {
    [theme]: {
      'color-scheme': palette.dark ? 'dark' : 'light',
      'base-100': palette.colors.base.hex,
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

export type { FlavorName, AccentName, MonochromaticName }
export default createFlavor
