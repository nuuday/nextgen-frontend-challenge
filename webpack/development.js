const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./common");
const middleware = require("./middleware");

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    port: 3000,
    hot: true,
    historyApiFallback: true,
    before: middleware,
    contentBase: path.join(__dirname, "../static"),
    contentBasePublicPath: "/static",
    stats: "errors-warnings",
    watchOptions: {
      ignored: /node_modules/,
    },
  },
});
