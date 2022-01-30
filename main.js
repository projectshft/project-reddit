const $submitPostBtn = $('#submit-post');
const $postsDiv = $('.posts');
const $nameInput = $('#name');
const $messageInput = $('#message');
const $postForm = $('.post-form');

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
  $postForm.trigger('reset');

  // delete post functionality
  const $post = $('post');
  $post.on('click', '.delete-btn', e => $(e.target).parent().remove());

  // comment functionality
  // const $commentForm = $('.comment-form');
  $post.on('click', '.comment-btn', () => $post.find('.comment-form').toggle());
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
  return messageP + nameP + commentBtn + editBtn + deleteBtn + '<hr>' + commentFormHtml;
}

$submitPostBtn.on('click', submitPost);
