var express = require('express');
var bodyParser = require('body-parser');
var config = require('../config');

var app = express();

app.use(bodyParser());

app.all('*', function(req, res) {
	res.send('hey!');
});

app.listen(config.apps.api.port);
