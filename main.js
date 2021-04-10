
// all of the code in submitNewPost is happening when the submit button is clicked

var submitNewPost = function () {
  $('#submit').on('click', function () {
  var $postMessage = $('#message').val();
  var $posterName = $('#name').val();

  // not sure if this needs to be a function or not
  var createPost = function () {
    $('.posts').append('<div class="postContent"></div>');
    
    $('.postContent').last().append('<p>' + $postMessage + '</p>')
    $('.postContent').last().append('<p><strong>Posted by: </strong>' + $posterName + '</p>')
    $('.postContent').last().append('<hr>')
  }

  createPost();

  $('#post-form')[0].reset();

});
};

submitNewPost();

