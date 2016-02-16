var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var inject = require('gulp-inject');
var bowerFiles = require('main-bower-files');

gulp.task('browser-sync', function() {
    browserSync.init({
        port: 3011,
        files: ["./*.html", "./js/*.js","./css/*css"],
        server: {
            baseDir: "./",
            index: "index.html"
        }
    });
});
gulp.task('serve',['inject','browser-sync'],function(){
    console.log('end done');
});


gulp.task('inject', function () {
    var source = gulp.src(['./css/*css','./js/*.js'], {read: false});
    gulp.src('./index.html')
        .pipe(inject(gulp.src(bowerFiles(), {read: false}), {name: 'bower'}))
        .pipe(inject(source))
        .pipe(gulp.dest('./'));
});