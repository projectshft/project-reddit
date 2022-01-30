const $submitPostBtn = $('#submit-post');
const $postsDiv = $('.posts');
const $nameInput = $('#name');
const $messageInput = $('#message');

function submitPost() {
  const nameVal = $nameInput.val();
  const messageVal = $messageInput.val();

  // checks that input fields are not blank
  if (!nameVal || !messageVal) {
    alert('Input fields cannot be blank.');
    return;
  }

  // creates post and displays it
  const newPost = `<post>${createPost(nameVal, messageVal)}</post>`;
  $postsDiv.append(newPost);

  // clears input fields on submit
  $nameInput.val('');
  $messageInput.val('');

  // delete post functionality
  const $post = $('post');
  $post.on('click', '.delete-btn', e => $(e.target).parent().remove());

  // comment functionality
  $('.comment-btn').on('click', function(e) {
    $(e.target).parent().append(commentFormHtml);
  });``

  // const commentNameVal = $post.find('.name').val();
  // const commentMessageVal = null;
  // const newComment = `<comment>${createPost(commentNameVal, commentMessageVal)}</comment>`;
  // const $submitCommentBtn = $('#submit-comment');
  // $submitCommentBtn.on('click', () => $post.append(newComment));
  // edit functionality
  // $post.on('click', '.edit-btn', () => $post.append(editFormHtml));
}

const createPost = (nameVal, messageVal) => {
  const messageP = `<p>${messageVal}</p>`;
  const nameP = `<p><strong>Posted by : ${nameVal}</strong></p>`;

  // creates buttons for each post
  const buttonPrefix = '<button class="post-btns btn btn-primary btn-xs';
  const commentBtn = buttonPrefix + ' comment-btn">Comment</button>';
  const editBtn = buttonPrefix + ' edit-btn">Edit</button>';
  const deleteBtn = buttonPrefix + ' delete-btn">Delete</button>';

  // returns a string that creates the entire post
  return messageP + nameP + commentBtn + editBtn + deleteBtn + '<hr>';
}

$submitPostBtn.on('click', submitPost);
