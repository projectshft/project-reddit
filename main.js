/****************************************************
Eval #2  |  Project Reddit  |  by Alice Tung

A site where users can create posts and comments.

*****************************************************/



$(document).ready(function() {

/* Variables to create an array of post objects */
  var $post = [];
  var $postObject = {};

/* When the user submits a post entry, user name and post message
   are stored as an object in an array.*/
  $('#btn-post').click(function() {

    var $postName = $('input#postName').val();
    var $postText = $('textarea#postText').val();

    $post.push($postObject);

/* User post is rendered as HTML to the virtual DOM */
    $(function() {
      $postObject = {
        postName: $postName,
        postText: $postText,
        appendPostObject: function() {
          $('ul').append(
            '<br><br><li>' + this.postText + '<br>' +
            'Posted by: ' + '<strong>' + this.postName + '</strong>' + '</li>' +
            '<button class="btn btn-primary btn-xs" id="add-comment">Add comment</button>' +
            '<button class="btn btn-danger btn-xs" id="remove-post">Remove post</button>'
          );

          $('#add-comment').click(function() {
            $('#comment-section').toggle();
          });
        }
      };
      $postObject.appendPostObject();
    });
  }.bind(this));


/* Variables to create an array of comment objects */
  var $comment = [];
  var $commentObject = {};

/* When the user submits a comment entry, user name and comments
  are stored as an object in an array.*/
  $('#btn-comment').click(function() {

    var $commentName = $('input#commentName').val();
    var $commentText = $('textarea#commentText').val();

    $comment.push($commentObject);

/* User comment is rendered as HTML to the virtual DOM */
    $(function() {
      $commentObject = {
        commentName: $commentName,
        commentText: $commentText,
        appendCommentObject: function() {
          $('ul').append(
            '<li>' + this.commentText + '<br>' +
            'Posted by: ' + '<strong>' + this.commentName + '</strong>' + '</li>' +
            '<button class="btn btn-warning btn-xs" id="remove-comment">Remove comment</button>'
          );
        }
      };
      $commentObject.appendCommentObject();
    });
  }.bind(this));

});
