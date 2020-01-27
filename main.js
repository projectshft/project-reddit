//creates an empty data structure for posts + comments
var postsArray = [];
var $postsElement = $('.posts');
//this function adds the posts to postsArray data structure
var addToPostsArray = function() {
  //takes the values from the inputs fields on the forum
  var $userMessage = $('#message').val();
  var $userName = $('#name').val();
  //pushes the values into Posts array
  postsArray.push({
    name: $userName,
    message: $userMessage,
    comment: [],
  });
  renderPost();
};
//when you hit the post button it adds the posts to the data structure
// and renders the post which appends the html
$('#submit').click(function() {
  addToPostsArray();
});

var addCommentsToPostsArray = function() {
  var $userCommentName = $('#commentname').val();
  var $userCommentText = $('#commentname').val();
  //shouldn't be zero should somehow access each of the array indexes
  postsArray[index].comment.push({
    commenttext: $userCommentText,
    commentname: $userCommentName,
  });
};

var createPosts = function(post, postIndex) {
  var $postTemplate = $('<div class="post"> ' +
    '<a class="postInput" type ="link" id="removePost"> remove </a>' +
    '<a class="postInput"" type="link" id="commentLink"> comment(s) </a>' +
    '<p class="postInput" id="postMessage">' + post.message + '<p>' +
    '<p class="postInput" id="postName">' + ' Posted By: ' + '<strong>' + post.name + '</strong></p>' +
  '<hr>' + '<p class="hide postInput" id="postIndex">' + postIndex + '</p>' +
    '</div>');

    $postsElement.append($postTemplate);
  };

var createComments = function(comment, commentIndex) {
    var $commentTemplate = $('<div class ="comments form-group" id="comments">' +
    '<input id="commentText" class="commentInput form-control" type="Text" placeholder="Comment Text">' + comment.commenttext + '</input>' +
    '<input id="commentName" class="commentInput form-control" type="Text" placeholder="User Name">' + comment.commentname + '</input>' +
    '<button class="btn btn-primary commentInput" type="submit" id="postcomment"> Post Comment </button>' + '<p class="hide commentIndex">' +
    commentIndex + '</p>' +
    '</div>');
  $postTemplate.append($commentTemplate);
};
//the render function does x
var renderPost = function() {
  //empties posts when you render the page
  $postsElement.empty();
  //looping through outerarray to get the info from posts and append the new posts from the template
  for (var i = 0; i < postsArray.length; i++) {
    var $postElements = createPosts(postsArray[i], i + 1);
    // $postsElement.append($postElements);
    console.log("what is happening in the outer loop?" + postsArray[i]);
    ///looping through inner array to get the info from posts and append the new posts from the template
    for (var j = 0; j < postsArray[i].comment.length; j++) {
      var $commentElements = createComments(postsArray[i].comment[j], j + 1);
      // $postElements.append($commentElements);
    };

  };

};


$postsElement.on('click', '#removepost', function() {
  $(this).closest($postElement).remove();
  // renderPost();
});

// +posts[Object.keys(posts)[i]].postComments[j][0]+“: “+posts[Object.keys(posts)[i]].postComments[j][1]


//
//
//
// // var $postDiv = $('<div class ="post">' + '</div>');
// // //adds a remove and comment button to the post
// // $postDiv.append('<a class="removepost" type ="link" id="removepost"> remove </a>');
// // //
// // $postDiv.append('<a class="commentlink"" type="link" id="commentlink"> comment(s) </a>');
// // //adds the userInput (message + name ) to the post
// // $postDiv.append('<p class="userinput" id="postmessage">' + post.message + '<p>' + '<p class="userinput" id="postname">' + ' Posted By: ' + '<strong>' + post.name + '</strong></p>' + '<hr>');
// // //
// // $('.posts').append($postDiv);
// // //
// //
// // $('.posts').on('click', '.removepost', function() {
// //   $(this).closest('.post').remove();
// //   // renderPost();
// // });
// //
// // $('.posts').on('click', '.comments', function(event) {
// //   $(this).find('.hide').toggleClass('show');
// // });
// // // //this function adds the posts to the webpage by creating new divs
// // // //and the nested comment posts
// // var addPostToPage = function(post, index) {
// //   //creates a new div in the posts div for posts
// //
// //   var $postDiv = $('<div class ="post">' + '</div>');
// //   //adds a remove and comment button to the post
// //   $postDiv.append('<a class="removepost" type ="link" id="removepost"> remove </a>');
// //   //
// //   $postDiv.append('<a class="commentlink"" type="link" id="commentlink"> comment(s) </a>');
// //   //adds the userInput (message + name ) to the post
// //   $postDiv.append('<p class="userinput" id="postmessage">' + post.message + '<p>' + '<p class="userinput" id="postname">' + ' Posted By: ' + '<strong>' + post.name + '</strong></p>' + '<hr>');
// //   //
// //   $('.posts').append($postDiv);
// //
// //   //make all these elements children of the commentsElement
// //   var $commentsDiv = $('<div class ="comments form-group" id="comments">' + '</div>');
// //   $commentsDiv.append('<input id="commenttext" class="commentinput form-control" type="Text" placeholder="Comment Text">' + '</input>');
// //   $commentsDiv.append('<input id="commentname" class="commentinput form-control" type="Text" placeholder="User Name">' + '</input>');
// //   $commentsDiv.append('<button class="btn btn-primary commentinput" type="submit" id="postcomment"> Post Comment</button>');
// //
// //   $($postDiv).append($commentsDiv);
// //   //appends them as children to $commentsElement & grandchildren of .post
// //   // //take in the loop index
// //   // $('.commentinput').addClass("hide");
// // };
// //
// // var addCommentToPage = function(commentsInfo, $commentsElement, index) {
// //   var $commentDiv = $('<div class ="comments form-group" id="comments">' + '</div>');
// //   $commentDiv.append('<input id="commenttext" class="commentinput form-control" type="Text" placeholder="Comment Text">' + '</input>');
// //   $commentDiv.append('<input id="commentname" class="commentinput form-control" type="Text" placeholder="User Name">' + '</input>');
// //   $commentDiv.append('<button class="btn btn-primary commentinput" type="submit" id="postcomment"> Post Comment</button>');
// //   $('.commentlink').append($commentDiv);
// //
// //
// // //when the remove button is clicked it removes the post
// //
// //
// //
// // // $(this).siblings(“.hide”).toggleClass(“show”)
// // // $('.post').on('click', '.commentlink', function() {
// // //   $('#comments').css("display", "");
// // // });
// // //
// // // //when you click on the link comments(s) it should display the hidden comments or .commentinfo
// // //
// // // $('div').show();
// // // // $('.commentlink').click(function() {
// // // //   $('.commentinput').css("display", "");
// // // // });
// // //
// // // // $("#commentlink").click(function() {
// // // //   $("#comments").toggle();
// // // // });
// // // //
// // // //
// // // // $(".commentlink").click(function() {
// // // //   $(".comments").toggle("slow", function() {
// // // //
// // // //   });
// // // // });
// // //
// // // $('.commentlink').on('click', function() {
// // //   $('.comments').toggleClass('show');
// // // });
// // //
// //
// // //postUserComment =
