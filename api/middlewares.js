var express = require('express');
var bodyParser = require('body-parser');

var config = require('../config');

module.exports = function configureMiddlewares (app) {
	app.use(bodyParser.json());
	app.use(express.static(__dirname + '/../static'));
};
