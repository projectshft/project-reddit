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
  var userInputElement = document.createTextNode(userInputName + ' - ' + userInputMessage);

  var li = document.createElement('li');
  li.appendChild(userInputElement);

  var posts = document.getElementsByClassName('posts')[0];
  posts.append(userInputElement);
});