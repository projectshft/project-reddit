/*
        =================== KNOWN ISSUES ===================
        =========click events happen multiple times=========
        ====however, it does not mess with functionality====
        =======Did not delete items from posts array========
*/

// ------creates the html for the new post and appends it to div with class = "posts"------
var newPost = function() {
  postCount++;
  var postTemplate = /*wrapStart*/ '<div class=" pt-3 a-post" data-post-id="' + postCount + '" id="post-id-' + postCount + '"> ' +
    /* userName */
    '<div class="row"><div class="padded-column"></div><h5>' +
    posts[postCount - 1].userName +
    ':</h5></div>' +
    /* postMessage */
    '<div class="row"><div class="padded-column"></div><div class="posts-border pt-3 rounded" id="message-id-'
    + postCount +
    '"><p class="posted-message">' +
    posts[postCount - 1].postMessage +
    '</p>'
    /* hidden done editing button */
    +
    '<button type="button" id="edit-done-' + postCount + '" class="btn bttn-post my-1 hide">Done</button></div><div class="padded-column"></div></div>' +
    /* options */
    '<div class="row pb-3"><div class="padded-column"></div><div class="comments-width"><a class="primary-text options-position comment-post pl-1" ' +
    'data-comments-id="' + postCount + '" id="comments-id-' + postCount + '" ' +
    'href="#">Comments</a></div><div class="remove-width"><a class="primary-text options-position remove-post pl-2" ' +
    'data-remove-id="' + postCount + '" ' + 'id="remove-id-' + postCount + '" ' +
    'href="#">Remove</a></div><div class="edit-width"><a class="primary-text options-position edit-post pl-2" ' +
    'data-edit-id="' + postCount + '" ' + 'id="edit-id-' + postCount + '" ' +
    'href="#">Edit</a></div></div>' +
    /* comment Template */
    '<div class="comments-section '

    /* DELETE HIDE TO MAKE COMMENTS ALWAYS SHOWING AND FOLLOW BOOKMARKS TO ButtonFunctions.js TO DELETE ADD AND REMOVE HUDE*/
    +hide+

    ' id="comments-section-' +
    postCount + '"></div>' + '<div id="post-comments-' + postCount + '" class="hide row post-comments pb-5"><div class="col-sm-1"></div><div class="comment-box col-sm-10">' +
    /* commenter */
    '<div class="row pb-1"><div class="col-sm-12"><input class=" input-group" id="comment-user-' +
    postCount + '" placeholder="Your Name"></input></div></div> ' +
    /* commentMessage */
    '<div class="row"><div class="col-sm-12"><textarea class="input-group" id="post-comment-' + postCount + '" placeholder="Post Text"></textarea></div></div>' +
    /* comment-submit */
    '<div class="row"><div class="col-sm-12"><button type="button" class="btn bttn-post comment-submit mr-2" id="comment-submit-' + postCount + '">Comment</button><button type="button" class="btn back-to-page bttn-post">Back</button></div></div></div></div></div>'

  $(postTemplate).appendTo($('.posts')); //------appends the template to the html------

  var postHover = function() {
    thisPostId = $(this).attr('data-post-id'); //stores the specific number
    commentsId = '#comment-submit-' + thisPostId //stores comments button's id
    removeId = '#remove-id-' + thisPostId //stores remove button's id
    editId = '#edit-id-' + thisPostId //stores edit button's id
    commenterName = '#comment-user-' + thisPostId //stores id of input area for commenter's name to get it's value when comment button is pressed
    commenterText = '#post-comment-' + thisPostId //stores id of  textarea for commenter's message to get it's value when comment button is pressed
    openComment();
    submitComment();
    removePost();
    editPost();
    doneEdit();
    displayPost();
  };


  $('.a-post').hover(postHover) //executes postHover function when hovering over target post
  $('input').val('')
  $('textarea').val('')
};

var newComment = function() {
  commentCount++; //keep track of number of comments made
  let commentsSection = '#comments-section-' + thisPostId
  let targetPost = posts[thisPostId - 1]
  let targetComment = targetPost.comments[targetPost.comments.length - 1]
  console.log('here is taget post' + targetComment)

  var template = '<div class="a-comment" data-comment="' + commentCount + '" id="comment-' + commentCount + '"><div class="row"><div class="comments-padding"></div><p class="commenter col-10">' +
    targetComment.commenter + ': <a id="comment-delete-' + commentCount + '" href="#">X</a></p></div>' +
    '<div class="row"><div class="comments-padding"></div><p class="col-10 comment-message"> ' +
    targetComment.commentMessage + '</p></div></div>'

  $(template).appendTo($(commentsSection)); //------appends the comments template to the html------

  var commentHover = function() {
    thisCommentId = $(this).attr('data-comment');
    console.log('Comment ID: ' + thisCommentId)
    deleteComment();
  }

  $('.a-comment').hover(commentHover)
  $('input').val('')
  $('textarea').val('')
}
