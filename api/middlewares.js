var express = require('express');
var bodyParser = require('body-parser');
var jwt = require('express-jwt');

var config = require('../config');

module.exports = function configureMiddlewares (app) {
	app.use(bodyParser.json());
	app.use('/api', jwt({ secret: config.apps.api.jwt_secret }));
	app.use(express.static(__dirname + '/../static'));
};
