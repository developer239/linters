# CommitLint Config

[**commitlint**](https://github.com/conventional-changelog/commitlint) checks if your commit messages meet the conventional commit format.

## Install

```sh
yarn add @linters/commitlint-config -D
```

## Usage

This shareable config can be configured in the [**commitlint** configuration file]():

Create a  _commitlint.config.js configuration file_ file with the following contents:


```js
module.exports = {
  extends: [
    '@linters/commitlint-config',
  ],
}
```
