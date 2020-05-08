module.exports = {
  extends: [
    '@linters/eslint-config-node',
    'prettier',
  ],
  rules: {
    'max-lines': 'warn',
  }
}
