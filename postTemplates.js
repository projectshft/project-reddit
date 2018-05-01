/*
        =================== KNOWN ISSUES ===================
        ---click events happen multiple times
        ---however, it does not mess with functionality
        ---Did not delete items from posts array
        ---ideally posts array re-renders every change made
        ====================================================
*/

// ------creates the html for the new post and appends it to div with class = "posts"------
var newPost = function() {

  postCount++;

  var source = $('#post-template').html();
  var template = Handlebars.compile(source);
  var newHTML = template({postCount:postCount, userName:posts[postCount - 1].userName, message:posts[postCount - 1].postMessage});
  $(newHTML).appendTo($('.posts')); //------appends the template to the html------

  console.log("appended post # "+postCount+".")


  $('input').val('')
  $('textarea').val('')

  submitComment();
  doneEdit();
  editPost();
  backToPage();
  removePost();
  displayCommentBox();
  targetDisplayPost();

};

var newComment = function(thisPostId) {
  commentCount++; //keep track of number of comments made
  let commentsSection = '#comments-section-' + thisPostId
  let targetPost = posts[thisPostId - 1]
  let targetComment = targetPost.comments[targetPost.comments.length - 1]

  var source = $('#comment-template').html();
  var template = Handlebars.compile(source);
  var newHTML = template({
    commentCount:commentCount,
    commenter:targetComment.commenter,
    commentMessage:targetComment.commentMessage});

  $(newHTML).appendTo($(commentsSection)); //------appends the comments template to the html------

  var commentHover = function() {
    thisCommentId = $(this).attr('data-comment');
    deleteComment();
  }

  $('.a-comment').hover(commentHover)
  $('input').val('')
  $('textarea').val('')
}
