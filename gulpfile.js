var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var inject = require('gulp-inject');
var bowerFiles = require('main-bower-files');

var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");


var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var imageResize = require('gulp-image-resize');

var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var minifycss = require('gulp-minify-css');

var del = require('del');


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

//gulp.task('build',['uglify','clean'],function(){
//    console.log('end done');
//});


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

gulp.task('imagemin', function(){

    return gulp.src("imgs/mm1.png")
        .pipe(imagemin({
            progressive: true,
            use: [pngquant({quality: '65-80'})]
        }))
        .pipe(gulp.dest('dist'))
});

gulp.task('resize', function () {
    gulp.src('imgs/me1.png')
        .pipe(imageResize({
            width : 896
        }))
        .pipe(gulp.dest('dist'));
});


gulp.task('uglify', function(){
    return gulp.src('js/bundle/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('js/min'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest('js/min/'));
});


gulp.task('css', function() {
    return gulp.src('css/*.css')
        .pipe(concat('main1.css'))
        .pipe(gulp.dest('css'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())
        .pipe(gulp.dest('css'));
});


gulp.task('clean', function(){
    del(['js/min/all.js','css/main.css','css/animate.min.css','css/main1.css']);
});
gulp.watch('js/*.js', ['serve']);