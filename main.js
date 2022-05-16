const postState = {
  posts: [
    {
      author: 'Andrew',
      text: 'What an amazing post!',
      comments: [
        {
          author: 'Eliza',
          text: 'Yes, it is!',
        },
        {
          author: 'Alecia',
          text: "Couldn't agree more!"
        }
      ]
    },
    {
      author: 'Eliza',
      text: 'But mine is even better.',
      comments: [
        {
          author: 'Drew',
          text: 'My post!',
        },
      ]
    },
    {
      author: 'Alecia',
      text: 'But what about mine?',
      comments: []
    }
  ],
};

$('#submit').on('click', function () {
  const postAuthor = $('#name')[0].value;
  const postTitle = $('#title')[0].value;
  const postText = $('#message')[0].value;
  
  $('.posts').append(`
  <div class="post-container">
    <button type="button" id="remove" class="btn btn-danger remove-button">
      <span class="glyphicon glyphicon-remove"></span>
    </button>
    <div class="post-padding">
      <div class="row title-section">
        <div class="col-xs-10 author">
          <p>Posted by u/${postAuthor}</p>
        </div>
        <div class="col-xs-10 title">
          <p>${postTitle}</p>
        </div>
      </div>
      <div class="row text-section">
        <div class="col-xs-12 text">
          <p>${postText}</p>
        </div>
      </div>
      <div class="row comment-section">
        <div class="col-xs-12 comment-link">
          <a href="#"><i class="fa-regular fa-comment"></i> Comments</a>
          <a href="#"><i class="fa-solid fa-share"></i> Share</a>
          <a href="#"><i class="fa-regular fa-bookmark"></i> Save</a>
        </div>
      </div>
    </div>
    <div class="row comment-posts hidden">
      <div class="each-comment"></div>
      <div class="col-xs-10 col-xs-offset-1 comment-form">
        <form onsubmit="event.preventDefault();">
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
          <button type="button" id="submit-comment" class="btn btn-primary">Comment</button>
        </form>
      </div>
    </div>
  </div>
  `);
});

$('.posts').on('click', '#remove', function () {
  $(this).parent().remove();
});

$('.posts').on('click', 'a', function () {
  $('.comment-posts').toggleClass('hidden');
});

$('.posts').on('click', '#submit-comment', function () {
  const commentAuthor = $(this).siblings('div.form-group').children('#comment-name').val()
  const commentText = $(this).siblings('div.form-group').children('#comment-text').val();

  $(this).parents('.comment-posts').children('.each-comment').append(`
    <div class="col-xs-10 col-xs-offset-1 comment-text">
      <p class="author">Comment by u/${commentAuthor}</p>
      <p>${commentText}</p>
    </div>
  `);

});