// Javascript 

// array variable to contain all posts
var posts = [];
var comments = [];

// vars for HTML elements
var pageView = document.getElementsByClassName('post-comment-thread')[0];

var postInput = document.getElementsByClassName('post-text')[0];
var postUserName = document.getElementsByClassName('post-name')[0];
var postBtn = document.getElementsByClassName('post-btn')[0];

var commentInput = document.getElementsByClassName('comment-text')[0];
var commentInputName = document.getElementsByClassName('commentor-name')[0];
var commentBtn = document.getElementsByClassName('comment-btn')[0];

// MessageBoard Class
class MessageBoard {
  constructor(currentBoard, message, user){
    this.currentBoard = currentBoard;
    this.message = message;
    this.user = user;
  }

  renderPage = function (){
    var threadBody = document.getElementsByClassName('thread-body')[0];
    while(threadBody.hasChildNodes()){
      threadBody.removeChild(threadBody.firstChild);
    }
    if(!messageBoard.renderPosts() === undefined){
      threadBody.append(messageBoard.renderPosts());
    }
  }

  addPost = function (){
    switch(true){
      case(postInput.value === ""):
        alert("'Post Text' input cannot be blank.");
        break;
      case(postUserName.value === ""):
        alert("'Your Name' input cannot be blank.");
        break;
      default:
        var comments = [];
        var newPost = new Post();
        newPost.post = postInput.value;
        newPost.postUserName = postUserName.value;
        newPost.comments = comments;
        // console.log("postlength: " + posts.length);
        newPost.postId = posts.length;
        // console.log("postId: " + newPost.postId);
        posts.push(newPost);
    }
  }

  deletePost = function (){

  }

  renderPosts = function (){
    // var items = "";
    var threadBody = document.getElementsByClassName('thread-body')[0];
    while(threadBody.hasChildNodes()){
      threadBody.removeChild(threadBody.firstChild);
    }

    for(var i = 0; i < posts.length; i++){
      // DOM elements to contain post and comment input
      var divPostPanel = document.createElement('div');
      divPostPanel.className = "post-item panel-default";
      // post input DOM elements 
      var pPostContent = document.createElement('p');
      var pPostContentTextNode = document.createTextNode(posts[i].post);
      pPostContent.className = "post-content panel-body";
      pPostContent.append(pPostContentTextNode);
      // Post delete and show comments DOM elements 
      var pPostActionBar = document.createElement('div');
      var pDeletePost = document.createElement('p');
      var pDeletePostTextNode = document.createTextNode(" Delete Post ");
      var pPostCommentsToggle = document.createElement('p');
      var pPostCommentsTextNode = document.createTextNode(" Show Comments ");
      pPostActionBar.className = "post-action-bar";
      pDeletePost.className = "delete-post";
      pDeletePost.append(pDeletePostTextNode);
      pDeletePost.onclick = function () {messageBoard.deletePost();};
      pPostCommentsToggle.id = "postID" + posts[i];
      pPostCommentsToggle.className = "post-comments";
      pPostCommentsToggle.append(pPostCommentsTextNode);
      pPostCommentsToggle.onclick = function () {messageBoard.toggleShowHideComments();};
      // appends delete post and show comments DOM elements as child nodes
      pPostActionBar.appendChild(pDeletePost);
      pPostActionBar.appendChild(pPostCommentsToggle);
      // Post user input name and className assignment
      var pPostedBy = document.createElement('p');
      var pPostByTextNode = document.createTextNode("Posted By: " + posts[i].postUserName);
      pPostedBy.className = "posted-by panel-footer";
      pPostedBy.append(pPostByTextNode);

      // DOM elements for comment input on post - initially hidden in browser display
      var divCommentForm = document.createElement('div');
      var divCommentFormLabel = document.createTextNode(" Comments: ");
      divCommentForm.className = "comments hide";
      divCommentForm.append(divCommentFormLabel);
      // input elements 
      var inputCommentText = document.createElement('input');
      inputCommentText.type = "text";
      inputCommentText.placeholder = "Comment Text";
      inputCommentText.className = "comment-text";
      inputCommentText.required;
      var inputCommentorName = document.createElement('input');
      inputCommentorName.type = "text";
      inputCommentorName.placeholder = "Your Name";
      inputCommentorName.className = "commentor-name";
      inputCommentorName.required;
      // submit comment button
      var submitCommentBtn = document.createElement('button');
      var submitCommentBtnTextNode = document.createTextNode("Submit Comment");
      submitCommentBtn.className = "comment-btn btn-primary";
      submitCommentBtn.append(submitCommentBtnTextNode);
      var hr = document.createElement('hr');
      // appendChild nodes on comment form DOM
      divCommentForm.appendChild(inputCommentText);
      divCommentForm.appendChild(inputCommentorName);
      divCommentForm.appendChild(submitCommentBtn);
      divCommentForm.appendChild(hr);

      // appendChild nodes to divPostPanel 
      divPostPanel.appendChild(pPostContent);
      divPostPanel.appendChild(pPostActionBar);
      divPostPanel.appendChild(pPostedBy);
      divPostPanel.appendChild(divCommentForm);
      // divPostPanel.appendChild(hr);
      
      threadBody.append(divPostPanel);
    }
  }

  toggleShowHideComments = function (){
    // if(target.classList.contains('.post-comments')){
      if(document.getElementsByClassName('comments')[0].classList.contains('show')){
        document.getElementsByClassName('comments')[0].classList.remove('show');
        document.getElementsByClassName('post-comments')[0].innerHTML = "Show Comments";
      } else {
        document.getElementsByClassName('comments')[0].className += ' show';
        document.getElementsByClassName('post-comments')[0].innerHTML = "Hide Comments";
      }
    // } 
  }

}

// Post class
class Post {
  constructor(post, postUserName, comments, postId){
    this.post = post; 
    this.postUserName = postUserName;
    this.comments = comments;
    this.postId = postId;
  }

  addComment = function (){

  }

  renderComments = function (){

  }

}

// eventListeners for buttons
postBtn.addEventListener('click', function(){
  messageBoard.addPost();
  postInput.value = "";
  postUserName.value = "";
  messageBoard.renderPage();

});

// commentBtn.addEventListener('click', function(){

// });

// Instantiates variable for new MessageBoard class & call to renderPage() funciton
var messageBoard = new MessageBoard();
messageBoard.renderPage();
