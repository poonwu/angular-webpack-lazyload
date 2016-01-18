var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        index: path.join(__dirname, 'app/app.js')
    },
    output: {
        path: "app/",
        publicPath: "js/",
        filename: "bundle.js",
    },
    module: {
        preLoaders: [
          { 
            test: /\.js$/,
            loader: 'baggage?[file].html' 
          }
        ],
        loaders: [
          {
            test: /\.html$/,
            loader: 'ngtemplate?relativeTo=' + __dirname + '/app/!html'
          }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
           _: 'lodash'
        })
   ]
};
