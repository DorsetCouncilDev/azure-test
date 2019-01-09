const express = require("express");
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

var router = express.Router();

router.get("/",function(req, res) { res.send('Hello World!')});
app.use("/",router);

var port = process.env.PORT || 1337;
app.listen(port);

module.exports = app;


console.log("Server running at http://localhost:%d", port);