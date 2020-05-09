# Contributing

### Development Environment

There is really not much too it. As long as you have some experience with:
 - [Lerna](https://github.com/lerna/lerna) (there is a great tutorial repository [ahmadawais/lerna-tutorial](https://github.com/ahmadawais/lerna-tutorial))
 - [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces)
 
After you fork this repository, all you have to do is run:

```
yarn install
```

Now you can party 🎉🎉 and do some work. 🙌

### Guidelines

Please, don't skip git hooks:

- we all have to use [conventional commit messages](https://github.com/conventional-changelog/commitlint) for semantic release to work
- we all have to fix eslint errors before we commit new changes

**Thank you for considering your help to this repository.** 😊

## Commit Guidelines

| Commit Type | Title                    | Description                                                                                                 | Emoji | Release                        | Include in changelog |
| :---------: | ------------------------ | ----------------------------------------------------------------------------------------------------------- | :---: | ------------------------------ | :------------------: |
|   `feat`    | Features                 | A new feature                                                                                               |  ✨   | `minor`                        |        `true`        |
|    `fix`    | Bug Fixes                | A bug Fix                                                                                                   |  🐛   | `patch`                        |        `true`        |
|   `docs`    | Documentation            | Documentation only changes                                                                                  |  📚   | `patch`                        |        `true`        |
|   `style`   | Styles                   | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)      |  💎   | -                              |        `true`        |
| `refactor`  | Code Refactoring         | A code change that neither fixes a bug nor adds a feature                                                   |  📦   | -                              |        `true`        |
|   `perf`    | Performance Improvements | A code change that improves performance                                                                     |  🚀   | `patch`                        |        `true`        |
|   `test`    | Tests                    | Adding missing tests or correcting existing tests                                                           |  🚨   | -                              |        `true`        |
|   `build`   | Builds                   | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)         |   🛠  | `patch`                        |        `true`        |
|    `ci`     | Continuous Integrations  | Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs) |  ⚙️   | -                              |        `true`        |
|   `chore`   | Chores                   | Other changes that don't modify src or test files                                                           |  ♻️   | `patch`                        |        `true`        |
|  `revert`   | Reverts                  | Reverts a previous commit                                                                                   |   🗑  | -                              |        `true`        |
