'use strict';

const Path = require('path');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (options) => {
  const dest = Path.join(__dirname, 'dist');
  const port = 3000;
  const rootPath = Path.join(__dirname);
  
  let webpackConfig = {
    devtool: 'cheap-eval-source-map',
    entry: [
      './src/index.tsx'
    ],
    mode: process.env.NODE_ENV,
    output: {
      path: dest,
      filename: 'bundle.[hash].js',
      publicPath: '/assets'
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        minify: false
      })
    ],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: {
            loader: 'ts-loader',
            options: {
              silent: false,
              transpileOnly: true,
            },
          },
        },
      ]
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"],
      alias: {
        '@': Path.join(rootPath, 'src'),
      },
    },
  };

  webpackConfig.plugins.push(
    new Webpack.HotModuleReplacementPlugin()
  );

  webpackConfig.devServer = {
    contentBase: '/',
    hot: true,
    port,
    inline: true
  };

  return webpackConfig;
};
