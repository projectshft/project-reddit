// initialize posts array (for post objects) and post count (for unique post numbers).
var posts = [];
var postCount = 0;

// assign shorthand names for post button and post list div jquery selectors.
var $postButton = $('#post-button');
var $postList = $('.post-list');

// create function to handle post submission.
var submitPost = function() {

  // retrieve name and message input values.
  var userName = $('#post-name').val();
  var userMessage = $('#post-message').val();

  // make post object (name, message, number based on count, and empty comments array).
  var post = {
    name: userName,
    message: userMessage,
    number: postCount,
    comments: []
  };

  // add post object to posts array and increment count variable.
  posts.push(post);
  postCount++;

  // create jquery object and add to post list DOM element.
  var $newPost = createPost(post);
  $postList.append($newPost);

  $('#post-form').trigger('reset');
};

// handle click event on post button.
$postButton.on('click', submitPost);

// create function to make jquery object (and methods) for submitted post.
var createPost = function(post) {

  var postNumber = post.number;

  // set template to display name/message of new post with unique post number,
  // including toggled comments content (list div and inline submission form).
  var template =
    '  <div class="post-unit border-bottom text-justify" id="post-unit-' + postNumber + '">' +
    '    <div class="row">' +
    '    <div class="col">' +
    '      <div class="post-message-row">' +
    '    <div class="btn-group" role="group" aria-label="post actions">' +
    '      <button type="button" class="btn btn-link remove-post">remove</button>' +
    '      <button type="button" class="btn btn-link" data-toggle="collapse" data-target="#comment-list-' + postNumber + '">comments</button>' +
    '    </div>' +
    '    <span>' + post.message + '</span>' +
    '    </div></div></div>' +
    '  <div class="row">' +
    '  <div class="col">' +
    '      <div id="comment-list-' + postNumber + '" class="collapse">' +
    '          <div id="comments-div-' + postNumber + '">' +
    '  </div>' +
    '    <form class="form-inline" id="comment-form-' + postNumber + '">' +
    '        <div class="form-group">' +
    '            <input type="text" class="form-control mr-sm-2" id="comment-message-' + postNumber + '" placeholder="Comment Text">' +
    '            </div>' +
    '  <div class="form-group">' +
    '      <input type="text" class="form-control mr-sm-2" id="comment-name-' + postNumber + '" placeholder="User Name">' +
    '      </div>' +
    '        <button type="button" class="btn btn-primary comment-button">Post Comment</button>' +
    '        </form>' +
    '        </div></div></div>' +
    '      <div class="row">' +
    '  <div class="col">' +
    '      <div class="post-name-row">' +
    '          <span>Posted By: <strong>' + post.name + '</strong></span>' +
    '          </div></div></div></div> ';

  // assign shorthand name to new jquery object from template.
  var $post = $(template);

  // create function to handle post removal.
  var removePost = function() {

    // remove post from DOM element using unique post number.
    var $postUnit = $('#post-unit-' + postNumber);
    $postUnit.remove();

    // remove post from array of posts.
    var postIndex = posts.indexOf(post);
    posts.splice(postIndex, 1);
  };

  // handle click event on remove post button.
  $post.find('.remove-post').on('click', removePost);

  // initialize comment count.
  var commentCount = 0;

  // create function to handle comment submission.
  var submitComment = function() {

    // select comments div using unique post number.
    var $commentsDiv = $('#comments-div-' + postNumber);

    // retrieve name and message input values.
    var commentName = $('#comment-name-' + postNumber).val();
    var commentMessage = $('#comment-message-' + postNumber).val();

    // make comment object with name, message, and count.
    var comment = {
      commentName: commentName,
      commentMessage: commentMessage,
      commentNumber: commentCount,
    };

    // add comment object to comments array of post object in posts array.
    var postIndex = posts.indexOf(post);
    posts[postIndex].comments.push(comment);

    // increment comment count.
    commentCount++;

    // create jquery object and add to comments div DOM element.
    var $newComment = createComment(comment);
    $commentsDiv.append($newComment);

    $('#comment-form-' + postNumber).trigger('reset');
  };

  // create function to make jquery object (and methods) for submitted comment.
  var createComment = function(comment) {

    // set template to display name/message of new comment with 'x' button.
    var commentTemplate =
      '<div class="post-' + postNumber + '-comment-' + comment.commentNumber + '">' + comment.commentMessage +
      ' - Posted By: <strong>' + comment.commentName + '</strong>' +
      '<a class="close" data-comment-number="' + comment.commentNumber + '" href="#" role="button">&times;</a>' +
      '</div>';

    // assign shorthand name to new jquery object from template.
    var $comment = $(commentTemplate);

    // create function to handle comment removal.
    var removeComment = function () {

      // remove comment from DOM element using unique comment number.
      var removeCommentNumber = $(this).attr('data-comment-number');
      var $parentDiv = $('.post-' + postNumber + '-comment-' + removeCommentNumber);
      $parentDiv.remove();

      // remove comment from array of comments.
      var postIndex = posts.indexOf(post);
      var arrayComment = posts[postIndex].comments.find(comment => comment.commentNumber === Number(removeCommentNumber));
      var commentIndex = posts[postIndex].comments.indexOf(arrayComment);
      posts[postIndex].comments.splice(commentIndex, 1);
    };

    // handle click event on remove comment ('x') button.
    $comment.find('.close').on('click', removeComment);

    return $comment;
  };

  // handle click event on post comment button.
  $post.find('.comment-button').on('click', submitComment);

  return $post;
};
