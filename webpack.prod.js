const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const baseManifest = require('./chrome/manifest.prod.json')
const WebpackExtensionManifestPlugin = require('webpack-extension-manifest-plugin')

const config = {
  mode: 'production',
  entry: {
    app: path.join(__dirname, './chrome/app.js'),
    background: path.join(
      __dirname,
      './chrome/scripts/background/index.js'
    ),
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['*', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'fav extension',
      meta: {
        charset: 'utf-8',
        viewport:
          'width=device-width, initial-scale=1, shrink-to-fit=no',
        'theme-color': '#000000',
      },
      manifest: 'manifest.prod.json',
      filename: 'index.html',
      template: './chrome/index.html',
      hash: true,
    }),
    new CopyPlugin([
      {
        from: 'chrome/icons',
        to: 'icons',
      },
    ]),
    new WebpackExtensionManifestPlugin({
      config: {
        base: baseManifest,
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
}

module.exports = config
