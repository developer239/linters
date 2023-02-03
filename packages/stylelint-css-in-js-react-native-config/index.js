module.exports = {
  customSyntax: '@stylelint/postcss-css-in-js',
  extends: ['@linters/stylelint-css-in-js-config'],
  rules: {
    'selector-type-no-unknown': null,
    'unit-disallowed-list': null,

    // TODO: add styled-components rules
  },
}
