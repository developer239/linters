# ESLint Config Ramda

[**eslint**](https://github.com/eslint/eslint) shareable config to help you identify and report on patterns found in your [ramda](https://github.com/ramda/ramda) code.

## Plugins

This configuration uses the following plugins:

- [eslint-plugin-ramda](https://github.com/ramda/eslint-plugin-ramda)

## Install

```bash
$ yarn add @linters/eslint-config-ramda -D
```

## Usage

The shareable config can be configured in the [**eslint** configuration file](https://eslint.org/docs/user-guide/configuring):

Create a _.eslintrc.js_ file with the following contents:

```js
module.exports = {
  extends: ['@linters/eslint-config-ramda'],
}
```
