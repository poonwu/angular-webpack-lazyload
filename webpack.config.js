var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        'bundle': path.join(__dirname, 'app/app.js'),
        'bundle.min': path.join(__dirname, 'app/app.js')
    },
    output: {
        path: "app/",
        publicPath: "js/",
        filename: "[name].js",
    },
    devtool: "source-map",
    module: {
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
        }),
        new webpack.optimize.UglifyJsPlugin({
          minimize: true,
          include: /\.min\.js$/,
          compress: {
            unused: false
          }
        }) 
   ]
};
