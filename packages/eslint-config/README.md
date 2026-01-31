# @linters/eslint-config

Base ESLint configuration with sensible defaults for modern JavaScript.

## Plugins

- [eslint-plugin-import-x](https://github.com/un-ts/eslint-plugin-import-x) - import/export validation and ordering

## Install

```bash
yarn add -D eslint @linters/eslint-config
```

## Usage

Create `eslint.config.js`:

```js
import baseConfig from "@linters/eslint-config";

export default [...baseConfig];
```
