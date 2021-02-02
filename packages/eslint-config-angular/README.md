# Eslint Config Angular

## Plugins

This configuration uses the following plugins:

- `@angular-eslint/eslint-plugin`
- `@angular-eslint/eslint-plugin-template`
- `@linters/eslint-config-typescript`

## Install

```bash
$ yarn add @linters/eslint-config-angular -D
```

## Usage

Angular eslint configuration is a bit more complicated because we need to lint HTML files and Angular components can have
special eslint rules too.

Rename a _.eslintrc.json_ to _.eslintrc.js_ and replace its contents:

```js
const typescript = require('@linters/eslint-config-angular/typescript')
const components = require('@linters/eslint-config-angular/components')
const templates = require('@linters/eslint-config-angular/templates')

module.exports = {
  root: true,
  env: {
    es6: true,
  },
  overrides: [typescript, components, templates],
}

```

Make sure that `lint` configuration in `angular.json` uses `@angular-eslint/builder`:

```json
"lint": {
  "builder": "@angular-eslint/builder:lint",
  "options": {
    "lintFilePatterns": ["src/**/*.ts", "src/**/*.component.html"]
  }
},
```

Other than that everything stays the same.
