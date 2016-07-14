var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('concat-js', function () {
    gulp.src([ './application/js/**/*.js' ])
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./application/dist'))
});

gulp.task('watch', function () {
    gulp.watch(['./application/js/**/*.js'], ['default']);
});

gulp.task('default', ['concat-js']);