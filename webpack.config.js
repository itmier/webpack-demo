const path = require('path')
const outputPath = '/imgs'
if (process.env.NODE_ENV == 'production') {
    outputPath =  '/images'
}
module.exports = {
    mode: 'production',
    entry: './src/index.js',
    module: {
        rules: [{
            test: /\.(png|jpg|gif)$/,
            use: {
                loader: 'file-loader',
                options: {
                    // name就是原始名称,hash使用的是MD5算法,ext就是后缀
                    name: '[name]_[hash].[ext]',
                    outputPath: outputPath
                }
            }
        }]
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    }
}