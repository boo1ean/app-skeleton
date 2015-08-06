// Default angular app dependencies
function defaultAngularFramework () {
	return [
		'./vendor/lodash/dist/lodash.min.js',
		'./vendor/jquery/dist/jquery.js',
		'./vendor/angular/angular.js',

		// Material framework
		'./vendor/angular-animate/angular-animate.js',
		'./vendor/angular-aria/angular-aria.js',
		'./vendor/angular-material/angular-material.js',

		'./vendor/angular-route/angular-route.js',
		'./vendor/angular-resource/angular-resource.js',
		'./vendor/angular-ui-select/dist/select.min.js'
	];
}

// Default angular app
function defaultAngularApp (basePath) {
	return [
		basePath + '/app.js',
		basePath + '/routes.js',
		basePath + '/directives/**/*.js',
		basePath + '/modules/**/*.js',
		basePath + '/services/**/*.js',
		basePath + '/filters/**/*.js',
		basePath + '/interceptors/**/*.js',
		basePath + '/resources/**/*.js',
		basePath + '/.template-cache/*.js'
	];
}

function defaultAngularTemplates (basePath) {
	return [
		basePath + '/modules/**/*.html',
		basePath + '/directives/**/*.html'
	];
}

function defaultStyles (basePath) {
	return [
		basePath + '/styles/main.styl'
	];
}

module.exports = {
	js: {
		angularFramework: defaultAngularFramework,
		angularApp: defaultAngularApp
	},

	html: {
		angularTemplates: defaultAngularTemplates
	},

	css: {
		styles: defaultStyles
	}
};
