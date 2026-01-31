# ESLint Config Vitest

[**eslint**](https://github.com/eslint/eslint) shareable config to help you identify and report on patterns found in your tests.

## Plugins

This configuration uses the following plugins:

- [`eslint-plugin-vitest`](https://github.com/veritem/eslint-plugin-vitest)

## Install

```bash
$ yarn add @linters/eslint-config-vitest -D
```

## Usage

The shareable config can be configured in the [**eslint** configuration file](https://eslint.org/docs/user-guide/configuring):

Create a _.eslintrc.js_ file with the following contents:

```js
module.exports = {
  extends: ["@linters/eslint-config-vitest"],
};
```
