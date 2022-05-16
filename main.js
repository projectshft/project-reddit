// Add a post
$('#post-form').on('submit', function (event) {
  event.preventDefault();
  const $postAuthor = $('#name').val();
  const $postTitle = $('#title').val();
  const $postText = $('#message').val();
  
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
              required 
              id="comment-name"
              type="text"
              class="form-control"
              placeholder="Your Name"
            />
          </div>
          <div class="form-group">
            <textarea
              required 
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

// Remove a post
$('.posts').on('click', '#remove', function () {
  $(this).parent().remove();
});

// Toggle showing/hiding comments
$('.posts').on('click', '#comments', function () {
  $(this).parents('.post-padding').siblings('.comment-posts').toggleClass('hidden');
  return false;
});

// Add a comment
$('.posts').on('click', '#submit-comment', function () {
  const $commentAuthor = $(this).siblings('div.form-group').children('#comment-name').val()
  const $commentText = $(this).siblings('div.form-group').children('#comment-text').val();

  $(this).parents('.comment-posts').children('.each-comment').append(`
    <div class="col-xs-10 col-xs-offset-1 comment-text">
      <button type="button" id="comment-remove" class="btn btn-danger remove-button">
        <span class="glyphicon glyphicon-remove"></span>
      </button>
      <p class="author">Comment by u/${$commentAuthor}</p>
      <p>${$commentText}</p>
    </div>
  `);

  $(this).parents('#comment-submission-form')[0].reset();
});

// Remove a comment
$('.posts').on('click', '#comment-remove', function () {
  $(this).parent().remove();
});