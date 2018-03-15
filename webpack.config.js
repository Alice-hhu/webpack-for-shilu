// 引入node.js的path模块，path模块提供了一系列处理文件路径的方法
const path = require('path');


module.exports = {
    // 入口文件
    entry: './src/index.js',
    // 输出文件
    output: {
        // 输出文件名
        filename: 'bundle.js',
        // 输出文件路径
        // __dirname 项目根目录
        // path: __dirname + '/dist'
        // node.js的 path.resolve(from, to)方法（将相对路径转为绝对路径）
        path: path.resolve(__dirname, 'dist')
    }
};