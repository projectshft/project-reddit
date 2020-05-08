var button = document.getElementsByTagName('button')[0];

button.addEventListener('click', function () {
  var userMessage = document.getElementById('message').value;
  var userName = document.getElementById('name').value;
  var p = document.createElement('p');
  var userNameElement = document.createTextNode("   --" + userName);
  var userMessageElement = document.createTextNode(userMessage);

  p.appendChild(userMessageElement);
  p.appendChild(userNameElement);

  document.getElementsByClassName('posts')[0].appendChild(p);
});
