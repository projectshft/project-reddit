var $postsArea = $( '.posts' )
var $postButton = $( '.post-button' )
var $commentButton = $( '.comment-button' )
var $sillyEasterEgg = $('.text-center')

$postButton.click(function () {
  var $userName = $('#post-name').val();
  var $userMsg = $('#post-message').val();
  
  var source = $('#user-post-template').html();
  var template = Handlebars.compile(source);
  var newHTML = template(source);
  $postsArea.append(newHTML);

  postTemplate = `<div class="user-post mt-2">
  <hr />
    <p>` + $userMsg + `</p>
    <p>Posted By: <strong>` + $userName + `</strong></p>
    <a href="#" role="button" class="post-remove-button">Remove</a>&nbsp;
    <a href="#" role="button" class="expand-button">Expand</a>&nbsp;
    <div class="row comments collapse offset-1">
    <div class="user-comment">
      <hr />
      <p style="color: red; text-align: center">Currently, full commenting functionality only works on the initial post by our friend Jim, sorry.  ¯\(ツ)/¯ </p>
      <hr />
      <div class="row comments-input">
        <form>
          <div class="form-group mt-2">
            <input
              type="text"
              id="comment-name"
              class="form-control"
              placeholder="Your name"
            />
          </div>
          <div class="form-group mt-3 mb-3">
            <input
              type="text"
              id="comment-message"
              class="form-control"
              placeholder="Your comment"
              style="height: 100px"
            />
          </div>
          <button class="comment-button btn btn-primary">
            Comment
          </button>
        </form>
      </div>
    </div>
  </div>
  </div>`;

  $postsArea.append(postTemplate);

  // Reset input fields after function runs
  $userName = $('#post-name').val('');
  $userMsg = $('#post-message').val('');
});

$postsArea.on('click', '.comment-button', function () {
  var $commentName = $('#comment-name').val();
  var $commentMsg = $('#comment-message').val();

  commentTemplate = `<div class="user-comment mt-2">
    <hr>
    <p>` + $commentMsg + `</p>
    <p>Commented By: <strong>` + $commentName + `</strong></p>
    <a href="#" role="button" class="post-remove-button">Remove</a>&nbsp;
  </div>`;

  $(this).closest('.user-comment').prepend(commentTemplate);

  // Reset input fields after function runs
  $commentName = $('#comment-name').val('');
  $commentMsg = $('#comment-message').val('');
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
  $(this).html('Collapse')
  $(this).addClass('collapse-button')
  $(this).toggleClass('expand-button')
});

$postsArea.on('click', '.collapse-button', function () {
  $(this).next('.collapse').collapse('toggle');
  $(this).html('Expand')
  $(this).addClass('expand-button')
  $(this).toggleClass('collapse-button')
});

$('#careers').click(function() {
  alert('🔥 Congratulations, you are the 💯th visitor to this site! 😳 As a reward, you get to check out my linkedin 😉 Buy Now! 🤑 \n\n https://www.linkedin.com/in/johnnywrightiv/')
})

$sillyEasterEgg.one("mouseenter", function () {
  if (!alreadyHovered) {
    $('.page-title').prepend('<div class="alert alert-info alert-dismissible fade show text-center" role="alert">Look at me, I can center a div! <button class="btn-close" aria-label="close" data-bs-dismiss="alert"></button>')
  };
  var alreadyHovered = true;
});