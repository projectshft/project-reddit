
var managePosts = $('#post-btn').on('click', function () {
  var post = $('#post-input').val();
  var name = $('#name-input').val();
  // variable that points to the comment form and buttons that appear after a post is made
  // this works but is there a better way to point to this variable?
  var commentForm =
       '<div class="post-controls"><form class="form-inline">'
      + '<label class="sr-only" for="inlineForumInputName2">Comment Text</label>'
      + '<input type="text" class="mb-2 mr-sm-2" id="comment-text" placeholder="Comment">'
      + '<label class="sr-only" for="inlineFormInputGroupUsername2">User Name</label>'
      + '<input type ="text" class="mb-2 mr-sm-2" id="name-text" placeholder="User Name">'
      + '<button type="submit" class="btn btn-primary" id="comment-button" mb-2">Post Comment</button></form></div>'
  ;

    // the template for post, name, and remove/comment buttons
  var template =
        '<div class="post-item comment-form"><button class="remove special-word" type="button">remove</button>'
        + " " + '<button class="special-word" id="comment" type="button">comments</button> '+ post
        + commentForm + '<br> <span class="comment-section"></span>Posted By '+ '<strong>'+ name + '</strong></p></div>';

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



  var addComment = $('#comment').on('click', function (e) {
      e.preventDefault();
      $('.post-controls').toggle();

var postComment = $('#comment-button').on('click', function () {

      var comment = $('#comment-text').val();
      var commentName = $('#comment-name').val();
      console.log(hi);
      // if (comment !== "" && name !== "") {
        // $('.comment-section').append('hi');
      // } else {
      //   alert('Please fill out comment and name forms before posting.')
      // }
    });
    });
  });









// var post = $('#post-board').html();
// console.log(post);
