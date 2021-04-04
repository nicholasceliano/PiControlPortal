const { Route } = require('express');

var express = require('express'),
app = express(),
port = process.env.PORT || 3000;

var routes = require('./api/routes/utility.js');
routes(app)

app.listen(port);

console.log('asd');
console.log(port);


