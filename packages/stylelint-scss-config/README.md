> **ARCHIVED:** This package is no longer maintained.

# StyleLint SCSS Config

[**stylelint**](https://github.com/stylelint/stylelint) modern linter that helps you avoid errors and enforce conventions in your styles for you [SASS](https://github.com/sass/sass) applications.

## Install

```sh
yarn add stylelint @linters/stylelint-scss-config -D
```

## Usage

Create a _.stylelintrc.js_ file with the following contents:

```js
module.exports = {
  extends: ["@linters/stylelint-scss-config"],
};
```
