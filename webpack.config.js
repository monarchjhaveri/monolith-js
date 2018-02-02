const path = require('path');
module.exports = {
  entry: {
    main: './src/main/main.tsx',
    canvas: './src/canvas/canvas.ts'
  },
  output: {
    path: path.resolve('dist'),
    filename: '[name]_bundle.js'
  },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]},
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.[tj]sx?$/, loader: "source-map-loader" }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 3000
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
  }
}