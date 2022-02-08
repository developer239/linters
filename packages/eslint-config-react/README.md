# Eslint Config React

[**eslint**](https://github.com/eslint/eslint) shareable config to help you identify and report on patterns found in your code in [React](https://github.com/facebook/react) applications.

## Plugins

This configuration uses the following plugins:

- `@linters/eslint-config`
- `eslint-plugin-react`
- `eslint-plugin-react-hooks`

## Install

```bash
$ yarn add eslint @linters/eslint-config-react -D
```

## Usage

The shareable config can be configured in the [**eslint** configuration file](https://eslint.org/docs/user-guide/configuring):

Create a _.eslintrc.js_ file with the following contents:

```js
module.exports = {
  extends: ['@linters/eslint-config-react'],
}
```
