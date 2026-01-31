> **ARCHIVED:** This package is no longer maintained.

# Eslint Config Angular

## Plugins

This configuration uses the following plugins:

- `@angular-eslint/eslint-plugin`
- `@angular-eslint/eslint-plugin-template`
- `@linters/eslint-config-typescript`

## Install

```bash
$ yarn add eslint @angular-eslint/builder:lint @linters/eslint-config-angular -D
```

Add `lint` section to your architect:

```json
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "newProjectRoot": "projects",
  "projects": {
    "your-project-name": {
      ...
      "architect": {
        ...
        "lint": {
          "builder": "@angular-eslint/builder:lint",
          "options": {
            "lintFilePatterns": [
              "src/**/*.ts",
              "src/**/*.html"
            ]
          }
        }
      }
    }
  },
  "defaultProject": "your-project-name"
}

```

## Usage

Angular eslint configuration is a bit more complicated because we need to lint HTML files and Angular components can
have special eslint rules too.

Rename a _.eslintrc.json_ to _.eslintrc.js_ and replace its contents:

```js
module.exports = {
  extends: ["@linters/eslint-config-angular"],
};
```
