import baseConfig, { baseRules } from '@linters/eslint-config'
import tseslint from 'typescript-eslint'

const typescriptRules = {
  // Disable base rules that are handled by TypeScript
  'no-undef': 'off',
  'no-unused-vars': 'off',
  'no-shadow': 'off',
  'no-use-before-define': 'off',
  'no-redeclare': 'off',
  'no-loop-func': 'off',

  //
  // TypeScript-specific rules
  //

  '@typescript-eslint/adjacent-overload-signatures': 'error',
  '@typescript-eslint/array-type': [
    'error',
    {
      default: 'array',
      readonly: 'array',
    },
  ],
  '@typescript-eslint/await-thenable': 'error',
  '@typescript-eslint/consistent-type-assertions': 'error',
  '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
  '@typescript-eslint/explicit-function-return-type': [
    'error',
    {
      allowExpressions: true,
      allowTypedFunctionExpressions: true,
      allowHigherOrderFunctions: true,
      allowDirectConstAssertionInArrowFunctions: true,
      allowConciseArrowFunctionExpressionsStartingWithVoid: false,
    },
  ],
  '@typescript-eslint/explicit-member-accessibility': [
    'error',
    {
      accessibility: 'explicit',
      overrides: {
        constructors: 'no-public',
      },
    },
  ],
  '@typescript-eslint/member-ordering': 'off',
  '@typescript-eslint/no-array-constructor': 'error',
  '@typescript-eslint/no-dynamic-delete': 'error',
  '@typescript-eslint/no-empty-function': 'error',
  '@typescript-eslint/no-empty-object-type': 'error',
  '@typescript-eslint/no-explicit-any': 'off',
  '@typescript-eslint/no-extra-non-null-assertion': 'error',
  '@typescript-eslint/no-extraneous-class': 'off',
  '@typescript-eslint/no-floating-promises': 'error',
  '@typescript-eslint/no-for-in-array': 'error',
  '@typescript-eslint/no-inferrable-types': 'error',
  '@typescript-eslint/no-misused-new': 'error',
  '@typescript-eslint/no-misused-promises': 'error',
  '@typescript-eslint/no-namespace': 'error',
  '@typescript-eslint/no-non-null-assertion': 'warn',
  '@typescript-eslint/no-require-imports': 'error',
  '@typescript-eslint/no-this-alias': [
    'error',
    {
      allowDestructuring: true,
    },
  ],
  '@typescript-eslint/no-unnecessary-qualifier': 'error',
  '@typescript-eslint/no-unnecessary-type-arguments': 'error',
  '@typescript-eslint/no-unnecessary-type-assertion': 'error',
  '@typescript-eslint/no-use-before-define': [
    'error',
    {
      functions: false,
      classes: false,
      typedefs: false,
    },
  ],
  '@typescript-eslint/no-useless-constructor': 'error',
  '@typescript-eslint/prefer-for-of': 'error',
  '@typescript-eslint/prefer-function-type': 'error',
  '@typescript-eslint/prefer-includes': 'error',
  '@typescript-eslint/prefer-namespace-keyword': 'error',
  '@typescript-eslint/prefer-nullish-coalescing': 'off',
  '@typescript-eslint/prefer-optional-chain': 'error',
  '@typescript-eslint/prefer-readonly': 'error',
  '@typescript-eslint/prefer-regexp-exec': 'error',
  '@typescript-eslint/prefer-string-starts-ends-with': 'error',
  '@typescript-eslint/promise-function-async': 'off',
  '@typescript-eslint/require-array-sort-compare': 'error',
  '@typescript-eslint/require-await': 'error',
  '@typescript-eslint/restrict-plus-operands': 'error',
  '@typescript-eslint/restrict-template-expressions': 'off',
  '@typescript-eslint/triple-slash-reference': 'error',
  '@typescript-eslint/unbound-method': 'off',
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
  '@typescript-eslint/no-shadow': 'error',
  '@typescript-eslint/no-unused-vars': [
    'error',
    {
      vars: 'all',
      args: 'after-used',
      ignoreRestSiblings: true,
      varsIgnorePattern: '^_',
    },
  ],
  '@typescript-eslint/return-await': ['error', 'in-try-catch'],
  '@typescript-eslint/parameter-properties': 'off',

  //
  // New rules for better type safety and AI code quality
  //

  // Catches dead code and impossible conditions
  '@typescript-eslint/no-unnecessary-condition': 'error',
  // Prevents void misuse
  '@typescript-eslint/no-confusing-void-expression': [
    'error',
    {
      ignoreArrowShorthand: true,
      ignoreVoidOperator: true,
    },
  ],
  // Forces explicit boolean checks
  '@typescript-eslint/strict-boolean-expressions': [
    'error',
    {
      allowString: false,
      allowNumber: false,
      allowNullableObject: true,
      allowNullableBoolean: true,
      allowNullableString: false,
      allowNullableNumber: false,
      allowAny: false,
    },
  ],
  // Bans Function type
  '@typescript-eslint/no-unsafe-function-type': 'error',
  // Bans String, Number, Boolean wrapper types
  '@typescript-eslint/no-wrapper-object-types': 'error',
  // Catches redundant union types like string | any
  '@typescript-eslint/no-redundant-type-constituents': 'error',
  // Removes unnecessary empty exports
  '@typescript-eslint/no-useless-empty-export': 'error',
  // Only throw Error objects
  '@typescript-eslint/only-throw-error': 'error',
  // Removes unnecessary === true comparisons
  '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
  // Disallow void outside return types
  '@typescript-eslint/no-invalid-void-type': 'error',
  // Catches redundant a! ?? b
  '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
  // Ensure all enum/union cases handled in switch
  '@typescript-eslint/switch-exhaustiveness-check': 'error',
  // Disallow any in function arguments
  '@typescript-eslint/no-unsafe-argument': 'error',
  // Disallow assigning any
  '@typescript-eslint/no-unsafe-assignment': 'error',
  // Disallow calling any
  '@typescript-eslint/no-unsafe-call': 'error',
  // Disallow member access on any
  '@typescript-eslint/no-unsafe-member-access': 'error',
  // Disallow returning any
  '@typescript-eslint/no-unsafe-return': 'error',
  // Configurable type banning
  '@typescript-eslint/no-restricted-types': 'error',
}

const typescriptConfig = [
  ...baseConfig,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
      },
    },
    settings: {
      'import-x/resolver': {
        typescript: {},
      },
    },
    rules: typescriptRules,
  },
  // Storybook override
  {
    files: ['**/*.stories.{ts,tsx}'],
    rules: {
      '@typescript-eslint/require-await': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
    },
  },
  // Test files override
  {
    files: ['**/*.{spec,test}.{ts,tsx}', '**/_tests/**/*.{ts,tsx}', '**/testing/**/*.{ts,tsx}'],
    rules: {
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-member-accessibility': 'off',
    },
  },
]

export default typescriptConfig
export { typescriptRules }
