const path = require("path")
const VueLoaderPlugin = require('vue-loader/lib/plugin')
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
        new VueLoaderPlugin()
    ]
}