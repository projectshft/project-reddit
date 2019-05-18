/****************************************************
Eval #2  |  Project Reddit  |  by Alice Tung
A site where users can create posts and comments.
*****************************************************/


// Buttons 
var addCommentButton = '<button class="btn btn-primary btn-xs" id="add-comment">Add comment</button>' 
var removePostButton = '<button class="btn btn-danger btn-xs" id="remove-post">Remove post</button>'
var postCommentButton = '<button type="submit" class="btn btn-success" id="btn-comment">Post comment</button>'
var removeCommentButton = '<button class="btn btn-danger btn-xs" id="remove-comment">Remove comment</button>'


$(document).ready(function() {

  // When the user submits a post entry, user name and post message,
  // along with comment button and remove button are rendered to the DOM
  var newPost = function(e) {

    event.preventDefault();

    var $postName = $('input#postName').val();
    var $postText = $('textarea#postText').val();

    if ($postName && $postText) {

      $('.post-list').append(
        '<br><br><div id="this-post">' + $postText + '<br>' +
        'Posted by: ' + '<strong>' + $postName + '</strong>' +
        addCommentButton + removePostButton    
        + '<div class="comment-row"><div>'+
        '</div>'
      );
    } else {
      alert('Please complete form')
    }
  }

  // Renders commenting form to the DOM
  var commentForm = function() {

    $('.comment-row').append(
      '<form id="comment-section>'
  
      + '<div class="form-group">'
      +   '<input id="commentName" type="text" class="form-control" placeholder="Commenter name">'
      +   '</input>'
      +'</div>'

      + '<div class="form-group">'
      +   '<textarea id="commentText" type="text" class="form-control" placeholder="Comment text">'
      +   '</textarea>'
      +'</div>'

      +
        postCommentButton
      + 
      '</form>'    
    );
  }

  // Renders new comment to the DOM
  var newComment = function(e) {

    e.preventDefault();

    var $commentName = $('input#commentName').val();
    var $commentText = $('textarea#commentText').val();

    if ($commentName && $commentText) {

      $('.comment-row').append(
        '<br><br><div class="comment-row">' + $commentText + '<br>' +
        'Commenter: ' + '<strong>' + $commentName + '</strong>'
        + removeCommentButton  + '</div>' 
      );
    } else {
      alert('Please complete form')
    }
  }


  // Function to delete a post
  var removePost = function() {
    console.log('this: ', this)

    $(this).closest('#this-post').remove()
  }

  // Function to delete a comment
  var removeComment = function() {
    console.log('Delete comment clicked!')

    $(this).closest('.comment-row').remove()
  }


  // Clicking on "Post" button adds a new post
  $('#btn-post').click(newPost);

  // Clicking on "Post Comment" adds a new comment
  $(document).on("click", '#btn-comment', newComment);

  // Listen on the document for when "remove post" button is clicked
  $(document).on("click", '#remove-post', removePost);

  // Listen on the document for when "add comment" button is clicked
  $(document).on("click", '#add-comment', commentForm);

  // Listen on the document for when "remove comment" button is clicked
  $(document).on("click", '#remove-comment', removeComment);
  

});


