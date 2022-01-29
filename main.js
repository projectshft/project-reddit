// document.getElementById('submit').addEventListener('click', () => {
//   const name = document.getElementById('name').value;
//   const message = document.getElementById('message').value;

//   const postsDiv = document.querySelector('.posts');

//   const newPostDiv = document.createElement('div');

//   const newMessageP = document.createElement('p');
//   const newMessageText = document.createTextNode(message);
//   newMessageP.appendChild(newMessageText);

//   const newNameP = document.createElement('p');
//   const newNameText = document.createTextNode(`Posted By; ${name}`);
//   newNameP.appendChild(newNameText);

//   const newPostHR = document.createElement('hr');

//   newPostDiv.append(newMessageP);
//   newPostDiv.append(newNameP);
//   newPostDiv.append(newPostHR);
 
//   postsDiv.append(newPostDiv);
// })

const submitButton = $('#submit');
const postsDiv = $('.posts');

const submitFunc = function() {
  const message = $('#message').val();
  const name = $('#name').val();
  
  const messageP = `<p>${message}</p>`;
  const nameP = `<p><strong>Posted by : ${name}</strong></p>`;

  const buttonClass = '<button class="postBtns btn btn-primary btn-xs">'
  const commentButton = buttonClass + 'Comment</button>';
  const editButton = buttonClass + 'Edit</button>';
  const deleteButton = buttonClass + 'Delete</button>';

  const newPost = messageP + nameP + commentButton + editButton + deleteButton + '<hr>';

  postsDiv.append(newPost);
}

submitButton.on('click', submitFunc);