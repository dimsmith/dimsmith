const path = require("path")
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CopyPlugin = require("copy-webpack-plugin")

module.exports = {
    mode: "production",
    entry: "./src/assets/app.js",
    output: {
        path: path.resolve(__dirname, "./dist/assets"),
        filename: "app.build.min.js",
        publicPath: "/dist/assets"
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader"
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "./src/portfolio.json"),
                    to: path.resolve(__dirname, "./dist/portfolio.json")
                },
                {
                    from: path.resolve(__dirname, "./src/assets/images"),
                    to: path.resolve(__dirname, "./dist/assets/images")
                }
            ]
        })
    ]
}
