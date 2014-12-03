var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./routes');
var config = require('../config').apps.api;
var jwt = require('express-jwt');

var app = express();

app.use(bodyParser.json());
app.use('/api', jwt({ secret: config.jwt_secret }));

app.use(express.static(__dirname + '/../static'));

routes.call(app);

app.listen(config.port);
