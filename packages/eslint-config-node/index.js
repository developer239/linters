import baseConfig from '@linters/eslint-config'
import nodePlugin from 'eslint-plugin-n'
import securityPlugin from 'eslint-plugin-security'
import globals from 'globals'

const nodeRules = {
  //
  // Possible Errors (eslint-plugin-n)
  //

  'n/no-process-exit': 'off',
  'n/no-callback-literal': 'error',
  'n/no-exports-assign': 'off',
  'n/no-extraneous-import': 'off',
  'n/no-extraneous-require': 'off',
  'n/no-missing-import': 'off',
  'n/no-missing-require': 'off',
  'n/no-unpublished-bin': 'error',
  'n/no-unpublished-import': 'warn',
  'n/no-unpublished-require': 'error',
  'n/no-unsupported-features/es-builtins': 'error',
  'n/no-unsupported-features/es-syntax': 'off',
  'n/no-unsupported-features/node-builtins': [
    'error',
    {
      version: '>=18.18.0',
      ignores: [],
    },
  ],
  'n/process-exit-as-throw': 'error',
  'n/hashbang': 'error',

  //
  // Best Practices
  //

  'n/no-deprecated-api': [
    'error',
    {
      version: '>=18.18.0',
    },
  ],

  //
  // Stylistic Issues
  //

  'n/exports-style': 'error',
  'n/file-extension-in-import': 'off',
  'n/prefer-global/buffer': 'error',
  'n/prefer-global/console': 'error',
  'n/prefer-global/process': 'error',
  'n/prefer-global/text-decoder': 'error',
  'n/prefer-global/text-encoder': 'error',
  'n/prefer-global/url-search-params': 'error',
  'n/prefer-global/url': 'error',
  'n/prefer-promises/dns': 'error',
  'n/prefer-promises/fs': 'error',

  //
  // Security
  //

  'security/detect-buffer-noassert': 'error',
  'security/detect-child-process': 'error',
  'security/detect-disable-mustache-escape': 'error',
  'security/detect-eval-with-expression': 'error',
  'security/detect-new-buffer': 'error',
  'security/detect-no-csrf-before-method-override': 'error',
  'security/detect-non-literal-fs-filename': 'warn',
  'security/detect-non-literal-regexp': 'error',
  'security/detect-non-literal-require': 'error',
  'security/detect-object-injection': 'warn',
  'security/detect-possible-timing-attacks': 'error',
  'security/detect-pseudoRandomBytes': 'error',
  'security/detect-unsafe-regex': 'error',
}

const nodeConfig = [
  ...baseConfig,
  nodePlugin.configs['flat/recommended-module'],
  {
    plugins: {
      security: securityPlugin,
    },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.es2022,
      },
    },
    settings: {
      'import-x/resolver': {
        node: {
          paths: ['server', 'src', '.'],
          extensions: ['.js', '.json', '.ts', '.tsx', '.node'],
        },
      },
    },
    rules: nodeRules,
  },
  // Test files override
  {
    files: ['**/*.{spec,test}.{ts,tsx,js,jsx}', '**/_tests/**/*.{ts,tsx,js,jsx}', '**/testing/**/*.{ts,tsx,js,jsx}'],
    rules: {
      'n/no-unpublished-import': 'off',
      'security/detect-object-injection': 'off',
    },
  },
  // Database seeds override
  {
    files: ['**/seeds/**/*.{ts,tsx,js,jsx}'],
    rules: {
      'n/no-unpublished-import': 'off',
      'security/detect-object-injection': 'off',
    },
  },
]

export default nodeConfig
export { nodeRules }
