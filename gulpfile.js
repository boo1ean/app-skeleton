var gulp = require('gulp');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var template_cache = require('gulp-angular-templatecache');
var run_sequence = require('run-sequence');

var config = {
	styles: {
		src: [
			'./front/styles/main.styl'
		],

		dist: 'app.css',
		dest: './static'
	},

	templates: {
		src: './front/modules/**/*.html',
		dest: './front/.template-cache'
	},

	js: {
		src: [
			'./vendor/lodash/dist/lodash.min.js',

			'./vendor/jquery/dist/jquery.js',
			'./vendor/store-js/store.js',

			'./vendor/angular/angular.js',
			'./vendor/angular-route/angular-route.js',
			'./vendor/angular-resource/angular-resource.js',

			'./front/app.js',
			'./front/routes.js',
			'./front/modules/**/*.js',
			'./front/services/**/*.js',
			'./front/interceptors/**/*.js',
			'./front/resources/**/*.js',

			'./front/.template-cache/*.js'
		],

		dist: 'app.js',
		dest: './static'
	}
};

gulp.task('styles', function() {
	return gulp.src(config.styles.src)
		.pipe(stylus({'include css': true}))
		.pipe(concat(config.styles.dist))
		.pipe(gulp.dest(config.styles.dest));
});

gulp.task('templates', function() {
	return gulp.src(config.templates.src)
		.pipe(template_cache({ module: 'app.templates' }))
		.pipe(gulp.dest(config.templates.dest));
});

gulp.task('js', function() {
	return gulp.src(config.js.src)
		.pipe(concat(config.js.dist))
		.pipe(gulp.dest(config.js.dest));
});

gulp.task('build', function() {
	return run_sequence(['templates', 'styles'], ['js']);
});

gulp.task('watch', ['build'], function() {
	return gulp.watch(['./front/**/*.*'], ['build']);
});

gulp.task('default', ['watch']);
