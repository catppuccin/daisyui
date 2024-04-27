// eslint.config.js
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    markdown: false,
    ignores: ['**/node_modules/**', '**/dist/**'],
  },
)
