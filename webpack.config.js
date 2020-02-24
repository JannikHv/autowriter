const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/global.ts'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'autowriter.min.js',
    // library: 'Autowriter',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.tsx?$/,
        use: ['awesome-typescript-loader'],
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.ts'],
    modules: [path.resolve(__dirname, 'src')],
  },
  mode: 'development',
  devtool: 'sourceMap'
};
