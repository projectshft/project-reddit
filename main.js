// Javascript 

// array variable to contain all posts
var posts = [];

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

    threadBody.innerHTML = messageBoard.renderPosts();
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

  renderPosts = function (){
    var items = "";
    for(var i = 0; i < posts.length; i++){
      items += '<div class="post-item"><p class="delete-post"> Delete Post </p><p class="post-content">' + posts[i].post + ' - Posted By: ' + posts[i].postUserName + `</p><p id="post${posts[i]}" class="post-comments" onclick="messageBoard.toggleComments()"> show comments </p></div><hr/>`;
      console.log(posts[i]);
    }
    return items;
  }

  toggleComments = function (){
    // if(target.classList.contains('.post-comments')){
      if(document.getElementsByClassName('comment')[0].classList.contains('show')){
        document.getElementsByClassName('comment')[0].classList.remove('show');
        document.getElementsByClassName('post-comments')[0].innerHTML = "show comments";
      } else {
        document.getElementsByClassName('comment')[0].className += ' show';
        document.getElementsByClassName('post-comments')[0].innerHTML = "hide comments";
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
