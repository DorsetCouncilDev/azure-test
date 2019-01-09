const express = require("express");
const http = require();
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

var router = express.Router();

router.get("/",function(req, res) { res.send('Hello World!')});
app.use("/",router);

var port = process.env.PORT || 1337;
app.listen(port);

console.log("Server running at http://localhost:%d", port);