# Semantic Release Config

[**semantic-release**](https://github.com/semantic-release/semantic-release) shareable config to publish npm packages with [GitHub](https://github.com).

- Provides an informative [git](https://github.com/semantic-release/git) commit message for the release commit that does not trigger continuous integration and conforms to the [conventional commits specification](https://www.conventionalcommits.org/) (e.g., "chore(release): 1.2.3 [skip ci]").
- Creates a tarball that gets uploaded with each [GitHub release](https://github.com/semantic-release/github).
- Publishes the same tarball to [npm](https://github.com/semantic-release/npm).
- Commits the version change in `package.json`.
- Creates or updates a [changelog](https://github.com/semantic-release/changelog) file.

## Install

```bash
$ yarn add semantic-release @linters/semantic-release -D
```

## Configuration

Ensure that your CI configuration has the following **_secret_** environment variables set:

- [`GH_TOKEN`](https://github.com/settings/tokens) with [`public_repo`](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes) access.
- [`NPM_TOKEN`](https://docs.npmjs.com/cli/token)

See each [plugin](#plugins) documentation for required installation and configuration steps.

## Usage

The shareable config can be configured in the [**semantic-release** configuration file](https://github.com/semantic-release/semantic-release/blob/master/docs/usage/configuration.md#configuration):

```json
{
  "extends": "@linters/semantic-release",
  "branch": "master"
}
```

## Plugins

This [configuration](https://github.com/developer239/linters/blob/master/packages/semantic-release/semantic-release/.releaserc.json) uses the following plugins:

- [`@semantic-release/changelog`](https://github.com/semantic-release/changelog)
- [`@semantic-release/commit-analyzer`](https://github.com/semantic-release/commit-analyzer)
- [`@semantic-release/release-notes-generator`](https://github.com/semantic-release/release-notes-generator)
- [`@semantic-release/npm`](https://github.com/semantic-release/npm)
- [`@semantic-release/git`](https://github.com/semantic-release/git)

### GitHub workflows

If you're [configuring GitHub actions](https://help.github.com/en/articles/configuring-a-workflow) the following yaml configuration will help you do just that:
```yml
name: release

on:
  push:
    branches:
      - master

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v1
      - uses: actions/setup-node@v1
        with:
          node-version: 12
          registry-url: https://registry.npmjs.org
      - name: Cache node modules
        uses: actions/cache@v1
        id: cache
        with:
          path: node_modules
          key: node-modules-${{ hashFiles('**/yarn.lock') }}

      - name: Install Dependencies
        if: steps.cache.outputs.cache-hit != 'true'
        run: yarn install

      - run: npx semantic-release
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
          GH_TOKEN: ${{ secrets.GH_TOKEN }}
```
