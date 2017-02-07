var path = require('path');
var webpack = require('webpack');
var node_modules_dir = path.resolve(__dirname, 'node_modules');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  entry: {
    app: path.resolve(__dirname, 'app/index.js'),
    vendor: [
      'draft-js', 'draft-js-inline-toolbar-plugin', 'draft-js-plugins-editor',
      'lodash', 'react', 'react-dom', 'react-redux', 'rebass', 'redux'
    ]
  },
  resolve:{
    modules: ['app', 'node_modules'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [{
      test: /\.jsx?$/, // A regexp to test the require path. accepts either js or jsx
      loader: 'babel-loader', // The module to load. "babel" is short for "babel-loader"
      exclude: [node_modules_dir]
    },{
      test: /\.s?css$/,
      loader: 'style-loader!css-loader!sass-loader'
    },{
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "url-loader?limit=10000&minetype=application/font-woff"
    },{
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "file-loader"
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: '[name].[chunkhash].js' }),
    new HtmlWebpackPlugin({
      hash: true,
      template: 'build/index.html.template'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        sequences: true,
        dead_code: true,
        conditionals: true,
        booleans: true,
        unused: true,
        if_return: true,
        join_vars: true,
        drop_console: true
      }
    })
  ]
};

module.exports = config;
