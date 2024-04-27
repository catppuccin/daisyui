import { describe, expect, expectTypeOf, it } from 'vitest'
import type { CustomTheme } from 'daisyui'
import themes from 'daisyui/src/theming/themes'
import catppuccin from '../src'

describe('catppuccin', () => {
  it('createFlavor type is right', () => {
    expectTypeOf(catppuccin('latte')).toMatchTypeOf<CustomTheme>()
  })

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
