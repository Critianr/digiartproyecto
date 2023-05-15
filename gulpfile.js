const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function() {
  return gulp.src('scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('assets/css'));
});
gulp.task('sass:watch', function() {
    gulp.watch('scss/*.scss', {usePolling: true}, gulp.series('sass'));
  });
  
  