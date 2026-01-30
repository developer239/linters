import vitest from '@vitest/eslint-plugin'

const vitestRules = {
  'vitest/consistent-test-filename': 'off',
  'vitest/consistent-test-it': ['error', { fn: 'it', withinDescribe: 'it' }],
  'vitest/expect-expect': 'error',
  'vitest/max-expects': 'off',
  'vitest/max-nested-describe': 'off',
  'vitest/no-alias-methods': 'error',
  'vitest/no-commented-out-tests': 'error',
  'vitest/no-conditional-expect': 'error',
  'vitest/no-conditional-in-test': 'error',
  'vitest/no-conditional-tests': 'error',
  'vitest/no-disabled-tests': 'error',
  'vitest/no-done-callback': 'error',
  'vitest/no-duplicate-hooks': 'error',
  'vitest/no-focused-tests': 'error',
  'vitest/no-hooks': 'off',
  'vitest/no-identical-title': 'error',
  'vitest/no-import-node-test': 'error',
  'vitest/no-interpolation-in-snapshots': 'error',
  'vitest/no-large-snapshots': [
    'error',
    {
      maxSize: 50,
      inlineMaxSize: 0,
    },
  ],
  'vitest/no-mocks-import': 'error',
  'vitest/no-restricted-matchers': 'error',
  'vitest/no-restricted-vi-methods': 'error',
  'vitest/no-standalone-expect': 'error',
  'vitest/no-test-prefixes': 'error',
  'vitest/no-test-return-statement': 'error',
  'vitest/prefer-called-with': 'error',
  'vitest/prefer-comparison-matcher': 'error',
  'vitest/prefer-each': 'error',
  'vitest/prefer-equality-matcher': 'error',
  'vitest/prefer-expect-assertions': 'off',
  'vitest/prefer-expect-resolves': 'error',
  'vitest/prefer-hooks-in-order': 'error',
  'vitest/prefer-hooks-on-top': 'off',
  'vitest/prefer-lowercase-title': 'off',
  'vitest/prefer-mock-promise-shorthand': 'error',
  'vitest/prefer-snapshot-hint': 'off',
  'vitest/prefer-spy-on': 'error',
  'vitest/prefer-strict-equal': 'error',
  'vitest/prefer-to-be': 'error',
  'vitest/prefer-to-be-falsy': 'error',
  'vitest/prefer-to-be-object': 'error',
  'vitest/prefer-to-be-truthy': 'error',
  'vitest/prefer-to-contain': 'error',
  'vitest/prefer-to-have-length': 'error',
  'vitest/prefer-todo': 'error',
  'vitest/require-hook': 'off',
  'vitest/require-local-test-context-for-concurrent-snapshots': 'off',
  'vitest/require-to-throw-message': 'error',
  'vitest/require-top-level-describe': 'error',
  'vitest/valid-describe-callback': 'error',
  'vitest/valid-expect': 'error',
  'vitest/valid-title': 'error',
}

const vitestConfig = [
  {
    files: ['**/*.{spec,test}.{js,ts,jsx,tsx}', '**/_tests/**/*.{js,ts,jsx,tsx}', '**/testing/**/*.{js,ts,jsx,tsx}'],
    plugins: {
      vitest,
    },
    rules: vitestRules,
    languageOptions: {
      globals: {
        ...vitest.environments.env.globals,
      },
    },
  },
]

export default vitestConfig
export { vitestRules }
