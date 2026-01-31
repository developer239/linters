# @linters/eslint-config-nest

ESLint configuration for NestJS applications.

## Plugins

- [@darraghor/eslint-plugin-nestjs-typed](https://github.com/darraghorern/eslint-plugin-nestjs-typed) - NestJS-specific linting rules

## Install

```bash
yarn add -D eslint @linters/eslint-config-nest
```

## Usage

Create `eslint.config.js`:

```js
import nestConfig from "@linters/eslint-config-nest";

export default [...nestConfig];
```
