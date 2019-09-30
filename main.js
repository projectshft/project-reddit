let setOfPosts = [];
let $postForm = $('.new-post-form');
let $commentForm = $('.new-comment-form');
let $postDisplay = $('.posts-display');
let activePostNum = -1;
const POST_ID_ATTR = 'data-postid';
const COMMENT_ID_ATTR = 'data-commentid';

//when post is submitted successfuly, add to posts and refresh html
var handlePostSubmit = function () {
    //this stops refresh
    event.preventDefault()
    console.log("successful post submission");
    let title = $('.title-input')[0].value;
    let text = $('.text-input')[0].value;
    let username = $('.username-input')[0].value;

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
  console.log("successful comment submission on post " + activePostNum);

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
  activePostNum = -1;

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
}

//set remove button click events
var wireRemoveEvents = function () {
  $removePostLinks = $("a:contains(post)");
  $removeCommentLinks = $("a:contains(comment)");

  //set index for later
  for(i = 0 ; i < $removePostLinks.length; i++)
  {
    $removePostLinks[i].setAttribute("data-postid", i);
  };

  //set index for later
  for(i = 0 ; i < $removeCommentLinks.length; i++)
  {
    $removeCommentLinks[i].setAttribute("data-commentid", i);
  };
  
  $removePostLinks.on('click', removeContent);
  $removeCommentLinks.on('click', removeContent);

  //leaving this in to discuss later with someone
  //why does => operator change $(this) to window?
  // $removeLinks.each((index) => {
  //   console.log($(this));
  //   $(this).on('click', removeContent);
  // })
}


var removeContent = function () {
  //determine if what we clicked was a remove for a post or a comment
  let postId = activePostNum;

  //if its a post with data-postid attribute remove the post from setOfPosts
  if($(this)[0].hasAttribute(POST_ID_ATTR))
  {
    postId = $(this).attr(POST_ID_ATTR);
    setOfPosts.splice(postId, 1);
    console.log('removing post ' + postId);
    updatePostDisplay();
  }
  else if ($(this)[0].hasAttribute(COMMENT_ID_ATTR)){
    //otherwise if it has data-commentid remove it from active posts comment set
    let commentId = $(this).attr(COMMENT_ID_ATTR);
    setOfPosts[postId].comments.splice(commentId, 1);
    console.log('removing comment ' + postId + '-' + commentId)
    updatePostWithCommentsDisplay();
  }
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
  $postDisplay.empty();
  //add back link
  $postDisplay.append('<a href="#"><u>&lt;&lt; BACK</u></a>');
  
  $('a').on('click', updatePostDisplay);

  $postDisplay.append(setOfPosts[activePostNum].contentHTML());
  
  setOfPosts[activePostNum].comments.forEach((comment) => {
    $postDisplay.append(comment.contentHTML());
  });

  wireRemoveEvents();
}

$postForm.submit(handlePostSubmit);
$commentForm.submit(handleCommentSubmit);
