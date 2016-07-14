var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('concat-js', function () {
    gulp.src([ './application/bower_components/jquery/dist/jquery.js'
             , './application/bower_components/underscore/underscore.js'
             , './application/bower_components/angular/angular.js'
             , './application/bower_components/angular-animate/angular-animate.js'
             , './application/bower_components/angular-aria/angular-aria.js'
             , './application/bower_components/angular-messages/angular-messages.js'
             , './application/bower_components/angular-material/angular-material.js'
             , './application/bower_components/angular-route/angular-route.js'

             , './application/js/**/*.js' ])
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./application/dist'))
});

gulp.task('watch', function () {
    gulp.watch(['./application/js/**/*.js'], ['default']);
});

gulp.task('default', ['concat-js']);