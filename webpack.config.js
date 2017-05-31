const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin');

const templates = ['signup_provider_selection'].map(template => {
  return new HtmlWebpackPlugin({
    filename: template + '.html',
    template: 'templates/' + template + '.hbs'
  });
});

module.exports = {
  entry: './styles/main.scss',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader'
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader'
            },
            {
              loader: 'sass-loader' // compiles Sass to CSS
            }
          ]
        })
      }
    ]
  },
  plugins: [new ExtractTextPlugin('styles.css')]
    .concat(templates)
    .concat(new StyleExtHtmlWebpackPlugin('styles.css'))
};
