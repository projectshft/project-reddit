
/* DELETE COMMENT */
var deleteComment = function(postIndex, commentIndex, commentToDelete){
  posts[postIndex].comments.splice(commentIndex, 1);
  $commentToDelete.remove();
  saveToLocalStorage();
}
$('.posts').on('click', '.comment-delete', function () {
  let postIndex = $(this).closest("[data-post-id]").attr('data-post-id')-1
  let commentIndex = $(this).closest("[data-comment]").attr('data-comment')-1
  let $commentToDelete = $(this).closest('.a-comment')
  deleteComment(postIndex, commentIndex, commentToDelete);
});

/* DETAILED VIEW */
var postDetailedView = function(thisPostId){
  $('.a-post').addClass('hide');
  $('#user-post-header').addClass('hide');
  $('#post-id-' + thisPostId).removeClass('hide');
  $('#post-id-' + thisPostId).addClass('py-5');
  $('#comments-section-'+thisPostId).removeClass('hide')
  if( $('#post-comments-' + thisPostId).hasClass('hide') ){
    $('#back-id-' + thisPostId).addClass('show')
  }
}
$('.posts').on('click', '.detailed-view', function () {
  let thisPostId = $(this).closest("[data-post-id]").attr('data-post-id')
  postDetailedView(thisPostId);
});

/* DISPLAY COMMENTS */
var displayComments = function(thisPostId) {
    $('#post-comments-' + thisPostId).removeClass('hide');
    $('#back-id-' + thisPostId).removeClass('show')
    $('#comments-section-'+thisPostId).removeClass('hide')
}
$('.posts').on('click', '.comment-post', function () {
  let thisPostId = $(this).closest("[data-post-id]").attr('data-post-id')
  displayComments(thisPostId);
});

/*DONE EDIT BUTTON*/
var SubmiteEdit = function(thisPostId){
  let postId = '#post-id-' + thisPostId //finds particular post
  let doneId = '#edit-done-' + thisPostId //targets specific id of the done button
  let postBox = '#post-box-'+thisPostId
  postdata = $(postId).find('.edit-height').val(); //uses parent to find child- edit height is a css that makes the edit box taller and was an easily targetable class.
  $(postBox).addClass('detailed-view'); //allows post-box to be targeted for detailed view
  $(postId).find(doneId).addClass('hide'); //hides the Done button
  $(postId).find('.edit-height').replaceWith('<p class="posted-message">'+postdata+'</p>'); //replaces content with 'p' elements and inserts the postdata above
}
$('.posts').on('click', '.edit-done', function () {
  let thisPostId = $(this).closest("[data-post-id]").attr('data-post-id')
  SubmiteEdit(thisPostId);
});

/* EDIT POST */
var editPost = function(thisPostId){
  let postId = '#post-id-' + thisPostId //finds particular post
  let doneId = '#edit-done-' + thisPostId //finds the Done button that always existed but was hidden
  let postBox = '#post-box-'+thisPostId
  postdata = $(postId).find('.posted-message').html();
  $(postBox).removeClass('detailed-view'); //disallows post-box to be targeted for detailed view so that we can edit the text without firing postDetailedView();
  $(postId).find(doneId).removeClass('hide');
  $(postId).find('.posted-message').replaceWith('<textarea class="input-group edit-height mb-3">'+postdata+'</textarea>');
}
$('.posts').on('click', '.edit-post', function () {
  let thisPostId = $(this).closest("[data-post-id]").attr('data-post-id')
  editPost(thisPostId);
});

/* SUBMIT COMMENT */
var submitComment = function(thisPostId) {
    commenterName = '#comment-user-' + thisPostId //stores id of input area for commenter's name to get it's value when comment button is pressed-- please reference function submitComment
    commenterText = '#post-comment-' + thisPostId //stores id of  textarea for commenter's message to get it's value when comment button is pressed
    let name = $(commenterName).val()
    let text = $(commenterText).val()
    // ------PUSH object containg commenter and the comments to posts array------
    posts[thisPostId - 1].comments.push({
      'commenter': name,
      'commentMessage': text
  })
  saveToLocalStorage();
  renderComments(thisPostId);
}
$('.posts').on('click', '.comment-submit', function () {
  let thisPostId = $(this).closest("[data-post-id]").attr('data-post-id')
  submitComment(thisPostId);
});

/* SUBMIT POST */
var submitPost = function(){
  let name = $('#post-user').val()
  let text = $('#post-message').val()
  // ------PUSH object containg name and message to posts array------
  posts.push({
    'userName': name,
    'postMessage': text,
    'comments': [],
  })
  console.log("new post info pushed to posts array, then initiates execution of new post #" + (postCount+1))

  saveToLocalStorage();
  renderPosts();
}
$('#post-to-board').click(function() {
  submitPost();
})

/* REMOVE POST */
var removePost = function(postIndex, $postToDelete){
  console.log('remove post')
  $('.a-post').removeClass('hide');
  $('#user-post-header').removeClass('hide');
  $postToDelete.remove()
  posts.splice(postIndex, 1);
  saveToLocalStorage();
}
$('.posts').on('click', '.remove-post', function () {
  let postIndex = $(this).closest("[data-post-id]").attr('data-post-id')-1
  let $postToDelete = $(this).closest('.a-post')
  removePost(postIndex, $postToDelete);
});

/* Go BACK TO main PAGE */
var backToPage = function(thisPostId){
  $('#post-comments-' + thisPostId).addClass('hide');
  $('.a-post').removeClass('hide');
  $('#user-post-header').removeClass('hide');
  $('#post-id-' + thisPostId).removeClass('py-5');
  $('#back-id-' + thisPostId).removeClass('show')
  $('#comments-section-'+thisPostId).addClass('hide')
}
$('.posts').on('click', '.back-to-page', function () {
  let thisPostId = $(this).closest("[data-post-id]").attr('data-post-id')
  backToPage(thisPostId);
});
