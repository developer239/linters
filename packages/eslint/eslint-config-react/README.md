# Eslint Config React

[**eslint**](https://github.com/eslint/eslint) shareable config to help you identify and report on patterns found in your code in [react](https://github.com/facebook/react) applications.

## Plugins

This configuration uses the following plugins:

- [`@linters/eslint-config`](https://github.com/code-quality-resources/eslint-config-base)
- [`eslint-plugin-react`](https://github.com/yannickcr/eslint-plugin-react)
- [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks)

## Install

```bash
$ yarn add eslint eslint-plugin-import @linters/eslint-config-react -D
```

## Usage

The shareable config can be configured in the [**eslint** configuration file](https://eslint.org/docs/user-guide/configuring):

Create a _.eslintrc.js_ file with the following contents:

```js
module.exports = {
  extends: [
    '@linters/eslint-config-react'
  ],
}
```
