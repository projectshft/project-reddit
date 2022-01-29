var $button = $('#submit')

$button.on('click', function () {
  // var $name = $('#name');
  // var $message = $('#message');

  var message = document.createElement("p")
  var name = document.createElement("p")
  var newDiv = document.createElement("div");
  var comments = document.createElement("div");



  message.append(document.createTextNode($('#message').val()));
  name.append(document.createTextNode("Posted By: " + $('#name').val()));
  newDiv.append(message);
  newDiv.append(name);

  var comments = document.createElement("div");
  newDiv.append(comments);
  
  var $posts = $('.posts');
  $posts.append(newDiv);
  
  // $posts.append(newDiv);

  // var newDiv = document.createElement('div');
  // newDiv.append($message);
  // newDiv.appendChild($name);
  // var posts = $('.posts');

  // posts.appendChild(newDiv);
});