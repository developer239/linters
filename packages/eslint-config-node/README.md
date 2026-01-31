# @linters/eslint-config-node

ESLint configuration for Node.js applications. Extends `@linters/eslint-config`.

## Plugins

- [eslint-plugin-n](https://github.com/eslint-community/eslint-plugin-n) - Node.js specific rules
- [eslint-plugin-security](https://github.com/eslint-community/eslint-plugin-security) - security best practices

## Install

```bash
yarn add -D eslint @linters/eslint-config-node
```

## Usage

Create `eslint.config.js`:

```js
import nodeConfig from "@linters/eslint-config-node";

export default [...nodeConfig];
```
