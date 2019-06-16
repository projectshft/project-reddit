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
  // toggled comments content (list, removal 'x', and inline submission form).
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
    $parentRow = $('#post-unit-' + postNumber);
    $parentRow.remove();

    // remove post from array of posts.
    var arrayPost = posts.find(post => post.number === Number(postNumber));
    var postIndex = posts.indexOf(arrayPost);
    posts.splice(postIndex, 1);
  };

  // handle click event on remove button.
  $post.find('.remove-post').on('click', removePost);

  // ------------
  // new functions for comment display/submission (with adjustments to template)
  var commentCount = 0;
  //
  // ---
  var submitComment = function() {
    var postNumber = Number($(this).attr("id"));
    // var $commentList = $('#comment-list-' + postNumber);
    var $commentsDiv = $('#comments-div-' + postNumber);
    var commentName = $('#comment-name-' + postNumber).val();
    var commentMessage = $('#comment-message-' + postNumber).val();

    var comment = {
      commentName: commentName,
      commentMessage: commentMessage,
      commentNumber: commentCount,
    };

    var arrayPost = posts.find(post => post.number === postNumber);
    var postIndex = posts.indexOf(arrayPost);
    posts[postIndex].comments.push(comment);
    commentCount++;

    // console.log(JSON.stringify(comment));
    var $newComment = createComment(comment);
    $commentsDiv.append($newComment); // $commentList.
  };
  // ---
  var createComment = function(comment) {
    // make jquery object (with template)
    var commentTemplate =
      '<div>' + comment.commentMessage +
      ' Posted By: <strong>' + comment.commentName + '</strong>' +
      '  <button type="button" class="close" aria-label="Close">' +
      '  <span aria-hidden="true">&times;</span>' +
      '  </button>' +
      '</div>';
    var $comment = $(commentTemplate);
    // include removal ability
    // $comment.find()
    // console.log(commentTemplate);
    return $comment;
  };
  // ---
  $post.find('.comment-button').on('click', submitComment);
  // ------------

  return $post;

  // TO DO: create function to handle comment removal.
};

// [general] TO DO: clean up html (templates and index), work on css.
