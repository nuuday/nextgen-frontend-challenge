const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: path.resolve("src/main/index.tsx"),
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },
  output: {
    path: path.resolve("dist"),
    filename: "assets/js/master.[hash:4].js",
    publicPath: "/",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: path.resolve("src/main/index.html"),
      favicon: path.resolve("src/main/favicon.ico"),
    }),
    new MiniCssExtractPlugin({
      filename: "assets/css/master.[hash:4].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "ts-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(css|scss)?$/,
        exclude: [/\.module.(css|scss)?$/, /node_modules/],
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: true,
            },
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.module.(css|scss)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: true,
            },
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[local]-[hash:4]",
              },
              localsConvention: "dashesOnly",
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|webp|svg|woff|woff2|ttf|otf)$/,
        exclude: /node_modules/,
        loader: "file-loader",
        options: {
          name: "[path][name].[hash:4].[ext]",
          context: "src",
        },
      },
    ],
  },
  performance: {
    hints: false,
  },
};
