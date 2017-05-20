var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var inject = require('gulp-inject');
var angularFilesort = require('gulp-angular-filesort');

var paths = {
    sass_entry: ['./frontend/content/css/main.scss'],
    sass: ['./frontend/content/css/**/*.scss'],
    app: ['./frontend/**/*.js']};

var index = gulp.src('./frontend/index.html');

gulp.task('sass', function(done) {
    gulp.src(paths.sass_entry)
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(minifyCss({
            keepSpecialComments: 0
        }))
        .pipe(gulp.dest('./frontend/dist/css/'))
        .on('end', done);
});

gulp.task('inject', function() {
    var app = gulp.src(paths.app);

    //angularFilesort() is called twice because of a bug - https://github.com/klei/gulp-angular-filesort/issues/44
    return index.pipe(inject(app.pipe(angularFilesort()).pipe(angularFilesort()), {ignorePath: 'frontend'}))
                .pipe(gulp.dest('./frontend/'));
})

gulp.task('bundle-app', function () {
    gulp.src(paths.app.pipe(angularFilesort()))
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./frontend/dist/js'));

    index.pipe(inject('./frontend/dist/js/app.js', {ignorePath: 'frontend'}))
        .pipe(gulp.dest('.frontend/'));
});

gulp.task('build-prod', ['bundle-app']);

gulp.task('build', ['sass', 'bundle-scripts']);

gulp.task('watch', function () {
    gulp.watch(paths.sass, ['sass']);
});

gulp.task('default', ['inject', 'sass', 'watch']);
