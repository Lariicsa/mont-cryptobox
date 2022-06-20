const { defineConfig } = require("@vue/cli-service");
const CompressionPlugin = require("compression-webpack-plugin");
module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  chainWebpack(config) {
    config.plugins.delete("prefetch");
    config.plugin("CompressionPlugin").use(CompressionPlugin);
    config.optimization.splitChunks().clear();
  },
});


