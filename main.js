//this is an array of objects containing the posts information
//empty array where we push in the objects
var postsArray = [];
var order = 1;
var commentNumber = 1;

//add Posts to Array
var addToPostsArrays = function() {
  //takes the values from the input field on the forum
  var userMessage = $('#message').val();
  var userName = $('#name').val();

  //pushes the values into Posts array
  postsArray.push({
    name: userName,
    message: userMessage,
    comment: [],
    order: order++
  });

  // var userCommentText = event.target.find('#commenttext').val();
  // var userCommentName = event.target.find('#commentname').val();
  // postArray[2].push({
  //   commenttext: userCommentText,
  //   commentname: userCommentName,
  //   commentnumber: commentNumber++
  // });
  renderPost();
};


//when you press both the post and the post message button
//it adds the input values to the postsArray
//TODO!!! could call by id and be separate
$('#submit').click(function() {
  addToPostsArrays();
});

$('#postcomment').click(function(event) {

  // var postIndex = commentnumber
  //
  // var addCommentsToArray = function() {
  //   var userCommentText = event.target.find('#commenttext').val();
  //   var userCommentName = event.target.find('#commentname').val();
  //   postArray[2].push({
  //     commenttext: userCommentText,
  //     commentname: userCommentName,
  //     commentnumber: commentnumber++
  //   })
  // };
});

//the render function does x
var renderPost = function() {
  //empties posts when you render the page
  $('.posts').empty();
  //looping through the array to find stuff
  for (var i = 0; i < postsArray.length; i++) {
    //loops through the array to posts info
    var commentsElement = addPostToPage(postsArray[i], i)
    //loops through to find comment info
    for (var j = 0; j < postsArray[i].comment.length; j++) {

      addCommentToPage(postsArray[i].comment[j], commentsElement, j);
    };
  };

  console.log(postsArray);
};


$('.post').each(function () {
      $(this).closest('a').find('a.view').append(this);
  });

//this function adds the posts to the webpage by creating new divs
//and the nested comment posts
var addPostToPage = function(post) {
  //creates a new div in the posts div for posts
  var $postDiv = $('<div class ="post">' + '</div>');
  //adds a remove and comment button to the post
  $postDiv.append('<a class="removepost" type ="link" id="removepost"> remove </a>');
  //
  var $commentsElement = $postDiv.append('<a class=comments type="link" id="comments"> comment(s) </a>');
  //adds the userInput (message + name ) to the post
  $postDiv.append('<p class="userinput" id="postmessage">' + post.message + '<p>' + '<p class="userinput" id="postname">' + ' Posted By: ' + '<strong>' + post.name + '</strong></p>' + '<hr>');
  $('.posts').append($postDiv);
  

  $commentsElement.append('<input id="commenttext" class="commentinput form-control" type="Text" placeholder="Comment Text">' + '</input>');
  $commentsElement.append('<input id="commentname" class="commentinput form-control" type="Text" placeholder="User Name">' + '</input>');
  $commentsElement.append('<button class="btn btn-primary commentinput" type="submit" id="postcomment"> Post Comment</button>');
  $('.post').append($commentsElement);
  //take in the loop index


};

// var addCommentToPage = function(commentsInfo, $commentsElement, index) {
//   // creates the two user inputs (text + name) and the post comment button
//   $commentsElement.append('<input id="commenttext" class="commentinput form-control" type="Text" placeholder="Comment Text">' + '</input>');
//   $commentsElement.append('<input id="commentname" class="commentinput form-control" type="Text" placeholder="User Name">' + '</input>');
//   $commentsElement.append('<button class="btn btn-primary commentinput" type="submit" id="postcomment"> Post Comment</button>');
//   $('.post').append($commentsElement);
// };


//when the remove button is clicked it removes the post
$('.removepost').on('click', function() {
  $(this).closest('.post').remove();
});

// $('.commentinput').click(function() {
//   $(this).closest('.hide').toggleClass('show');
// });


// $('.post').on('click', '.commentlink', function() {
//   $('#comments').css("display", "");
// });
//
// //when you click on the link comments(s) it should display the hidden comments or .commentinfo
//
// $('div').show();
// // $('.commentlink').click(function() {
// //   $('.comments').css("display", "");
// // });
//
// // $("#commentlink").click(function() {
// //   $("#comments").toggle();
// // });
// //
// //
// // $(".commentlink").click(function() {
// //   $(".comments").toggle("slow", function() {
// //
// //   });
// // });
//
// $('.commentlink').on('click', function() {
//   $('.comments').toggleClass('show');
// });
//

//postUserComment =
