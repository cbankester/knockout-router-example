var path = require('path');
var webpack = require('webpack');

// Configuration data
module.exports = {
    entry: './src/client.js',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'client.js'
    },
    // allow modules listed in the bower_components folder to be loaded
    resolve: {
      root: [ path.join(__dirname, 'bower_components') ]
    },
    plugins: [
      // use the `main` key of modules' bower.json to determine the files to load
      new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
        ),
      // things specified here will be provided globally to all loaded modules
      new webpack.ProvidePlugin({
        ko: 'knockout',
        'knockout-router': 'knockout-router'
      })
    ],
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', query: {compact: false} }
        ]
    }
};
