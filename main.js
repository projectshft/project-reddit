// Get current date and time function, to be called within post/comment functions

const getDate = () => {
  const date = new Date();
  
  const dayOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const day = new Intl.DateTimeFormat('en-US', dayOptions).format(date);
  
  const timeOptions = { hour: 'numeric', minute: 'numeric' };
  const time = new Intl.DateTimeFormat('en-US', timeOptions).format(date);

  return {
    day,
    time
  };
}

// Submit a post

$('body').on('click', '.submit-post', function () {
  const $postTextInput = $('#post-text-input').val();
  const $postNameInput = $('#post-name-input').val();
  const postDate = getDate();
  
  const newPostTemplate = (`
    <div class="post">
      <p class="post-text">${$postTextInput}</p>
        <div class="row">
          <div class="col table-parent">
            <div class="table-child post-btns-inner">
              <button type="button" class="btn btn-primary btn-sm view-btn">View / Edit / Comment</button>
              <button type="button" class="btn btn-outline-secondary btn-sm edit-post-btn">Edit</button>
              <button type="button" class="btn btn-outline-danger btn-sm remove-post-btn">Delete</button>
            </div>
          </div>
          <div class="col-md-auto table-parent">
          <p class="stamp small table-child">
            Posted by <strong>${$postNameInput}</strong> on ${postDate.day}, at ${postDate.time}
          </p>
        </div>
        </div>
      <div class="comments-container">
        <section class="comments"></section>
        <form class="comment-form">
          <div class="form-group">
            <h4>
              <i class="bi bi-chat-text" style="font-size: 32px; margin-right: 0.25rem"></i>
              Join the Conversation
            </h4>
          </div>
          <div class="form-group">
            <textarea
              type="text"
              class="form-control"
              id="comment-text-input"
              placeholder="Comment Text"
            ></textarea>
          </div>
          <div class="form-group">
            <div>
              <input
                type="text"
                class="form-control"
                id="comment-name-input"
                placeholder="Your Name"
              />
            </div>
          </div>
          <button type="button" class="btn btn-primary submit-comment">
            Submit Comment
          </button>
        </form>
      </div>
    </div>
  `);

  if ($postTextInput.length > 0 && $postNameInput.length > 0) {
    $('#posts').last().append(newPostTemplate);
    $('body').find('.post').last().data('name', `${$postNameInput}`);
    $('body').find('.post').last().data('post-text', `${$postTextInput}`);
    $('form :input').val('');
  } else if ($postTextInput.length <= 0 && $postNameInput.length <= 0) {
    alert('Please enter a post message and name');
  } else if ($postTextInput.length <= 0 && $postNameInput.length > 0) {
    alert('Please enter a post message');
  } else if ($postTextInput.length > 0 && $postNameInput.length <= 0) {
    alert('Please enter a name');
  }
});

// Submit a comment

$('body').on('click', '.submit-comment', function () {
  const $commentTextInput = $(this).closest('form').find('#comment-text-input').val()
  const $commentNameInput = $(this).closest('form').find('#comment-name-input').val()
  const commentDate = getDate();

  const newCommentTemplate = (`
    <div class="comment">
      <p class="comment-text">${$commentTextInput}</p>
      <div class="row">
        <div class="col table-parent">
          <p class="table-child">
            <button type="button" class="btn btn-outline-danger btn-sm remove-comment-btn">Delete</button>
          </p>
        </div>
        <div class="col-md-auto table-parent">
          <p class="stamp small table-child">
            Posted by <strong>${$commentNameInput}</strong> on ${commentDate.day}, at ${commentDate.time}
          </p>
        </div>
      </div>
    </div>
  `);

  if ($commentTextInput.length > 0 && $commentNameInput.length > 0) {
    $(this).closest('.post').find('.comments').last().append(newCommentTemplate);
    $('form :input').val('');
  } else if ($commentTextInput.length <= 0 && $commentNameInput.length <= 0) {
    alert('Please enter a comment and name');
  } else if ($commentTextInput.length <= 0 && $commentNameInput.length > 0) {
    alert('Please enter a comment');
  } else if ($commentTextInput.length > 0 && $commentNameInput.length <= 0) {
    alert('Please enter a name');
  }
});

// Remove post

$('body').on('click', '.remove-post-btn', function () {
  const confirmRemove = confirm('Are you sure you want to remove this post?');
  
  if (confirmRemove) {
    $(this).closest('.post').remove();
    $('.post').toggle();
    $('.post-form').toggle();
  }
});

// Remove comment

$('body').on('click', '.remove-comment-btn', function () {
  const confirmRemove = confirm('Are you sure you want to remove this comment?');

  if (confirmRemove) {
    $(this).closest('.comment').remove();
  }
});

// edit post

$('body').on('click', '.edit-post-btn', function () {
  const $postElement = $(this).closest('.post').find('.post-text');

  if (!$postElement.attr('contenteditable')) {
    $postElement.attr('contenteditable', 'true');
    $postElement.after('<button type="button" class="btn btn-outline-danger cancel-change-btn">Cancel</button>');
    $postElement.after('<button type="button" class="btn btn-primary submit-change-btn">Submit Change</button> ');
    $postElement.focus();
    $(this).closest('.post-btns-inner').toggle();
  }
});

$('body').on('click', '.cancel-change-btn', function () {
  const $postElement = $(this).closest('.post').find('.post-text');
  const $postText = $(this).closest('.post').data('post-text');

  $postElement.html($postText);
  $postElement.removeAttr('contenteditable');

  $(this).closest('.post').find('.post-btns-inner').toggle();
  $(this).closest('.post').find('.submit-change-btn').remove();
  $(this).remove();
});

$('body').on('click', '.submit-change-btn', function () {
  const $postElement = $(this).closest('.post').find('.post-text');
  const $postAuthor = $(this).closest('.post').data('name')
  const $postStamp = $(this).closest('.post').find('.stamp').first();
  const $postText = $(this).closest('.post').data('post-text');
  const $newPostText = $postElement.html();

  const commentDate = getDate();
  $(this).closest('.post').data('post-text', `${$newPostText}`);
  
  $postElement.removeAttr('contenteditable');
  $postStamp.html(`Edited by <strong>${$postAuthor}</strong> on ${commentDate.day}, at ${commentDate.time}`);
  
  $(this).closest('.post').find('.post-btns-inner').toggle();
  $(this).closest('.post').find('.cancel-change-btn').remove();
  $(this).remove();
});

// view post/comments

$('body').on('click', '.view-btn', function () {
  $(this).closest('.post').find('.comments-container').toggle();
  $(this).siblings('.remove-post-btn').toggle();
  $(this).siblings('.edit-post-btn').toggle();
  $(this).closest('.post').siblings().toggle();
  $(this).text().length > 5 ? $(this).html('Back') : $(this).html('View / Edit / Comment');
  $('.post-form').toggle();
});