
var submitComment = function() {
  $('.comment-submit').unbind().click(function() {
    let thisPostId = $(this).closest("[data-post-id]").attr('data-post-id')
    commenterName = '#comment-user-' + thisPostId //stores id of input area for commenter's name to get it's value when comment button is pressed-- please reference function submitComment
    commenterText = '#post-comment-' + thisPostId //stores id of  textarea for commenter's message to get it's value when comment button is pressed
    let name = $(commenterName).val()
    let text = $(commenterText).val()
    // ------PUSH object containg commenter and the comments to posts array------
    posts[thisPostId - 1].comments.push({
      'commenter': name,
      'commentMessage': text
    })
    newComment(thisPostId);
  })
}


var targetDisplayPost = function(){
  $('.posted-message').unbind().click(function(){
    let thisPostId = $(this).closest("[data-post-id]").attr('data-post-id')
    $('.a-post').addClass('hide');
    $('#user-post-header').addClass('hide');
    $('#post-id-' + thisPostId).removeClass('hide');
    $('#post-id-' + thisPostId).addClass('py-5');
    if( $('#post-comments-' + thisPostId).hasClass('hide') ){
      $('#back-id-' + thisPostId).addClass('show')
    }
  })
}

var displayCommentBox = function() {
  $('.comment-post').unbind().click(function(){
    console.log('display comments')
    let thisPostId = $(this).closest("[data-post-id]").attr('data-post-id')
    let postId = '#post-id-' + thisPostId
    $('#post-comments-' + thisPostId).removeClass('hide');
    $('#back-id-' + thisPostId).removeClass('show')
  })
}

var backToPage = function(){
  $('.back-to-page').unbind().on("click", function() {
    let thisPostId = $(this).closest("[data-post-id]").attr('data-post-id')
    $('#post-comments-' + thisPostId).addClass('hide');
    $('.a-post').removeClass('hide');
    $('#user-post-header').removeClass('hide');
    $('#post-id-' + thisPostId).removeClass('py-5');
    $('#back-id-' + thisPostId).removeClass('show')
  })
}

var removePost = function() {
  $('.remove-post').unbind().click(function(){
    $(this).closest('.a-post').remove();
    console.log('remove post')
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

  console.log("new post info pushed to posts array, then initiates execution of new post #" + (postCount+1))
  newPost();
})

var editPost = function(){
  // let editId = '#edit-id-' + thisPostId //stores #edit-id-number
  $('.edit-post').click(function(){
    let thisPostId = $(this).closest("[data-post-id]").attr('data-post-id')
    let postId = '#post-id-' + thisPostId //finds particular post
    let doneId = '#edit-done-' + thisPostId //finds the Done button that always existed but was hidden
    postdata = $(postId).find('.posted-message').html();
    $(postId).find(doneId).removeClass('hide');
    $(postId).find('.posted-message').replaceWith('<textarea class="input-group edit-height">'+postdata+'</textarea>');
  })
}

var doneEdit = function(){
  // buttonDoneId = '#edit-done-' + thisPostId //stores #edit-done-number
  $('.edit-done').click(function(){
    let thisPostId = $(this).closest("[data-post-id]").attr('data-post-id')
    let postId = '#post-id-' + thisPostId //finds particular post
    let doneId = '#edit-done-' + thisPostId //targets specific id of the done button
    postdata = $(postId).find('.edit-height').val(); //uses parent to find child- edit height is a css that makes the edit box taller and was an easily targetable class.
    $(postId).find(doneId).addClass('hide'); //hides the Done button
    $(postId).find('.edit-height').replaceWith('<p class="posted-message">'+postdata+'</p>'); //replaces content with 'p' elements and inserts the postdata above
  })
}

var deleteComment = function(){
  deleteCommentButtonId = '#comment-delete-' + thisCommentId //stores #edit-done-number
  $(deleteCommentButtonId).click(function(){
    let commentId = '#comment-' + thisCommentId //stores string: '#post-id-number'
    $(commentId).remove(); //$(#post-id-number).remove() => removes entire post
  })
}

/*
remove doesn't need an id
*/
