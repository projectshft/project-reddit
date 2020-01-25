//this is an array of objects containing the posts information
//empty array where we push in the objects
var postsArray = [];
var order = 1;
var commentnumber = 1;


//addPosts

var addToPostsArrays = function() {
  //takes the values from the input field on the forum
  var userMessage = $('#message').val();
  var userName = $('#name').val();
  var userCommentText = $('.commenttext').val();
  var userCommentName = $('.commentname').val();
  //pushes the values into Posts array
  postsArray.push({
    name: userName,
    message: userMessage,
    comment: [{
        commenttext: userCommentText,
        commentname: userCommentName,
        commentnumber: commentnumber++
      }

    ],
    order: order++
  });
  renderPost();
};
//when you press both the post and the post message button
//it adds the input values to the postsArray
//TODO!!! could call by id and be separate
$('.btn-primary').click(function() {
  addToPostsArrays();
});

//the render function does x
var renderPost = function() {
  //
  $('.posts').empty();

  //looping through the array to find stuff
  for (var i = 0; i < postsArray.length; i++) {
    addPostToPage(postsArray[i]);

  };
};

//this function adds the posts to the webpage by creating new divs
//and the nested comment posts
var addPostToPage = function(post) {
  //creates a new div in the posts div for posts
  $('.posts').append('<div class ="post">' + '</div>');
  //adds a remove and comment button to the post
  $('.post').append('<button class="btn btn-default" id="removebutton"> remove post</button> ' + '<button class="btn" id="commentbutton">comment(s)</button>');
  //adds the userInput (message + name ) to the post
  $('.post').append('<p class="userinput">' + post.message + '<p>' + '<p class="userinput">' + ' Posted By: ' + '<strong>' + post.name + '</strong></p>' + '<hr>');
  // creates a div in the comment button that will be hid
  //inside the div with be a 2 text inputs and an x button
  $('#commentbutton').append('<div class="commentinput" id="commentinput">' + '</div>');
  $('.commentinput').append('<input class="commenttext" type="Text" placeholder="Comment Text">' + '</input>');
  $('.commentinput').append('<input class="commentname" type="Text" placeholder="User Name">' + '</input>');
  $('.commentinput').append('<button class="btn btn-primary" type="submit" id="postcomment"> Post Comment</button>');
};

//when the post button is clicked it adds the values to the PostArray


//when the remove button is clicked it removes the post
$('.posts').on('click', '.btn-default', function() {
  $(this).closest('.post').remove();
});

//when you hover over the comment text the comment input
//toggle and show

// $(".comments").click(function() {
//   $(".commenttext").toggle(swing);
// });
$('.commentinput').on('click', '#commentbutton',function() {
   $(this).children().css(  ).toggle(swing);
 });

 $('#commentbutton').on('click', function () {
  $('.commentinput').css("display", "inline");
});


// $('#commentbutton').click(function() {
//   $(this).siblings('.commentinput').toggle('show');
// });

//
// $('#commentbutton').click(function(){
//       var $comment = $(this);
//       $(this).parent().next().slideToggle('slow', function() {
//           if($(this).is(':visible')){
//              $comment.find('p').html('+');
//           }
//           else{
//              $comment.find('p').html('-');
//           }
//       });
//
// });
