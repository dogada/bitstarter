var express = require('express'),
fs = require('fs'),
app = express();

app.use(express.logger());


app.get('/', function(request, response) {
  var buffer = fs.readFileSync('index.html');
  response.send(buffer.toString());
});

var port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log('Listening on' + port);
});
