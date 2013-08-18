var express = require('express'),
app = express();

var HOUR = 60 * 60 * 1000;

app.use(express.logger());

app.use(express.compress());

app.use(express.static(__dirname + '/out', {maxAge: 2 * HOUR}));

var port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log('Listening on ' + port);
});

