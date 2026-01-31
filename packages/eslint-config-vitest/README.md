# @linters/eslint-config-vitest

ESLint configuration for Vitest test files.

## Plugins

- [@vitest/eslint-plugin](https://github.com/vitest-dev/eslint-plugin-vitest) - Vitest-specific linting rules

## Install

```bash
yarn add -D eslint @linters/eslint-config-vitest
```

## Usage

Create `eslint.config.js`:

```js
import vitestConfig from "@linters/eslint-config-vitest";

export default [...vitestConfig];
```

This config only applies to test files (`*.spec.*`, `*.test.*`, `_tests/`, `testing/`).
