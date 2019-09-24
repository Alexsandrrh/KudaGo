const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;

const config = {
  mode: NODE_ENV,
  entry: {
    bundle: path.resolve('./src/index.js')
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'assets/js/[name].[hash:10].js',
    chunkFilename: 'assets/js/[name].[hash:10].chunk.js',
    publicPath: '/'
  },
  resolve: {
    extensions: [
      '.js',
      '.ts',
      '.tsx',
      '.jsx',
      '.scss',
      '.scss',
      '.css',
      '.json',
      '.html'
    ]
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader' },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './assets/fonts'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new webpack.WatchIgnorePlugin([path.resolve(__dirname, 'node_modules')]),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV),
      IS_DEV: NODE_ENV === 'development',
      IS_PROD: NODE_ENV === 'production'
    })
  ],
  optimization: {
    splitChunks: {
      name: true,
      chunks: 'all',
      cacheGroups: {
        vendor: {
          name: 'vendors',
          filename: 'js/[name].[hash:10].js',
          test: /node_modules/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  }
};

if (NODE_ENV === 'development') {
  module.exports = merge(config, require('./webpack/webpack.development'));
} else if (NODE_ENV === 'production') {
  module.exports = merge(config, require('./webpack/webpack.production'));
}
