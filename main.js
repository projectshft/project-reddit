// a function that controls the main post button
$('#post-btn').on('click', function () {
  var mainPost = $('#post-input').val();
  var mainName = $('#name-input').val();

  var commentButton = '<span class="special-word comment-button">comments </span> ';
  var deleteButton = '<span class="special-word remove-button">remove </span>';

  var commentInput = '<input type="text" class="comment-input" placeholder="Comment"</input>';
  var commentName = '<input type="text" class="comment-name" placeholder="Name"</input>';
  var commentPost = '<button type="button" class="comment-post">Post</button>';

  var commentForm = commentInput + commentName + commentPost + '<p class="comments-here"></p>';


  // if the post and name fields are filled, add the post, poster's name, and the delete/comment buttons to the forum
    if (mainPost !== "" && mainName !== "") {
      $('.post-item').append('<div class="parent">' +deleteButton +
      commentButton + mainPost + '<p> '+commentForm+' </p><p>Posted by:<strong> ' +mainName+ '</strong></p</div>');
    } else {
      //if the post and name input are empty, alert the user
      alert('Please input your name and post content.');
    };



  //removes the post from the forum
  $('.remove-button').on('click', function () {
    $(this).parent().remove();
  });

  //toggles the comments section when clicked
  $('.comment-button').unbind().on('click', function () {
    $(this).next().toggle();
  });


  // posts comment and user associated with comment to the post when "post comment is clicked"
  $('.comment-post').unbind().on('click', function () {
    var postedComment = $('.comment-input').val();
    var postedCommentName = $('.comment-name').val();
    var closeButton = '<span class="glyphicon glyphicon-remove" style="color:#337ab7"></span>'

    if (postedComment !== "" && postedCommentName !== "") {
      $(this).parent().append('<p class="posted-content">'+postedComment + ' | Posted By: <strong>'
      + postedCommentName +'</strong>' +  closeButton +'</p>');
    } else {
      alert('Please fill out comment and name forms before posting.')
    };



    //removes comments posted to main post
  $('.glyphicon-remove').unbind().on('click', function () {
    $(this).parent().remove();

    });
  });
});
