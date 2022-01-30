const $submitBtn = $('#submit');
const $postsDiv = $('.posts');
const $nameInput = $('#name');
const $messageInput = $('#message');

const submitFunc = () => {
  const nameVal = $nameInput.val();
  const messageVal = $messageInput.val();

  // checks that input fields are not blank, creates post otherwise
  if (!nameVal || !messageVal) {
    alert('Input fields cannot be blank.');
  } else {
    const newPost = createPost(nameVal, messageVal);
    $postsDiv.append(newPost);

    const $posts = $('post');
    $posts.on('click', '.delete-btn', e => $(e.target).parent().remove());

    // clears input fields on submit
    $nameInput.val('');
    $messageInput.val('');
  }
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
  return '<post>' + messageP + nameP + commentBtn + editBtn + deleteBtn + '<hr></post>';
}

$submitBtn.on('click', submitFunc);
