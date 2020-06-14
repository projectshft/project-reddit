
var postCount = 0;
var allPosts = [];

var postButton = $('#submit-post');

$(postButton).on('click', function () {

  $('.post-list').empty();

  var postMessage = $('#message').val();
  var postName = $('#name').val();
  postCount += 1;

  var postObject = {
    message: postMessage,
    name: postName,
    id: postCount
  }
  allPosts.push(postObject);

  // What I've done here is give IDs to each post button.
  var removeButtonHTML = '<a href="#" id="remove-button-' + postObject.id + '">remove </a>';
  var commentButtonHTML = '<a href="#" id="comment-button-' + postObject.id + '">comment </a>';
  var commentFormHTML = '<form class="form-inline comments" id="form-' + postObject.id + '" onsubmit="event.preventDefault();" style="display:none;"><input id="message-comment-'+ postObject.id  + '" type="text" class="form-control" placeholder="Comment Text"></input><input id="name-comment" type="text" class="form-control" placeholder="User Name"></input><button id="submit-comment-'+ postObject.id  + '" class="btn btn-primary">Post Comment</button></form>';


  // This is where using allPosts might come in handy. We create a separate ID above using a for loop,
  // and then prepend in a loop down here. The ID woul+ d be for matching dropdowns.
  var removeButtonIdentifiers = [];
  var commentButtonIdentifiers = [];
  var commentFormIdentifiers = [];
  var commentButtons = [];

  for (i = 0; i < allPosts.length; i++) {
    $('.post-list').append('<li>' + removeButtonHTML + commentButtonHTML + allPosts[i].message + '</p>' + '<ul class="comment-list"><ul>' + commentFormHTML + '<p>Posted by: <strong>' + allPosts[i].name + '</strong></p><hr></li>');

    commentButtonIdentifiers[postObject.id] = '#comment-button-' + postObject.id;
    commentButtons[postObject.id] = $(commentButtonIdentifiers[postObject.id]);
    // consider doing this find with li.classname
    commentFormIdentifiers[postObject.id] = '#form-' + postObject.id;

    $(commentButtons[postObject.id]).on('click', function () {
       $(commentFormIdentifiers[postObject.id]).toggle();
    });

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
