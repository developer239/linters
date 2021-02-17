const base = require('@linters/eslint-config')

module.exports = {
  extends: require.resolve('@linters/eslint-config'),
  parserOptions: {
    ecmaVersion: 2018,
  },
  settings: {
    'import/resolver': {
      node: {
        ...base.settings['import/resolver'].node,
        paths: ['server'],
        extensions: [
          ...base.settings['import/resolver'].node.extensions,
          '.node',
        ],
      },
    },
  },
  env: {
    es6: true,
    node: true,
  },
  plugins: ['node', 'security'],
  rules: {
    //
    // Possible Errors
    //

    'node/no-callback-literal': 'error',
    'node/no-exports-assign': 0,
    'node/no-extraneous-import': 'error',
    'node/no-extraneous-require': 'error',
    'node/no-missing-import': 0,
    'node/no-missing-require': 0,
    'node/no-unpublished-bin': 'error',
    'node/no-unpublished-import': 1,
    'node/no-unpublished-require': 'error',
    'node/no-unsupported-features/es-builtins': 'error',
    'node/no-unsupported-features/es-syntax': 0,
    'node/no-unsupported-features/node-builtins': [
      'error',
      {
        version: '>=12.0.0',
        ignores: [],
      },
    ],
    'node/process-exit-as-throw': 'error',
    'node/shebang': 'error',

    //
    // Best Practices
    //

    'node/no-deprecated-api': [
      'error',
      {
        version: '>=12.0.0',
      },
    ],

    //
    // Stylistic Issues
    //

    'node/exports-style': 'error',
    'node/file-extension-in-import': 0,
    'node/prefer-global/buffer': 'error',
    'node/prefer-global/console': 'error',
    'node/prefer-global/process': 'error',
    'node/prefer-global/text-decoder': 'error',
    'node/prefer-global/text-encoder': 'error',
    'node/prefer-global/url-search-params': 'error',
    'node/prefer-global/url': 'error',
    'node/prefer-promises/dns': 'error',
    'node/prefer-promises/fs': 'error',

    //
    // Security
    //

    'security/detect-buffer-noassert': 'error',
    'security/detect-child-process': 'error',
    'security/detect-disable-mustache-escape': 'error',
    'security/detect-eval-with-expression': 'error',
    'security/detect-new-buffer': 'error',
    'security/detect-no-csrf-before-method-override': 'error',
    'security/detect-non-literal-fs-filename': 1,
    'security/detect-non-literal-regexp': 'error',
    'security/detect-non-literal-require': 'error',
    'security/detect-object-injection': 'error',
    'security/detect-possible-timing-attacks': 'error',
    'security/detect-pseudoRandomBytes': 'error',
    'security/detect-unsafe-regex': 'error',
  },
}
