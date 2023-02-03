module.exports = {
  customSyntax: '@stylelint/postcss-css-in-js',
  extends: ['@linters/stylelint-config'],
  rules: {
    'selector-type-no-unknown': null,
    'unit-disallowed-list': null,
    'no-empty-first-line': null,

    // TODO: add styled-components rules
  },
}
