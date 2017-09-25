module.exports = {
    devtool: 'inline-source-map',
    entry: './src/script.ts',
    output: {
        filename: './dist/bundle.js'
    },
    resolve: {

        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: 'ts-loader' },
            { test: /\.html$/, loader: 'html-loader' }
        ]
    }
};