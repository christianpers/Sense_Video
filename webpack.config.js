const path = require('path');
const merge = require('webpack-merge');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};
const webpack = require('webpack');


console.log('build', TARGET);

const common = {
  // Entry accepts a path or an object of entries. We'll be using the
  // latter form given it's convenient with more complex configurations.
  entry: {
    app: PATHS.app
  },
  resolve: {
    extensions: ['', '.js']
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: PATHS.app,
        loader: 'babel-loader',
        query: {
          presets: ["es2015"],  
        }
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css?sourceMap", "sass?sourceMap"],
        include: PATHS.app
      },
      { test: /\.(glsl|frag|vert)$/, loader: 'raw', exclude: /node_modules/ },
      { test: /\.(glsl|frag|vert)$/, loader: 'glslify', exclude: /node_modules/ }
    ]
  }
};

// Default configuration. We will return this if
// Webpack is called outside of npm.
if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
      contentBase: PATHS.build,

      // Enable history API fallback so HTML5 History API based
      // routing works. This is a good default that will come
      // in handy in more complicated setups.
      historyApiFallback: true,
      hot: false,
      inline: true,
      progress: true,

      // Display only errors to reduce the amount of output.
      stats: 'errors-only',

      // Parse host and port from env so this is easy to customize.
      //
      // If you use Vagrant or Cloud9, set
      host: process.env.HOST || '0.0.0.0',
      //
      // 0.0.0.0 is available to all network devices unlike default
      // localhost
      // host: process.env.HOST,
      port: process.env.PORT
    },
    plugins: [
      // new webpack.HotModuleReplacementPlugin()
      // new BrowserSyncPlugin({
      //   // browse to http://localhost:3000/ during development, 
      //   // ./public directory is being served 
      //   host: '0.0.0.0',
      //   port: 8080,
      //   server: { baseDir: ['build'] }
      // })
    ]
  });
}

if(TARGET === 'build') {
  module.exports = merge(common, {});
}