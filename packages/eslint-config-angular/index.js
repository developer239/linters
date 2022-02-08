const components = require('./components')
const templates = require('./templates')
const typescript = require('./typescript')

module.exports = {
  root: true,
  env: {
    es6: true,
  },
  overrides: [typescript, components, templates],
}
