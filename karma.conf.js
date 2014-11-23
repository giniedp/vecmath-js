// Karma configuration
// Generated on Sun Oct 27 2013 22:48:20 GMT+0100 (W. Europe Standard Time)
(function(){

  'use strict';
  module.exports = function(config) {


    config.set({

      // base path, that will be used to resolve files and exclude
      basePath: '',

      // frameworks to use
      frameworks: ['qunit'],

      // list of files / patterns to load in the browser
      files: [
        'src/vec2.js',
        'src/vec3.js',
        'src/vec4.js',
        'src/quat.js',
        'src/mat4.js',


        'test/vec2-test.js',
        'test/vec3-test.js',
        'test/vec4-test.js',
        'test/quat-test.js',
        'test/mat4-test.js'
      ],

      // list of files to exclude
      exclude: [

      ],

      // test results reporter to use
      // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
      reporters: ['dots', 'coverage'],

      preprocessors: {
        // source files, that you wanna generate coverage for
        // do not include tests or libraries
        // (these files will be instrumented by Istanbul)
        'src/*.js': ['coverage']
      },
      // optionally, configure the reporter
      coverageReporter: {
        type : 'html',
        dir : 'coverage/',
        file : 'coverage.html'
      },

      // web server port
      port: 9876,

      // enable / disable colors in the output (reporters and logs)
      colors: true,

      // level of logging
      // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
      logLevel: config.LOG_INFO,

      // enable / disable watching file and executing tests whenever any file changes
      autoWatch: true,

      // Start these browsers, currently available:
      // - Chrome
      // - ChromeCanary
      // - Firefox
      // - Opera (has to be installed with `npm install karma-opera-launcher`)
      // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
      // - PhantomJS
      // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
      browsers: ['PhantomJS'],

      // If browser does not capture in given timeout [ms], kill it
      captureTimeout: 60000,

      // Continuous Integration mode
      // if true, it capture browsers, run tests and exit
      singleRun: false
    });
  };

}());


