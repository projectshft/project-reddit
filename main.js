
//Creating post when post button is clicked
$('#post-button').click(function() {
  //Create variable for user name input
  var originalPosterName = $('#name').val();

  //Create variable for message input
  var originalPosterMessage = $('#message').val();
  
  //Add post and name to posts section
  $('#posts').append('<article><p class="post">' + originalPosterMessage + '</p><p class="username">Posted By: <strong>' + originalPosterName + '</strong></p></article>');
});
