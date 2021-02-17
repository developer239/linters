# Style Lint Config

[**stylelint**](https://github.com/stylelint/stylelint) modern linter that helps you avoid errors and enforce conventions in your styles.

## Install

```sh
yarn add stylelint @linters/stylelint-config -D
```

## Usage

The shareable config can be configured in the [**stylelint** configuration file](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/configuration.md):

Create a _.stylelintrc.js_ file with the following contents:

```js
module.exports = {
  extends: ['@linters/stylelint-config'],
}
```
