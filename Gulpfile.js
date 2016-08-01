var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var minifycss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var babel = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var pug = require('gulp-pug');

gulp.task('styles', function () {
 gulp
    .src('index.scss')
    .pipe(sass())
    .pipe(minifycss())
    .pipe(rename('app.css'))
    .pipe(gulp.dest('frontend'));
})

gulp.task('assets', function () {
  gulp
    .src('assets/*')
    .pipe(gulp.dest('frontend'));
})

gulp.task('views', function buildHTML () {
  return gulp.src('views/*.pug')
  .pipe(pug())
  .pipe(gulp.dest('frontend'));
})



function compile(watch) {
  var bundle = browserify('./src/index.js', {debug: true});

  if (watch) {
    bundle = watchify(bundle);
    bundle.on('update', function () {
      console.log('--> Bundling...');
      rebundle();
    });
  }

  function rebundle() {
    bundle
      .transform(babel, { presets: [ 'es2015' ], plugins: [ 'syntax-async-functions', 'transform-regenerator' ] })
      .bundle()
      .on('error', function (err) { console.log(err); this.emit('end') })
      .pipe(source('index.js'))
      .pipe(rename('app.js'))
      .pipe(gulp.dest('frontend'));
  }

  rebundle();
}

gulp.task('build', function () {
  return compile();
});

gulp.task('watch', function () { 
  gulp.watch('*.scss',['styles']);
  gulp.watch('views/*.pug',['views']);
  return compile(true);
});

gulp.task('default', ['watch'], function () {

});