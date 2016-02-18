/**
 * Created by Geo on 16/2/17.
 */
var path = require("path");
var webpack = require("webpack");
module.exports = {
    entry: {
        "style": "./js/style.js",
        "bundle": "./js/ifullpage.js"

    },
    output: {
        path: path.join(__dirname, "js/bundle"),
        filename: "[name].js"
    },
    module: {
        loaders: [
            {test: /.css$/, loader: "style!css"}
        ]
    },
    resolve: {
        root: [path.join(__dirname, "bower_components")]
    },
    plugins: [
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(".bower.json", ["main"])
        )
    ]
};
