var REPL = require('repl');
var db = require('./models');

var repl = REPL.start("Posts >");
repl.context.db = db;

db.Post.collection.remove();
db.Comment.collection.remove();

db.Post.create({
  title: 'Hello World',
  content: 'I love doing node... NOT',
  author: 'Erika',
  image: 'http://www.urlynkd.com/files/blogimages/25nodejs-dark.png'
}, function(err, post) {
  console.log('post has been created');
  post.comments.push({ user_name: 'Anonymous', content: 'Brilliant...' });
  post.comments.push({ user_name: 'Anonymous2', content: 'Amaze...' });
  post.comments.push({ user_name: 'Anonymousewqwd', content: 'Cray cray...' });
  post.save();
  console.log(post);
});

db.Post.create({
  title: 'Hello World 2222',
  content: 'I love doing node... NOT',
  author: 'Erika',
  image: 'http://www.urlynkd.com/files/blogimages/25nodejs-dark.png'
}, function(err, post) {
  console.log('post has been created');
  post.comments.push({ user_name: 'Anonymous', content: 'Brilliant...' });
  post.comments.push({ user_name: 'Anonymous2', content: 'Amaze...' });
  post.comments.push({ user_name: 'Anonymousewqwd', content: 'Cray cray...' });
  post.save();
  console.log(post);
  // process.exit();
});

db.Post.create({
  title: 'Hello World 3',
  content: 'I love doing node... NOT',
  author: 'Erika',
  image: 'http://www.urlynkd.com/files/blogimages/25nodejs-dark.png'
}, function(err, post) {
  console.log('post has been created');
  post.comments.push({ user_name: 'Anonymous', content: 'Brilliant...' });
  post.comments.push({ user_name: 'Anonymous2', content: 'Amaze...' });
  post.comments.push({ user_name: 'Anonymousewqwd', content: 'Cray cray...' });
  post.save();
  console.log(post);
  // process.exit()
});
