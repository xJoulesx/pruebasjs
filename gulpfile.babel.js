import gulp from 'gulp';
import babel from 'gulp-babel';

gulp.task('es6', () => {
   gulp.src('./es6/*.js')
      .pipe(babel())
      .pipe(gulp.dest('./es5'))
});

gulp.task('default', () => {
   gulp.watch('./es6/*.js', ['es6'])
});