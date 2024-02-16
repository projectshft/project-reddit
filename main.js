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

  postDiv.append(element);
  element.appendChild(elementText);
  element.appendChild(elementText2);
  element.appendChild(newPostHR);
 
});





