$("#submit-post").click(function () { 
   
  var author = $("#post-author").val();
  var text = $("#post-text").val();
  

  var remove = '<button class="remove">Remove</button>';
  var comments = '<button class="comments">Comments</button>';
  var comment_section = '<div class="col-8 comment-section"><div id="new-comment"></div><form><div class="form-group">  <input type="text" class="form-control" id="comment-text"  placeholder="Comment text"</div><div class="form-group">  <input type="text" class="form-control" id="comment-author"  placeholder="Your Name"</div><button type="button" class="btn btn-primary" id="submit-comment">  Submit Comment</button></form></div>';  
  
  $("#new-post").append('<p class="post">' + remove + comments + text + " - Posted By: " + author  + '</p>' + comment_section );

  $("form").trigger("reset");

//need to reset form after submission
 //$('#new-post').reset(); --doesnt work
});

//removes post
$(document).on('click','.remove',  function() { 
  $(this).closest('div').find('.comment-section').remove();
  $(this).parent().remove(); 
  
});

//opens and closes comment section on post
$(document).on('click', '.comments', function () {  
  $(this).closest('div').find('.comment-section').toggle();   
});

//adds comment
$(document).on('click', '#submit-comment', function() {
  
  var commentAuthor = $("#comment-author").val();
  var commentText = $("#comment-text").val();
  var remove_comment = '<button class="remove_comment">Remove</button>';
  
  
 $(this).closest('.comment-section').find('#new-comment').append('<p class="comment">' + remove_comment + commentText + ' - Posted by: ' + commentAuthor + '<p>');

 $("form").trigger("reset");
});

//removes comment
$(document).on('click', '.remove_comment', function() { 
  $(this).parent().remove();
});