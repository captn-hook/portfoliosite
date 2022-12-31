const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'pb_public'),
    },

    plugins: [new MiniCssExtractPlugin(), 
        new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './src/index.html'),
        minify: true
    })],

    module: {
        rules: [
            //CSS
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            }
        ]
    }
};