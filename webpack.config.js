/**
 * Created by Geo on 16/2/17.
 */
var path = require("path");
module.exports = {
    entry: "./js/ifullpage.js",
    output: {
        path: path.join(__dirname, "js/bundle"),
        filename: "bundle.js"
    },
    module: {

    }
};
