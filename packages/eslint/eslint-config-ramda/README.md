# ESLint Config Ramda

[**eslint**](https://github.com/eslint/eslint) shareable config to help you identify and report on patterns found in your code in [typescript](https://github.com/microsoft/TypeScript) applications.

## Plugins

This [configuration](https://github.com/linters-resources/eslint-config-ramda/blob/master/index.js) uses the following plugins:

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
  extends: [
    '@linters/eslint-config-ramda',
  ],
}
```
