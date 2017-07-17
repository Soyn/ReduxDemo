var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtools: 'eval-source-map',
  entry: {
    path: path.join(__dirname, '/index.jsx')
  },

  output: {
    path: path.join(__dirname, '/build/'),
    filename: 'bundle.js',
    publicPath: path.join(__dirname, '/build/')
  },

  module:{
    loaders: [
      {
        test: /\.json$/,
        loader: 'json'
      },

      {
      test: /\.(jsx|js)$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react', 'stage-0']
       }
      },
    ]
  },

  devServer: {
    contentBase: path.join(__dirname, '/build/'),
    colors: true,
    historyApiFallback: true,
    inline: true,
    port: 4501
  }

}
