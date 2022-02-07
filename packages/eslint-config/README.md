# ESLint Config

[**eslint**](https://github.com/eslint/eslint) shareable config to help you identify and report on patterns found in your code.

## Plugins

This [configuration](https://github.com/developer239/linters/blob/master/packages/eslint/eslint-config/index.js) uses these plugins:

- [`eslint-plugin-import`](https://github.com/benmosher/eslint-plugin-import)
- [`eslint-plugin-absolute-import`](https://github.com/mcclowes/eslint-plugin-absolute-import)
- [`eslint-plugin-unused-imports`](https://github.com/sweepline/eslint-plugin-unused-imports)

## Install

```bash
$ yarn add eslint @linters/eslint-config -D
```

## Usage

The shareable config can be configured in the [**eslint** configuration file](https://eslint.org/docs/user-guide/configuring):

Create a _.eslintrc.js_ file with the following contents:

```js
module.exports = {
  extends: ['@linters/eslint-config'],
}
```
