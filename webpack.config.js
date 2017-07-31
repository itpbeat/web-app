var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public/');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: APP_DIR + '/components/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js?/,
      include: APP_DIR,
      loader: 'babel-loader'
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint-loader'
    }, {
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader']
    }, {
      test: /\.(svg|mp3|wav)$/,
      loader: 'file-loader'
    }, {
      test: /\.(jpe?g|png|gif|svg)$/,
      use: [{
        loader: 'file-loader'
      }, {
        loader: 'image-webpack-loader',
        options: {
          mozjpeg: {
            quality: 65
          },
          pngquant: {
            quality: "10-20",
            speed: 4
          },
          svgo: {
            plugins: [{
              removeViewBox: false
            }, {
              removeEmptyAttrs: false
            }]
          },
          gifsicle: {
            optimizationLevel: 7,
            interlaced: false
          },
          optipng: {
            optimizationLevel: 7,
            interlaced: false
          }
        }
      }]
    }]
  }
};

module.exports = config;
