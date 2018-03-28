/**
 * karma test config
 */
require('babel-register')

 'use strict'

const webpackConfig = require('./webpack.config')

module.exports = function (config) {
  config.set({
    basePAth: '',

    frameworks: ['mocha', 'chai', 'phantomjs-shim'],

    files: [
      'node_modules/chai/chai.js',
      'src/**/*.ts',
      'test/**/*.spec.ts'
    ],

    exclude: [
      '**/*.swp'
    ],

    reporters: ['verbose', 'spec'],

    failOnemptyTestSuite: false,

    webpack: {
      devtool: '#source-map',
      module: webpackConfig.module,
      resolve: webpackConfig.resolve,
    },

    webpackMiddleware: {
      quiet: true,
      stats: {
        colors: true
      }
    },

    preprocessors: {
      'src/**/*.ts': ['webpack'],
      'test/**/*.spec.ts': ['webpack', 'sourcemap']
    },

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['PhantomJS'],

    browserConsoleLogOptions: {
      level: 'log',
      format: '%b %T %m',
      terminal: true
    },

    singleRun: false,

    concurrency: Infinity
  })
}