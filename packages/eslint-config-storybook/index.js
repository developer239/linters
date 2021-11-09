module.exports = {
  plugins: ['storybook'],
  overrides: [
    {
      files: ['src/**/*.stories.@(js|jsx|ts|tsx)'],
      extends: ['plugin:storybook/recommended'],
      rules: {
        'storybook/await-interactions': 'error',
        'storybook/csf-component': 'error',
        'storybook/default-exports': 'error',
        'storybook/hierarchy-separator': 'error',
        'storybook/no-redundant-story-name': 'error',
        'storybook/no-stories-of': 'error',
        'storybook/no-title-property-in-meta': 'error',
        'storybook/prefer-pascal-case': 'error',
        'storybook/use-storybook-expect': 'error',
        'storybook/use-storybook-testing-library': 'error',
      },
    },
  ],
}
