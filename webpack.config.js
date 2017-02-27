const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: {
        home: './entry/home.js',
        user: './entry/user.js'
    },
    output: {
        filename: `[name].js`,
        chunkFilename: '[name].js',
        path: path.join(__dirname, '/dist')
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx', '.json'],
        descriptionFiles: ['package.json'],
        enforceExtension: false,
        mainFields: ['browser', 'main'],
        aliasFields: ['browser'],
        mainFiles: ['index']
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            query: {
                                modules: true,
                                localIdentName: '[name]__[local]__[hash:base64:5]',
                                context: './'
                            }
                        }
                    ]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].css',
            disable: false
        })
    ]
};
