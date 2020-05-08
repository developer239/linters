# Eslint Config Node

[**eslint**](https://github.com/eslint/eslint) shareable config to help you identify and report on patterns found in your code in [typescript](https://github.com/microsoft/TypeScript) applications.

## Plugins

This configuration uses the following plugins:

- [`@linters/eslint-config`](https://github.com/code-quality-resources/eslint-config-base)
- [`eslint-plugin-node`](https://github.com/mysticatea/eslint-plugin-node)
- [`eslint-plugin-security`](https://github.com/nodesecurity/eslint-plugin-security)

## Install

```bash
$ yarn add eslint eslint-plugin-import @linters/eslint-config-node -D
```

## Usage

The shareable config can be configured in the [**eslint** configuration file](https://eslint.org/docs/user-guide/configuring):

Create a _.eslintrc.js_ file with the following contents:

```js
module.exports = {
  extends: [
    '@linters/eslint-config-node',
  ],
}
```
