const path = require('path')
const HtmlWebpackPlugin =require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    entry: path.resolve(__dirname, '..', 'src/main.ts'),
    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        filename: 'dist.bundle.js'
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '..', 'src/*'),
        },
        extensions: [".js", ".ts"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: '/node_modules/'
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 4000,
        open: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname, '..', 'public/index.html')
        }),
        new CleanWebpackPlugin(),
    ]
}