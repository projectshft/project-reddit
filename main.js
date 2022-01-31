const $submitPostBtn = $('#submit-post');
const $postsDiv = $('.posts');
const $nameInput = $('#name');
const $messageInput = $('#message');
const $postForm = $('.post-form');

const submitPost = () => {
  const nameVal = $nameInput.val();
  const messageVal = $messageInput.val();

  // checks that input fields are not blank
  if (!nameVal || !messageVal) {
    alert('Input fields cannot be blank.');
    return;
  }

  // creates post and displays it
  const newPost = `<post>${createPost(nameVal, messageVal)}${commentFormHtml}</post>`;
  $postsDiv.append(newPost);

  // clears input fields on submit
  $postForm.trigger('reset');

  // delete post functionality
  const $post = $('post');
  $post.on('click', '.delete-btn', e => $(e.target).parent().remove());

  // comment functionality
  $post.on('click', '.comment-btn', e => $(e.target).siblings('.comment-form').toggle());
  $('.comment-form').on('click', '#submit-comment', e => {
    const $commentNameVal = $(e.target).siblings().eq(1).children().first().val();
    const $commentMessageVal = $(e.target).siblings().eq(2).children().first().val();
    const newComment = createPost($commentNameVal, $commentMessageVal);
    const $commentDiv = $(e.target).parent().siblings('comment');
    $commentDiv.append(newComment);
  })
}

const createPost = (nameVal, messageVal) => {
  const messageP = `<p>${messageVal}</p>`;
  const nameP = `<p><strong>Posted by : ${nameVal}</strong></p>`;

  // creates buttons for each post
  const buttonPrefix = '<button class="post-btns btn btn-primary btn-xs';
  const commentBtn = buttonPrefix + ' comment-btn">Comment</button>';
  // const editBtn = buttonPrefix + ' edit-btn">Edit</button>';
  const deleteBtn = buttonPrefix + ' delete-btn">Delete</button>';

  // returns a string that creates the entire post
  return messageP + nameP + commentBtn + deleteBtn + '<hr><comment></comment>';
}

$submitPostBtn.on('click', submitPost);