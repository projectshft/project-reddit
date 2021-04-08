document.getElementById('submit').addEventListener('click', function () {
  //Gets the user input for both the name and message boxes.
  var name = document.getElementById('name').value;
  var text = document.getElementById('message').value;

  //Selects the posts div and creates a new div inside of it to hold the new post.
  var postsDiv = document.querySelector('.posts');
  var newPostDiv = document.createElement('div');

  //Creates a new paragraph element, text node within that paragraph element
  //and appends the text node to the paragraph element.
  var newPostTextP = document.createElement('p');
  var newPostTextNode = document.createTextNode(text);
  newPostTextP.appendChild(newPostTextNode);

  //Creates a new paragraph element, text node to show the name of the poster
  //and appends that text to the paragraph element.
  var newPostNameP = document.createElement('p');
  var newPostNameNode = document.createTextNode('Posted By: ' + name);
  newPostNameP.appendChild(newPostNameNode);

  //Creates a button element, labels it with the text 'Delete Post'
  var removeButton = document.createElement('BUTTON');
  removeButton.innerHTML = 'Delete Post';

  //Creates a button element, labels it with the text 'Add Comments to This Post'
  var addCommentsButton = document.createElement('BUTTON');
  addCommentsButton.innerHTML = 'Add comments to this post';

  //Draws a horizontal line after the new post is created.
  var newPostHR = document.createElement('hr');

  //Adds the new posts text, poster name, remove button, add comments button and
  // horizontal line to the newPosts div. 
  newPostDiv.append(newPostTextP);
  newPostDiv.append(newPostNameP);
  newPostDiv.append(removeButton);
  newPostDiv.append(addCommentsButton);
  newPostDiv.append(newPostHR);

  //Adds on the new post Div to the posts div. 
  postsDiv.append(newPostDiv);
});

$('.posts').on('click', 'button', function (e) {
  this.parentNode.remove();
});