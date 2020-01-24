//this is an array of objects containing the posts information
//empty array where we push in the objects
var postsArray = [];

//addPosts
var addPost = $('.btn-primary').click(function() {
  //creates a new remove button
  // var remove = $('<input class="remove" type="text" id="remove" value="remove"/>');
  //appends the remove button to the post
  $('.post').append('<p>' + 'remove' + '</p>').addClass('remove');
  //posts user button
  var userMessage = $('#message').val();
  //appends the user message to the post
  $('.post').append('<p>' + userMessage + '</p>');
  //posted user Names
  var userName = $('#name').val();
  //appends the user name to the post
  $('.post').append('<p>' + ' Posted By:' + '</p>' + '<p> <strong>' + userName + '</strong> </p>');

  //deletes the post when the remove button is clicked
  //TODO!! make it not delete every post when clicked
  //TODO!! make it text that when clicked deletes the entire post
  $('.remove').on('click', function() {
    $(this).closest('.post').remove();
  });

  //pushes new posts in Posts array
  postsArray.push({
    name: userName,
    message: userMessage,
    comment: [

    ]
  });
  console.log(postsArray);
  //rerenders the post
  renderPost();
});


//take as input this array objects
//using

var renderPost = function() {
  $('.posts').empty();
  $('.post').html('0');

  var posts = '';
  //looping through the array to find stuff
  for (var i = 0; i < postsArray.length; i++) {
    posts += '<div>' + postsArray[i].name +
      ' - ' + postsArray[i].message + ' Comment - ' + postsArray[i].comment + '</div>';
  }
  $('.posts').append(posts)

  console.log(posts);
}

renderPost();
