const typescript = require('./typescript')
const components = require('./components')
const templates = require('./templates')

module.exports = {
  root: true,
  env: {
    es6: true,
  },
  overrides: [typescript, components, templates],
}
