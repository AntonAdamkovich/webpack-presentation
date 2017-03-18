const path = require('path');
const webpack = require('webpack');
const config = {
    context: path.join(__dirname, 'src/js/'),   //working dir
    entry: './main.js',                         //src/js/main.js
    output: {
        path: './dist',
        filename: 'build.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        'es2015',
                    ]
                }
            },
            /*{
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },*/
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
    ]
}
module.exports = config;