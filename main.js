
var managePosts = $('button').on('click', function () {
  var post = $('#post-input').val();
  var name = $('#name-input').val();

    // the template for post, name, and remove/comment buttons
  var template =
  '<div class="post-item comment-form"><li><span class="remove special-word">remove</span>'
  + " " + '<span class="comment special-word">comments</span> '
  + post + '<br> Posted By '+ '<strong>'+ name + '</strong></li></div>';

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

    var addComment = $('.comment').on('click', function () {
      //need new template for input and buttons
      // var newContent =
      // '<'


      //adds additional input and post button to the bottom of the post when clicked
      var newContent = $('.post-controls').html()
      $(this).parent().append(newContent);
    });


  });
