const express = require("express");
var path = require('path');
var routes = require('./routes/routes');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use("/",routes);

var port = process.env.PORT || 1337;
app.listen(port);

module.exports = app;


console.log("Server running at http://localhost:%d", port);