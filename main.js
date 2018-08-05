// plain javascript

var button = document.getElementsByTagName('button')[0];

button.addEventListener('click', function () { 
  console.log('button clicked');

  // get name
  var userInputName = document.getElementById('name').value;
  console.log('name: ', userInputName);

  // get message
  var userInputMessage = document.getElementById('message').value;
  console.log('msg: ', userInputMessage);

  // add name and message to page
  var userInput = document.createTextNode(userInputName + ' - ' + userInputMessage);

  var newPost = document.createElement('li');
  newPost.appendChild(userInput);

  var posts = document.getElementsByClassName('posts')[0];
  posts.append(newPost);
});

// jQuery 

$(document).ready(function() {
  console.log('document loaded');
  var submitButton = $('#button');
    console.log(submitButton);
    submitButton.click(function () { 
      console.log('jquery button is clicked');

    

    });
  

});





