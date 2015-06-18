var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

app.set('views', './public/views');
app.set('view engine', 'ejs');


app.get('/', function(req, res) {
  res.render('index');
})

app.listen(port, function() {
  console.log('tj is cool!');
});