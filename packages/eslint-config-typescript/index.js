module.exports = {
  extends: require.resolve('@linters/eslint-config'),
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  env: {
    es6: true,
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        project: './tsconfig.json',
        // TODO: Remove this property in the future
        createDefaultProgram: true,
      },
      plugins: ['@typescript-eslint'],
      rules: {
        // TypeScript-specific rules
        'valid-jsdoc': 'off',
        'no-undef': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/array-type': [
          'error',
          {
            default: 'array',
            readonly: 'array',
          },
        ],
        '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/brace-style': 'error',
        '@typescript-eslint/consistent-type-assertions': 'error',
        '@typescript-eslint/consistent-type-definitions': [
          'error',
          'interface',
        ],
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/explicit-member-accessibility': 0,
        '@typescript-eslint/interface-name-prefix': 0,
        '@typescript-eslint/member-delimiter-style': [
          'error',
          {
            multiline: {
              delimiter: 'none',
            },
            singleline: {
              delimiter: 'semi',
            },
          },
        ],
        '@typescript-eslint/member-ordering': 0,
        '@typescript-eslint/no-array-constructor': 'error',
        '@typescript-eslint/no-dynamic-delete': 'error',
        '@typescript-eslint/no-empty-function': 'error',
        '@typescript-eslint/no-empty-interface': 'error',
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-extra-non-null-assertion': 'warn',
        '@typescript-eslint/no-extra-parens': 0,
        '@typescript-eslint/no-extraneous-class': 0,
        '@typescript-eslint/no-floating-promises': 'error',
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-inferrable-types': 'error',
        '@typescript-eslint/no-magic-numbers': 0,
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-misused-promises': 'error',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-non-null-assertion': 1,
        '@typescript-eslint/no-parameter-properties': 0,
        '@typescript-eslint/no-require-imports': 1,
        '@typescript-eslint/no-this-alias': [
          'error',
          {
            allowDestructuring: true,
          },
        ],
        '@typescript-eslint/no-type-alias': 0,
        '@typescript-eslint/no-unnecessary-condition': 0,
        '@typescript-eslint/no-unnecessary-qualifier': 'error',
        '@typescript-eslint/no-unnecessary-type-arguments': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 0,
        '@typescript-eslint/no-untyped-public-signature': 0,
        'no-use-before-define': 0,
        '@typescript-eslint/no-use-before-define': [
          'error',
          {
            functions: false,
            classes: false,
            typedefs: false,
          },
        ],
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/prefer-for-of': 'error',
        '@typescript-eslint/prefer-function-type': 'error',
        '@typescript-eslint/prefer-includes': 'error',
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        '@typescript-eslint/prefer-nullish-coalescing': 0,
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/prefer-readonly': 'error',
        '@typescript-eslint/prefer-regexp-exec': 'error',
        '@typescript-eslint/prefer-string-starts-ends-with': 'error',
        '@typescript-eslint/promise-function-async': 0,
        '@typescript-eslint/quotes': ['error', 'single', 'avoid-escape'],
        '@typescript-eslint/require-array-sort-compare': 'error',
        '@typescript-eslint/require-await': 'error',
        '@typescript-eslint/restrict-plus-operands': 'error',
        '@typescript-eslint/restrict-template-expressions': 0,
        '@typescript-eslint/semi': ['error', 'never'],
        '@typescript-eslint/space-before-function-paren': 0,
        '@typescript-eslint/triple-slash-reference': 'error',
        '@typescript-eslint/typedef': 1,
        '@typescript-eslint/type-annotation-spacing': 'error',
        '@typescript-eslint/unbound-method': 0,
        '@typescript-eslint/unified-signatures': 'error',
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'memberLike',
            modifiers: ['private'],
            format: ['camelCase'],
            leadingUnderscore: 'forbid',
          },
          {
            selector: 'variable',
            types: ['boolean'],
            format: ['PascalCase'],
            prefix: ['is', 'should', 'has', 'can', 'did', 'will', 'expected'],
          },
          {
            selector: 'typeParameter',
            format: ['PascalCase'],
            custom: {
              regex: 'T[A-Z][a-zA-Z]+$',
              match: true,
            },
          },
          {
            selector: 'interface',
            format: ['PascalCase'],
            custom: {
              regex: '^I[A-Z]',
              match: true,
            },
          },
        ],
        'no-shadow': 0,
        '@typescript-eslint/no-shadow': 2,
        '@typescript-eslint/no-unused-vars': [
          2,
          {
            vars: 'all',
            args: 'after-used',
            ignoreRestSiblings: true,
            varsIgnorePattern: '^_',
          },
        ],
      },
    },
    // Storybook
    {
      files: ['*.stories.ts'],
      rules: {
        '@typescript-eslint/require-await': 0,
      },
    },
  ],
}
