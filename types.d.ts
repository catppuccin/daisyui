declare module 'daisyui/theme' {
  import type PluginCreator from 'tailwindcss/plugin'

  const themePlugin: PluginCreator
  export default themePlugin
}
