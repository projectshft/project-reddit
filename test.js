//creates an empty data structure for posts + comments
var postsArray = [];
var $postDiv = $('<div class ="post">' + '</div>');
var $commentDiv = $('<div class ="comments">' + '</div>');
var $posts = $('.posts');

//this function adds the posts to postsArray data structure
var addToPostsArray = function() {
  //takes the values from the input field from the posts
  var $userMessage = $('#message').val();
  var $userName = $('#name').val();
  //pushes the values into postsArray
  postsArray.push({
    name: $userName,
    message: $userMessage,
    comment: [],
  });
  //is this the best place for render post?
  renderPost();
};

//when you click on the Post button it submits the information to the datastructure
//and calls the function render post which calls the function that appends the posts
$('#submit').click(function() {
  addToPostsArray();
  renderPost();
});

var addCommentsToPostsArray = function() {
  //
  var $userCommentName = $('#commentname').val();
  var $userCommentText = $('#commentname').val();
  //shouldn't be postsArray.length-1 should somehow access each of the array indexes
  postsArray[index].comment.push({
    commenttext: $userCommentText,
    commentname: $userCommentName,
  });
};

// this click handler adds the comments input the data structure
// and renders the post which appends the html
$posts.on('click', '#postcomment', function() {
  addCommentsToPostsArray();
  renderPost();
});


//the render function should be looping through and appending but I couldn't figure out
//to append inside the for loop or how to access the inner loop.
var renderPost = function() {
  //empties posts when you render the page
  $posts.empty();
  //looping through the array to find stuff
  for (var i = 0; i < postsArray.length; i++) {
    //loops through the array to posts info
    addPostToPage(postsArray[i], i + 1);
    //loops through to find comment info
    for (var j = 0; j < postsArray[i].comment.length; j++) {
      //can't get my inner loop to extract data
      addCommentsToPage(postsArray[i].comment[j], j + 1);
    };
  };
  console.log(postsArray);
};


//this function adds the posts to the webpage by creating new divs
//and the nested comment posts
var addPostToPage = function(post, index) {
  //adds a remove and comment button to the post
  $postDiv.append('<a class="removepost" type ="link" id="removepost"> remove </a>');
  //
  $postDiv.append('<a class=comments type="link" id="comments"> comment(s) </a>');
  //adds the userInput (message + name ) to the post + creates a data attribute to index the posts
  $postDiv.append('<p class="userinput" id="postmessage">' + post.message + '<p>' +
    '<p class="userinput" id="postname">' + ' Posted By: ' + '<strong>' + post.name +
    '</strong></p>' + '<hr>' + '<p class="hide userinput" id="postIndex" data-post-index-number>' +
    index + '</p>');
  $posts.append($postDiv);

};

var addCommentsToPage = function(comment, index){
$postDiv.append($commentDiv);
  //<>
  $commentDiv.append('<input id="commenttext" class="commentinput" type="Text" placeholder="Comment Text">' + comment.commenttext +
    '</input>');

  $commentDiv.append('<input id="commentname" class= "commentinput" type="Text" placeholder="User Name">' + comment.commentname +
    '</input>');
  //
  $commentDiv.append('<button class="btn btn-primary commentinput" type="submit" id="postcomment"> Post Comment</button>');
  $commentDiv.append('<button class="btn btn commentinput" type="submit" id="deletecomment"> X </button>');
  //create a data attribute to index the comments
  $commentDiv.append('<p class="hide commentinput" id ="commentIndex" data-comment-index-number>' +
  index + '</p>');

};

//when the remove button is clicked it removes the post
//has worked in different iterations with the same code but doesn't work now
$('#removepost').on('click', function() {
  $(this).closest('.post').remove();
});

//adds a hidden class to the comment
$commentDiv.addClass('hide');
$commentDiv.on('click', function() {
  //if the comments were showing up, i would hide them and then toggle to show them
  $(this).closest('.hide').toggleClass('show');
});

//deletes the comments when you hit x
$('#deletecomment').on('click', function() {
  $(this).closest($commentDiv).remove();
});
