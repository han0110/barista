/*  eslint-disable */

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
  {
    test: /\.jsx?$/,
    loaders: ['babel-loader'],
    include: path.resolve(__dirname, 'src'),
    exclude: /node_modules/,
  },
  {
    test: /\.(css|scss)$/,
    use: ExtractTextPlugin.extract({
      use: [{
        loader: 'css-loader',
        options: {
          modules: true,
          importLoaders: 2,
          localIdentName: '[name]__[local]__[hash:base64:5]',
        },
      }, {
        loader: 'postcss-loader',
      }, {
        loader: 'sass-loader',
      }],
    }),
  },
  {
    test: /\.png/,
    exclude: /node_modules/,
    loader: "url-loader?limit=10000&mimetype=image/png&name=asset/image/[hash].[ext]"
  },
  {
    test: /\.otf/,
    exclude: /node_modules/,
    loader: "url-loader?limit=10000&mimetype=font/otf&name=asset/font/[name].[ext]"
  },
];
