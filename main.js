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
  const postTextInput = $('#post-text-input').val()
  const postNameInput = $('#post-name-input').val()
  const postDate = getDate();
  
  const newPostTemplate = (`
    <div class="post">
      <p class="post-text">${postTextInput}</p>
        <div class="row">
          <div class="col table-parent">
            <div class="table-child">
              <button type="button" class="btn btn-primary btn-sm view-btn">View / Edit / Comment</button>
              <button type="button" class="btn btn-outline-secondary btn-sm edit-post-btn">Edit</button>
              <button type="button" class="btn btn-outline-danger btn-sm remove-post-btn">Delete</button>
            </div>
          </div>
          <div class="col-md-auto table-parent">
          <p class="stamp small table-child">
            Posted by <strong>${postNameInput}</strong> on ${postDate.day}, at ${postDate.time}
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

  $('#posts').last().append(newPostTemplate);
  $('body').find('.post').last().data('name', `${postNameInput}`);
  $('form :input').val('');
});

// Submit a comment

$('body').on('click', '.submit-comment', function () {
  const commentTextInput = $(this).closest('form').find('#comment-text-input').val()
  const commentNameInput = $(this).closest('form').find('#comment-name-input').val()
  const commentDate = getDate();

  const newCommentTemplate = (`
    <div class="comment">
      <p>${commentTextInput}</p>
      <div class="row">
        <div class="col table-parent">
          <p class="table-child">
            <button type="button" class="btn btn-outline-danger btn-sm remove-comment-btn">Delete</button>
          </p>
        </div>
        <div class="col-md-auto table-parent">
          <p class="stamp small table-child">
            Posted by <strong>${commentNameInput}</strong> on ${commentDate.day}, at ${commentDate.time}
          </p>
        </div>
      </div>
    </div>
  `);

  $(this).closest('.post').find('.comments').last().append(newCommentTemplate);

  $('form :input').val('');
});

// Remove post

$('body').on('click', '.remove-post-btn', function () {  
  $(this).closest('.post').remove();
  $('.post').toggle();
  $('.post-form').toggle();
});

// Remove comment

$('body').on('click', '.remove-comment-btn', function () {
  $(this).closest('.comment').remove();
});

// edit post

$('body').on('click', '.edit-post-btn', function () {
  const $postElement = $(this).closest('.post').find('.post-text');

  if (!$postElement.attr('contenteditable')) {
    $postElement.attr('contenteditable', 'true');
    $postElement.after('<button type="button" class="btn btn-primary submit-change-btn">Submit Change</button>');
    $postElement.focus()
  }
});

$('body').on('click', '.submit-change-btn', function () {
  const $postElement = $(this).closest('.post').find('.post-text');
  const $postAuthor = $(this).closest('.post').data('name')
  const $postStamp = $(this).closest('.post').find('.stamp').first();
  const commentDate = getDate();

  $postElement.removeAttr('contenteditable');
  $postStamp.html(`Edited by <strong>${$postAuthor}</strong> on ${commentDate.day}, at ${commentDate.time}`);
  
  $(this).remove();
});

// view post/comments

$('body').on('click', '.view-btn', function () {
  $(this).closest('.post').find('.comments-container').toggle();
  $(this).siblings('.remove-post-btn').toggle();
  $(this).siblings('.edit-post-btn').toggle();
  $(this).closest('.post').siblings().toggle();
  $(this).text().length > 5 ? $(this).html('Back') : $(this).html('View / Edit / Comment')
  $('.post-form').toggle();
});

// textarea resize

// $("textarea").each(function () {
//   this.setAttribute("style", "height:" + (this.scrollHeight) + "px;overflow-y:hidden;");
// }).on("input", function () {
//   this.style.height = "auto";
//   this.style.height = (this.scrollHeight) + "px";
// });