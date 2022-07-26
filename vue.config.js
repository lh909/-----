const { defineConfig } = require("@vue/cli-service");
const url = process.env.VUE_APP_BASE_API;
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: "./",
  // publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  outputDir: "dist",
  indexPath: "index.html",
  devServer: {
    port: 8080,
    open: false,
    proxy: {
      "/api/": {
        target: url + ":9003/",
        changeOrigin: true, //是否跨域  是true
        ws: true, //加强跨域,
        pathRewrite: {
          "^/api": "", //请求时用api
        },
      },
    },
  },
});
