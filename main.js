const removeButton = '<button type="button" class="btn btn-outline-danger btn-sm remove">Remove</button>';
const commentsButton = '<button type="button" class="btn btn-outline-info btn-sm show-comments">Comments</button>';

//Display post when Submit Post button is clicked
//Add comment section to each post

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
    $('#posts').append(`<div class="post-row">${removeButton} ${commentsButton} ${input} - Posted By: ${name}</div>` + `<div class="comment-container"><div class="comments"></div><div class="comments-form">${commentsForm}</div></div>` + `<hr>`);
    $('#post-text').val('');
    $('#name').val('');
  }
});

//Post comment when the Submit Comment button is clicked

$('#posts').on('click', '.submit-comment', function () {
  const input = $(this).prev().find('input[name=comment-text]').val();
  const name =  $(this).prev().find('input[name=user-name]').val();

  if (input && name) {
    $(this).parent().prev('.comments').append(`<div class="comment-post-row">${removeButton} ${input} - Posted By: ${name}</div>`);

    $(this).prev().find('input[name=comment-text]').val('');
    $(this).prev().find('input[name=user-name]').val('');
  }
});

//Show and Hide Comments when Comments button is clicked

$('#posts').on('click', '.show-comments', function () {
  const commentContainer = $(this).parent().next('.comment-container');

    if (commentContainer.css('display') === 'none') {
      commentContainer.css('display', 'block');
    } else {
      commentContainer.css('display', 'none');
    }
});


//Remove posts or comments when Remove button is clicked

$('#posts').on('click', '.remove', function () {
 //Remove post and all comments when Remove Button is clicked next to a post
  if ($(this).parent().attr('class') === 'post-row') {
    $(this).parent().next().next().remove();
    $(this).parent().next().remove();
    $(this).parent().remove();
  }

  //Remove comment and button when remove button is clicked next to a comment
  if ($(this).parent().attr('class') === 'comment-post-row') {
    $(this).parent().remove();
  }
})