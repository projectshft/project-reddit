let setOfPosts = [];

let $postForm = $('.new-post-form');
let $commentForm = $('.new-comment-form');
let $postDisplay = $('.posts-display');

//when post is submitted successfuly, add to posts and refresh html
var handlePostSubmit = function () {
    //this stops refresh
    event.preventDefault()
    console.log("successful post submission");
    let title = $('.title-input')[0].value;
    let text = $('.text-input')[0].value;
    let username = $('.text-input')[0].value;

    setOfPosts.push(new Post(title, text, username));
    console.log('post added: ' + JSON.stringify(setOfPosts[setOfPosts.length - 1]));

    //empty the form
    $postForm[0].reset();
    updatePostDisplay();
  };

  
//when post is submitted successfuly, add to posts and refresh html
var handleCommentSubmit = function () {
  //this stops refresh
  event.preventDefault()
  console.log("successful comment submission");

  let text = $('.comment-text-input')[0].value;
  let username = $('.comment-username-input')[0].value;

  setOfPosts[activePostNum].comments.push(new UserContent(text, username));

  console.log('comment added: ' + JSON.stringify(setOfPosts[activePostNum].comments[setOfPosts[activePostNum].comments.length - 1]));

  //empty the form
  $commentForm[0].reset();
  updatePostWithCommentsDisplay();
};

//render the main section of the page with posts
var updatePostDisplay = function () {
  //toggle the visibility of the new post vs new comment box
  $('.new-post').css('display', 'block');
  $('.new-comment').css('display', 'none');
  
  $postDisplay.empty();
  
  setOfPosts.forEach((post) => {
    $postDisplay.append(post.contentHTML());
  });

  let $userPosts = $('.user-post');

  //set index for later
  for(i = 0 ; i < $userPosts.length; i++)
  {
    $userPosts[i].setAttribute("data-postid", i);
  };
  
  $userPosts.on('click', navigateToPost);

  wireRemoveEvents();

  activePostNum = -1;
}

//set remove button click events
var wireRemoveEvents = function () {
  $removeLinks = $('.remove-link');

  $removeLinks.each(function(index) {
    console.log($(this));
    $(this).on('click', removeContent);
  });
  
  //leaving this in to discuss later with someone
  //why does => operator change $(this) to window?
  // $removeLinks.each((index) => {
  //   console.log($(this));
  //   $(this).on('click', removeContent);
  // })
}

var removeContent = function () {
  console.log('remove clicked');
}

var navigateToPost = function () {
  activePostNum = $(this).data().postid;
  console.log("Post " + activePostNum + " clicked.");
  
  //toggle the visibility of the new post vs new comment box
  $('.new-post').css('display', 'none');
  $('.new-comment').css('display', 'block');

  updatePostWithCommentsDisplay();
}

var updatePostWithCommentsDisplay = function () {

  //TODO: Add remove clicks somewhere on post/comments
  $postDisplay.empty();
  //add back link
  $postDisplay.append('<a href="#"><u>&lt;&lt; BACK</u></a> ');
  
  $('a').on('click', updatePostDisplay);

  $postDisplay.append(setOfPosts[activePostNum].contentHTML());
  
  setOfPosts[activePostNum].comments.forEach((comment) => {
    $postDisplay.append(comment.contentHTML());
  });

  wireRemoveEvents();
}

let activePostNum = -1;

$postForm.submit(handlePostSubmit);
$commentForm.submit(handleCommentSubmit);

var test = new Post("title", "text", "username");
console.log("text: " + test.text); //text: text
console.log("username: " + test.username); //username: username
console.log("contentHTML: " + test.contentHTML()); //titleHTML + textHTML + usernameHTML

var test = new UserContent("text", "username");

console.log("Title: " + test.title); //Title: undefined
console.log("text: " + test.text); //text: text
console.log("username: " + test.username); //username: username
console.log("contentHTML: " + test.contentHTML()); //titleHTML + textHTML + usernameHTML