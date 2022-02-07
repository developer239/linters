module.exports = {
  files: ['*.component.html'],
  plugins: ['@angular-eslint/template'],
  parser: '@angular-eslint/template-parser',
  rules: {
    '@angular-eslint/template/accessibility-alt-text': 1,
    '@angular-eslint/template/accessibility-elements-content': 1,
    '@angular-eslint/template/accessibility-label-has-associated-control': 0,
    '@angular-eslint/template/accessibility-table-scope': 1,
    '@angular-eslint/template/accessibility-valid-aria': 1,
    '@angular-eslint/template/banana-in-box': 2,
    '@angular-eslint/template/click-events-have-key-events': 2,
    '@angular-eslint/template/conditional-complexity': 2,
    '@angular-eslint/template/cyclomatic-complexity': 2,
    '@angular-eslint/template/eqeqeq': 2,
    '@angular-eslint/template/i18n': 0,
    '@angular-eslint/template/mouse-events-have-key-events': 2,
    '@angular-eslint/template/no-any': 2,
    '@angular-eslint/template/no-autofocus': 2,
    '@angular-eslint/template/no-call-expression': 2,
    '@angular-eslint/template/no-distracting-elements': 2,
    '@angular-eslint/template/no-duplicate-attributes': 2,
    '@angular-eslint/template/no-negated-async': 1,
    '@angular-eslint/template/no-positive-tabindex': 1,
    '@angular-eslint/template/use-track-by-function': 2,
  },
}
