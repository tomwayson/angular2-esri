var webpackConfig = require('./webpack.karma.config');
webpackConfig.devtool = 'inline-source-map';

module.exports = function (config) {
  var _config = {
    basePath: '',

    frameworks: ['jasmine', 'dojo'],

    files: [
      // asset (HTML & CSS) paths loaded via Angular's component compiler
      // (these paths need to be rewritten, see proxies section)
      {
        pattern: './app/**/*.html',
        included: false,
        watched: true
      }, {
        pattern: './app/**/*.css',
        included: false,
        watched: true
      },

      // paths for debugging with source maps in dev tools
      {
        pattern: './app/**/*.ts',
        included: false,
        watched: false
      }, {
        pattern: './app/**/*.js.map',
        included: false,
        watched: false
      },

      {
        pattern: 'karma-test-shim.js',
        included: false
      },
      'karma-test-main.js'
    ],

    preprocessors: {
      './karma-test-shim.js': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      stats: 'errors-only'
    },

    webpackServer: {
      noInfo: true
    },

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    //logLevel: config.LOG_DEBUG,
    logLevel: config.LOG_INFO,

    reporters: ['progress'],
    port: 9876,
    colors: true,
    autoWatch: true,
    browsers: ['Chrome'],
    //browsers: ['PhantomJS'],
    singleRun: false,

    browserNoActivityTimeout: 100000
  };

  config.set(_config);
};