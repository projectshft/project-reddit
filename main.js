//There should be a button to submit a post
$('#submit').click(function() {
  //The post should contain the user's name and their message
  var userName = "Posted By: " + $('#postName').val();
  var userMessage = $('#postMessage').val();
  //The post will need an area for the text to be displayed
  var postMessage = document.createElement('p');
  var postName = document.createElement('p');
  //In that area there will need to be separate spaces for the name and the message
  var userNameElement = document.createTextNode(userName);
  var userMessageElement = document.createTextNode(userMessage);

  postName.appendChild(userNameElement);
  postMessage.appendChild(userMessageElement);
  $(".userPosts").append(postMessage);
  $(".userPosts").append(postName);
  //When submitted the comment section will become visible
  
});

//Every post will be able to have comments
$('#comment').click(function() {
  var commentUserName = "Posted By: " + $('#commentName').val();
  var userMessage = $('#commentMessage').val();
//The comments will need to be appended to and unique to each post

  //The comments will have the commentor's name and their message

  //The comment will need an area for text to be dispaled

  //In that area there will need to be separate spaces for the name and the message
});
