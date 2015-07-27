module.exports = function (grunt) {
  grunt.initConfig({
    browserify: {
      main: {
        options: {
          transform: ['reactify']
        },
        files: {
          // 'public/build/bundle.js': 'components/App.jsx'
          'public/build/bundle.js': 'client.js'
        }
      }
    }
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', ['browserify:main']);

};
