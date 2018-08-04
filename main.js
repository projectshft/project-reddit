/* ======= user can create posts ====== */
// $(document).ready(function(){
//     $("button").click(function(e){ //event handler instructs doc to invoke function when btn clicked
//       var post = $('#inputPostText').val(); //get value of  #inputPostText text entry and set to variable 'getText'
//       var name = $('#inputName').val(); //get value of  #inputPostText text entry and set to variable 'getText'
//       $('#display-posts').prepend('<div class="row"><div class="post"><p>' + post + '</p><p><b>' + 'Posted By: '+'</b>' + name +'</p></div><hr></div>');//tells document to construct and add html to document
//     });
// });

$("button").click(function(){ //event handler instructs doc to invoke function when btn clicked
$('div#createComments').removeClass('hideComments');
}); //tells document to construct and add html to document

/* ======= user can create comments ====== */


/* ======= 2.user can leave comments on each posts
========== * when user clicks 'comments' (above each post) it toggles comments and input box visible/hidden
========== * when user clicks 'x' next to comment, it deletes
========== * when user fills out the two comment inputs & clicks post, immediately add comment to list of comments
========== * when user clicks 'remove' above post should remove post
 ====== */
