'use strict';

/* =========================================================================================
 * Import Librarys
 * ========================================================================================= */

var webpack  = require ('webpack');
var path     = require ('path');

var HtmlWebpackPlugin  = require ('html-webpack-plugin');
var ExtractTextPlugin  = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'source-map', // source-map
    entry: {
        'app'    : [ './application/bootstrap' ],
        'vendor' : [ './application/vendor' ]
    },
    output: {
        path              : path.resolve (__dirname, 'public/build'),
        filename          : '[name].bundle.min.js',
        publicPath        : 'public/build/',
        sourceMapFilename : '[name].bundle.js.map'
    },
    resolve: {
        extensions: [ '.ts', '.js', '.html' ]
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: [
                {
                    loader: 'awesome-typescript-loader',
                    options: { configFileName: path.resolve(__dirname, 'tsconfig.json') }
                } , 'angular2-template-loader'
                ]
            },
            {
                test: /\.css$/,
                exclude: path.resolve(__dirname, 'application'),
                loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader?sourceMap' })
            },
             {
                test: /\.css$/,
                include: path.resolve(__dirname, 'application'),
                loader: 'raw-loader'
            },
            {
                test: /\.html$/,
                include: path.resolve(__dirname, 'public/views'),
                loader: 'html-loader'
            },
        ]
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin ({ minimize: true, compress: { warnings: false }, mangle: { keep_fnames: true } }),
        new webpack.optimize.CommonsChunkPlugin({ name: [ 'app', 'vendor'] }),
        new webpack.LoaderOptionsPlugin({ debug: true }),
        new webpack.ContextReplacementPlugin( /angular(\\|\/)core(\\|\/)@angular/, path.resolve(__dirname, '../application'))
    ]
};