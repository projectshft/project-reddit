/*======= template for comment section ===== */
  var commentFormTemplate =
  '<form class="form-inline hideComments" id="createComments">'
  + '<input type="text" class="form-control" id="commentInput" placeholder="Comment">'
  + '<input type="text" class="form-control" id="commentPosterName" placeholder="Name">'
  + '<button type="button" class="btn btn-primary" id="submitCommentBtn">'
  + 'Submit Comment'
  + '</button>'
  + '</form>'
;
/* ======= user can create posts ====== */
$(document).ready(function(){
  $("button").click(function(e){ //event handler instructs doc to invoke function when btn clicked
    var post= $('#inputPostText').val(); //value of #inputPostText text entry set to variable 'post'
    var posterName= $('#inputName').val(); //value of #inputName text entry set to variable 'posterName'

    $('#display-posts').prepend('<div class="row post-container"><p class="post">'+ post +'</p><p><b>'+'Posted By: '+'</b>'+ posterName +'</p>'+'<a href="#" class="comment-link">'+'Comment'+'</a><div class="comment-container"></div>'+commentFormTemplate+'</div><hr>');//tells document to construct and add html to document
  });
});
/* ==================== 2.user can leave comments on each posts
* when user clicks 'comments' (above each post) it toggles comments and input box visible/hidden
* when user clicks 'x' next to comment, it deletes
* when user fills out the two comment inputs & clicks post, immediately add comment to list of comments
* when user clicks 'remove' above post should remove post
======================================== */

// a hidden comment form was added when original post was submitted and added to page
$(document).on('click','.comment-link', function(){ //when elements with class comment-link are clicked
  $(this).siblings('#createComments').removeClass('hideComments'); //remove class that hides the comment form
  $('form').on('click','#submitCommentBtn',function(){ //when comment form submit button is clicked
    var comment = $('#commentInput').val(); //value of #commentInput entry set to variable 'comment'
    var commenterName = $('#commentPosterName').val();//value of #commentPosterName text set to variable 'commenterName'
    $(this).parent().siblings('.comment-container').append('<div class="comment">'+'<p>'+comment+'</p>'+'<p>'+'<b>'+'Posted By: '+'</b>'+commenterName+'</p>'+'<a href="#" class="comment-link">'+'Comment'+'</a></div>'); //append input values to comment container
    $("#createComments").addClass('hideComments'); //then re-add class to element so that form is no longer visible
  });
});
