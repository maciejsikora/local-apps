const path = require('path');

module.exports = {
  entry: { 
    bugs: './src/bugs.js',
    movies: './src/movies.js',
    food: './src/food.js',
    shop: './src/shop.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'stage-2']
          }
        }
      }
  ]},
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9001,
    hot: true,
    watchContentBase: true
  }
};