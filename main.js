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
  const postText = $('#message')[0].value;
  $('.posts').append(`
  <div class="post-container">
    <button type="button" id="remove" class="btn btn-danger remove-button">
      <span class="glyphicon glyphicon-remove"></span>
    </button>
    <div class="post-padding">
      <div class="row author-section">
        <div class="col-xs-10 author">
          <p>${postAuthor}</p>
        </div>
      </div>
      <div class="row text-section">
        <div class="col-xs-12 text">
          <p>${postText}</p>
        </div>
      </div>
      <div class="row comment-section">
        <div class="col-xs-12 comment-link">
          <a href="#">Comments</a>
        </div>
      </div>
    </div>
  </div>
  `);
});

$('.posts').on('click', 'button', function () {
  $(this).parent().remove();
});