const ExtractTextPlugin = require("extract-text-webpack-plugin");

//生产环境时引入 ExtractTextPlugin
// const extractLess = new ExtractTextPlugin({
//   filename: "[name].[contenthash].css",
//   disable: process.env.NODE_ENV === "development",
// });

module.exports = {
  module: {
    rules: [
      {
        test: /\.less$/,
        /* use: extractLess.extract({
          use: [
            {
              loader: "css-loader",
            },
            {
              loader: "less-loader",
            },
          ],
          // use style-loader in development
          fallback: "style-loader",
        }), */
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: "css-loader",
          },
          {
            loader: "less-loader",
          },
        ]
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
          },
        },
      },
    ],
  },
};
