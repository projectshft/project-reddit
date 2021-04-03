$( document ).ready(function() {

  $("#submit").on("click", function() {
    // Collect input from user //
    var $name = $('#name').val();
    var $message = $('#message').val();

    // Create new div for post //
    var $newPostDiv = $("<div></div>");
    var $newPost = $('<p></p>');
    var $hr = $('<hr></hr>');
    
    $newPost.text($message + ' - Posted By: ' + $name);
    $newPostDiv.append($newPost);
    $newPostDiv.append($hr);

    // Add post //
    var $postsDiv = $('.posts');
    $postsDiv.append($newPostDiv);

    // Reset input fields //
    $('form :input').val('');
  });
  
});