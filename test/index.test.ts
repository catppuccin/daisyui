import type { FlavorName } from '@catppuccin/palette'
import type { CustomTheme } from 'daisyui'
import { flavors } from '@catppuccin/palette'
import themes from 'daisyui/src/theming/themes'
import { describe, expect, expectTypeOf, it } from 'vitest'
import catppuccin from '../src'

describe('daisyui', () => {
  it('get keys', () => {
    expect(Object.values(themes).reduce<string[]>((pre, cur) => {
      return [...new Set(pre.concat(Object.keys(cur)))].sort()
    }, [])).toMatchInlineSnapshot(`
          [
            "--animation-btn",
            "--animation-input",
            "--btn-focus-scale",
            "--rounded-badge",
            "--rounded-box",
            "--rounded-btn",
            "--tab-border",
            "--tab-radius",
            "accent",
            "accent-content",
            "base-100",
            "base-200",
            "base-300",
            "base-content",
            "color-scheme",
            "error",
            "error-content",
            "fontFamily",
            "info",
            "info-content",
            "neutral",
            "neutral-content",
            "primary",
            "primary-content",
            "secondary",
            "secondary-content",
            "success",
            "success-content",
            "warning",
            "warning-content",
          ]
        `)
  })
})

describe('catppuccin', () => {
  it('createFlavor type is right', () => {
    expectTypeOf(catppuccin('latte')).toMatchTypeOf<CustomTheme>()
    expectTypeOf(catppuccin('latte', 'pink')).toMatchTypeOf<CustomTheme>()
    expectTypeOf(catppuccin('latte', {
      neutral: 'overlay2',
    })).toMatchTypeOf<CustomTheme>()
  })

  const list: FlavorName[] = Object.keys(flavors) as FlavorName[]

  it('createFlavor with no options', () => {
    list.forEach((flavor) => {
      expect(catppuccin(flavor)).toEqual({
        [flavor]: {
          'color-scheme': flavors[flavor].dark ? 'dark' : 'light',
          'base-100': flavors[flavor].colors.base.hex,
          'primary': flavors[flavor].colors.lavender.hex,
          'secondary': flavors[flavor].colors.subtext1.hex,
          'accent': flavors[flavor].colors.rosewater.hex,
          'neutral': flavors[flavor].colors.overlay1.hex,
          'success': flavors[flavor].colors.green.hex,
          'warning': flavors[flavor].colors.yellow.hex,
          'error': flavors[flavor].colors.red.hex,
          'info': flavors[flavor].colors.blue.hex,
        },
      })
    })
  })

  it('createFlavor with accent color', () => {
    list.forEach((flavor) => {
      expect(catppuccin(flavor, 'peach')).toEqual({
        [flavor]: {
          'color-scheme': flavors[flavor].dark ? 'dark' : 'light',
          'base-100': flavors[flavor].colors.base.hex,
          'primary': flavors[flavor].colors.lavender.hex,
          'secondary': flavors[flavor].colors.subtext1.hex,
          'accent': flavors[flavor].colors.peach.hex,
          'neutral': flavors[flavor].colors.overlay1.hex,
          'success': flavors[flavor].colors.green.hex,
          'warning': flavors[flavor].colors.yellow.hex,
          'error': flavors[flavor].colors.red.hex,
          'info': flavors[flavor].colors.blue.hex,
        },
      })
    })
  })

  it('createFlavor with some custom color options', () => {
    list.forEach((flavor) => {
      expect(catppuccin(flavor, {
        neutral: 'overlay0',
      })).toEqual({
        [flavor]: {
          'color-scheme': flavors[flavor].dark ? 'dark' : 'light',
          'base-100': flavors[flavor].colors.base.hex,
          'primary': flavors[flavor].colors.lavender.hex,
          'secondary': flavors[flavor].colors.subtext1.hex,
          'accent': flavors[flavor].colors.rosewater.hex,
          'neutral': flavors[flavor].colors.overlay0.hex,
          'success': flavors[flavor].colors.green.hex,
          'warning': flavors[flavor].colors.yellow.hex,
          'error': flavors[flavor].colors.red.hex,
          'info': flavors[flavor].colors.blue.hex,
        },
      })
    })
  })

  it('createFlavor with more custom color options', () => {
    list.forEach((flavor) => {
      expect(catppuccin(flavor, {
        accent: 'flamingo',
        info: 'teal',
        neutral: 'overlay2',
        primary: 'blue',
        secondary: 'crust',
      })).toEqual({
        [flavor]: {
          'color-scheme': flavors[flavor].dark ? 'dark' : 'light',
          'base-100': flavors[flavor].colors.base.hex,
          'primary': flavors[flavor].colors.blue.hex,
          'secondary': flavors[flavor].colors.crust.hex,
          'accent': flavors[flavor].colors.flamingo.hex,
          'neutral': flavors[flavor].colors.overlay2.hex,
          'success': flavors[flavor].colors.green.hex,
          'warning': flavors[flavor].colors.yellow.hex,
          'error': flavors[flavor].colors.red.hex,
          'info': flavors[flavor].colors.teal.hex,
        },
      })
    })
  })
})
