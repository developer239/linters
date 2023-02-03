module.exports = {
  extends: require.resolve('@linters/eslint-config-react'),
  env: {
    'react-native/react-native': true,
  },
  plugins: ['react-native'],
  rules: {
    'react-native/no-color-literals': 'error',
    'react-native/no-inline-styles': 'error',
    'react-native/no-raw-text': 0,
    'react-native/no-single-element-style-arrays': 'error',
    'react-native/no-unused-styles': 'error',
    'react-native/sort-styles': 0,
    'react-native/split-platform-components': 'error',
    'react/react-in-jsx-scope': 0,
  },
}
