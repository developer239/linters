# Eslint Config Angular

[**eslint**](https://github.com/eslint/eslint) shareable config to help you identify and report on patterns found in your applications.

## Plugins

This configuration uses the following plugins:

- `@angular-eslint/eslint-plugin`
- `@angular-eslint/eslint-plugin-template`

## Install

```bash
$ yarn add @linters/eslint-config-angular -D
```

## Usage

The shareable config can be configured in the [**eslint** configuration file](https://eslint.org/docs/user-guide/configuring):

Create a _.eslintrc.js_ file with the following contents:

```js
module.exports = {
  extends: ['@linters/eslint-config-angular'],
}
```

Run:

- `yarn add @angular-eslint/schematics @angular-eslint/builder -D`

Update `lint` configuration in `angular.json`:

```json
{
  "lint": {
    "builder": "@angular-eslint/builder:lint",
    "options": {
      "eslintConfig": ".eslintrc.js",
      "tsConfig": [
        "tsconfig.app.json",
        "tsconfig.spec.json",
        "e2e/tsconfig.json"
      ],
      "exclude": ["**/node_modules/**"]
    }
  }
}
```
