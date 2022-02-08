const base = require('@linters/eslint-config')

module.exports = {
  extends: require.resolve('@linters/eslint-config'),
  parser: '@babel/eslint-parser',
  plugins: ['react', 'react-hooks'],
  env: {
    browser: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },

    'import/resolver': {
      node: {
        ...base.settings['import/resolver'].node,
        extensions: [
          ...base.settings['import/resolver'].node.extensions,
          '.jsx',
        ],
      },
    },
  },
  rules: {
    //
    // Eslint Plugin React Rules
    //

    'react/boolean-prop-naming': [
      'error',
      {
        rule: '^(is|has|should)[A-Z]([A-Za-z0-9]?)+',
        message:
          'Boolean prop: ({{ propName }}) should start with is/has - pattern: ({{ pattern }})',
      },
    ],
    'react/button-has-type': ['error', { reset: false }],
    'react/default-props-match-prop-types': 0,
    'react/destructuring-assignment': 'error',
    'react/display-name': 0,
    'react/forbid-component-props': 0,
    'react/forbid-dom-props': [
      'error',
      {
        forbid: ['id'],
      },
    ],
    'react/forbid-elements': 0,
    'react/forbid-prop-types': 0,
    'react/forbid-foreign-prop-types': ['error', { allowInPropTypes: true }],
    'react/no-access-state-in-setstate': 'error',
    'react/no-array-index-key': 'error',
    'react/no-children-prop': 'error',
    'react/no-danger': 'error',
    'react/no-danger-with-children': 'error',
    'react/no-deprecated': 'error',
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-is-mounted': 'error',
    'react/no-multi-comp': 'error',
    'react/no-redundant-should-component-update': 'error',
    'react/no-render-return-value': 'error',
    'react/no-set-state': 0,
    'react/no-typos': 'error',
    'react/no-string-refs': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-unknown-property': 'error',
    'react/no-unsafe': 'error',
    'react/no-unused-prop-types': 'error',
    'react/no-unused-state': 'error',
    'react/no-will-update-set-state': 'error',
    'react/prefer-es6-class': 'error',
    'react/prefer-read-only-props': 'error',
    'react/prefer-stateless-function': 'error',
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 'error',
    'react/require-default-props': 'error',
    'react/require-optimization': 0,
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'error',
    'react/sort-comp': 0,
    'react/sort-prop-types': 0,
    'react/state-in-constructor': ['error', 'never'],
    'react/static-property-placement': 0,
    'react/style-prop-object': 'error',
    'react/void-dom-elements-no-children': 'error',

    //
    // JSX Specific Rules
    //

    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-child-element-spacing': 'error',
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-curly-newline': 0,
    'react/jsx-curly-spacing': [
      'error',
      {
        when: 'never',
        allowMultiline: true,
      },
    ],
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
    'react/jsx-first-prop-new-line': ['error', 'multiline'],
    'react/jsx-handler-names': 'error',
    'react/jsx-indent': 0,
    'react/jsx-indent-props': 0,
    'react/jsx-key': 'error',
    'react/jsx-max-depth': [
      'error',
      {
        max: 7,
      },
    ],
    'react/jsx-max-props-per-line': 0,
    'react/jsx-no-bind': ['error', { allowArrowFunctions: true }],
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],
    'react/jsx-no-literals': 0,
    'react/jsx-no-target-blank': ['error', { enforceDynamicLinks: 'always' }],
    'react/jsx-no-undef': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-curly-brace-presence': ['error', 'never'],
    'react/jsx-fragments': 'error',
    'react/jsx-pascal-case': [
      'error',
      {
        allowAllCaps: true,
      },
    ],
    'react/jsx-props-no-multi-spaces': 'error',
    'react/jsx-props-no-spreading': 0,
    'react/jsx-sort-default-props': 0,
    'react/jsx-sort-props': 0,
    'react/jsx-tag-spacing': [
      'error',
      {
        closingSlash: 'allow',
        beforeSelfClosing: 'always',
        afterOpening: 'allow',
        beforeClosing: 'allow',
      },
    ],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-wrap-multilines': [
      'error',
      { declaration: false, assignment: false },
    ],

    //
    // React Hooks Rules
    //

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 0,
  },
}
