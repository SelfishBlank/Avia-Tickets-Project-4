const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HTMLPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],

    devServer: {
        static : {
            directory : path.join(__dirname, "dist")
        },
        port: 3000,
        devMiddleware:{
            publicPath: "https://localhost:3000/dist/",
        },
        hot: "only",
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}