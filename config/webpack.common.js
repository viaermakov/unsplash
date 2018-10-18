const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: {
        index: ['@babel/polyfill', './src/index.js'],
    },

    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[hash].bundle.js',
        chunkFilename: '[id].js',
        publicPath: '/'
    },

    resolve: {
        extensions: ['.js', '.jsx', '.json', '.scss'],
        alias: {
            src: path.resolve(__dirname, '../src')
        }
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: [':data-src'],
                        minimize: true
                    }
                }
            },
            {
                test: /\.(png|jpg|gif|jpeg|ttf)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',

                    }
                }]
            },
            {
                test: /\.svg/,
                loader: 'url-loader?limit=26000&mimetype=image/svg+xml'
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: "React",
            template: './public/index.html',
            filename: 'index.html'
        })
    ]
    
}