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

// Post class
class Post {

  constructor(post, postUserName, comments, postID){
    this.post = post; 
    this.postUserName = postUserName;
    this.comments = comments;
    this.postId = postID;
  }

}

// click events for buttons
postBtn.addEventListener('click', function(){
  var comments = [];
  var newPost = new Post();
  newPost.post = postInput.value;
  newPost.postUserName = postUserName.value;
  newPost.comments = comments;
  console.log("postlength: " + posts.length);
  newPost.postId = posts.length;
  console.log("postId: " + newPost.postId);

  posts.push(newPost);
  // console.log("postslength: " + posts.length);
  // console.log("posts[newPost.postId].post: " + posts[newPost.postId].post);
  // console.log("posts[newPost.postId].postUserName: " + posts[newPost.postId].postUserName);
  postInput.value = "";
  postUserName.value = "";
  renderPage();

});

// method to display page
var renderPage = function (){
  var threadBody = document.getElementsByClassName('thread-body')[0];
  while(threadBody.hasChildNodes()){
    threadBody.removeChild(threadBody.firstChild);
  }
  
  var items = "";
  for(var i = 0; i < posts.length; i++){
    items += '<div class="post-item"><p class="delete-post"> Delete Post </p><p class="post-content">' + posts[i].post + ' - Posted By: ' + posts[i].postUserName + `</p><p id="post${posts[i]}" class="post-comments" onclick="toggleComments()"> show comments </p></div><hr/>`;
    console.log(posts[i]);
  }
  threadBody.innerHTML = items;
}

var toggleComments = function (e){
  // for(e.target.closest('.post-comments')){
    if(document.getElementsByClassName('comment')[0].classList.contains('show')){
      document.getElementsByClassName('comment')[0].classList.remove('show');
      document.getElementsByClassName('post-comments')[0].innerHTML = "show comments";
    } else {
      document.getElementsByClassName('comment')[0].className += ' show';
      document.getElementsByClassName('post-comments')[0].innerHTML = "hide comments";
    }
  // }
  
}


renderPage();
