
//Creating post when post button is clicked
$('#post-button').click(function() {
  //Create variable for user name input
  var originalPosterName = $('#name').val();

  //Create variable for message input
  var originalPosterMessage = $('#message').val();

  //Create variable for remove button
  var removeButton = '<a id="remove-button" role="button" href="#">remove </a>'

  //Create variable for comments button
  var commentButton = '<a id="comment-button" role="button" href="#">comments </a>'

  //Create element to hold post html
  var originalPost = '<article><p class="post">' + removeButton + commentButton +
    originalPosterMessage + '</p><p class="username">Posted By: <strong>' +
    originalPosterName + '</strong></p></article>'

  //Add post to posts section
  $('#posts').append(originalPost);
});
