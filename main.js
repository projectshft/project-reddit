var posts = [];
var postObj = {
  postName: "",
  postText: "",
  postID: "",
  comments: []
}
var commentObj = {
  commentName: "",
  commentText: "",
  commentID: ""
}

//builds post object instance and adds object to posts array to be rendered
var addPost = function() {
  var myPost = Object.create(postObj);
  var postName = $('.post-form-name').val();
  var postText = $('.post-form-text').val();
  myPost.postName = postName;
  myPost.postText = postText;
  myPost.postID = 'post' + (posts.length);
  posts.push(myPost);
  renderPosts();
}

//feeds post information to buildPostTemplate and appends result to $postsContainer
//adds onclick events to posts
var renderPosts = function() {
  var $postsContainer = $('.posts-container');
  $postsContainer.empty();

  for(let i = 0; i < posts.length; i++) {
    var post = posts[i];
    var postName = post.postName;
    var postText = post.postText;
    var postID = post.postID;
    var $postTemplate = buildPostTemplate(postID, postText, postName);
    $postsContainer.append($postTemplate);
  }
  $(".remove-post").click(removePost);
  $(".show-comments").click(showComments);
  $(".comment-form-btn").click(addComment);
}

//builds jquery dom element with post information
var buildPostTemplate = function(postID, postText, postName) {
  var commentsTemplate =
  '<div class="comments-container">' +
      '<div class="comment-messages-container"></div>' +
      '<div class="form-group comment-form">' +
      '<input type="text" class="form-control comment-form-name" placeholder="Your Name">' +
      '<input type="text" class="form-control comment-form-text" placeholder="Comment Text">' +
      '<button class="btn btn-primary comment-form-btn">Post Comment</button>' +
      '</div></div>';
  var template =
  '<li class="list-group-item" ' +
      'id="' + postID + '">' +
      '<p class="remove-post text-primary">remove</p> ' +
      '<p class="show-comments text-primary">comments</p> ' +
      '<p class="post-text">' + postText + '</p>' +
      commentsTemplate +
      '<p>Posted By: <b>' + postName + '</b></p>' +
      '</li>';
    var $postTemplate = $(template);
    return $postTemplate;
}

//fetches id for post to be removed, and removes it from the posts array
var removePost = function() {
  var id = $(this).parent().attr("id");
  posts = posts.filter(post => {
    return post.postID !== id;
  });
  resetPostIDs();
  renderPosts();
}

//sets postIDs based off the order they exist in the posts array
//postID is set based off of lenght of posts array, creating duplicate IDs
var resetPostIDs = function() {
  for(let i = 0; i < posts.length; i++) {
    posts[i].postID = "post" + i;
  }
}

var addComment = function() {
  var postID = $(this).closest(".list-group-item").attr("id");
  var commentName = $(this).siblings(".comment-form-name").val();
  var commentText = $(this).siblings(".comment-form-text").val();
  var myComment = Object.create(commentObj);
  myComment.commentName = commentName;
  myComment.commentText = commentText;
  var myPost = posts.find(post => post.postID === postID);
  myPost.comments.push(myComment);
  renderComments(postID, myPost);
}

//removes all comments from comment-messages-container, then loops through comments array
// to update comments in the container
var renderComments = function(postID, myPost) {
  var $commentContainer = $('#'+postID).find(".comment-messages-container");
  $commentContainer.empty();
  for(let i = 0; i < myPost.comments.length; i++) {
    var commentName = myPost.comments[i].commentName;
    var commentText = myPost.comments[i].commentText;
    myPost.comments[i].commentID = "comment" + i;
    var $commentTemplate = buildCommentTemplate(commentText, commentName);
    $commentContainer.append($commentTemplate);
  }
  //$(".delete-comment-btn").click(removeComment);
}

//builds jquery dom object for comment template, taking in values passed by renderComments
var buildCommentTemplate = function(commentText, commentName) {
  var commentTemplate =
  '<p>' + commentText + ' Posted By: ' + commentName +
  '<button type="button" class="close delete-comment-btn" aria-label="Close">' +
  '<span aria-hidden="true">&times;</span></button>' + '</p>';
  return $(commentTemplate);
}

//togles comment section visibility on a post
var showComments = function() {
  $(this).siblings(".comments-container").toggle();
}

$(".post-button").click(addPost);
console.log("end of program reached");
