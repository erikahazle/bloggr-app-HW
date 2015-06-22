var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blogsdatabase');
var Schema = mongoose.Schema, ObjectId = Schema.ObjectID

var CommentSchema = new Schema({ 
    user_name:String, 
    content:String 
  });

var Comment = mongoose.model('Comment', CommentSchema);

var PostSchema = new Schema({ 
    title:String, 
    content:String, 
    author:String, 
    image:String, 
    comments: [CommentSchema] 
  });

var Post = mongoose.model('Post', PostSchema);

module.exports = {
  Comment: Comment,
  Post: Post
}