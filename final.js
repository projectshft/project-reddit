//creates an empty data structure for posts + comments
var postsArray = [];


var $postDiv = $('<div class ="post container">' + '</div>');
var $commentDiv = $('<div class ="comments container">' + '</div>');
var $posts = $('.posts');

//this function adds the posts to postsArray data structure
var addToPostsArray = function() {
  var postIndex = $(this).closest($postDiv).index();
  //takes the values from the input field from the posts
  console.log(postIndex);
  var $userMessage = $('#message').val();
  var $userName = $('#name').val();
  //pushes the values into postsArray
  postsArray.push({
    name: $userName,
    message: $userMessage,
    comments: [],
  });
  //
  return postIndex;

};

//when you click on the Post button it submits the information to the datastructure
//and calls the function render post which calls the function that appends the posts
$('#submit').click(function() {
  //edge cases
  if ($('#name').val().length !== 0 && $('#message').val().length !== 0) {
    addToPostsArray();
    //renders Post
    renderPost();
  } else {
    //edge cases
    alert("you can't submit an empty post! add your name or message and then resubmit!")
  }
});

var addCommentsToPostsArray = function(postIndex) {
  var $userCommentName = $('#commentname').val();
  var $userCommentText = $('#commentname').val();
  //shouldn't be postsArray.length-1 should somehow access each of the array indexes
  postsArray[postIndex].comments.push({
    commenttext: $userCommentText,
    commentname: $userCommentName,
  });

  return postsArray[postIndex].comments.length - 1;
};

// this click handler adds the comments input the data structure
// and renders the post which appends the html
$posts.on('click', '#postcomment', function() {
  if ($('#commentname').val().length !== 0 && $('#commentname').val().length !== 0) {
    var postIndex = $(this).closest('.post').index();
    var commentIndex = addCommentsToPostsArray(postIndex);
    renderComments(postIndex, commentIndex);
  } else {
    //edge case for comments
    alert("you can't submit an empty comment! add your name or comment and then resubmit!")
  }
});


//the render function should be looping through and appending but I couldn't figure out
//to append inside the for loop or how to access the inner loop.
var renderPost = function() {
  //empties posts when you render the page
  $posts.empty();

  //looping through the array to find stuff
  $posts.append($postDiv);
  //
  for (var i = 0; i < postsArray.length; i++) {
    //loops through the array to posts info
    //TODO fix this!!!
    addPostToPage(postsArray[i], i);
    //loops through to find comment info
  }
};

var renderComments = function(postIndex, commentIndex) {
  //
  $commentDiv.empty();
  //can't get my inner loop to extract data
  // TODO Fix this !
    for (var j = 0; j < postsArray[postIndex].comments[commentIndex].length; j++) {
      addPostToPage(postsArray[postIndex].comments[commentIndex], j);
    }

};

//this function adds the posts to the webpage by creating new divs
//and the nested comment posts
var addPostToPage = function(post, postIndex, comment, commentIndex) {
  //
  $posts.append($postDiv);
  //adds a remove and comment button to the post
  $postDiv.append('<a class="removepost" type ="link" id="removepost"> remove </a>');

  $postDiv.append('<a class=comments type="link" id="commentslink"> comment(s) </a>');
  //adds the userInput (message + name ) to the post + creates a data attribute to index the posts
  $postDiv.append('<p class="userinput" id="postmessage">' + post.message + '<p>' +
    '<p class="userinput" id="postname">' + ' Posted By: ' + '<strong>' + post.name +
    '</strong></p>' + '<hr>' + '</p>');
  // '<p class="hide userinput" id="postIndex" data-post-index-number>' +
  // // postIndex +
  //
  $postDiv.append($commentDiv);

  //
  $commentDiv.append('<button class="btn btn commentsinput" type="submit" id="deletecomment"> X </button>');
  $commentDiv.append('<input id="commenttext" class="commentsinput" type="Text" placeholder="Comment Text">'  +
    '</input>');

  $commentDiv.append('<input id="commentname" class= "commentsinput" type="Text" placeholder="User Name">' +
    '</input>');
  //
  $commentDiv.append('<button class="btn btn-primary commentsinput" type="submit" id="postcomment"> Post Comment</button>');

  //create a data attribute to index the comments
  // $commentDiv.append('<p class="hide commentsinput" id ="commentIndex" data-comment-index-number>' +
  //   commentIndex + '</p>');
};


//when the remove button is clicked it removes the post
//has worked in different iterations with the same code but doesn't work now
$('#removepost').on('click', function() {
  $(this).closest('.post').remove();
});

// //adds a hidden class to the comment
// $commentDiv.addClass('hide');
// $('#commentslink').on('click', function() {
//   console.log("what is the comments div doing?")
//   //if the comments were showing up, i would hide them and then toggle to show them
//   $(this).closest('.hide').toggleClass('show');
// });

//deletes the comments when you hit x
$('#deletecomment').on('click', function() {
  $(this).closest($commentDiv).remove();
});
