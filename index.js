const express = require("express");


var app = express();
var router = require("./routes/routes.js");
app.use("/advertise",router);








var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
