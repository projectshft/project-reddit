const submitBtn = $('#submit');
const postsDiv = $('.posts');
const nameInput = $('#name');
const messageInput = $('#message');

const submitFunc = function() {
  const nameVal = nameInput.val();
  const messageVal = messageInput.val();
  
  const messageP = `<p>${messageVal}</p>`;
  const nameP = `<p><strong>Posted by : ${nameVal}</strong></p>`;

  // creates buttons for each post
  const buttonPrefix = '<button class="postBtns btn btn-primary btn-xs'
  const commentBtn = buttonPrefix + ' commentBtn">Comment</button>';
  const editBtn = buttonPrefix + ' editBtn">Edit</button>';
  const deleteBtn = buttonPrefix + ' deleteBtn">Delete</button>';

  const newPost = messageP + nameP + commentBtn + editBtn + deleteBtn + '<hr>';

  postsDiv.append(newPost);

  nameInput.val('');
  messageInput.val('');
}

submitBtn.on('click', submitFunc);