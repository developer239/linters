import nodeConfig from '@linters/eslint-config-node'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
  ...nodeConfig,
  eslintConfigPrettier,
  {
    rules: {
      'max-lines': 'off',
      'import-x/no-default-export': 'off',
      'id-length': 'off'
    },
  },
  {
    ignores: ['**/node_modules/**'],
  },
]
