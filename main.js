// creating a vairable to hold comment section div
var userComments =
  "<form class='comment-submit-form row' style='margin-top:10px;' onsubmit='event.preventDefault();'>" +
  "<div class='comment-post col-md-5'>" +
  "<ul class='comment-list'>" +

  "</ul>" +
  "<div class='comments-submit'>" +
  "<div class='form-group comment-message-form col-md-4'>" +
  "<input type='text' class='form-control comment-message-box' placeholder='Comment Text'></input>" +
  "</div>" +
  "<div class='form-group comment-user-form col-md-4'>" +
  "<input type='text' class='form-control comment-user-box' placeholder='User Name'></input>" +
  "</div>" +

  "<button type='button' class='btn btn-primary comment-submit-button'>" + 'Post Comment' + "</button>" +

  "</div>" +

  "</div>" +
  "</form>"





$('#submit').click(function() {

  // creating variables to hold input values from the forms
  var messageInput = $('#message').val();
  var nameInput = $('#name').val();

  // adding if/else statement to prevent a post if fields are empty
  if (messageInput && nameInput) {

    // posting post and name to board with an "remove" and "connemts" at the beginning to delete post and toggle comments
    $('.post-list').append("<li>" + "<span class= 'remove' type='button'>" + " remove " + "</span>" + "  " + "<span class= 'comments'>" + " comments " + "</span>" + " " + messageInput + userComments + "<p class= 'name row'>" + " Posted By: " + nameInput + "</p>" + "</li>");
    // setting attributes for the "remove" button
    $('span').css({
      'color': 'blue',
      'text-decoration': 'underline'
    });
    // changing cursor to a pointer when the mouse is over "remove" and "comments"
    $('span').css('cursor', 'pointer');

    // adding a click function to "remove"
    $('.remove').click(function() {
      $(this).closest('li').remove();
    });

    // hiding comment bar when posting comments
    $('.comment-submit-form').hide();

    // toggling the comment bar when "comments" is clicked to display comments
    $('.comments').unbind().click(function() {
      $(this).siblings('.comment-submit-form').toggle()
    })


    // adding click function to "comments"
    $('.comment-submit-button').unbind().click(function() {
      var commentTextInput = $(this).siblings('.comment-message-form').children('.comment-message-box').val();
      var commentNameInput = $(this).siblings('.comment-user-form').children('.comment-user-box').val();
      var commentMessageAndName = commentTextInput + " Comment By: " + commentNameInput

      // adding if/else statement to prevent a comment if fields are empty
      if (commentTextInput && commentNameInput) {
        //adding comments on post closest to the post comment button
        $(this).closest('.comment-post').children('ul').append("<li>" + commentMessageAndName + "<span class= 'remove'>" + " x " + "</span>" + "</li>");

        // toggling comment cection when "comments" is clicked
        $('.comments').click(function() {
          $(this).sibling('.comment-post').children('ul').toggle()
        });


        // setting attributes for the "x" button
        $('span').css({
          'color': 'blue',
          'text-decoration': 'underline'
        });
        // changing cursor to a pointer when the mouse is over "X"
        $('span').css('cursor', 'pointer');

        // adding a click function to "x" to remove comments
        $('.remove').click(function() {
          $(this).closest('li').remove();
        });

      } else {
        alert('Please fill out comment and name fields to add comment')
      }


    });

  } else {
    alert('Please fill out post and name fields to add post')
  };


});
