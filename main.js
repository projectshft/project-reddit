document.getElementById('submit').addEventListener('click', () => {
  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;

  const postsDiv = document.querySelector('.posts');

  const newPostDiv = document.createElement('div');

  const newMessageP = document.createElement('p');
  const newMessageText = document.createTextNode(message);
  newMessageP.appendChild(newMessageText);

  const newNameP = document.createElement('p');
  const newNameText = document.createTextNode(`Posted By; ${name}`);
  newNameP.appendChild(newNameText);

  const newPostHR = document.createElement('hr');

  newPostDiv.append(newMessageP);
  newPostDiv.append(newNameP);
  newPostDiv.append(newPostHR);
 
  postsDiv.append(newPostDiv);
})
