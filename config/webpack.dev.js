const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        main: path.resolve(__dirname, '../src', 'main.js'),
        ts: path.resolve(__dirname, '../src', 'index.ts'),
        polyfills: path.resolve(__dirname, '../src', 'angular', 'polyfills.ts'),
        angular: path.resolve(__dirname, '../src', 'angular', 'main.ts'),
    },
    mode: 'development',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../build')
    },
    devServer: {
       historyApiFallback: true,
       contentBase: 'build',
       overlay: true
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.(js|jsx)$/,
                exclude: /node_modules/
            },
            {
                use: 'ts-loader',
                exclude: /node_modules/,
                test: /\.tsx?$/
            },
            {
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            config: {
                                path: path.resolve(__dirname)
                            }
                        }
                    },
                ],
                test: /\.css$/
            },
            {
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            config: {
                                path: path.resolve(__dirname)
                            }
                        }
                    },
                    'sass-loader'],
                test: /\.(scss|sass)$/
            },
            {
                use: [
                    {
                        loader: 'html-loader',
                    }
                ],
                test: /\.html$/
            },
            {
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[name]-[hash].[ext]'
                        }
                    }
                ],
                test: /\.(jpg|png|gif)$/
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    plugins: [
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core/,
            path.join(__dirname, '../src'),
            {}
        ),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, '../src/index.html')
        })
    ]
};
