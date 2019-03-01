const posts = document.getElementsByClassName('posts');
let counter = 1;

document.getElementById('add-post').addEventListener('click', function (e) { 
  e.preventDefault();
  const userName = document.getElementById('name').value;
  const message = document.getElementById('message').value;

  posts[0].innerHTML += 
  `<div id="comment${counter}" class="userpost">` 
  + '<div>' + message + '</div>' 
  + '<div>Posted By: <b>' + userName + '</b></div>';
  // '<div class="test3"><input type="image" class="up" src="https://i.stack.imgur.com/NgXbZ.png" /></div>' + 
  // '<div class="test3"><input type="image" class="down" src="https://i.stack.imgur.com/NgXbZ.png" /></div>' + 
  // '<div class="test3">Votes :  <input type="button" class="votes" value="0" /></div>' + 
  // '<div class="test3"><input type="button" class="delete" value="Delete" /></div></div>';
  counter++;
  });
