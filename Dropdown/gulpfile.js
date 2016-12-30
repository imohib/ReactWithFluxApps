var gulp = require('gulp');
var gutil = require('gulp-util');
var reactify = require('reactify');
var watchify = require('watchify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('default', function() {
  var bundler = watchify(
    browserify({
      entries: ['./src/app.jsx'],
      transform: [reactify],
      extensions: ['.jsx'],
      debug: true,
      cache: {},
      packageCache: {},
      fullPaths: true
    })
  );

  function build(file){
    if(file) gutil.log('Recompiling ' + file);
    return bundler
      .bundle()
      .on('error', gutil.log.bind(gutil, 'Broswerify Error'))
      .pipe(source('main.js'))
      .pipe(gulp.dest('./'));
  };

  build();
  bundler.on('update', build);
});
