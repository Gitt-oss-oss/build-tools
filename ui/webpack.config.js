const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
       new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
            filename: 'index.html',
        }),
       new CopyWebpackPlugin({
           patterns: [
               {
                   from: path.resolve(__dirname, 'src', 'style.css'),
                   to: path.resolve(__dirname, 'dist/css'),
               }
            ]
                  
        })  
    ] 
};