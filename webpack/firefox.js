const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const baseManifest = require('../ext/manifest/firefox.json')
const WebpackExtensionManifestPlugin = require('webpack-extension-manifest-plugin')

const config = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: {
    app: path.join(__dirname, '../ext/app.js'),
    background: path.join(
      __dirname,
      '../ext/scripts/background/index.js'
    ),
  },
  output: {
    path: path.resolve(__dirname, '../firefox'),
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
      manifest: 'manifest.dev.json',
      filename: 'index.html',
      template: 'ext/index.html',
      hash: true,
    }),
    new CopyPlugin([
      {
        from: 'ext/icons',
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
        use: ['babel-loader'],
      },
      {
        test: /\.png$/,
        use: ['file-loader'],
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
