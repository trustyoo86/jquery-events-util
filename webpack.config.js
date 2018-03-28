require('babel-register')

const path = require('path')
const webpack = require('webpack')

const isProd = process.env.NODE_ENV === 'production'

const config = {
  entry: {
    'events-util': path.resolve(__dirname, 'src', 'event.ts')
  },
  devtool: isProd ? false : '#source-map',
  plugins: [],
  output: {
    filename: !isProd ? '[name]-bundle.js' : '[name].min.js',
    path: path.resolve('./dist')
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.ts$/,
        use: [
          'awesome-typescript-loader'
        ],
        exclude: /node_modules/
      }
    ]
  }
}

if (isProd) {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin()
  )
}

module.exports = config