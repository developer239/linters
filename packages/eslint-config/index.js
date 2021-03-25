module.exports = {
  plugins: ['import', 'absolute-import'],
  settings: {
    'import/resolver': {
      node: {
        tryExtensions: ['.js', '.json'],
        paths: ['src', '.'],
        extensions: ['.js', '.json'],
      },
    },
  },
  rules: {
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
    'no-duplicate -case': 0,
    'no-empty': 'error',
    'no-empty-character-class': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-parens': 0,
    'no-extra-semi': 'error',
    'no-func-assign': 'error',
    'no-import-assign': 'error',
    'no-inner-declarations': ['error', 'both'],
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-misleading-character-class': 'error',
    'no-obj-calls': 'error',
    'no-prototype-builtins': 0,
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
    'class-methods-use-this': 0,
    complexity: ['error', 10],
    'consistent-return': 1,
    curly: 'error',
    'default-case': 1,
    'default-param-last': 1,
    'dot-notation': 'error',
    eqeqeq: 'error',
    'grouped-accessor-pairs': 'error',
    'guard-for-in': 'error',
    'max-classes-per-file': 0,
    'no-alert': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-constructor-return': 'error',
    'no-div-regex': 'error',
    'no-else-return': 'error',
    'no-empty-function': 0,
    'no-empty-pattern': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-global-assign': 'error',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-invalid-this': 'error',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-multi-spaces': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'error',
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-return-assign': 'error',
    'no-return-await': 'error',
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
    'no-void': 'error',
    'no-with': 'error',
    'prefer-named-capture-group': 'warn',
    'prefer-promise-reject-errors': 'error',
    'prefer-regex-literals': 'warn',
    radix: 'error',
    'require-await': 'error',
    'require-unicode-regexp': 'error',
    'vars-on-top': 'error',
    'wrap-iife': 'error',
    yoda: 'error',

    //
    // Variables
    //

    'init-declarations': 0,
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
    'no-undefined': 0,
    'no-unused-vars': 0,
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false,
      },
    ],
    'callback-return': ['error', ['cb', 'callback', 'next', 'done']],
    'handle-callback-err': ['error', '^.*(e|E)rr(or)?'],

    //
    // Stylistic Issues
    //

    'array-bracket-newline': 0,
    'array-bracket-spacing': ['error', 'never'],
    'array-element-newline': ['error', 'consistent'],
    'block-spacing': ['error', 'always'],
    'brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: true,
      },
    ],
    camelcase: 'warn',
    'capitalized-comments': 0,
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': ['error', 'never'],
    'consistent-this': 'error',
    'eol-last': ['error', 'unix'],
    'func-call-spacing': 'error',
    'func-name-matching': 'error',
    'func-names': 'error',
    'func-style': [
      'error',
      'declaration',
      {
        allowArrowFunctions: true,
      },
    ],
    'function-paren-newline': 0,
    'id-length': [
      'error',
      {
        min: 2,
        max: 30,
        exceptions: ['i', 'R', '_', '__'],
      },
    ],
    indent: 0,
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
        mode: 'strict',
      },
    ],
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],
    'linebreak-style': ['error', 'unix'],
    'lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: true,
      },
    ],
    'max-depth': ['error', 4],
    'max-len': [
      'error',
      120,
      2,
      {
        ignorePattern: '^import\\W.*',
        ignoreUrls: true,
      },
    ],
    'max-lines': 'error',
    'max-lines-per-function': ['error', 120],
    'max-nested-callbacks': ['error', 4],
    'max-params': ['error', 5],
    'max-statements-per-line': 'error',
    'multiline-comment-style': ['error', 'separate-lines'],
    'new-cap': 0,
    'new-parens': 'error',
    'newline-per-chained-call': [
      'error',
      {
        ignoreChainWithDepth: 3,
      },
    ],
    'no-bitwise': 'error',
    'no-lonely-if': 'error',
    'no-mixed-operators': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-assign': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 2,
        maxEOF: 1,
      },
    ],
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-plusplus': 'error',
    'no-tabs': 'error',
    'no-trailing-spaces': 'error',
    'no-underscore-dangle': 'error',
    'no-unneeded-ternary': 'error',
    'no-whitespace-before-property': 'error',
    'object-curly-newline': [
      'error',
      {
        consistent: true,
      },
    ],
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': [
      'error',
      {
        allowAllPropertiesOnSameLine: true,
      },
    ],
    'one-var': ['error', 'never'],
    'one-var-declaration-per-line': 'error',
    'operator-assignment': ['error', 'always'],
    'operator-linebreak': 0,
    'padded-blocks': ['error', 'never'],
    'prefer-object-spread': 'error',
    'quote-props': 'off',
    quotes: ['error', 'single', 'avoid-escape'],
    semi: ['error', 'never'],
    'semi-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    'semi-style': ['error', 'first'],
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': 0,
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false,
      },
    ],
    'switch-colon-spacing': 'error',
    'template-tag-spacing': 'error',
    'wrap-regex': 'error',

    //
    // ECMAScript 6
    //

    'arrow-body-style': 'error',
    'arrow-parens': 0,
    'arrow-spacing': 'error',
    'generator-star-spacing': 'error',
    'no-new-symbol': 'error',
    'no-useless-constructor': 0,
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
    'rest-spread-spacing': ['error', 'never'],
    'symbol-description': 'error',
    'template-curly-spacing': 'error',

    //
    // Eslint Plugin Absolute Import
    //

    'absolute-import/no-relative-path': 1,

    //
    // Eslint Plugin Import
    //

    'import/no-unresolved': [
      'error',
      {
        commonjs: true,
      },
    ],
    'import/named': 0,
    'import/default': 'error',
    'import/first': 'error',
    'import/namespace': 'error',
    'import/no-absolute-path': 'error',
    'import/export': 'error',
    'import/extensions': ['warn', 'never', { css: 'always' }],
    'import/no-anonymous-default-export': [
      'warn',
      {
        allowObject: true,
        allowArray: true,
      },
    ],
    'import/no-extraneous-dependencies': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-named-as-default': 'warn',
    'import/no-named-default': 'warn',
    'import/no-named-as-default-member': 'warn',
    'import/no-self-import': 'error',
    'import/no-cycle': [
      'error',
      {
        maxDepth: 8,
      },
    ],
    'import/no-duplicates': 'error',
    'import/order': [
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
    'import/no-default-export': 'error',
  },
  overrides: [
    // Next.js
    {
      files: ['pages/**/*.{ts,tsx}'],
      rules: {
        'import/no-default-export': 0,
      },
    },
    // Storybook
    {
      files: ['*.stories.ts'],
      rules: {
        'import/no-default-export': 0,
        'require-await': 0,
      },
    },
    // Test files
    {
      files: ['*.{spec,test}.ts'],
      rules: {
        'prefer-destructuring': 1,
        'max-nested-callbacks': ['error', 8],
      },
    },
  ],
}
