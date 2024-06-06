import { type AccentName, type FlavorName, flavorEntries } from '@catppuccin/palette'
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

function createFlavor(theme: FlavorName, accent?: AccentName): CustomTheme {
  const palette = flavorEntries.find(([name]) => name === theme)?.[1]

  if (!palette)
    throw new Error(`Flavor ${theme} not found!`)

  const daisyTheme: Record<string, Partial<Record<typeof themeKeys[number], string>>> = {
    [theme]: {
      'color-scheme': palette.dark ? 'dark' : 'light',
      'base-100': palette.colors.base.hex,
      'primary': palette.colors.lavender.hex,
      'secondary': palette.colors.subtext1.hex,
      'accent': accent ? palette.colors[accent].hex : palette.colors.rosewater.hex,
      'neutral': palette.colors.overlay1.hex,
      'success': palette.colors.green.hex,
      'warning': palette.colors.yellow.hex,
      'error': palette.colors.red.hex,
      'info': palette.colors.blue.hex,
    },
  }
  return daisyTheme
}

export type { FlavorName, AccentName }
export default createFlavor
