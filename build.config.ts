import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  externals: [
    'daisyui/theme',
  ],
  entries: [
    'src/legacy/index',
    'src/index',
    'src/cssPlugin'
  ],
  rollup: {
    emitCJS: true,
  },
  declaration: true,
})
