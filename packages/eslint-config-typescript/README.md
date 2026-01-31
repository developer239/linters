# @linters/eslint-config-typescript

ESLint configuration for TypeScript projects. Extends `@linters/eslint-config`.

## Plugins

- [typescript-eslint](https://typescript-eslint.io/) - TypeScript-specific linting rules
- [eslint-import-resolver-typescript](https://github.com/import-js/eslint-import-resolver-typescript) - TypeScript import resolution

## Install

```bash
yarn add -D eslint typescript @linters/eslint-config-typescript
```

## Usage

Create `eslint.config.js`:

```js
import typescriptConfig from "@linters/eslint-config-typescript";

export default [...typescriptConfig];
```
