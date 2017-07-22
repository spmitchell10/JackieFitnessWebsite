var express = require('express');
var port = process.env.PORT || 8090;
var app = express();

app.use(express.static('app'))

app.get('/', function(req, res) {
    response.sendfile(__dirname + '/app/index.html');
});


app.listen(port, function() {
    console.log("RUNNING");
})
