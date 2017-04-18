
var gulp = require('gulp')

// PLUMBER
// ============================================================

// var plumber = require('gulp-plumber');
// var coffee = require('gulp-coffee');
 
// gulp.src('./src/*.pug')
//     .pipe(plumber())
//     .pipe(coffee())
//     .pipe(gulp.dest('./public'));

// SASS
// ============================================================

var sass = require('gulp-sass');

gulp.task('sass', function() {
    gulp.src('src/_sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css'));
});

// PUG
// ============================================================

var pug = require('gulp-pug');

gulp.task('pug', function buildHTML() {
  return gulp.src([
      './src/**/!(_)*.pug',
      '!./src/{_includes,_includes/**}',
      '!./src/{_svg,_svg/**}'
    ])
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest('./public'))
});

// LIVE RELOAD
// ============================================================
 
var connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: './public',
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('./public/**/*.html')
    .pipe(connect.reload());
});


// WATCH
// ============================================================

gulp.task('watch', function() {
  gulp.watch(['./src/**/*.pug'], ['pug']),
  gulp.watch(['./src/_sass/**/*.scss'],['sass']);
});

// TRIGGER
// ============================================================

gulp.task('default', ['connect', 'watch', 'pug']);
