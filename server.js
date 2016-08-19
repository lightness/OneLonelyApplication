var express = require('express');
var path = require('path');
var app = express();

// Define the port to run on
app.set('port', 9090);

app.use('/application', express.static(path.join(__dirname, 'application')));

// Listen for requests
var server = app.listen(app.get('port'), function() {
    var port = server.address().port;
    console.log('Server started on port ' + port);
});