'use strict';

var path = require('path');

var autoprefixer = require('autoprefixer'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    glob = require('glob'),
    mqpacker = require('css-mqpacker'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

/**
 * paths
 * @type {Object}
 */
var paths = (function(paths) {
  paths.cwd = __dirname;
  paths.src = path.join(paths.cwd, 'src');
  paths.dest = path.join(paths.cwd, 'dest');
  paths.assets = path.join(paths.src, 'assets');
  paths.styl = path.join(paths.assets, 'styl');
  paths.js = path.join(paths.assets, 'js');
  return paths;
})({});

/**
 * extracts
 * @type {Object}
 */
var extract = {
  css: new ExtractTextPlugin('../css/[name].css'),
  html: new ExtractTextPlugin('../../[name].html')
};

/**
 * webpack config
 * @type {Object}
 */
var webpackConfig = {

  entry: {
    main: path.join(paths.js, 'foo.js')
  },

  output: {
    path: path.join(paths.dest, 'assets/js'),
    root: path.join(paths.dest, 'assets/js'),
    publicPath: '/assets/js/',
    filename: '[name].js'
  },

  resolve: {
    root: [
      paths.js,
      paths.assets,
      paths.src,
      paths.cwd
    ]
  },

  module: {
    loaders: [{
      test: /\.styl$/,
      loader: extract.css.extract('style', 'css!postcss!stylus')
    }, {
      test: /\.jade$/,
      loader: extract.html.extract('html', 'raw!jade-html?pretty=true')
    }]
  },

  plugins: [
    new CleanWebpackPlugin(['dest'], {
      root: __dirname,
      verbose: true
    }),
    extract.css,
    extract.html
  ],

  stylus: {
    paths: [
      path.join(paths.styl, 'imports'),
      paths.styl,
      path.join(paths.cwd, 'node_modules')
    ],
    use: glob.sync(path.join(paths.styl, 'functions', '**/*.js'), {cwd: paths.cwd})
      .map(function(file) {
        return require(file)();
      }),
    'include css': true,
    url: {
      name: 'inline-url',
      limit: false
    }
  },

  postcss: function() {
    return [
      autoprefixer({
        browsers: ['> 0%'],
        remove: false
      }),
      mqpacker()
    ];
  }

};

module.exports = webpackConfig;
