const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SvgSpriteHtmlWebpackPlugin = require('svg-sprite-html-webpack');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { NODE_ENV } = process.env;

module.exports = {
  mode: NODE_ENV,
  performance: {
    hints: false
  },
  module: {
    rules: [
      {
        test: /\.(scss|sass|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
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
    new MiniCssExtractPlugin({
      filename: 'assets/css/main.[hash:10].css',
      chunkFilename: 'assets/css/[name].[hash:10].css'
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/assets/templates/index.html',
      minify: {
        html5: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true,
        removeAttributeQuotes: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeOptionalTags: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributese: true,
        useShortDoctype: true
      }
    }),
    new SvgSpriteHtmlWebpackPlugin({
      generateSymbolId: (svgFilePath, svgHash) => {
        return `i_-_${svgHash}`;
      }
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        sourceMap: false,
        cache: true,
        parallel: true
      }),
      new OptimizeCSSAssetsPlugin()
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    historyApiFallback: true,
    hot: false,
    open: true,
    port: 80
  }
};
