var gulp = require('gulp');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var templateCache = require('gulp-angular-templatecache');

var config = {
	styles: {
		src: './front/styles/*.styl',
		dest: './static'
	},

	templates: {
		src: './front/templates/*.html',
		dest: './front/.template-cache'
	},

	js: {
		src: [
			'./vendor/lodash/dist/lodash.min.js',
			'./vendor/jquery/dist/jquery.js',
			'./vendor/angular/angular.js',
			'./front/template-cache/*.js',
			'./vendor/angular-route/angular-route.js',
			'./vendor/angular-google-maps/dist/angular-google-maps.js',
			'./front/app/*.js',
			'./front/.template-cache/*.js'
		],
		dist: 'app.js',
		dest: './static'
	}
};

gulp.task('styles', function() {
	gulp.src(config.styles.src)
		.pipe(stylus())
		.pipe(gulp.dest(config.styles.dest));
});

gulp.task('templates', function() {
	gulp.src(config.templates.src)
		.pipe(templateCache())
		.pipe(gulp.dest(config.templates.dest));
});

gulp.task('js', function() {
	gulp.src(config.js.src)
		.pipe(concat(config.js.dist))
		.pipe(gulp.dest(config.js.dest));
});

gulp.task('build', ['templates', 'js', 'styles']);

gulp.task('watch', function() {
	gulp.watch(config.styles.src, ['styles']);
	gulp.watch(config.templates.src, ['build']);
	gulp.watch(config.js.src, ['js']);
});

gulp.task('default', ['watch']);
