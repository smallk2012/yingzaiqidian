var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require('gulp-notify');
var browserSync = require('browser-sync');

gulp.task('sass', function() {
	//scss目录内的所有scss，指定app.scss的时候可以这样写css/app/scss/app.scss
	return gulp.src('css/*.scss')
		.pipe(sass({
			outputStyle: 'expanded'
		}).on('error', sass.logError))
		.pipe(gulp.dest('css/'))
		.pipe(notify())
});
gulp.task('default', function() {
	gulp.watch('css/*.scss',['sass']);
	browserSync({
		server: {
			baseDir: './',
			index: "index.html"
		}
	});
	var reload = browserSync.reload;
	var watchConfig = ['css/*.css', 'js/*', 'img/*', '*.html'];
	gulp.watch(watchConfig, reload);
});