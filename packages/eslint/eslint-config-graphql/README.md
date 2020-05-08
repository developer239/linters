# ESLint Config GraphQL

[**eslint**](https://github.com/eslint/eslint) shareable config to help you identify and report on patterns found in your code in [typescript](https://github.com/microsoft/TypeScript) applications.

**Note:** This eslint configuration works only with apollo client.

## Plugins

This configuration uses the following plugins:

- [`eslint-plugin-graphql`](https://github.com/apollographql/eslint-plugin-graphql)

## Install

```bash
$ yarn add @linters/eslint-config-graphql -D
```

## Usage

The shareable config can be configured in the [**eslint** configuration file](https://eslint.org/docs/user-guide/configuring):

Create a _.eslintrc.js_ file with the following contents:

```js
module.exports = {
  extends: [
    '@linters/eslint-config-graphql',
  ],
}
```

Additionally don't forget to have `.graphqlconfig` file:

```json
{
  "schemaPath": "schema.json",
}
```
