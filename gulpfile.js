var gulp = require('gulp')
var autoprefixer = require('gulp-autoprefixer')
var fileinclude = require('gulp-file-include')
var htmlmin = require('gulp-htmlmin')
var	notify = require('gulp-notify')
var	sass = require('gulp-sass')
var	sassglob = require('gulp-sass-glob')
var	sasslint = require('gulp-sass-lint')
var uglify = require('gulp-uglify')

var browserSync = require('browser-sync').create()

var paths = {
	assetsSrc: ['img/**', 'node_modules/jquery/dist/jquery.min.js'],
	assetsDest: 'dist',
	htmlSrc: 'html/*.html',
	htmlDest: 'dist',
	htmlWatch: 'html/**/*.html',
	scriptSrc: 'script/**/*.js',
	scriptDest: 'dist',
	styleSrc: 'style/*.scss',
	styleDest: 'dist',
	styleWatch: 'style/**/*.scss',
	serveDir: 'dist'
}

gulp.task('assets', function() {
	gulp.src(paths.assetsSrc)
		.pipe(gulp.dest(paths.assetsDest))
})

gulp.task('html', function() {
	gulp.src(paths.htmlSrc, {
		dot: true
	})
		.pipe(fileinclude())
		.pipe(htmlmin({
			collapseWhitespace: true
		}))
		.pipe(gulp.dest(paths.htmlDest))
		.pipe(browserSync.stream())
})

gulp.task('script', function() {
	gulp.src(paths.scriptSrc)
		.pipe(uglify())
		.pipe(gulp.dest(paths.scriptDest))
		.pipe(browserSync.stream())
})

gulp.task('style', function() {
	// Linter is broken and therefore temporarely disabled, see
	// https://github.com/sasstools/sass-lint/issues/62
	// gulp.src(paths.styleWatch)
	//	.pipe(sasslint())

	gulp.src(paths.styleSrc)
		.pipe(sassglob())
		.pipe(sass({outputStyle: 'compressed'}))
		.on('error', notify.onError({
			title: 'SCSS Error',
			message: '<%= error.message %>'
		}))
		.pipe(autoprefixer())
		.pipe(gulp.dest(paths.styleDest))
		.pipe(browserSync.stream())
})

gulp.task('compile', ['assets', 'html', 'script', 'style'])

gulp.task('watch', ['assets', 'html', 'script', 'style'], function() {
	gulp.watch(paths.assetsSrc, ['assets'])
	gulp.watch(paths.htmlWatch, ['html'])
	gulp.watch(paths.scriptSrc, ['script'])
	gulp.watch(paths.styleWatch, ['style'])
})

gulp.task('serve', ['compile', 'watch'], function() {
	browserSync.init({
		browser: ['chromium-browser'],
		server: paths.serveDir
	})
})

gulp.task('default', ['compile'])
