var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var db = require('./models');

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', './public/views');
app.set('view engine', 'ejs');


app.get('/', function(req, res) {
  res.render('index');
})

app.get('/posts', function(req, res) {
  db.Post.find({}, function(err, posts) {
    res.send(posts);
  })
})

app.post('/post')

app.listen(port, function() {
  console.log('tj is cool!');
});