# @linters

Shareable ESLint and Prettier configurations for modern JavaScript/TypeScript projects.

## ESLint Configs

| Package                                                                | Version                                                                                                                                   |
| ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| [@linters/eslint-config](packages/eslint-config)                       | [![npm](https://img.shields.io/npm/v/@linters/eslint-config)](https://www.npmjs.com/package/@linters/eslint-config)                       |
| [@linters/eslint-config-typescript](packages/eslint-config-typescript) | [![npm](https://img.shields.io/npm/v/@linters/eslint-config-typescript)](https://www.npmjs.com/package/@linters/eslint-config-typescript) |
| [@linters/eslint-config-node](packages/eslint-config-node)             | [![npm](https://img.shields.io/npm/v/@linters/eslint-config-node)](https://www.npmjs.com/package/@linters/eslint-config-node)             |
| [@linters/eslint-config-vitest](packages/eslint-config-vitest)         | [![npm](https://img.shields.io/npm/v/@linters/eslint-config-vitest)](https://www.npmjs.com/package/@linters/eslint-config-vitest)         |
| [@linters/eslint-config-nest](packages/eslint-config-nest)             | [![npm](https://img.shields.io/npm/v/@linters/eslint-config-nest)](https://www.npmjs.com/package/@linters/eslint-config-nest)             |

## Quick Start

```bash
yarn add -D eslint @linters/eslint-config-node @linters/eslint-config-typescript @linters/eslint-config-vitest
```

Create `eslint.config.js`:

```js
import nodeConfig from "@linters/eslint-config-node";
import typescriptConfig from "@linters/eslint-config-typescript";
import vitestConfig from "@linters/eslint-config-vitest";
import prettierConfig from "eslint-config-prettier";

export default [
  ...nodeConfig,
  ...typescriptConfig,
  ...vitestConfig,
  prettierConfig,
];
```

## Other Packages

| Package                                                  | Version                                                                                                                     |
| -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| [@linters/prettier-config](packages/prettier-config)     | [![npm](https://img.shields.io/npm/v/@linters/prettier-config)](https://www.npmjs.com/package/@linters/prettier-config)     |
| [@linters/commitlint-config](packages/commitlint-config) | [![npm](https://img.shields.io/npm/v/@linters/commitlint-config)](https://www.npmjs.com/package/@linters/commitlint-config) |

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)
