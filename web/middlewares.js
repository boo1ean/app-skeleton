var express = require('express');
var helmet = require('helmet');
var bodyParser = require('body-parser');

var config = require('../config');

module.exports = function configureMiddlewares (app) {
	app.use(helmet());
	app.use(express.static(__dirname + '/../static'));
	app.use(bodyParser.json());
};
