# Eslint Config Typescript

[**eslint**](https://github.com/eslint/eslint) shareable config to help you identify and report on patterns found in your code in [typescript](https://github.com/microsoft/TypeScript) applications.

## Plugins

This configuration uses the following plugins:

- `@linters/eslint-config`
- `@typescript-eslint/eslint-plugin`
- `eslint-import-resolver-typescript`

## Install

```bash
$ yarn add eslint eslint-plugin-import @linters/eslint-config-typescript -D
```

## Usage

The shareable config can be configured in the [**eslint** configuration file](https://eslint.org/docs/user-guide/configuring):

Create a _.eslintrc.js_ file with the following contents:

```js
module.exports = {
  extends: [
    '@linters/eslint-config-typescript'
  ],
}
```
