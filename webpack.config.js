const path = require('path');

module.exports = {
    mode:'development',
    entry: './src/js/main.jsx',

    output: {
        filename: 'bundled.main.js',
        path: path.resolve(__dirname, 'dist'),
        clean:true
    },
    module: {

        rules: [

        {

            test: /\.s[ac]ss$/i,
            exclude: /(node_modules|bower_components)/,
            use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
            ],

        },
        {
            test: /\.jsx$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env','@babel/preset-react']
                }
            }
        }

        ],

    },
};