const webpack = require("webpack");
const path = require("path");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

// create main config object within file
// will write within this object to tell webpack what to do
module.exports = {
  // add properties (entry, output, mode)
  // entry point property is  root of bundle and beginning of dependency graph - needs relative path to client's code
  entry: {
    app: "./assets/js/script.js",
    events: "./assets/js/events.js",
    schedule: "./assets/js/schedule.js",
    tickets: "./assets/js/tickets.js",
  },
  // webpack takes entry point provided, bundles the code, and outputs bundled code to specified folder
  output: {
    filename: "[name].bundle.js",
    path: __dirname + "/dist",
  },
  module: {
    rules: [{
      test: /\.jpg$/i,
      use: [{
          loader: "file-loader",
          options: {
            esModule: false,
            name(file) {
              return "[path][name].[ext]"
            },
            publicPath: function (url) {
              return url.replace("../", "/assets/")
            }
          }
        },
        {
          loader: 'image-webpack-loader'
        }
      ]
    }]
  },
  // use plugin to let webpack know to use jQuery
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: "static", // the report outputs to an HTML file (called report.html) in the dist folder
    }),
  ],
  // mode provides the mode in which you want webpack to run
  // webpack runs in production mode by default; must specify different mode
  mode: "development",
};