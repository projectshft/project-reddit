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
};

// handle click event on post button.
$postButton.on('click', submitPost);

// create function to make jquery object (and methods) for submitted post.
var createPost = function(post) {

  // set template to display name/message of new post, using the unique post
  // number in the IDs of the main div, remove button, comments button, and
  // toggled comments content (list div and inline submission form).
  var template =
    '  <div class="post-unit border-bottom text-justify" id="post-unit-' + post.number + '">' +
    '    <div class="row">' +
    '    <div class="col">' +
    '      <div class="post-message-row">' +
    '    <div class="btn-group" role="group" aria-label="post actions">' +
    '      <button type="button" class="btn btn-link remove-post" id="' + post.number + '">remove</button>' +
    '      <button type="button" class="btn btn-link" data-toggle="collapse" data-target="#comment-list-' + post.number + '">comments</button>' +
    '    </div>' +
    '    <span>' + post.message + '</span>' +
    '    </div></div></div>' +
    '  <div class="row">' +
    '  <div class="col">' +
    '      <div id="comment-list-' + post.number + '" class="collapse">' +
    '          <div id="comments-div-' + post.number + '">' +
    '  </div>' +
    '    <form class="form-inline">' +
    '        <div class="form-group">' +
    '            <input type="text" class="form-control mr-sm-2" id="comment-message-' + post.number + '" placeholder="Comment Text">' +
    '            </div>' +
    '  <div class="form-group">' +
    '      <input type="text" class="form-control mr-sm-2" id="comment-name-' + post.number + '" placeholder="User Name">' +
    '      </div>' +
    '        <button type="button" class="btn btn-primary comment-button" id="' + post.number + '.0">Post Comment</button>' +
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
    var postNumber = $(this).attr("id");
    var $parentRow = $('#post-unit-' + postNumber);
    $parentRow.remove();

    // remove post from array of posts.
    var arrayPost = posts.find(post => post.number === Number(postNumber));
    var postIndex = posts.indexOf(arrayPost);
    posts.splice(postIndex, 1);
  };

  // handle click event on remove post button.
  $post.find('.remove-post').on('click', removePost);

  // initialize comment count.
  var commentCount = 0;

  // create function to handle comment submission.
  var submitComment = function() {

    // retrieve post number and comments div by id of post comment button.
    var postNumber = Number($(this).attr("id"));
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

    // add comment object to comments array of appropriate post object in posts array.
    var arrayPost = posts.find(post => post.number === postNumber);
    var postIndex = posts.indexOf(arrayPost);
    posts[postIndex].comments.push(comment);

    // increment comment count.
    commentCount++;

    // create jquery object and add to comments div DOM element.
    var $newComment = createComment(comment);
    $commentsDiv.append($newComment);
  };

  // create function to make jquery object (and methods) for submitted comment.
  var pN = post.number;
  var createComment = function(comment) {

    // set template to display name/message of new comment with 'x' button.
    var commentTemplate =
      '<div class="post-' + pN + '-comment-' + comment.commentNumber + '">' + comment.commentMessage +
      ' Posted By: <strong>' + comment.commentName + '</strong>' +
      '<a class="close" data-comment-number="' + comment.commentNumber + '" href="#" role="button">&times;</a>' +
      '</div>';

    // assign shorthand name to new jquery object from template.
    var $comment = $(commentTemplate);

    // create function to handle comment removal.
    var removeComment = function () {

      // remove comment from DOM element using unique comment number.
      var commentNumber = $(this).attr('data-comment-number');
      var $parentDiv = $('.post-' + pN + '-comment-' + commentNumber);
      $parentDiv.remove();

      // remove comment from array of comments.
      var arrayPost = posts.find(post => post.number === Number(pN));
      var postIndex = posts.indexOf(arrayPost);
      var arrayComment = posts[postIndex].comments.find(comment => comment.commentNumber === Number(commentNumber));
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

//---TO DO: refine css & html (templates and index file); refactor code.
