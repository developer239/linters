module.exports = {
  extends: ['@linters/stylelint-config'],
  customSyntax: '@stylelint/postcss-css-in-js',
  rules: {
    // false positive
    'no-empty-first-line': null,

    // TODO: add styled-components rules
  },
}
