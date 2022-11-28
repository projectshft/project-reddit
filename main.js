var examplePosts = {
  examples: [
    { name: 'Joe', message: "Hey there buddy"},
    { name: 'Juan', message: "I'm not your buddy, friend"},
    { name: 'Joe', message: "I'm not your friend, guy"},
    { name: 'Juan', message: "I'm not your guy, buddy"}
  ]
}
var $postsArea = $( '.posts' )
var $postButton = $( '.post-button' )
var $commentButton = $( '.comment-button' )
var $sillyEasterEgg = $('.text-center')

$postButton.click(function () {
  var $userName = $('#post-name').val();
  var $userMsg = $('#post-message').val();
  
  var source = $('#user-post-template').html();
  var template = Handlebars.compile(source);
  var newHTML = template(examplePosts);
  $postsArea.append(newHTML);

  // postTemplate = `<div class="user-post">
  // <hr />
  //   <p>` + $userMsg + `</p>
  //   <p>Posted By: <strong>` + $userName + `</strong></p>
  //   <a href="#" role="button" class="post-remove-button">Remove</a>&nbsp;
  //   <a href="#" role="button" class="expand-button">Expand</a>&nbsp;
  // </div>`;

  $postsArea.append(postTemplate);
});

$postsArea.on('click', '.comment-button', function () {
  var $commentName = $('#comment-name').val();
  var $commentMsg = $('#comment-message').val();

  commentTemplate = `<div class="user-post">
    <p>` + $commentMsg + `</p>
    <p>Commented By: <strong>` + $commentName + `</strong></p>
    <a href="#" role="button" class="post-remove-button">Remove</a>&nbsp;
  </div>`;

  $(this).closest('.user-comment').prepend(commentTemplate);
});

$postsArea.on('click', '.post-remove-button', function () {
  $(this).closest('.user-post').remove();
});

$postsArea.on('click', '.comment-remove-button', function () {
  $(this).closest('.user-comment').remove();
});

// I tried to get expand (collapse toggle) to work on all posts by messing with scope and tree traversal methods. I could only get it to work on the inital post.
$postsArea.on('click', '.expand-button', function () {
  $(this).next('.collapse').collapse('toggle');
});

$sillyEasterEgg.one("mouseenter", function () {
  if (!alreadyHovered) {
    $('.page-title').prepend('<div class="alert alert-info alert-dismissible fade show text-center" role="alert">Look at me, I can center a div! <button class="btn-close" aria-label="close" data-bs-dismiss="alert"></button>')
  };
  var alreadyHovered = true;
});