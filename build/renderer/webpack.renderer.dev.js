const path = require("path");
const { spawn } = require("child_process");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BASE_CONFIG = require("./webpack.renderer.base");
//多入口配置
const entry = {
  main: path.resolve(__dirname, "../../renderer/main/index.js"),
};

/* renderer 开发环境配置 */
module.exports = merge(BASE_CONFIG, {
  devtool: "inline-source-map",
  mode: "development",
  target: "electron-renderer",
  entry,
  plugins: [
    ...Object.keys(entry).map(
      (entryName) =>
        new HtmlWebpackPlugin({
          inject: "body",
          scriptLoading: "defer",
          template: path.join(__dirname, "../../template/index.html"),
          minify: false,
          filename: `${entryName}.html`,
          chunks: [entryName],
        })
    ),
  ],
  devServer: {
    port: process.env.PORT || 8888,
    hot: true,
    headers: {'Access-Control-Allow-Origin': '*'},
    // before() {
    //   console.log("start main process...");
    //   spawn("npm", ["run", "start-main-dev"], {
    //     shell: true,
    //     env: process.env,
    //     stdio: "inherit",
    //   })
    //     .on("close", (code) => process.exit(code))
    //     .on("error", (spawnError) => console.error(spawnError));
    // },
  },
});
