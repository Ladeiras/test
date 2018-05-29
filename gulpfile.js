var gulp = require('gulp');
var sass = require('gulp-sass');
var ts = require('gulp-typescript');
var browserSync = require('browser-sync');

gulp.task('sass', function() {
	gulp
		.src('style.scss')
		.pipe(sass({ includePaths: ['scss'] }))
		.pipe(gulp.dest('assets/css'));
});

gulp.task('ts', function() {
	gulp
		.src('script.ts')
		.pipe(
			ts({
				noImplicitAny: true,
				target: 'es6',
				outFile: 'script.js',
			})
		)
		.pipe(gulp.dest('js'));
});

gulp.task('browser-sync', function() {
	browserSync.init(['assets/css/*.css', 'assets/js/*.js', '*.html'], {
		server: {
			baseDir: './',
		},
	});
});

gulp.task('default', ['sass', 'ts', 'browser-sync'], function() {
	gulp.watch('style.scss', ['sass']);
	gulp.watch('script.ts', ['ts']);
});
