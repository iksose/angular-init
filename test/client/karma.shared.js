var shared = function(config) {
    config.set({
        basePath: '../../',
        frameworks: ['mocha'],
        reporters: ['progress'],
        browsers: ['Chrome'],
        preprocessors: {
            '**/*.html': ['ng-html2js'],
            'public/app/index.js': ['browserify'],
            'test/client/helper/**/*.js': ['browserify']
        },
        ngHtml2JsPreprocessor: {
            stripPrefix: 'public/'
        },
        autoWatch: true,
        singleRun: false,
        colors: true,
        coverageReporter: {
            type: 'html',
            dir: 'test/coverage/'
        },
        browserify: {
            watch: true
        }
    });
};

// Mocha config
shared.files = [
    'test/client/helper/libs.js',
    'test/client/mocha.conf.js',
    'public/app/index.js',
    'public/app/**/*.html'
];

module.exports = shared;