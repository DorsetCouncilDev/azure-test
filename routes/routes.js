var express = require("express");
var router = express.Router();

router.get("/", function(request,response){
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello Routes!");
});

module.exports = router;