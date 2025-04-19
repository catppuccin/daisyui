declare module 'daisyui/theme' {
  import type Plugin from 'tailwindcss/plugin'

  type WithOptionsType = ReturnType<typeof Plugin.withOptions>
  declare const themePlugin: WithOptionsType
  export default themePlugin
}
