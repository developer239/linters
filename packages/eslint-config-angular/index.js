module.exports = {
  extends: require.resolve('@linters/eslint-config-typescript'),
  env: {
    browser: true,
    es6: true,
  },
  plugins: [
    '@angular-eslint'
  ],
  rules: {
    '@typescript-eslint/array-type': 'off',
    '@angular-eslint/component-class-suffix': 'error',
    '@angular-eslint/contextual-lifecycle': 'error',
    '@angular-eslint/directive-class-suffix': 'error',
    '@angular-eslint/directive-selector': [
      'error',
      {
        type: 'attribute',
        prefix: 'app',
        style: 'camelCase'
      },
    ],
    '@angular-eslint/component-selector': [
      'error',
      {
        type: 'element',
        prefix: 'app',
        style: 'kebab-case'
      },
    ],
    '@angular-eslint/no-conflicting-lifecycle': 'error',
    '@angular-eslint/no-host-metadata-property': 'error',
    '@angular-eslint/no-input-rename': 'error',
    '@angular-eslint/no-inputs-metadata-property': 'error',
    '@angular-eslint/no-output-native': 'error',
    '@angular-eslint/no-output-on-prefix': 'error',
    '@angular-eslint/no-output-rename': 'error',
    '@angular-eslint/no-outputs-metadata-property': 'error',
    '@angular-eslint/use-lifecycle-interface': 'error',
    '@angular-eslint/use-pipe-transform-interface': 'error',
  },
  overrides: [
    {
      files: ['*.component.html'],
      parser: '@angular-eslint/template-parser',
      plugins: ['@angular-eslint/template'],
      rules: {
        '@angular-eslint/template/banana-in-a-box': 'error',
        '@angular-eslint/template/no-negated-async': 'error',
      },
    },
    {
      files: ['*.component.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
      },
      plugins: ['@angular-eslint/template'],
      processor: '@angular-eslint/template/extract-inline-html',
    },
  ],
}
