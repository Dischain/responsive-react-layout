'use strict';

const gulp = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');

gulp.task('build', function() {
  return browserify('./app.jsx')
  .transform(babelify, {presets: ['react', 'es2015']})
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('./public'));
});

gulp.task('watch', ['build'], function () {
  gulp.watch('*.jsx', ['build']);
});

gulp.task('default', ['watch']);