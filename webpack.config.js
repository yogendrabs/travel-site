var path = require('path');

module.exports = {
    mode: "none",
    entry: "./app/assets/scripts/App.js",
    output: {
        path: path.resolve(__dirname, "./app/temp/scripts"),
        filename: "App.js"
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-env']
                },
                test: /\.js$/,
                exclude: /node-modules/
            }
        ]
    }
}