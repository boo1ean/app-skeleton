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
		src: ['./front/modules/**/*.html', './front/directives/**/*.html'],
		dest: './front/.template-cache'
	},

	js: {
		src: [
			'./bower_components/lodash/dist/lodash.min.js',

			'./bower_components/jquery/dist/jquery.js',
			'./bower_components/store-js/store.js',

			'./bower_components/angular/angular.js',
			'./bower_components/angular-route/angular-route.js',
			'./bower_components/angular-resource/angular-resource.js',
			'./bower_components/angular-ui-select/dist/select.min.js',

			'./front/app.js',
			'./front/routes.js',
			'./front/directives/**/*.js',
			'./front/modules/**/*.js',
			'./front/services/**/*.js',
			'./front/filters/**/*.js',
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
