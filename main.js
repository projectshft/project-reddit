// Javascript 

// array variable to contain all posts
var posts = [];
var postItemIndex;

// vars for HTML elements
var pageView = document.getElementsByClassName('post-comment-thread')[0];

var postInput = document.getElementsByClassName('post-text')[0];
var postUserName = document.getElementsByClassName('post-name')[0];
var postBtn = document.getElementsByClassName('post-btn')[0];

// MessageBoard Class
class MessageBoard {
  constructor(currentBoard, message, user){
    this.currentBoard = currentBoard;
    this.message = message;
    this.user = user;
  }

  getPosts() {
    return messageBoard.posts;
  }

  renderPage() {
    var threadBody = document.getElementsByClassName('thread-body')[0];
    while(threadBody.hasChildNodes()){
      threadBody.removeChild(threadBody.firstChild);
    }
    if(!messageBoard.renderPosts() === undefined && !messageBoard.render){
      threadBody.append(messageBoard.renderPosts());
    }
  }

  addPost() {
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
        newPost.postId = posts.length;
        posts.push(newPost);
    }
  }

  buildPostDOM(commentDOMBuild, index) {
    // DOM elements to contain post and comment input
    var divPostPanel = document.createElement('div');
    divPostPanel.id = index;
    divPostPanel.className = "post-item panel-default";

    // post input DOM elements 
    var pPostContent = document.createElement('p');
    var pPostContentTextNode = document.createTextNode(posts[index].post);
    pPostContent.id = index;
    pPostContent.className = "post-content panel-body";
    pPostContent.append(pPostContentTextNode);

    // Post 'delete post' and 'show comments' DOM elements 
    var pPostActionBar = document.createElement('div');
    var pDeletePost = document.createElement('p');
    var pDeletePostTextNode = document.createTextNode(" Delete Post ");
    var pPostCommentsToggle = document.createElement('p');
    var pPostCommentsTextNode = document.createTextNode(" Show Comments ");
    pPostActionBar.className = "post-action-bar";
    pDeletePost.className = "delete-post";
    pDeletePost.append(pDeletePostTextNode);
    pDeletePost.onclick = function (e) {messageBoard.deletePost(e);};
    pPostCommentsToggle.className = "post-comments";
    pPostCommentsToggle.append(pPostCommentsTextNode);
    pPostCommentsToggle.onclick = function (e) {messageBoard.toggleShowHideComments(e);};

    // appends delete post and show comments DOM elements as child nodes
    pPostActionBar.appendChild(pDeletePost);
    pPostActionBar.appendChild(pPostCommentsToggle);
  
    // Post user input name and className assignment
    var pPostedBy = document.createElement('p');
    var pPostByTextNode = document.createTextNode("Posted By: " + posts[index].postUserName);
    pPostedBy.className = "posted-by panel-footer";
    pPostedBy.append(pPostByTextNode);

    // appendChild nodes to divPostPanel 
    divPostPanel.appendChild(pPostContent);
    divPostPanel.appendChild(pPostActionBar);
    divPostPanel.appendChild(pPostedBy);
    divPostPanel.appendChild(commentDOMBuild);

    return divPostPanel;
  }

  // method to created DOM elements for post input data
  buildPostCommentDOM() {
    // vars for DOM elements for 'comment' input on post - initially hidden in browser display
    var divCommentForm = document.createElement('div');
    var divCommentFormLabel = document.createTextNode(" Comments: ");
    divCommentForm.className = "comments hide";
    divCommentForm.append(divCommentFormLabel);

    // input element variables
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
    // submitCommentBtn.addEventListener('click', function(){
    //   Post.addComment();
    // });
    var hr = document.createElement('hr');

    // appendChild nodes on comment form DOM
    divCommentForm.appendChild(inputCommentText);
    divCommentForm.appendChild(inputCommentorName);
    divCommentForm.appendChild(submitCommentBtn);
    divCommentForm.appendChild(hr);

    return divCommentForm;
  }

  renderPosts() {
    var threadBody = document.getElementsByClassName('thread-body')[0];
    while(threadBody.hasChildNodes()){
      threadBody.removeChild(threadBody.firstChild);
    }

    for(var i = 0; i < posts.length; i++){
      var newInputPanel = messageBoard.buildPostDOM(messageBoard.buildPostCommentDOM(), i);
      threadBody.append(newInputPanel);
    }
  }
  
  deletePost(e) {
    posts.splice(e.target.closest('.post-item').getAttribute('id'), 1);
    messageBoard.renderPage();
  }

  toggleShowHideComments(e) {
    console.log(document.getElementsByClassName('comments')[0]);
    if(e.target.classList.contains('post-comments')){
      var item = e.target.closest('.post-item').getAttribute('id');
      if(document.getElementsByClassName('comments')[item].classList.contains('show')){
        document.getElementsByClassName('comments')[item].classList.remove('show');
        document.getElementsByClassName('post-comments')[item].innerHTML = "Show Comments";
      } else {
        document.getElementsByClassName('comments')[item].className += ' show';
        document.getElementsByClassName('post-comments')[item].innerHTML = "Hide Comments";
        postItemIndex = item;
        var commentSubmitBtn = document.getElementsByClassName('comment-btn')[0];
        commentSubmitBtn.addEventListener('click', function(){
          var currentPost = posts[item];
          currentPost.addComment();
          currentPost.renderComments();
        });
      }
    }
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

  getComments() {
    return this.comments;
  }
  setComments(comments){
    this.comments = comments;
  }

  addComment() {
    var commentInput = document.getElementsByClassName('comment-text')[0];
    var commentInputName = document.getElementsByClassName('commentor-name')[0];
    var comments = this.getComments();

    switch(true){
      case(commentInput.value === ""):
        alert("'Comment Text' input cannot be blank.");
        break;
      case(commentInputName.value === ""):
        alert("'Your Name' input cannot be blank.");
        break;
      default:
        var newComment = new Comment();
        newComment.comment = commentInput.value;
        newComment.commentInputName = commentInputName.value;
        newComment.commentId = comments.length;
        comments.push(newComment);
        this.setComments(comments);
        console.log("newComment.comment: " + newComment.comment);
        console.log("newComment.commentInputName: " + newComment.commentInputName);
        console.log("newComment.commentId: " + newComment.commentId);
    }
  }

  renderComments() {
    // needs code
    console.log("Add renderComments() code...");
  }

  deleteComment(e) {
    // needs code 
  }

}

class Comment {
  constructor(comment, commentInputName, commentId){
    this.comment = comment;
    this.commentInputName = commentInputName;
    this.commentId = commentId;
  }


}

// eventListeners for buttons
postBtn.addEventListener('click', function(){
  messageBoard.addPost();
  postInput.value = "";
  postUserName.value = "";
  messageBoard.renderPage();

});

// Instantiates variable for new MessageBoard class & call to renderPage() funciton
var messageBoard = new MessageBoard();
messageBoard.renderPage();

