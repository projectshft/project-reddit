//There should be a button to submit a post
$('#submit').click(function() {
  //The post should contain the user's name and their message
  var userName = "Posted By: " + $('#name').val();
  var userMessage = $('#message').val();
  //The post will need an area for the text to be displayed
  var postMessage = document.createElement('p');
  var postName = document.createElement('p');
  //In that area there will need to be separate spaces for the name and the message
  var userNameElement = document.createTextNode(userName);
  var userMessageElement = document.createTextNode(userMessage);

  postName.appendChild(userNameElement);
  postMessage.appendChild(userMessageElement);
  $(".userPost").append(postMessage);
  $(".userName").append(postName);
});
