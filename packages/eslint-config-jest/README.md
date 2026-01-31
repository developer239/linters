> **ARCHIVED:** This package is no longer maintained. Use [@linters/eslint-config-vitest](../eslint-config-vitest) instead.

# ESLint Config Jest

[**eslint**](https://github.com/eslint/eslint) shareable config to help you identify and report on patterns found in your tests.

## Plugins

This configuration uses the following plugins:

- [`eslint-plugin-jest`](https://github.com/jest-community/eslint-plugin-jest)
- [`eslint-plugin-jest-formatting`](https://github.com/dangreenisrael/eslint-plugin-jest-formatting)

## Install

```bash
$ yarn add @linters/eslint-config-jest -D
```

## Usage

The shareable config can be configured in the [**eslint** configuration file](https://eslint.org/docs/user-guide/configuring):

Create a _.eslintrc.js_ file with the following contents:

```js
module.exports = {
  extends: ["@linters/eslint-config-jest"],
};
```
