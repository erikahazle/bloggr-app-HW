function  renderTemplate(templateId, container, data) {
  var template = templateId.html();
  Mustache.parse(template);
  var renderedPost = Mustache.render(template, data);
  container.append(renderedPost);
}

function loadComment(postId) {
  $.get('/posts' + postId, function(response) {
    console.log(response);
  })
}

function loadPosts() {
  $.get('/posts', function(response) {
    $.each(response, function(index, post) {
      renderTemplate($('#post-template'), $('.post-wrapper'), post);
      $.each(post.comments, function(index, comment) {
        var commentData = {
          user_name: comment.user_name,
          content: comment.content,
          postId: post._id
        }
        renderTemplate($('#comment-template'), $('#' + post._id), commentData);
      })

    })
  })
}

function addNewPost() {
  $.post('/posts', function(response) {
    console.log(response);
  })
}

$(document).ready(function() {
  loadPosts();
  $('#new-post-form').on('submit', addNewPost);
})