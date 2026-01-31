> **ARCHIVED:** This package is no longer maintained.

# ESLint Config Functional

[**eslint**](https://github.com/eslint/eslint) shareable config to help you identify and report on patterns found in your functional code.

## Plugins

This configuration uses the following plugins:

- [`eslint-plugin-functional`](https://github.com/jonaskello/eslint-plugin-functional)

## Install

```bash
$ yarn add @linters/eslint-config-functional -D
```

## Usage

The shareable config can be configured in the [**eslint** configuration file](https://eslint.org/docs/user-guide/configuring):

Create a _.eslintrc.js_ file with the following contents:

```js
module.exports = {
  extends: ["@linters/eslint-config-functional"],
};
```
