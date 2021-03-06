var path = require('path');

module.exports = {
    entry: "./index.ts",
    output: {
        filename: "bundle.js"
    },
    devtool: 'source-map',

    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js'],
        modules: [ path.join(__dirname, "node_modules") ],
        fallback: path.join(__dirname, "node_modules")
    },
    resolveLoader: {fallback: path.join(__dirname, "node_modules")},

    module: {
        loaders: [
            {
                test: /\.ts$/, loader: 'ts-loader'
            }
        ]
    },
    noParse: [
        path.join(__dirname, 'node_modules', 'zone.js', 'dist')
    ]
};