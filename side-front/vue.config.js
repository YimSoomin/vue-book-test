const { defineConfig } = require('@vue/cli-service')

const target = 'http://localhost:3000'
module.exports = defineConfig({
  transpileDependencies: true
  , devServer: {
    port: 8080,
    proxy: {
      '^/api': {
        target,
        changerOrinigin : true
      },
      '^/upload': {
        target,
        changerOrinigin : true
      },
      '^/download': {
        target,
        changerOrinigin : true
      }
    }
  }
})
