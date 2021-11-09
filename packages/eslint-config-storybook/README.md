# ESLint Config Storybook

[**eslint**](https://github.com/eslint/eslint) shareable config to help you identify and report on patterns found in your code in [typescript](https://github.com/microsoft/TypeScript) applications.

## Plugins

This configuration uses the following plugins:

- [`eslint-plugin-storybook`](https://github.com/storybookjs/eslint-plugin-storybook)

## Install

```bash
$ yarn add @linters/eslint-config-storybook -D
```

## Usage

The shareable config can be configured in the [**eslint** configuration file](https://eslint.org/docs/user-guide/configuring):

Create a _.eslintrc.js_ file with the following contents:

```js
module.exports = {
  extends: ['@linters/eslint-config-storybook'],
}
```
