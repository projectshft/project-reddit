// Needs to have:
// title "ReReddit"
// posts formatted: post content - Posted By: Postername
// needs to display as list items with break line 
// need form input lines for post text and name
// need sumbit post button that pushes content to list

let button = document.getElementById('submit')

button.addEventListener('click', function(){
  let nameInput = document.getElementById('name').value;
  let postInput = document.getElementById('message').value;

  let postDiv = document.querySelector('.posts');
  let element = document.createElement('p');

  let elementText = document.createTextNode(`${postInput}`) 
  let elementText2 = document.createTextNode(` Posted By: ${nameInput}`)
  let newPostHR = document.createElement('hr');

  let commentText = document.createTextNode('Comment ');

  postDiv.append(element);
  element.appendChild(commentText);
  element.appendChild(elementText);
  element.appendChild(elementText2);
  element.appendChild(newPostHR);

  commentText.className += 'comment-text';
  
});

// trying to connect listener to "comment"
// how do I turn comment into a link/button using this js method above?
// how to add class name/id to "comment" text node created above so I can reference it

let viewCommentForm = document.getElementsByClassName('comment-form')[0];
let commentText = document.getElementsByClassName('comment-text')[0];

commentText.addEventListener('click', function () {
  if(viewCommentForm.className.indexOf('show') === -1) {
    viewCommentForm.className += 'show';
  } else {
    viewCommentForm.className = 'comment-form'
  }
});





