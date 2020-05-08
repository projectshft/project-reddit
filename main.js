// Register a click event on the post button
$("#submit").click(function () {
  // Grab the value of the message upon click
  let $theNewMessage = $("#message").val();

  // Grab the value of the author box upon click
  let $theNewAuthor = $("#name").val();

  // Create a post template for the new post before it is appended
  let template =
    '<div class="post panel panel-default">' +
    ' <div class="panel-body">' +
    '   <p class="post-meta"><a href="#">Remove</a> | <a href="#">Comments</a></p>' +
    "    <p>" +
    $theNewMessage +
    "    </p>" +
    ' <div class="post-author"><p>Posted By: <span class="author">' +
    $theNewAuthor +
    " </span></p></div> </div></div>";

  console.log("The new template to add to posts is \n" + template);

  // make a new post class for the grabbed values to be appended
  $("#posts").append(template);
});
