const path = require('path');

module.exports = {
    mode: 'develoment',
    devtool: 'eval-source-map',
    entry: './src/index.ts',
    module: {
        rules: [
            { 
                test: /\.ts$/,
                use: 'ts-loader',
                include: [ path.resolve(__dirname, 'src')  ]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        publicPath: 'public',
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    devServer: {
        contentBase: [
            path.join(__dirname, 'public'), 
            path.join(__dirname, 'assets')
        ],
        port: 9000
    }
}