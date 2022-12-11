const {merge} = require('webpack-merge');

module.exports = (config) => merge(config, {
  experiments: {
    syncWebAssembly: true,
    asyncWebAssembly: true
  }
})
