
var submitComment = function() {
  $(commentsId).unbind().click(function() {
    let name = $(commenterName).val()
    let text = $(commenterText).val()
    // ------PUSH object containg commenter and the comments to posts array------
    posts[thisPostId - 1].comments.push({
      'commenter': name,
      'commentMessage': text
    })
    // console.log(posts[thisPostId - 1])
    newComment();
  })
}

var displayPost = function() {
  displayComments = '#message-id-' + thisPostId;

  $(displayComments).on('click', function(event) {
    $('#comments-section-' + thisPostId).removeClass('hide'); //comment this out to always show comments
    $('#post-comments-' + thisPostId).removeClass('hide');
    $('.a-post').addClass('hide');
    $('#user-post-header').addClass('hide');
    $('#post-id-' + thisPostId).removeClass('hide');
  })

  $('.back-to-page').on("click", function() {
    $('#comments-section-' + thisPostId).addClass('hide'); //comment this out to always show comments
    $('#post-comments-' + thisPostId).addClass('hide');
    $('.a-post').removeClass('hide');
    $('#user-post-header').removeClass('hide');
  })
}

var openComment = function() {
  displayComments = '#comments-id-' + thisPostId;

  $(displayComments).on('click', function(event) {
    $('#comments-section-' + thisPostId).removeClass('hide'); //comment this out to always show comments
    $('#post-comments-' + thisPostId).removeClass('hide');
    // $('.a-post').addClass('hide');
    // $('#user-post-header').addClass('hide');
    // $('#post-id-' + thisPostId).removeClass('hide');
  })

  $('.back-to-page').on("click", function() {
    $('#comments-section-' + thisPostId).addClass('hide'); //comment this out to always show comments
    $('#post-comments-' + thisPostId).addClass('hide');
    // $('.a-post').removeClass('hide');
    // $('#user-post-header').removeClass('hide');
  })
}

var removePost = function() {
  removeId = '#remove-id-' + thisPostId //stores #remove-id-number
  $(removeId).click(function() {
    let postId = '#post-id-' + thisPostId //stores string: '#post-id-number'
    $(postId).remove(); //$(#post-id-number).remove() => removes entire post
    $('.a-post').removeClass('hide');
    $('#user-post-header').removeClass('hide');
  })
}

$('#post-to-board').click(function() {
  let name = $('#post-user').val()
  let text = $('#post-message').val()
  // ------PUSH object containg name and message to posts array------
  posts.push({
    'userName': name,
    'postMessage': text,
    'comments': [],
  })
  newPost();
})

var editPost = function(){
  editId = '#edit-id-' + thisPostId //stores #edit-id-number
  $(editId).click(function(){
    let postId = '#post-id-' + thisPostId //finds particular post
    let doneId = '#edit-done-' + thisPostId //finds the Done button that always existed but was hidden
    postdata = $(postId).find('.posted-message').html();
    $(postId).find(doneId).removeClass('hide');
    $(postId).find('.posted-message').replaceWith('<textarea class="input-group edit-height">'+postdata+'</textarea>');
  })
}

var doneEdit = function(){
  buttonDoneId = '#edit-done-' + thisPostId //stores #edit-done-number
  $(buttonDoneId).click(function(){
    let postId = '#post-id-' + thisPostId //finds particular post
    let doneId = '#edit-done-' + thisPostId //targets specific id of the done button
    postdata = $(postId).find('.edit-height').val(); //uses parent to find child- edit height is a css that makes the edit box taller and was an easily targetable class.
    $(postId).find(doneId).addClass('hide'); //hides the Done button
    $(postId).find('.edit-height').replaceWith('<p class="posted-message">'+postdata+'</p>'); //replaces content with 'p' elements and inserts the postdata above
  })
}

var deleteComment = function(){
  console.log("SAOIFHODFJSD")
  deleteCommentButtonId = '#comment-delete-' + thisCommentId //stores #edit-done-number
  $(deleteCommentButtonId).click(function(){
    console.log("ASASDSDS")
    let commentId = '#comment-' + thisCommentId //stores string: '#post-id-number'
    $(commentId).remove(); //$(#post-id-number).remove() => removes entire post
  })
}
