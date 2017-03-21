"use strict";
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from "extract-text-webpack-plugin";
import path from 'path';
import autoprefixer from 'autoprefixer';

const isProd = process.env.NODE_ENV === 'production';
const src = `${__dirname}/src`;
const dist = `${__dirname}/dist`;
const modulesDirectories = [src, 'node_modules'];

let extractCss = new ExtractTextPlugin(`css/[name]${isProd ? '.[hash:6]' : ''}.css`);

const config = {
    devServer: {
        inline: true,
        hot: true,
    },
    entry: {
        main: [`${src}/index.js`],
    },
    output: {
        path: dist,
        filename: `js/[name]${isProd ? '.[hash:6]' : ''}.js`,
        chunkFilename: 'js/[name].[hash:6].js',
        publicPath: isProd ? '/dist/' : 'http://localhost:8080/',
    },
    resolve: {
        modules: modulesDirectories,
        extensions: ['.js', '.jsx'],
        alias: {
            js: `${src}/js/`,
            scss: `${src}/scss/`,
            img: `${src}/img/`,
            shared: `${src}/js/shared/`,
        }
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2017', 'react']
                }
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            },
            {
                test: /\.json/,
                loader: "json-loader"
            },
            {
                test: /fonts\/.*?\.(woff|woff2|eot|ttf|svg)\??(.*?)$/,
                loader: 'url-loader',
                query: {
                    limit: 256,
                    publicPath: '/dist/',
                    name: 'fonts/[name]-[hash:6].[ext]'
                }
            },
            {
                test: /^(?!.*fonts)\/.*?\.(jpg|jpeg|gif|png|svg|ico)$/,
                loader: 'url-loader',
                query: {
                    limit: 1024,
                    publicPath: '/dist/',
                    name: 'img/[name]-[hash:6].[ext]'
                }
            },
            {
                test: /\.scss/,
                exclude: /node_modules/,
                loader: extractCss.extract([
                    `css-loader?modules&importLoaders=1&localIdentName=[local]--[hash:base64:4]${isProd ? '' : '?sourceMap'}`,
                    `postcss-loader${isProd ? '' : '?sourceMap'}`,
                    `resolve-url-loader${isProd ? '' : '?sourceMap'}`,
                    `sass-loader${isProd ? '' : '?sourceMap'}`
                ].join('!'))
            },
            {
                test: /\.css/,
                exclude: /node_modules/,
                loader: extractCss.extract(`css${isProd ? '!postcss' : ''}`)
            }
        ]
    },
    watchOptions: {
        ignored: /node_modules|bower_components/
    },
    devtool: 'source-map',
    plugins: [
        new webpack.ProvidePlugin({ jQuery: 'jquery' }),
        new webpack.DefinePlugin({
            isProduction: isProd
        }),
        new HtmlWebpackPlugin({
            filename: isProd ? '../index.html' : 'index.html',
            template: `${src}/index.ejs`,
            inject: false,
            dev: !isProd,
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: function () {
                    return [
                        autoprefixer({
                            diff: false,
                            browsers: ['> 1%', 'last 50 versions', 'Firefox ESR', 'Opera 12.1']
                        })
                    ]
                },
                htmlLoader: {
                    root: path.resolve(__dirname),
                    attrs: ['img:src'],
                    xhtml: true,
                    interpolate: true
                }
            },
        }),
        extractCss
    ]
};

if (isProd) {
    config.plugins.push(new webpack.optimize.UglifyJsPlugin())
}

export default config;