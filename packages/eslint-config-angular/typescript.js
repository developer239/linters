module.exports = {
  files: ['*.ts'],
  parserOptions: {
    project: ['tsconfig.*?.json'],
    createDefaultProgram: true,
  },
  extends: [
    'plugin:@angular-eslint/recommended',
    '@linters/eslint-config-typescript',
  ],
  rules: {
    '@typescript-eslint/explicit-member-accessibility': [
      2,
      {
        accessibility: 'explicit',
        overrides: {
          constructors: 'off',
        },
      },
    ],
  },
}
