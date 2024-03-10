// get access to the submit button 
const submitButton = document.getElementById('submit');

//Event Listener that allows submit button to post 
submitButton.addEventListener('click', function () {

  //get values for post message and name
  const postMessage = document.getElementById('message').value;
  const postName = document.getElementById('name').value;

  // this variable creates a break between posts
  const newPostHR = document.createElement('hr');

  //Access to posts spot in HTML
  const postDiv = document.getElementsByClassName('posts')[0];

  //create new div, paragraph, and textnode for when posts are added
  const newPostDiv = document.createElement('div');
  const postElement = document.createElement('p');
  const postNode = document.createTextNode(postMessage + ' - Posted By: ' + postName);

  //Adding text node into new p element
  postElement.appendChild(postNode);

  //add in remove button for posts and event listener
  const removeButton = document.createElement('button');
  removeButton.setAttribute('id', 'remove-button');
  removeButton.setAttribute('type', 'button');
  removeButton.setAttribute('class', 'btn btn-danger btn-sm');
  removeButton.appendChild(document.createTextNode('Remove Post'));
  removeButton.addEventListener('click', function () {
    this.parentElement.remove()
  });

  //comment button
  const commentButton = document.createElement('button');
  commentButton.setAttribute('id', 'comment-button');
  commentButton.setAttribute('type', 'button');
  commentButton.setAttribute('class', 'btn btn-primary btn-sm');
  commentButton.appendChild(document.createTextNode('Comment'));


  //adding new p element, buttons, and break into new div
  newPostDiv.append(postElement);
  newPostDiv.append(removeButton);
  newPostDiv.append(commentButton);
  newPostDiv.append(newPostHR);

  //adding new div into post div
  postDiv.append(newPostDiv);


})