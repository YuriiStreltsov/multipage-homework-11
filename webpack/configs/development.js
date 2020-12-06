const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('../utils/paths');

module.exports = env => ({
  devtool: 'cheap-eval-source-map',
  output: {
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: './index.html',
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      template: './pages/colorSwitch.html',
      filename: 'colorSwitch.html',
      chunks: ['colorSwitch'],
    }),
    new HtmlWebpackPlugin({
      template: './pages/promisification.html',
      filename: 'promisification.html',
      chunks: ['promisification'],
    }),
    new HtmlWebpackPlugin({
      template: './pages/timer.html',
      filename: 'timer.html',
      chunks: ['timer'],
    }),
  ],
  devServer: {
    contentBase: paths.BUILD_DIR,
    publicPath: '',
    historyApiFallback: true,
    compress: true,
    port: 4040,
    noInfo: true,
    quiet: true,
    clientLogLevel: 'warning',
    stats: 'errors-only',
    open: true,
  },
});
