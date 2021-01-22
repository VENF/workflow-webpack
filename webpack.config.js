const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {

    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    miniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpg|png|gif|svg|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'static/',
                            useRelativePath: true,
                        }
                    }
                ]
            },
            {
                test: /\.(jpg|png|gif|svg|ttf|otf)$/,
                use: [
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: false,
                            disable: false,

                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },

                            optipng: {
                                enabled: true,
                            },

                            pngquant: {
                                quality: [0.65, 0.90],
                                speed: 4
                            },

                            gifsicle: {
                                interlaced: false,
                            },

                            webp: {
                                quality: 75
                            }
                        }
                    }
                ]
            },
        ]
    },

    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html',
            minify: true
        }),
        new miniCssExtractPlugin({
            filename: 'css/main.css'
        })
    ]
}