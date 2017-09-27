const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
module.exports = {
    devtool: 'inline-source-map',
    entry: {
        content: './src/content/script.ts',
        background: './src/background/script.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: 'ts-loader' },
            { test: /\.html$/, loader: 'html-loader' },
            {
                test: /\.css$/,
                loader: 'style-loader'
            },
            {
                test: /\.css$/,
                loader: 'css-loader'
            }
        ]
    },
    plugins: [
        new UglifyJSPlugin()
    ]
};