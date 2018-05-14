var gulp = require('gulp');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var header = require('gulp-header');
var pkg = require('./package.json');
var postcss = require('gulp-postcss');
var rename = require("gulp-rename");
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

// Set the banner content
var banner = ['/*!\n',
' * https://www.adamjolicoeur.com/mobile\n',
' * <%= pkg.title %> v<%= pkg.version %>\n',
' * Copyright 2008-' + (new Date()).getFullYear(), ' <%= pkg.author %>\n',
' * Licensed under <%= pkg.license %>\n',
' */\n',
''
].join('');

// compile app component scss files
gulp.task('sass-component', function() {
  return gulp.src("src/app/*.scss")
  .pipe(sass().on('error', sass.logError))
  .pipe(header(banner, { pkg: pkg }))
  .pipe(gulp.dest('src/app'));
});

// compile custom scss files
gulp.task('sass-app', function() {
  return gulp.src("src/styles.scss")
  .pipe(sass().on('error', sass.logError))
  .pipe(header(banner, { pkg: pkg }))
  .pipe(gulp.dest('src/'));
});

gulp.task('styles', ['sass-component', 'sass-app']);

gulp.task('default', ['sass-component', 'sass-app']);
