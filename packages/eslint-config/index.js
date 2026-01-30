import js from '@eslint/js'
import importX from 'eslint-plugin-import-x'
import globals from 'globals'

const baseRules = {
  //
  // Possible errors
  //

  'for-direction': 'error',
  'getter-return': 'error',
  'no-async-promise-executor': 'error',
  'no-await-in-loop': 'error',
  'no-compare-neg-zero': 'error',
  'no-cond-assign': 'error',
  'no-console': 'error',
  'no-constant-condition': 'error',
  'no-control-regex': 'error',
  'no-debugger': 'error',
  'no-dupe-args': 'error',
  'no-dupe-else-if': 'error',
  'no-dupe-keys': 'error',
  'no-duplicate-case': 'off',
  'no-empty': 'error',
  'no-empty-character-class': 'error',
  'no-ex-assign': 'error',
  'no-extra-boolean-cast': 'error',
  'no-extra-parens': 'off',
  'no-func-assign': 'error',
  'no-import-assign': 'error',
  'no-inner-declarations': ['error', 'both'],
  'no-invalid-regexp': 'error',
  'no-irregular-whitespace': 'error',
  'no-misleading-character-class': 'error',
  'no-obj-calls': 'error',
  'no-prototype-builtins': 'off',
  'no-regex-spaces': 'error',
  'no-setter-return': 'error',
  'no-sparse-arrays': 'error',
  'no-template-curly-in-string': 'error',
  'no-unexpected-multiline': 'error',
  'no-unreachable': 'error',
  'no-unsafe-finally': 'error',
  'no-unsafe-negation': 'error',
  'require-atomic-updates': 'warn',
  'use-isnan': 'error',
  'valid-typeof': 'error',

  //
  // Best Practices
  //

  'accessor-pairs': 'error',
  'array-callback-return': 'error',
  'block-scoped-var': 'error',
  'class-methods-use-this': 'off',
  'complexity': ['error', 10],
  'consistent-return': 'warn',
  'curly': 'error',
  'default-case': 'warn',
  'default-param-last': 'warn',
  'dot-notation': 'error',
  'eqeqeq': 'error',
  'grouped-accessor-pairs': 'error',
  'guard-for-in': 'error',
  'max-classes-per-file': 'off',
  'no-alert': 'error',
  'no-caller': 'error',
  'no-case-declarations': 'error',
  'no-constructor-return': 'error',
  'no-div-regex': 'error',
  'no-else-return': 'error',
  'no-empty-function': 'off',
  'no-empty-pattern': 'error',
  'no-eq-null': 'error',
  'no-eval': 'error',
  'no-extend-native': 'error',
  'no-extra-bind': 'error',
  'no-extra-label': 'error',
  'no-fallthrough': 'error',
  'no-global-assign': 'error',
  'no-implicit-coercion': 'error',
  'no-implicit-globals': 'error',
  'no-implied-eval': 'error',
  'no-invalid-this': 'error',
  'no-iterator': 'error',
  'no-labels': 'error',
  'no-lone-blocks': 'error',
  'no-loop-func': 'error',
  'no-new': 'off',
  'no-new-func': 'error',
  'no-new-wrappers': 'error',
  'no-octal': 'error',
  'no-octal-escape': 'error',
  'no-param-reassign': 'error',
  'no-proto': 'error',
  'no-redeclare': 'error',
  'no-return-assign': 'error',
  'no-script-url': 'error',
  'no-self-assign': 'error',
  'no-self-compare': 'error',
  'no-sequences': 'error',
  'no-throw-literal': 'error',
  'no-unmodified-loop-condition': 'error',
  'no-unused-expressions': [
    'error',
    {
      allowShortCircuit: true,
      allowTernary: true,
    },
  ],
  'no-unused-labels': 'error',
  'no-useless-call': 'error',
  'no-useless-catch': 'error',
  'no-useless-concat': 'error',
  'no-useless-escape': 'error',
  'no-useless-return': 'error',
  'no-void': 'warn',
  'no-with': 'error',
  'prefer-named-capture-group': 'warn',
  'prefer-promise-reject-errors': 'error',
  'prefer-regex-literals': 'warn',
  'radix': 'error',
  'require-await': 'error',
  'require-unicode-regexp': 'error',
  'vars-on-top': 'error',
  'yoda': 'error',

  //
  // Variables
  //

  'init-declarations': 'off',
  'no-delete-var': 'error',
  'no-label-var': 'error',
  'no-shadow': 'error',
  'no-shadow-restricted-names': 'error',
  'no-undef': [
    'error',
    {
      typeof: true,
    },
  ],
  'no-undefined': 'off',
  'no-unused-vars': 'off',
  'no-use-before-define': [
    'error',
    {
      functions: false,
      classes: false,
    },
  ],

  //
  // Stylistic Issues (keeping non-formatting rules only)
  //

  'camelcase': 'warn',
  'capitalized-comments': 'off',
  'consistent-this': 'error',
  'func-name-matching': 'error',
  'func-names': 'error',
  'func-style': [
    'error',
    'declaration',
    {
      allowArrowFunctions: true,
    },
  ],
  'id-length': [
    'error',
    {
      min: 2,
      max: 40,
      exceptions: ['i', 'R', '_', '__'],
    },
  ],
  'max-depth': ['error', 4],
  'max-lines': 'off',
  'max-lines-per-function': 'off',
  'max-nested-callbacks': ['error', 6],
  'max-params': ['error', 5],
  'max-statements-per-line': 'error',
  'new-cap': 'off',
  'no-bitwise': 'error',
  'no-lonely-if': 'error',
  'no-multi-assign': 'error',
  'no-negated-condition': 'error',
  'no-nested-ternary': 'warn',
  'no-plusplus': 'error',
  'no-underscore-dangle': [
    'error',
    { allow: ['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] },
  ],
  'no-unneeded-ternary': 'error',
  'one-var': ['error', 'never'],
  'operator-assignment': ['error', 'always'],
  'prefer-object-spread': 'error',

  //
  // ECMAScript 6
  //

  'arrow-body-style': 'error',
  'no-useless-constructor': 'off',
  'no-var': 'error',
  'constructor-super': 'error',
  'no-class-assign': 'error',
  'no-const-assign': 'error',
  'no-dupe-class-members': 'error',
  'no-this-before-super': 'error',
  'no-array-constructor': 'error',
  'prefer-spread': 'error',
  'require-yield': 'error',
  'no-duplicate-imports': 'error',
  'no-useless-computed-key': 'error',
  'no-useless-rename': 'error',
  'object-shorthand': 'error',
  'prefer-arrow-callback': 'error',
  'prefer-const': 'error',
  'prefer-destructuring': ['error', { object: true, array: false }],
  'prefer-numeric-literals': 'error',
  'prefer-rest-params': 'error',
  'prefer-template': 'error',
  'symbol-description': 'error',

  //
  // Eslint Plugin Import-X
  //

  'import-x/no-unresolved': [
    'error',
    {
      commonjs: true,
    },
  ],
  'import-x/named': 'off',
  'import-x/default': 'error',
  'import-x/first': 'error',
  'import-x/namespace': 'error',
  'import-x/no-absolute-path': 'error',
  'import-x/export': 'error',
  'import-x/extensions': ['warn', 'never', { css: 'always' }],
  'import-x/no-anonymous-default-export': [
    'warn',
    {
      allowObject: true,
      allowArray: true,
    },
  ],
  'import-x/no-extraneous-dependencies': 'off',
  'import-x/no-mutable-exports': 'error',
  'import-x/no-named-as-default': 'warn',
  'import-x/no-named-default': 'warn',
  'import-x/no-named-as-default-member': 'warn',
  'import-x/no-self-import': 'error',
  'import-x/no-cycle': [
    'error',
    {
      maxDepth: 8,
    },
  ],
  'import-x/no-duplicates': 'error',
  'import-x/order': [
    'error',
    {
      groups: [
        'builtin',
        'external',
        'internal',
        'parent',
        'sibling',
        'index',
      ],
      alphabetize: {
        order: 'asc',
        caseInsensitive: true,
      },
    },
  ],
  'import-x/no-default-export': 'error',
}

const baseConfig = [
  js.configs.recommended,
  {
    plugins: {
      'import-x': importX,
    },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.es2022,
      },
    },
    settings: {
      'import-x/resolver': {
        node: {
          tryExtensions: ['.js', '.json', '.ts', '.tsx'],
          paths: ['src', '.'],
          extensions: ['.js', '.json', '.ts', '.tsx'],
        },
      },
    },
    rules: baseRules,
  },
  // Next.js pages override
  {
    files: ['**/pages/**/*.{ts,tsx}'],
    rules: {
      'import-x/no-default-export': 'off',
    },
  },
  // Storybook override
  {
    files: ['**/*.stories.{ts,tsx}'],
    rules: {
      'import-x/no-default-export': 'off',
      'require-await': 'off',
    },
  },
  // Test files override
  {
    files: ['**/*.{spec,test}.{ts,tsx,js,jsx}', '**/_tests/**/*.{ts,tsx,js,jsx}', '**/testing/**/*.{ts,tsx,js,jsx}'],
    rules: {
      'prefer-destructuring': 'off',
      'max-nested-callbacks': ['error', 8],
    },
  },
  // Database seeds override
  {
    files: ['**/seeds/**/*.{ts,tsx,js,jsx}'],
    rules: {
      'no-plusplus': 'off',
      'no-await-in-loop': 'off',
      'max-params': 'off',
      'no-void': 'off',
    },
  },
]

export default baseConfig
export { baseRules }
