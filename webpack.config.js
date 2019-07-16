var path = require('path');
var HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
    entry : './src/index.jsx',
    output : {
        path : path.resolve(__dirname , 'dist'),
        filename: 'index_bundle.js'
    },
    module : {
        rules : [
            {test : /\.(js|jsx)$/, use:'babel-loader'},
            {test : /\.css$/, use:['style-loader', 'css-loader']},
            {test : /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }
        ]
    },
    mode : 'development',
    plugins : [
        new HtmlWebpackPlugin ({
            template : 'src/index.html'
        })
    ],
    devServer: {
        proxy: {
            '/flickr/': {
                target: 'https://www.flickr.com',
                pathRewrite: {'^/flickr/' : '/services/feeds/photos_public.gne?format=json&nojsoncallback=true&tags='},
                changeOrigin: true,
                secure: false,
            }
        }
    }

};