const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    mode: 'development',
    entry: {
        index: './resources/js/index.js',
        admin: './resources/js/admin.js',
        form: './resources/js/form.js',
    },
    output: {
        filename: '[name]-[hash].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            chunks: ['index'],
            inject: 'body',
            filename: 'index.html',
            template: './resources/html/index.html',
        }),
        new HtmlWebpackPlugin({
            chunks: ['admin'],
            inject: 'body',
            filename: 'admin.html',
            template: './resources/html/admin.html',
        }),
        new HtmlWebpackPlugin({
            chunks: ['form'],
            inject: 'body',
            filename: 'form.html',
            template: './resources/html/form.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
};