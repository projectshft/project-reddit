const removeButton = '<button type="button" class="btn btn-outline-danger btn-sm remove">Remove</button>'
const commentsButton = '<button type="button" class="btn btn-outline-info btn-sm show-comments">Comments</button>'

//Handle click on the Submit Post button

$('.submit-post').click(function () {
  const input = $('#post-text').val();
  const name = $('#name').val();
  
  const commentsForm = `<form>
  <div class="form-group">
    <input
      type="text"
      class="form-control"
      name="comment-text"
      placeholder="Comment Text"
    />
  </div>
  <div class="form-group">
    <input
      type="text"
      class="form-control"
      name="user-name"
      placeholder="Your Name"
    />
    </div>
    </form>
    <button type="button" class="btn btn-success submit-comment">Submit Comment</button>`;

  if (input && name) {
    $('#posts').append(`<div class="post-row">${removeButton} ${commentsButton} ${input} - Posted By: ${name}</div>` + `<div class="comments"></div>` + `<div class="comments-form">${commentsForm}<div><hr>`);
    $('#post-text').val('');
    $('#name').val('');
  }
});

//Handle click on the Submit Comment button

$('#posts').on('click', '.submit-comment', function () {
  const input = $(this).prev().find('input[name=comment-text]').val();
  const name =  $(this).prev().find('input[name=user-name]').val();

  if (input && name) {
    $(this).parent().prev('.comments').append(`<div class="post-row">${removeButton} ${input} - Posted By: ${name}</div>`);

    $(this).prev().find('input[name=comment-text]').val('');
    $(this).prev().find('input[name=user-name]').val('');
  }
});