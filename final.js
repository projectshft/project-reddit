  //creates an empty data structure for posts + comments
  var postsArray = [];
//
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
      comments: [],
    });
    //
  };

  //when you click on the Post button it submits the information to the datastructure
  //and calls the function render post which calls the function that appends the posts
  $('#submit').click(function() {
    //edge cases
    if ($('#name').val().length !== 0 && $('#message').val().length !== 0) {
      //
      addToPostsArray();
      //renders post
      renderPost();
    } else {
      //edge cases
      alert("you can't submit an empty post! add your name or message and then resubmit!")
    }
  });

  var addCommentsToPostsArray = function(postIndex) {
    //
    var $userCommentName = $('#commentname').val();
    var $userCommentText = $('#commentname').val();
    //
    postsArray[postIndex].comments.push({
      commenttext: $userCommentText,
      commentname: $userCommentName,
    });

    // return postsArray[postIndex].comments.length - 1;
  };

  // this click handler adds the comments input the data structure
  // and renders the post which appends the html
  $posts.on('click','.postcomment', function() {
    //edge cases tests to see what will happen
    console.log('this button works');
    if ($('#commentname').val().length !== 0 && $('#commenttext').val().length !== 0) {
      //
      var postIndex = $(this).closest('.post').index();
      //
      var commentIndex = addCommentsToPostsArray(postIndex);
      var postElement = $(this).closest('.post');
      var postObject= postsArray[postIndex];

      renderComments(postElement, postObject);
    } else {
      //edge case for comments
      alert("you can't submit an empty comment! add your name or comment and then resubmit!")
    }
    return postIndex;
    return postElement;
    return postObject;
  });

  //the render function should be looping through and appending but I couldn't figure out
  //to append inside the for loop or how to access the inner loop.
  var renderPost = function() {
    //empties posts when you render the page
    $posts.empty();
    //
    for (var i = 0; i < postsArray.length; i++) {
      //loops through the array to posts info
      addPostsToPage(postsArray[i]);
      //loops through to find comment info
    }
    addCommentInputToPage();
  };
  // postDataModel -- one post object in the array
  var renderComments = function(postElement, postObject) {
    //TODO !! change it to just empty the comment relative to the element
    $('.comments').empty();
    //can't get my inner loop to extract data
    
    //loops through to find comment info
    for (var position = 0; position < postObject.comments.length; position++) {
      //
      addCommentsToPage(postObject.comments[position]);
    }
    addCommentInputToPage();
  };

  //and the nested comment posts
  var addPostsToPage = function(postObject) {

    //adds a remove and comment button to the post
    $posts.append('<div class=post>' + '<a href="#" class="removes" id="removepost"> remove </a>' +
      '<a class=commentslink type="link" id="commentslink"> comment(s) </a>' +
      '<p class="userinput" id="postmessage">' + postObject.message + '<p>' +
      '<p class="userinput" id="postname">' + ' Posted By: ' + '<strong>' + postObject.name +
      '</strong></p>' + '<hr>' + '</p>' + '</div>');
    };
var addCommentInputToPage = function() {
    $('.post').append('<div class ="comments hide">' + '<input id="commenttext" class="commenttext" type="Text" placeholder="Comment Text">' +
      '</input>' + '<input id="commentname" class= "commentname" type="Text" placeholder="User Name">' +
      '</input>' + '<button class="btn btn-primary postcomment" type="submit" > Post Comment </button>' + '</div>');
  };

  var addCommentsToPage = function(postElement) {
    //debugger;
    $posts.find('.comments').append('<div class="comment">' + postElement.commenttext + ' Posted By: <strong> ' + postElement.commentname +
     + '</strong>' + '<button type=“button” class=“close” aria-label=“Close”>'+'<span aria-hidden=“true”>&times;</span>'+'</button>'+'</div>');
};
//this removes the post
$('.posts').on('click', '.removes', function() {
    $(this).closest('.post').remove();
    //postsArray (slice)
    //removes from the data datastructure!
    //postsArray.slice(postIndex);

  });

//when you click on the comments link it shows the comments
  $('.posts').on('click', '.commentslink', function() {
    $(this).siblings('.hide').toggleClass("show");
  });

  //deletes the comments when you hit x
  $('.posts').on('click', '.close', function() {
    console.log('this delete button works!');
    $(this).find('.comment').remove();
    //this also deletes the commment from the datastructure
  });
