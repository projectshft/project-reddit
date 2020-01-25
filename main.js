//this is an array of objects containing the posts information
//empty array where we push in the objects
var postsArray = [];
var order = 1;
var commentnumber = 1;

//add Posts to Array
var addToPostsArrays = function() {
  //takes the values from the input field on the forum
  var userMessage = $('#message').val();
  var userName = $('#name').val();
  var userCommentText = $('#commenttext').val();
  var userCommentName = $('#commentname').val();
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
$('#submit').click(function() {
  addToPostsArrays();
});

$('#postcomment').click(function() {
  // addToPostsArrays();
  console.log("where do i put this info for post comment?")
});

//the render function does x
var renderPost = function() {
  //
  $('.posts').empty();
  // $('.commentinput').empty();

  //looping through the array to find stuff
  for (var i = 0; i < postsArray.length; i++) {
    addPostToPage(postsArray[i]);
    console.log("where do i put this info?")
    for (var j = 0; j < postsArray[i].comment.length; j++) {
      console.log(postsArray[i].comment[j]);
    };
  };
};

//this function adds the posts to the webpage by creating new divs
//and the nested comment posts
var addPostToPage = function(post) {
  //creates a new div in the posts div for posts
  $('.posts').append('<div class ="post">' + '</div>');
  //adds a remove and comment button to the post
  $('.post').append('<a class="removepost" type ="link" id="removepost"> remove </a> ' + '<a class=commentlink type="link" id="commentlink"> comment(s)</a>');
  //adds the userInput (message + name ) to the post
  $('.post').append('<p class="userinput">' + post.message + '<p>' + '<p class="userinput">' + ' Posted By: ' + '<strong>' + post.name + '</strong></p>' + '<hr>');
  // creates a div in the comment button that will be hid
  //inside the div with be a 2 text inputs and an x button
  $('.commentlink').append('<div class=comments>'+'</div>');
  $('.comments').append('<input id="commenttext" class="commentinput form-control" type="Text" placeholder="Comment Text">' + '</input>');
  $('.comments').append('<input id="commentname" class="commentinput form-control" type="Text" placeholder="User Name">' + '</input>');
  $('.comments').append('<button class="btn btn-primary commentinput" type="submit" id="postcomment"> Post Comment</button>');

};



//when the remove button is clicked it removes the post
$('.posts').on('click', '.removepost', function() {
  $(this).closest('.post').remove();
});

//when you click on the link comments(s) it should display the hidden comments or .commentinfo

$('.post').on('click', '.commentlink', function () {
  $(this).closest('.comments').toggleClass('show');
});

$( ".commentlink" ).click(function() {
  $( ".comments" ).toggle( "slow", function() {
    // Animation complete.
  });
});

$( "#commentlink" ).toggle('display');
