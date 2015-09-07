var gulp = require('gulp');
var stylus = require('gulp-stylus');

// Compile Stylus files.
gulp.task('css', function() {
	gulp.src('./public/css/src/styles.styl')
	.pipe(stylus())
	.pipe(gulp.dest('./public/css/lib'));
});

// Start the server; watch css, js files for changes.
gulp.task('develop', function() {
	
});

