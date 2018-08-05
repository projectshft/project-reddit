/*======= template for comment section ===== */

  var commentFormTemplate =
  '<div class="container hideComments" id="createComments">'
  + '<form class="form-inline">'
  + '<input type="text" class="form-control" id="commentInput" placeholder="Comment">'
  + '<input type="text" class="form-control" id="commentPosterName" placeholder="Name">'
  + '<button type="button" class="btn btn-primary">'
  + 'Submit'
  + '</button>'
  + '</form>'
  + '</div>'
;

// var postContainerTemplate =
// '<div class="row">'
// + '<div class="post">'
// + '<p>'
// + '<a href="#" class="comment-link">'
// + 'Comment'
// + '</a>'
// + '</p>'
// + '</div>'
// + '</div>'

/* ======= user can create posts ====== */

$(document).ready(function(){
    $("button").click(function(e){ //event handler instructs doc to invoke function when btn clicked
      var post = $('#inputPostText').val(); //get value of  #inputPostText text entry and set to variable 'getText'
      var name = $('#inputName').val(); //get value of  #inputPostText text entry and set to variable 'getText'
      $('#display-posts').prepend(
        '<div class="row"><div class="post"><a href="#" class="comment-link">'+'Comment'+'</a><p>'+post+'</p><p><b>'+'Posted By: '+'</b>'+name+'</p></div>'+ commentFormTemplate+'<hr></div>');//tells document to construct and add html to document
    });

});

/* ======= user can create comments ====== */

//comment form was added with the hideComments class when original post was submitted and added to page
$(document).on('click','.comment-link', function(){
  $("#createComments").removeClass('hideComments');
});

/* ======= 2.user can leave comments on each posts
========== * when user clicks 'comments' (above each post) it toggles comments and input box visible/hidden
========== * when user clicks 'x' next to comment, it deletes
========== * when user fills out the two comment inputs & clicks post, immediately add comment to list of comments
========== * when user clicks 'remove' above post should remove post
 ====== */

 /* ========= save for later use =============

 $('div#createComments').removeClass('hideComments');

 ====================== */
