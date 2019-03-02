const webpackMerge = require('webpack-merge');
const sass = require('sass');

const utils = require('./utils.js');
const commonConfig = require('./webpack.common.js');

const ENV = 'development';

module.exports = (options) => webpackMerge(commonConfig({env: ENV}), {
  devtool: 'cheap-module-source-map',
  mode: ENV,
  entry: [
    './src/main/webapp/app/index'
  ],
  output: {
    path: utils.root('build/www'),
    filename: 'app/[name].bundle.js',
    chunkFilename: 'app/[id].chunk.js'
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', {
          loader: 'sass-loader',
          options: { implementation: sass }
        }
        ]
      },
    ]
  },
});
