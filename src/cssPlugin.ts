import type { AccentName, FlavorName } from '@catppuccin/palette'
import daisyThemePlugin from 'daisyui/theme'
import createPlugin from 'tailwindcss/plugin'
import { flavorNames, generateTheme } from './generateTheme'

const plugin: ReturnType<typeof createPlugin.withOptions<{
  default?: FlavorName
  accent?: AccentName
  disable?: FlavorName[]
}>> = createPlugin.withOptions((opts) => {
  return (PluginAPI) => {
    flavorNames.filter(flavor => !opts?.disable?.includes(flavor))
      .forEach((flavor, idx) => {
        daisyThemePlugin({
          name: flavor,
          default: opts?.default === flavor ? true : idx === 0,
          prefersdark: flavor !== 'latte',
          ...generateTheme(flavor, opts?.accent ? { accent: opts.accent } : undefined),
        }).handler(PluginAPI)
      })
  }
})

export default plugin
