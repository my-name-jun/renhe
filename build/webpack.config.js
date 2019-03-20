var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

var distEnv = new webpack.DefinePlugin({
    NODE_ENV: '"uat"',
    ENV_HOST: '"https://hms-uat.test-cignacmb.com"'
});

module.exports = {
    entry: {
        "empty": "./akg/view/emptyProject/index.js",
        "jyjj": "./akg/view/jyjj/index.js",
        "success": "./akg/view/success/index.js",
        "wnx": "./akg/view/wnx/index.js",

    },
    output: {
        path: path.join(__dirname, "../dist/local"),
        publicPath: "/",
        filename: "js/[name].js",
        chunkFilename: "js/[id].chunk.js"
    },
    module: {
        loaders: [
            //加载器
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style", "css")
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style", "css!sass") //这里用了样式分离出来的插件，如果不想分离出来，可以直接这样写 loader:'style!css!sass'
            },
            {test: /\.html$/, loader: "html"},
            {
                test: /\.(png|jpg|jpeg|pdf|gif)$/,
                loader: "url-loader?limit=8000&name=./img/[hash].[ext]"
            },
            {
                test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
                loader: "file-loader"
            }
        ]
    },
    plugins: [
        distEnv,

        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            "window.$": "jquery",
            avalon: "avalon2"
        }),
        new webpack.ProvidePlugin({
            //前端调试库
            eruda: "eruda",
            "window.eruda": "eruda",
            verify: "wufan_verify_lib"
        }),
        new ExtractTextPlugin("css/[name].css"), //单独使用style标签加载css并设置其路径
        new CommonsChunkPlugin({
            name: "common.js",
            minChunks: 10
        }),
        new HtmlWebpackPlugin({
            filename: 'akg-emptyProject.html',
            chunks: ['common.js', 'akg_emptyProject'],
            template: './akg/view/emptyProject/index.html',
            inject: true,
            hash: true
        }),
        new HtmlWebpackPlugin({
            filename: 'jyjj.html',
            chunks: ['common.js', 'jyjj'],
            template: './akg/view/jyjj/index.html',
            inject: true,
            hash: true
        }),
        new HtmlWebpackPlugin({
            filename: 'success.html',
            chunks: ['common.js', 'success'],
            template: './akg/view/success/index.html',
            inject: true,
            hash: true
        }),
        new HtmlWebpackPlugin({
            filename: 'wnx.html',
            chunks: ['common.js', 'wnx'],
            template: './akg/view/wnx/index.html',
            inject: true,
            hash: true
        }),

    ],
    devServer: {
        contentBase: "../dist/local",
        disableHostCheck: true,
        proxy: {
            "/service/*": {
                target: "http://192.168.199.162:3000/",    //异步post操作
                // host: "hms-uat.test-cignacmb.com",
                changeOrigin:true,
                // secure: false,
                // onProxyRes: function onProxyRes(proxyRes, req, res) {
                //     if (proxyRes.headers.location) {
                //         var address = getIPAdress();
                //         proxyRes.headers.location =
                //             "http://" + address + ":8018"; //重写重定向路径
                //     }
                // }
            }
        }
    }
};

var getIPAdress = function () {
    //获取ip地址
    var interfaces = require("os").networkInterfaces();
    for (var devName in interfaces) {
        var iface = interfaces[devName];
        for (var i = 0; i < iface.length; i++) {
            var alias = iface[i];
            if (
                alias.family === "IPv4" &&
                alias.address !== "127.0.0.1" && !alias.internal
            ) {
                return alias.address;
            }
        }
    }
};
