const webpack = require('webpack')
const validate = require('webpack-validator')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/resources/index.html',
    filename: 'index.html',
    inject: 'body'
})

module.exports = validate({
    context: __dirname + '/dist',

    entry: __dirname + '/resources/js/main.js',

    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },

    devServer: {
        inline: true,
        port: 2000
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            },
            {
                test: /\.ogg$/,
                loader: 'file-loader'
            }
        ],
    },

    plugins: [
        new webpack.ProvidePlugin({
            'React': 'react',
            'ReactDOM': 'react-dom'
        }),
        new ExtractTextPlugin('style.css'),
        HtmlWebpackPluginConfig,
    ]
})
