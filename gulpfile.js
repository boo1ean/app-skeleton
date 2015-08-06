var gulp = require('gulp');
var path = require('path');
var builders = require('./gulp/builders');

var baseBuildPath = __dirname + '/static/build';
var buildTasks = [];
var watchTasks = [];

// See apps/auth/gulp-config for example configuration
function registerAppTasks (app) {
	// Generate app-specific build path
	app.buildPath = path.resolve(baseBuildPath, app.name);

	// Register app-specific tasks
	['templates', 'scripts', 'styles', 'build', 'watch'].forEach(registerTask);

	// Add app build and watch tasks for global build/watch tasks
	buildTasks.push(app.name + '-build');
	watchTasks.push(app.name + '-watch');

	// Registers app-specific task using task builders
	function registerTask (task) {
		var taskName = app.name + '-' + task;
		gulp.task(taskName, builders[task].bind(null, app));
	}
}

registerAppTasks(require('./front/gulp-config'));

gulp.task('build', function buildAll () {
	return gulp.start(buildTasks);
});

gulp.task('watch', function watchAll () {
	return gulp.start(watchTasks);
});
