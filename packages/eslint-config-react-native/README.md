# Eslint Config React Native

[**eslint**](https://github.com/eslint/eslint) shareable config to help you identify and report on patterns found in your code in [react-native](https://github.com/facebook/react-native) applications.

## Plugins

This configuration uses the following plugins:

- `@linters/eslint-config-react`
- `eslint-plugin-react-native`

## Install

```bash
$ yarn add eslint @linters/eslint-config-react-native -D
```

## Usage

Create a _.eslintrc.js_ file with the following contents:

```js
module.exports = {
  extends: ['@linters/eslint-config-react-native'],
}
```
