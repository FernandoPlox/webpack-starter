const HtmlWebPackPlugin         = require('html-webpack-plugin');
const MiniCssExtractPlugin      = require('mini-css-extract-plugin');
const CssMinimizerWebPackPlugin = require('css-minimizer-webpack-plugin');

const CopyPlugin                = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    optimization:{
        minimizer: [ new CssMinimizerWebPackPlugin()]
    },
    module: {
        rules: [
            {
                test: /\.css$/, // Expresión regular para archivos CSS
                exclude: /styles\.css$/, 
                use: ['style-loader', 'css-loader'], // Loaders a usar
            },
            {
                test : /styles\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            // {
            //     test: /\.(svg|jpg|png|gif)$/,
            //     use: [
            //         {
            //             loader: 'file-loader',
            //             options: {
            //                 esModule:false
            //             }
            //         }
            //     ]
            // }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html', //QUE ARCHIVO VA A TOMAR
            filename: './index.html'     //HACIA DONDE SE COLOCARÁ
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            ignoreOrder: false
        }),
        new CopyPlugin({
            patterns: [
                { from: 'src/assets', to: 'assets/' }
            ]
        })
    ]
}
