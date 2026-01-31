# Common Linting Configurations

![release](https://github.com/developer239/linters/workflows/release/badge.svg)

Collection of shareable configurations for commonly used code quality tools. Available in many different flavours to
support your favorite framework.

- [ESLint](https://github.com/eslint/eslint) (Typescript, React, React Native, Angular, Node.js)
- [StyleLint](https://github.com/stylelint/stylelint) (scss, css-in-js)
- [Prettier](https://github.com/prettier/prettier)
- [CommitLint](https://github.com/conventional-changelog/commitlint)
- [Semantic Release](https://github.com/semantic-release/github)

## Available Packages

### Linters

| Tool   | Package                                                                | Version                                                          |
| ------ | ---------------------------------------------------------------------- | ---------------------------------------------------------------- |
| Base   | [@linters/eslint-config](packages/eslint-config)                       | [![@linters/eslint-config][es-badge]][es-npm]                    |
| Base   | [@linters/eslint-config-typescript](packages/eslint-config-typescript) | [![@linters/eslint-config-typescript][ests-badge]][ests-npm]     |
| Node   | [@linters/eslint-config-node](packages/eslint-config-node)             | [![@linters/eslint-config-node][esnode-badge]][esnode-npm]       |
| Vitest | [@linters/eslint-config-vitest](packages/eslint-config-vitest)         | [![@linters/eslint-config-vitest][esvitest-badge]][esvitest-npm] |
| Nest   | [@linters/eslint-config-nest](packages/eslint-config-nest)             | [![@linters/eslint-config-nest][nest-badge]][nest-npm]           |

### Prettier

| Tool     | Package                                              | Version                                         |
| -------- | ---------------------------------------------------- | ----------------------------------------------- |
| Prettier | [@linters/prettier-config](packages/prettier-config) | [![@linters/prettier-config][pr-badge]][pr-npm] |

## Contributing

**If you don't like what you see and want to make it better**, now is your chance!

See the [contributing docs](/CONTRIBUTING.md) for more information

[sr-badge]: https://badge.fury.io/js/%40linters%2Fsemantic-release.svg
[sr-npm]: https://badge.fury.io/js/%40linters%2Fsemantic-release
[cl-badge]: https://badge.fury.io/js/%40linters%2Fcommitlint-config.svg
[cl-npm]: https://badge.fury.io/js/%40linters%2Fcommitlint-config
[es-badge]: https://badge.fury.io/js/%40linters%2Feslint-config.svg
[es-npm]: https://badge.fury.io/js/%40linters%2Feslint-config
[esnode-badge]: https://badge.fury.io/js/%40linters%2Feslint-config-node.svg
[esnode-npm]: https://badge.fury.io/js/%40linters%2Feslint-config-node
[esreact-badge]: https://badge.fury.io/js/%40linters%2Feslint-config-react.svg
[esreact-npm]: https://badge.fury.io/js/%40linters%2Feslint-config-react
[esreacrn-badge]: https://badge.fury.io/js/%40linters%2Feslint-config-react-native.svg
[esreacrn-npm]: https://badge.fury.io/js/%40linters%2Feslint-config-react-native
[ests-badge]: https://badge.fury.io/js/%40linters%2Feslint-config-typescript.svg
[ests-npm]: https://badge.fury.io/js/%40linters%2Feslint-config-typescript
[esfc-badge]: https://badge.fury.io/js/%40linters%2Feslint-config-functional.svg
[esfc-npm]: https://badge.fury.io/js/%40linters%2Feslint-config-functional
[esjest-badge]: https://badge.fury.io/js/%40linters%2Feslint-config-jest.svg
[esjest-npm]: https://badge.fury.io/js/%40linters%2Feslint-config-jest
[esvitest-badge]: https://badge.fury.io/js/%40linters%2Feslint-config-vitest.svg
[esvitest-npm]: https://badge.fury.io/js/%40linters%2Feslint-config-vitest
[esstorybook-badge]: https://badge.fury.io/js/%40linters%2Feslint-config-storybook.svg
[esstorybook-npm]: https://badge.fury.io/js/%40linters%2Feslint-config-storybook
[esrm-badge]: https://badge.fury.io/js/%40linters%2Feslint-config-ramda.svg
[esrm-npm]: https://badge.fury.io/js/%40linters%2Feslint-config-ramda
[esng-badge]: https://badge.fury.io/js/%40linters%2Feslint-config-angular.svg
[esng-npm]: https://badge.fury.io/js/%40linters%2Feslint-config-angular
[sl-badge]: https://badge.fury.io/js/%40linters%2Fstylelint-config.svg
[sl-npm]: https://badge.fury.io/js/%40linters%2Fstylelint-config
[sljs-badge]: https://badge.fury.io/js/%40linters%2Fstylelint-css-in-js-config.svg
[sljs-npm]: https://badge.fury.io/js/%40linters%2Fstylelint-css-in-js-config
[sljsrn-badge]: https://badge.fury.io/js/%40linters%2Fstylelint-css-in-js-react-native-config.svg
[sljsrn-npm]: https://badge.fury.io/js/%40linters%2Fstylelint-css-in-js-react-native-config
[slscss-badge]: https://badge.fury.io/js/%40linters%2Fstylelint-scss-config.svg
[slscss-npm]: https://badge.fury.io/js/%40linters%2Fstylelint-scss-config
[pr-badge]: https://badge.fury.io/js/%40linters%2Fprettier-config.svg
[pr-npm]: https://badge.fury.io/js/%40linters%2Fprettier-config
[nest-badge]: https://badge.fury.io/js/%40linters%2Feslint-config-nest.svg
[nest-npm]: https://badge.fury.io/js/%40linters%2Feslint-config-nest
