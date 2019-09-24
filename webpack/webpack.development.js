const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NODE_ENV = process.env.NODE_ENV;
const SvgSpriteHtmlWebpackPlugin = require('svg-sprite-html-webpack');

module.exports = {
  mode: NODE_ENV,
  module: {
    rules: [
      {
        test: /\.(scss|sass|css)$/,
        use: [
          {
            loader: 'style-loader'
          },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: SvgSpriteHtmlWebpackPlugin.getLoader()
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/assets/templates/index.html'
    }),
    new SvgSpriteHtmlWebpackPlugin({
      generateSymbolId: (svgFilePath, svgHash) => {
        return `i_-_${svgHash}`;
      }
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    historyApiFallback: true,
    hot: true,
    open: true,
    port: 4000
  }
};
