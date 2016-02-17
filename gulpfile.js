var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var inject = require('gulp-inject');
var bowerFiles = require('main-bower-files');

var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");

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
gulp.task('serve',['webpack','inject','browser-sync'],function(){
    console.log('end done');
});


gulp.task('inject', function () {
    var source = gulp.src(['./css/*css','./js/bundle/*.js'], {read: false});
    gulp.src('./index.html')
        .pipe(inject(gulp.src(bowerFiles(), {read: false}), {name: 'bower'}))
        .pipe(inject(source))
        .pipe(gulp.dest('./'));
});

gulp.task("webpack", function(callback) {
    var myConfig = Object.create(webpackConfig);
    // run webpack
    webpack(
        // configuration
        myConfig
        , function(err, stats) {
            // if(err) throw new gutil.PluginError("webpack", err);
            // gutil.log("[webpack]", stats.toString({
            //	 // output options
            // }));
            callback();
        });
});
gulp.watch('js/*.js', ['serve']);