# StyleLint CSS-IN-JS Config

## **Note**: [StyleLint@14 is not supported](https://github.com/styled-components/styled-components/issues/3607)

[**stylelint**](https://github.com/stylelint/stylelint) modern linter that helps you avoid errors and enforce conventions in your styles.

## Install

```sh
yarn add stylelint @linters/stylelint-css-in-js-config -D
```

## Usage

Create a _.stylelintrc.js_ file with the following contents:

```js
module.exports = {
  extends: ['@linters/stylelint-css-in-js-config'],
}
```
