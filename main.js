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
      var divPostPanel = document.createElement('div');
      var pPostContent = document.createElement('p');
      var pPostContentTextNode = document.createTextNode(posts[i].post);
      var pPostActionBar = document.createElement('div');
      var pDeletePost = document.createElement('p');
      var pDeletePostTextNode = document.createTextNode(" Delete Post ");
      var pPostComments = document.createElement('p');
      var pPostCommentsTextNode = document.createTextNode(" Show Comments ");
      var pPostedBy = document.createElement('p');
      var pPostByTextNode = document.createTextNode("Posted By: " + posts[i].postUserName);
      var hr = document.createElement('hr');

      divPostPanel.className = "post-item panel-default";

      pPostContent.className = "post-content panel-body";
      pPostContent.append(pPostContentTextNode);

      pPostActionBar.className = "post-action-bar";
      pDeletePost.className = "delete-post";
      pDeletePost.append(pDeletePostTextNode);
      pDeletePost.onclick = function () {messageBoard.deletePost();};
      pPostComments.id = "postID" + posts[i];
      pPostComments.className = "post-comments";
      pPostComments.append(pPostCommentsTextNode);
      pPostComments.onclick = function () {messageBoard.toggleComments();};

      pPostActionBar.appendChild(pDeletePost);
      pPostActionBar.appendChild(pPostComments);

      pPostedBy.className = "posted-by panel-footer";
      pPostedBy.append(pPostByTextNode);

      divPostPanel.appendChild(pPostContent);
      divPostPanel.appendChild(pPostActionBar);
      divPostPanel.appendChild(pPostedBy);
      divPostPanel.appendChild(hr);
      
      threadBody.append(divPostPanel);
    }
  }

  toggleComments = function (){
    // if(target.classList.contains('.post-comments')){
      if(document.getElementsByClassName('comment')[0].classList.contains('show')){
        document.getElementsByClassName('comment')[0].classList.remove('show');
        document.getElementsByClassName('post-comments')[0].innerHTML = "Show Comments";
      } else {
        document.getElementsByClassName('comment')[0].className += ' show';
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

commentBtn.addEventListener('click', function(){

});

// Instantiates variable for new MessageBoard class & call to renderPage() funciton
var messageBoard = new MessageBoard();
messageBoard.renderPage();
