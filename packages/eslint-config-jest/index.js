module.exports = {
  extends: ['plugin:jest-formatting/strict'],
  plugins: ['jest', 'jest-formatting'],
  overrides: [
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      env: {
        'jest/globals': true,
      },
    },
    // Don't expect expects in cypress
    {
      files: ['cypress/**/*.{ts,tsx}'],
      rules: {
        'jest/expect-expect': 0,
      },
    },
  ],
  rules: {
    //
    // Recommended
    //

    'jest/expect-expect': 'error',
    'jest/no-disabled-tests': 'error',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/no-jasmine-globals': 'error',
    'jest/no-mocks-import': 0,
    'jest/no-done-callback': 0,
    'jest/no-test-prefixes': 'error',
    'jest/valid-describe-callback': 'error',
    'jest/valid-expect-in-promise': 'error',
    'jest/valid-expect': 'error',

    //
    // Optional
    //

    'jest/consistent-test-it': 'error',
    'jest/prefer-lowercase-title': 0,
    'jest/no-hooks': 0,
    'jest/no-large-snapshots': 'error',
    'jest/no-test-return-statement': 'error',
    'jest/no-truthy-falsy': 0,
    'jest/prefer-called-with': 1,
    'jest/prefer-expect-assertions': 0,
    'jest/prefer-inline-snapshots': 0,
    'jest/prefer-spy-on': 0,
    'jest/prefer-strict-equal': 'error',
    'jest/prefer-todo': 'error',

    //
    // Style
    //

    'jest/no-alias-methods': 'error',
    'jest/prefer-to-contain': 'error',
    'jest/prefer-to-have-length': 'error',
  },
}
