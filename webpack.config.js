const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //重新生成引用最新打包后的js文件的index.html

module.exports = {
    mode: "development",
    devServer: {
        contentBase: "./dist",//本地服务器所加载的页面所在的目录
        port: "3000",
        historyApiFallback: true,//在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        inline: true//当源文件改变时会自动刷新页面
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/src/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数，重新生成引用最新打包后的js文件的index.html
        })
    ]
}