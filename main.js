
var postCount = 0;
var allPosts = [];

var postButton = $('#submit-post');

$(postButton).on('click', function () {

  $('.post-list').empty();

  var postMessage = $('#message').val();
  var postName = $('#name').val();


  var postObject = {
    message: postMessage,
    name: postName,
    id: postCount,

    removeButtonHTML: '<a href="#" id="remove-button-' + postCount + '">remove </a>',
    commentButtonHTML: '<a href="#" id="comment-button-' + postCount + '">comment </a>',
    commentFormHTML: '<form class="form-inline comments" id="form-' + postCount+ '" onsubmit="event.preventDefault();" style="display:none;"><input id="message-comment-'+ postCount + '" type="text" class="form-control" placeholder="Comment Text"></input><input id="name-comment" type="text" class="form-control" placeholder="User Name"></input><button id="submit-comment-'+ postCount + '" class="btn btn-primary">Post Comment</button></form>',

    removeButtonIdentifier: '#remove-button-' + postCount,
    commentButtonIdentifier: '#comment-button-' + postCount,
    commentFormIdentifier: '#form-' + postCount
  }

  // dynamically creating properties outside the object literal
  postObject['commentButton'] = $(postObject.commentButtonIdentifier);
  $(postObject.commentButton).on('click', function () {
     $(postObject.commentFormIdentifier).toggle();
  });

  allPosts.push(postObject);
  postCount += 1;
  // This is where using allPosts might come in handy. We create a separate ID above using a for loop,
  // and then prepend in a loop down here. The ID woul+ d be for matching dropdowns.

  for (i = 0; i < allPosts.length; i++) {
    $('.post-list').append('<li>' + allPosts[i].removeButtonHTML + allPosts[i].commentButtonHTML + allPosts[i].message + '</p>' + '<ul class="comment-list"><ul>' + allPosts[i].commentFormHTML + '<p>Posted by: <strong>' + allPosts[i].name + '</strong></p><hr></li>');


    // var submitComment = $('#submit-comment');
    //
    // $(submitComment).on('click', function() {
    //    var commentMessage = $('#message-comment').val();
    //    var commentName = $('#name-comment').val();
    //
    //    $('')
    // });

  } // end for loop

});
