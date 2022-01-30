var $button = $('#submit')

$button.on('click', function () {
  // var $name = $('#name');
  // var $message = $('#message');

  var message = document.createElement("p")
  var name = document.createElement("p")
  var $newDiv = $(document.createElement("div"));
  var $posts = $('.posts');

  //Creating variables for user messages and names
  message.append(document.createTextNode($('#message').val()));
  name.append(document.createTextNode("Posted By: " + $('#name').val()));

  $newDiv.append(message);
  $newDiv.append(name);
  $newDiv.attr("class","newPost");

  //Creating comment form section
  var $newComment = $(document.createElement("form"));
  $newComment.append($("<div></div>").attr("class", "form-group").append($("<input></input>").attr({class: "for-control", id: `comName-${Date($.now())}`, class: "comment", type: "text", placeholder: "Name"})), $("<div></div>").attr("class", "form-group").append($("<input></input>").attr({class: "for-control", id: `comMessage-${Date($.now())}`, class: "comment", type: "text", placeholder: "Message"})));

  // $newComment.append($("<input></input>").attr({class: "for-control", class: `comMessage-${Date($.now())}`, type: "text", placeholder: "Message"}));
  // $newComment.append($("<input></input>").attr({class: "for-control", type: "text", class: `comName-${Date($.now())}`, placeholder: "Name"}));

  var $commentButton = $("<button></button>").attr({class: "btn btn-primary"});

  $newComment.append($commentButton);

  $newDiv.append($newComment);
 

  
  $posts.append($newDiv);

  // $posts.append(newDiv);

  // var newDiv = document.createElement('div');
  // newDiv.append($message);
  // newDiv.appendChild($name);
  // var posts = $('.posts');

  // posts.appendChild(newDiv);
});
