$('#submit').on('click', function () {
  var authorName = $('#authorName').val().trim();
  var postMessage = $('#postMessage').val().trim();
  if (authorName === '' || postMessage === '') {
    alert('Need to add a value!');
  } else {
    var $newPost = $(postTemplate(postMessage, authorName)).appendTo('.posts');
    var $commentForm = $newPost.find('.comment-form').hide();

    $newPost.find('.comments').on('click', function () {
      if($commentForm.is(":visible")) {
        $commentForm.hide()     
      } else {
        $commentForm.show();
      }
    })
    $newPost.find('.comment-submit').on('click', handleCommentSubmit);
  }
  
});

function handleCommentSubmit () {
  var $form = $(this).closest('.comment-form');
  var yourName = $form.find('#commentAuthorName').val().trim();
  var commentText = $form.find('#commentMessage').val().trim();
  if (yourName === '' || commentText === '') {
    alert('Need to add a value!');
  } else {
    var $comments = $form.find('.comments');
    var $newComment = $(commentTemplate(commentText, yourName)).appendTo($comments);
  }  
};

function commentTemplate (commentText, yourName) {
  return "<div>\
    <a class='removePost' href = '#'>Remove</a> " + commentText + " - Posted By: " + yourName + "</div>";
};



function postTemplate (postMessage, authorName) {
  return "<div>\
    <a class='removePost' href = '#'>Remove</a> <a class='comments' href = '#'>Comments</a> " + postMessage + " - Posted By: " + authorName + commentInputTemplate + 
    "</div>";
};

var commentInputTemplate = '<form class="comment-form" style="margin-top:30px;" onsubmit="event.preventDefault();">\
<div class="comments"></div>\
<div class="form-group">\
  <input id="commentMessage" type="text"\
    class="form-control"\
    placeholder="Comment Text"></input>\
</div>\
<div class="form-group">\
  <textarea id="commentAuthorName" type="text"\
  class="form-control"\
  placeholder="Your Name"></textarea>\
</div>\
<button class="btn btn-primary comment-submit">Submit Comment</button>\
</form>';