const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //重新生成引用最新打包后的js文件的index.html
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; //可视化形式分析打包内容

module.exports = {
    mode: "development",
    devServer: {
        contentBase: "./dist",//本地服务器所加载的页面所在的目录
        port: "3003",
        historyApiFallback: true,//在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        inline: true,//当源文件改变时会自动刷新页面
        hot: true,
        host: '0.0.0.0', // 解决ip方式无法访问
        disableHostCheck: true // 解决设置host之后link无法点击
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                // loader: ["style-loader", "css-loader", "postcss-loader"],
                use: [
                    "style-loader", 
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
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
            hash:true,//防止缓存
            minify:{
                removeAttributeQuotes:true//压缩 去掉引号
            }
        }),
        //自动打开浏览器
        // new OpenBrowserPlugin({
        //   url: `http://localhost:3003`,
        // }),
        new webpack.HotModuleReplacementPlugin(), //热加载插件
        new BundleAnalyzerPlugin({ analyzerPort: 3013 })
    ]
}