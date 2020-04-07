var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-sass'),
	cleanCSS = require('gulp-clean-css'),
	htmlMin = require('gulp-htmlmin'),
	sourcemaps = require('gulp-sourcemaps'),
	autoprefixer = require('gulp-autoprefixer'),
	browserSync = require('browser-sync').create();

// vars to handle file pathing

// var docs_src_scss = './src/docs/scss/**/*.scss',
// 	docs_dist_css = './docs/css',
// 	docs_src_js = './src/docs/js/**/*.js',
// 	docs_dist_js = './docs/js',
// 	docs_src_html = './src/docs/*.html',
// 	docs_dist_html = './docs/',

// proj_src_scss = './src/build/**/*.scss',
// proj_dist_css = './dist/';

var paths = {
	docs: {
		styles: {
			src: './src/docs/scss/**/*.scss',
			dist: './docs/css'
		},
		scripts: {
			src: './src/docs/js/**/*.js',
			dist: './docs/js'
		},
		html: {
			src: './src/docs/*.html',
			dist: './docs/'
		}
	}
};



// Html task for docs 
// ---
// watches directory for changes of desired files and copies to 'dist' folder
// Currently just clones to ./dist/)

gulp.task('html', function() {
  return gulp.src( paths.docs.html.src )
    // .pipe(htmlMin({
    // 	collapseWhitespace: true
    // }))
    .pipe(gulp.dest( paths.docs.html.dist ))
    .pipe(browserSync.stream());
});


// Styles task for docs
// ---
// Compiles Sass(.scss), generates sourcemaps, minifies outputted css files before sending 
// them to docs/css folder 

gulp.task('styles', function(){

	return gulp.src( paths.docs.styles.src )
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(cleanCSS())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest( paths.docs.styles.dist ))
		.pipe(browserSync.stream());

});


// Scripts task for docs
// ---
// Minifies js files and sends them to desired destination folder 

gulp.task('scripts', function(){

	return gulp.src( paths.docs.scripts.src )
		.pipe(sourcemaps.init())
		.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest( paths.docs.scripts.dist ))
		.pipe(browserSync.stream());

});


// Explore gulp workflows for svg optimization and sprite creation
// ---
// svg tasks will go here when implemented



// Watch task
// ---
// watches specified directories for changes, and applies the Styles and Scripts tasks stated above

// gulp.task('watch', function(){

// 	gulp.watch( paths.docs.styles.src, ['styles']);
// 	gulp.watch( paths.docs.scripts.src, ['scripts']);
// 	gulp.watch( paths.docs.html.src, ['html']).on('change', browserSync.reload);

// });


// Browser-sync for live reloads
// ---
// Set up a test server and open in browser

gulp.task('serve', function(){
	browserSync.init({
		server: './docs/'
		// this url path proxies to where MAMP is running a local virtual server 
		// proxy: 'localhost:8888/Telicon/docs/'	
	});

	gulp.watch( paths.docs.styles.src, gulp.series('styles'));
	gulp.watch( paths.docs.scripts.src, gulp.series('scripts'));
	gulp.watch( paths.docs.html.src, gulp.series('html')).on('change', browserSync.reload);
});




