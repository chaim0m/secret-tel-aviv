var express = require('express');
var app = express();
app.listen(8000);
app.use(express.static('Public'));
app.get('/', function(request, response){
  response.send('Helloooooooo');
});
