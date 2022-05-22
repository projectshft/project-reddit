// Add a post
$('#post-form').on('submit', function (event) {
  event.preventDefault();
  const $postAuthor = $('#name').val();
  const $postTitle = $('#title').val();
  const $postText = $('#message').val();
  
  if (!$postTitle || !$postAuthor || !$postText) {
    return alert('Please complete all fields to submit your post.');
  }

  $('.posts').append(`
  <div class="post-container">
    <button type="button" id="remove" class="btn btn-danger remove-button">
      <span class="glyphicon glyphicon-remove"></span>
    </button>
    <div class="post-padding">
      <div class="row title-section">
        <div class="col-xs-10 author">
          <p>Posted by u/${$postAuthor}</p>
        </div>
        <div class="col-xs-10 title">
          <p>${$postTitle}</p>
        </div>
      </div>
      <div class="row text-section">
        <div class="col-xs-12 text">
          <p>${$postText}</p>
        </div>
      </div>
      <div class="row comment-section">
        <div class="col-xs-12 comment-link">
          <a href="#" id="comments"><i class="fa-regular fa-comment"></i> Comments</a>
          <a href="#"><i class="fa-solid fa-share"></i> Share</a>
          <a href="#"><i class="fa-regular fa-bookmark"></i> Save</a>
        </div>
      </div>
    </div>
    <div class="row comment-posts hidden">
      <div class="each-comment"></div>
      <div class="col-xs-10 col-xs-offset-1 comment-form">
        <form id="comment-submission-form">
          <h5>Add a Comment</h5>
          <div class="form-group">
            <input
              id="comment-name"
              type="text"
              class="form-control"
              placeholder="Your Name"
            />
          </div>
          <div class="form-group">
            <textarea
              id="comment-text"
              type="text"
              class="form-control"
              placeholder="Type Your Comment Here"
            ></textarea>
          </div>
          <button id="submit-comment" type="button" class="btn btn-primary">Comment</button>
        </form>
      </div>
    </div>
  </div>
  `);

  $('#post-form')[0].reset();
});

// Helper function to remove posts or comments
const postCommentRemover = function () {
  $(this).parent().remove();
};

// Remove a post
$('.posts').on('click', '#remove', postCommentRemover);

// Remove a comment
$('.posts').on('click', '#comment-remove', postCommentRemover);

// Toggle showing/hiding comments
$('.posts').on('click', '#comments', function () {
  $(this).parents('.post-padding').siblings('.comment-posts').toggleClass('hidden');
  return false;
});

// Add a comment
$('.posts').on('click', '#submit-comment', function () {
  const $commentAuthor = $(this).siblings('div.form-group').children('#comment-name').val()
  const $commentText = $(this).siblings('div.form-group').children('#comment-text').val();

  if (!$commentAuthor || !$commentText) {
    return alert('Please complete all fields to submit your comment.');
  }

  $(this).parents('.comment-posts').children('.each-comment').append(`
    <div class="col-xs-10 col-xs-offset-1 comment-text">
      <button type="button" id="comment-remove" class="btn btn-danger remove-button">
        <span class="glyphicon glyphicon-remove"></span>
      </button>
      <p class="author">${$commentAuthor}</p>
      <p>${$commentText}</p>
    </div>
  `);

  $(this).parents('#comment-submission-form')[0].reset();
});
