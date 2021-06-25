const webpack = require("webpack");
const path = require("path");

// create main config object within file
// will write within this object to tell webpack what to do
module.exports = {
    // add properties (entry, output, mode)
    // entry point property is  root of bundle and beginning of dependency graph - needs relative path to client's code
    entry: "./assets/js/script.js",
    // webpack takes entry point provided, bundles the code, and outputs bundled code to specified folder
    output: {
        path: path.join(__dirname, "/dist"),
        filename: 'main.bundle.js'
    },
    // use plugin to let webpack know to use jQuery
    plugins: [
        // tell webpack which plugin to use
        new webpack.ProvidePlugin({
            $:'jquery',
            jQuery: 'jquery'
        }),
    ],
    // mode provides the mode in which you want webpack to run
    // webpack runs in production mode by default; must specify different mode
    mode: "development"
};