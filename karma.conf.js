module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      {pattern: 'app/libs/phaser/build/phaser.min.js', included: false},
      {pattern: 'app/game/**/*.js', included: false},
      {pattern: 'app/test/**/*.js', included: false},
      'app/require.conf.test.js',
    ],

    autoWatch : true,

    frameworks: ['jasmine','requirejs'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-requirejs',
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
