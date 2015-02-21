var express = require('express');

var config = require('../config');
var log = require('../framework/log');

var configureMiddlewares = require('./middlewares');
var configureRoutes = require('./routes');

var app = express();

configureMiddlewares(app);
configureRoutes(app);

app.listen(config.apps.web.port);

log.info('App started at', config.apps.web.port, 'in', config.env, 'environment');
