const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //重新生成引用最新打包后的js文件的index.html
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //webpack4用 分离css与js
const CleanWebpackPlugin = require("clean-webpack-plugin"); //清除dist文件夹的重复文件
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; //可视化形式分析打包内容

module.exports = {
    mode: "production",
    // entry:  __dirname + "/src/index.js",//已多次提及的唯一入口文件
    // output: {
    //   path: __dirname + "/dist",//打包后的文件存放的地方
    //   filename: "main-[hash].js" //打包后输出文件的文件名
    // },
    // devServer: {
    //     contentBase: "./dist",//本地服务器所加载的页面所在的目录
    //     port: "3003",
    //     historyApiFallback: true,//在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
    //     inline: true//当源文件改变时会自动刷新页面
    // },
    devtool: false,
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "style-loader", 
                    {
                        loader: "css-loader",
                        options: {
                            modules: true, // 指定启用css modules
                            localIdentName: '[name]__[local]--[hash:base64:5]' // 指定css的类名格式
                        }
                    }, 
                    "postcss-loader"
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                exclude: /node_modules/,
                use:[{
                  loader: 'file-loader',
                  options:{
                    name:'images/[name].[hash:5].[ext]'
                  }
                }]
            },
            {
                test: /\.(htm|html)$/,
                use: ['html-withimg-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/src/index.tmpl.html", //new 一个这个插件的实例，并传入相关的参数，重新生成引用最新打包后的js文件的index.html
            minify:{  //压缩HTML文件
                removeComments:true,  //移除HTML中的注释
                collapseWhitespace:true,  //删除空白符与换行符
                removeEmptyAttributes:true,
            },
            chunks: ['common', 'index'],
            inject: false
        }),
        // new webpack.HotModuleReplacementPlugin(), //热加载插件
        // new MiniCssExtractPlugin({
        //     // Options similar to the same options in webpackOptions.output
        //     // both options are optional
        //     filename: "./src/styleSheets/[name].css",
        //     chunkFilename: "./src/styleSheets/[id].css"
        // }),
        new CleanWebpackPlugin('dist/*.*', {  //清除dist文件夹的重复文件
            root: __dirname,
            verbose: true,
            dry: false
        }),
        new BundleAnalyzerPlugin({ analyzerPort: 3013 })
    ]
}