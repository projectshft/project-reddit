//
// var createPost = function (post, name) {
//   var template =
//  
//
// }

$('button').on('click', function () {
  post = $('#post-input').val();
  name = $('#name-input').val();

    //if the user post and name input are not empty, add them to the list
  if (post !== "" && name !== "") {
    $('.list-group').append('<div class="post-item comment-form"><li><button>remove</button><button>comments</button>' +post+ '</li><li> Posted By '+ '<strong>'+name+ '</strong></li></div>');
  } else {
    //if the post and name input are empty, alert the user
    alert('Please input your name and post content.');
  };


// the users post, name, and remove and comments button are added to the list


});
