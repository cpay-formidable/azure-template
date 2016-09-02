var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        './app/App.js'
    ],
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js'
    },
    devtool: '#source-map',
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        preloaders: [{
            test: /\.scss/,
            loader: 'import-glob-loader'
        }],
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                cacheDirectory: true,
                plugins: ['transform-decorators-legacy' ],
                presets: ['react', 'es2015', 'stage-2']
            }
        }, {
            test: /\.scss$/,
            loader: 'style-loader!css-loader!' + path.resolve(__dirname, 'node_modules/sass-loader/index.js')
        }, {
            test: /\.css$/, 
            loader: 'style-loader!css-loader?importLoaders=1'
        }, {
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.(png|woff|woff2|eot|ttf|svg)$/,
            loader: 'url-loader?limit=100000'
        }]
    }
};
