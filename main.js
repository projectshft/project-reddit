var posts = [];
var id = 1;
var comments_view = false;//use to toggle comments section on a post. Put here or in the post object? 

var $comment_section = $('<form><div class="form-group><input type="text" class="form-control" id="comment-text" placeholder="Comment text"</div><div class="form-group"><input type="text" class="form-control" id="comment-author"placeholder="Your Name"</div><button type="button" class="btn btn-primary" id="submit-comment">Submit comment</button></form>'); //set layout for comment section. Here or in the submit-post click handler or elsewhere? 

$("#submit-post").click(function () { 
   
  var author = $("#post-author").val();
  var text = $("#post-text").val();
  var postData = {'id': id, 'author': author, 'text': text, comments: []};

  posts.push(postData);

  $("#post-author").html('Your Name');
  $("#post-text").html('Post Text');

  var remove = '<button class="remove">Remove</button>';
  var comments = '<button class="comments">Comments</button>';
  
  $("#new-post").append('<p>' + remove + comments + text + " - Posted By: " + author + '<hr>'+ '</p>');//add comment section, too?

  id += 1;
});

$(document).on('click', '.remove',  function() {  
  $(this).parent().next("hr").remove();
  $(this).closest('p').remove();

});//would it be better to delete the post itself? This just hides the post.


$(document).on('click', '.comments', function () {
  if (comments_view) {//probably need to store comments_view in the post object, so the reference would be more complicated than 'comments_view'
    //set display to none
  } else {
    //set display to block
  }
  $(this).next('p').append('comment');
})

$(document).on('click', '#submit-comment', function() {
  //add comment to post object (by id?) and display

  var remove_comment = '<button class="remove_comment">Remove</button>';

  //$(this).append('<p>' + remove_comment + the rest of the comment + '<p>')
})

$(document).on('click', '.remove_comment', function() {
  $this.closest('p').remove();
});