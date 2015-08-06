var gulp = require('gulp');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');
var template_cache = require('gulp-angular-templatecache');
var run_sequence = require('run-sequence');

module.exports = {
	templates: function buildTemplatesTask (app) {
		return gulp.src(app.assets.templates)
			.pipe(template_cache({ module: 'app.templates' }))
			.pipe(gulp.dest(app.path + '/.template-cache'));
	},

	scripts: function buildScriptsTask (app) {
		return gulp.src(app.assets.js)
			.pipe(concat('app.js'))
			.pipe(gulp.dest(app.buildPath));
	},

	styles: function buildStylesTask (app) {
		return gulp.src(app.assets.css)
			.pipe(stylus({'include css': true}))
			.pipe(concat('app.css'))
			.pipe(gulp.dest(app.buildPath));
	},

	build: function buildBuildTask (app) {
		return run_sequence([
			app.name + '-templates',
			app.name + '-scripts',
			app.name + '-styles'
		]);
	},

	watch: function buildWatchTask (app) {
		gulp.watch([app.path + '/**/*.*'], [app.name + '-build'])
	}
};
