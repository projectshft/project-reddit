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


    //if the user post and name input are not empty, add them to the list
      if (post !== "" && name !== "") {
        $('.list-group').append(template);
      } else {
        //if the post and name input are empty, alert the user
        alert('Please input your name and post content.');
      };

      //removes the parent post when clicked
    var removePost = $('.remove').on('click', function () {
      $(this).parent().remove();
    });



    var addComment = $('.comment').unbind().on('click', function () {

      $(this).next().toggle();
      });



var postComment = $('#comment-button').on('click', function () {

      var comment = $('#comment-text').val();
      var commentName = $('#name-text').val();
      if (comment !== "" && name !== "") {
        $('.comment-section').append(comment + ' Posted by:' +commentName + '<br></br>');
      } else {
        alert('Please fill out comment and name forms before posting.')
      }
    });
    });










// var post = $('#post-board').html();
// console.log(post);
