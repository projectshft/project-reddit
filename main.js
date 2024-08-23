// Add event listener 
// prevent default and const for inputs
document.getElementById('form-post').addEventListener('submit', function(e) {
  e.preventDefault();

 
  const textFromPost = document.getElementById('text-from-post').value;
  const writerPosted = document.getElementById('writer-posted').value;
  
  postToAdd(textFromPost, writerPosted);

  
  document.getElementById('text-from-post').value = '';
  document.getElementById('writer-posted').value = '';
});

// Fxn to make post add to page html 
function postToAdd(post, writer) {
  
  const containerOfMessages = document.createElement('div');
  containerOfMessages.classList.add('mb-4', 'border', 'p-3');

  
  const messagesPost = document.createElement('p');
  messagesPost.textContent = `${post} - Posted by ${writer}`;

  
  const withdrawMessagesHere = document.createElement('a');
  withdrawMessagesHere.href = '#';
  withdrawMessagesHere.textContent = 'remove';
  withdrawMessagesHere.classList.add('text-danger', 'mr-2');
  withdrawMessagesHere.addEventListener('click', function () {
    containerOfMessages.remove();
  });

  
  const postSwitchFromPage = document.createElement('a');
  postSwitchFromPage.href = '#';
  postSwitchFromPage.textContent = 'comments';
  postSwitchFromPage.classList.add('post-page');
  postSwitchFromPage.addEventListener('click', function () {
    messagesAreHere.style.display = messagesAreHere.style.display === 'none' ? 'block' : 'none';
  });

  
  const messagesAreHere = document.createElement('div');
  messagesAreHere.classList.add('messages-are-here');

 
  const listOfComments = document.createElement('ul');
  listOfComments.classList.add('webpage-of-lists');
  
  //create form 
  const formView = document.createElement('form');
  formView.classList.add('module-2');
  formView.innerHTML = `
    <div class="form-group">
      <input type="text" class="form-control input-post" placeholder="Comment Text" required>
    </div>
    <div class="form-group">
      <input type="text" class="form-control input-comment" placeholder="Your Name" required>
    </div>
    <button type="submit" class="btn btn-primary">Submit Comment</button>
  `;

  // use eventlistenr
  formView.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputPost = formView.querySelector('.input-post').value;
    const inputComment = formView.querySelector('.input-comment').value;

    commentJoin(listOfComments, inputPost, inputComment);
    formView.reset();
  });

  // creat new fxn to join evertyhing/append
  messagesAreHere.appendChild(listOfComments);
  messagesAreHere.appendChild(formView);
  containerOfMessages.appendChild(withdrawMessagesHere);
  containerOfMessages.appendChild(postSwitchFromPage);
  containerOfMessages.appendChild(messagesPost);
  containerOfMessages.appendChild(messagesAreHere);
  document.getElementById('cont-posts').appendChild(containerOfMessages);
}


function commentJoin(listOfComments, post, writer) {
  const opinionUser = document.createElement('li');
  opinionUser.classList.add('my-2');

  const viewRegarding = document.createElement('p');
  viewRegarding.textContent = `${post} - Posted by ${writer}`;

  const deleteOpinionL = document.createElement('a');
  deleteOpinionL.href = '#';
  deleteOpinionL.textContent = 'remove';
  deleteOpinionL.classList.add('text-danger', 'mr-2');
  
  deleteOpinionL.addEventListener('click', function () {
    opinionUser.remove();
  });

  opinionUser.appendChild(deleteOpinionL);
  opinionUser.appendChild(viewRegarding);
  listOfComments.appendChild(opinionUser);
}
