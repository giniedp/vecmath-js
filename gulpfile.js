(function(){
  'use strict';

  var del = require('del');
  var gulp = require('gulp');
  var shell = require('gulp-shell');
  var concat = require('gulp-concat');
  var uglify = require('gulp-uglify');
  var sass = require('gulp-sass');

  var distDir = 'dist/';
  var distFile = 'vecmath.js';
  var minFile = 'vecmath.min.js';
  var source = [
    'src/vec2.js',
    'src/vec3.js',
    'src/vec4.js',
    'src/quat.js',
    'src/mat4.js'
  ];

  gulp.task('clean', function(){
    del([distDir + '**']);
  });

  gulp.task('concat', function(){
    gulp.src(source)
      .pipe(concat(distFile))
      .pipe(gulp.dest(distDir));
  });

  gulp.task('uglify', function(){
    gulp.src(source)
      .pipe(concat(minFile))
      .pipe(uglify(minFile))
      .pipe(gulp.dest(distDir));
  });

  gulp.task('watch', function(){
    gulp.run('concat', 'uglify');
    gulp.watch('src/*.js', function() {
      gulp.run('concat', 'uglify');
    });
  });

  gulp.task('default', function(){
    gulp.run('concat', 'uglify');
    gulp.run('watch');
  });

  //
  // JSDOC
  //

  gulp.task('doc', shell.task(['./jsdoc']));

  gulp.task('jsdoc-theme', function(){
    gulp.src("src/jsdoc-default.scss")
      .pipe(sass())
      .pipe(gulp.dest('./doc/styles/'));
  });

  gulp.task('jsdoc', function(){
    gulp.run('doc');
    gulp.watch(["src/*.js"], function(){
      gulp.run('doc');
    });

    gulp.watch(["src/jsdoc-*.scss"], function(){
      gulp.run('jsdoc-theme');
    });
  });

}());
