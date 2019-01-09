const express = require("express");

var app = express();
var router = express.Router();

router.get("/",function(req, res) { res.send('Hello World!')});
app.use("/",router);

var port = process.env.PORT || 1337;
app.listen(port);

console.log("Server running at http://localhost:%d", port);