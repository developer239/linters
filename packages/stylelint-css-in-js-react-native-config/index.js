module.exports = {
  plugins: ['stylelint-react-native'],
  extends: ['@linters/stylelint-css-in-js-config'],
  rules: {
    //
    // Disable base rules
    //

    //
    // React Native Plugin
    //

    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['resize-mode', 'text-align-vertical'],
      },
    ],

    //
    // React Native Environment
    //

    'value-no-vendor-prefix': true,
    'property-no-vendor-prefix': true,
    'no-empty-source': null,
    'no-missing-end-of-source-newline': null,
    // stylelint-processor-styled-components creates
    // a wrapping class selector for the component.
    'selector-max-class': [
      1,
      {
        severity: 'error',
        message:
          'class selectors are not supported when using styled-components with React Native.',
      },
    ],
    'selector-max-universal': [
      0,
      {
        severity: 'error',
        message:
          'universal selectors are not supported when using styled-components with React Native.',
      },
    ],
    'selector-max-attribute': [
      0,
      {
        severity: 'error',
        message:
          'attribute selectors are not supported when using styled-components with React Native.',
      },
    ],
    'selector-max-id': [
      0,
      {
        severity: 'error',
        message:
          'id selectors are not supported when using styled-components with React Native.',
      },
    ],
  },
}
