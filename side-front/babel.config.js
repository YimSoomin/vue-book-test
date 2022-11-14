module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  resolve: {
    fallback: {
      fs: "empty",
      Buffer: false,
      http: "empty",
      https: "empty",
      zlib: "empty"
    }
  },
  module: {
    unknownContextCritical: false
  }

}

