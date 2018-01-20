const path = require('path');
module.exports = {
  entry: {
    parent: './src/parent/parent.js',
    canvas: './src/canvas/canvas.js'
  },
  output: {
    path: path.resolve('dist'),
    filename: '[name]_bundle.js'
  },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 3000
  }
}