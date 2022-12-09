const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './js/script.js',
    output: {
        filename: 'scriptFinal.js'
    },
    mode:'development',
    module: {
        rules:[ {
            test: /\.(c|sc|sa)ss$/,
            use: [{
                loader: MiniCssExtractPlugin.loader
            }, 'css-loader',
               'sass-loader'
            ]
        }]
    },
    plugins:[
        new MiniCssExtractPlugin()
    ]
}