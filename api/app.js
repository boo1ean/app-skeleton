var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./routes');
var config = require('../config');

var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../static'));

routes.call(app);

app.listen(config.apps.api.port);
