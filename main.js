
var createPost = $('button').on('click', function () {
  var post = $('#post-input').val();
  var name = $('#name-input').val();

    // the template for post, name, and remove/comment buttons
  var template =
  '<div class="post-item comment-form"><li><button class="remove">remove</button class="comment"><button>comments</button>'
  +post+ ' Posted By '+ '<strong>'+name+ '</strong></li></div>';

    //if the user post and name input are not empty, add them to the list
      if (post !== "" && name !== "") {
        $('.list-group').append(template);
      } else {
        //if the post and name input are empty, alert the user
        alert('Please input your name and post content.');
      };


      var removePost = $('.remove').on('click', function () {
        $(this).parent().remove();
      });

  });
