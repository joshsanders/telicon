var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-sass'),
	cleanCSS = require('gulp-clean-css'),
	htmlMin = require('gulp-htmlmin'),
	sourcemaps = require('gulp-sourcemaps'),
	autoprefixer = require('gulp-autoprefixer'),
	browserSync = require('browser-sync').create();

// vars to handle file pathing
var docs_src_scss = './src/docs/scss/**/*.scss',
	docs_dist_css = './docs/css',
	docs_src_js = './src/docs/js/**/*.js',
	docs_dist_js = './docs/js',
	docs_src_html = './src/docs/*.html',
	docs_dist_html = './docs/',

	proj_src_scss = './src/build/**/*.scss',
	proj_dist_css = './dist/';




// Browser-sync for live reloads
// ---
// Set up a test server and open in browser

gulp.task('serve', function(){
	browserSync.init({
		// server: './dist/'

		proxy: 'localhost:8888/Telicon/docs/'	//this url path proxies to where MAMP is running a local virtual server 
	});
});


// HTML tasks for [src -> dist] (should minify for final build, currently just clones to ./dist/)
// ---
// watches directory for changes of desired files and copies to 'dist' folder

gulp.task('html', function() {
  return gulp.src( docs_src_html )
    // .pipe(htmlMin({
    // 	collapseWhitespace: true
    // }))
    .pipe(gulp.dest( docs_dist_html ))
    .pipe(browserSync.stream());
});

// gulp.task('html', ['html-index', 'html-projects']);


// STYLES tasks
// ---
// Compiles Sass(.scss), generates sourcemaps, minifies outputted css files before sending 
// them to desired destination folder 

gulp.task('styles', function(){

	return gulp.src( proj_src_scss )
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(cleanCSS())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest( proj_dist_css ))
		.pipe(browserSync.stream());

});

gulp.task('docs-styles', function(){

	return gulp.src( docs_src_scss )
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(cleanCSS())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest( docs_dist_css ))
		.pipe(browserSync.stream());

});


// SCRIPTS tasks
// ---
// Minifies js files and sends them to desired destination folder 

gulp.task('docs-scripts', function(){

	return gulp.src( docs_src_js )
		.pipe(sourcemaps.init())
		.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest( docs_dist_js ))
		.pipe(browserSync.stream());

});


// Watch task
// ---
// watches directory for changes, and applies the Styles and Scripts tasks stated above

gulp.task('watch', function(){

	gulp.watch( proj_src_scss, ['styles']);
	
	gulp.watch( docs_src_scss, ['docs-styles']);
	gulp.watch( docs_src_js, ['docs-scripts']);
	gulp.watch( docs_src_html, ['html']).on('change', browserSync.reload);

});


// Run task (default)
// ---
// run default gulp task with desired tasks

gulp.task('default', ['serve', 'watch']);

