// Javascript 

// array variable to contain all posts
var posts = [];

// vars for HTML elements
var pageView = document.getElementsByClassName('post-comment-thread')[0];

var postInput = document.getElementsByClassName('post-text')[0];
var postUserName = document.getElementsByClassName('post-name')[0];
var postBtn = document.getElementsByClassName('post-btn')[0];

// MessageBoard Class
class MessageBoard {
  constructor(currentMessageBoard, posts){
    this.currentMessageBoard = currentMessageBoard;
    this.posts = posts;
  }

  // returns current posts of MessageBoard instance
  getPosts() {
    return this.posts;
  }
  setPosts(posts){
    this.posts = posts;
  }
  getPost(postId){
    var post;
    for(var i = 0; i < this.getPosts().length; i++){
      post = this.getPosts()[i];
      if(post === this.getPosts()[postId]){
         isPost = true;
      }
    }
    return isPost;
  }

  // function to set DOM elements to browser  
  renderPage() {
    // clears html DOM element
    var threadBody = document.getElementsByClassName('thread-body')[0];
    while(threadBody.hasChildNodes()){
      threadBody.removeChild(threadBody.firstChild);
    }
    /* prevents displaying 'undefined' text when page is first loaded and has no posts and then appends the DOM elements via a call to renderPosts() function on the MessageBoard class instance variable */
    if(!this.renderPosts() === undefined){
      threadBody.append(this.renderPosts());
      for(var i = 0; i < this.getPosts().length; i++){
        if(this.getPosts()[i].getComments().length !== 0){
          this.getPosts()[i].renderComments();
        }
      }
    }
  }

  // checks input values for Post submissions and creates/pushes new Post instance to global variable posts[] array
  addPost() {
    switch(true){
      case(postInput.value === ""):
        alert("'Post Text' input cannot be blank.");
        break;
      case(postUserName.value === ""):
        alert("'Your Name' input cannot be blank.");
        break;
      default:
        // creates new Post class instance with and sets values for attributes then pushes instance of Post to posts[] array
        var comments = [];
        var newPost = new Post();
        newPost.post = postInput.value;
        newPost.postUserName = postUserName.value;
        newPost.comments = comments;
        newPost.postId = posts.length;
        posts.push(newPost); 
        this.setPosts(posts);
    }
  }

  /**  
    method to delete post instance in DOM based on target - called in onclick method set in buildPostDOM() method
   */
    deletePost(e) {
      posts.splice(e.target.closest('.post-item').getAttribute('id'), 1);
      this.renderPage();
    }  

  /** 
   * method referenced in renderPage() 
   * appends Post DOM build to html body element using buildPostDOM() method call
   */
    renderPosts() {
      // DOM element for html 'body' tag
      var threadBody = document.getElementsByClassName('thread-body')[0];
      // clears html 'body' element
      while(threadBody.hasChildNodes()){
        threadBody.removeChild(threadBody.firstChild);
      }
      // loop to populate html 'body' element with current state of MessageBoard instance 
      for(var i = 0; i < posts.length; i++){
        var newInputPanel = this.buildPostDOM(this.buildPostCommentDOM(i), i);
        threadBody.append(newInputPanel);
      }
     
      for(var i = 0; i < posts.length; i++){
        if(posts[i].getComments().length !== 0){
          posts[i].renderComments();
        }
      }

    }

  // function to set variables for user input and build DOM elements for Post instance 
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
    // sets classNames for DOM elements for deleting post and showing comments
    pPostActionBar.className = "post-action-bar";
    pDeletePost.className = "delete-post";
    pPostCommentsToggle.className = "post-comments";
    // appends text for 'delete post' and 'show comments'
    pPostCommentsToggle.append(pPostCommentsTextNode);
    pDeletePost.append(pDeletePostTextNode);
    // sets onclick functions to delete post and show comments
    pDeletePost.onclick = function (e) {messageBoard.deletePost(e);};
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
  buildPostCommentDOM(postIndex) {
    // vars for DOM elements for 'comment' input on post - initially hidden in browser display
    var divCommentForm = document.createElement('div');
    var divCommentsFormLabel = document.createTextNode("Comments: ");
    divCommentForm.id = posts[postIndex].postId;
    divCommentForm.class = "comments-form";
    divCommentForm.append(divCommentsFormLabel);

    // var for DOM element to hold/display comments after input and rendered
    var divCommentsThread = document.createElement('div');
    // divCommentsThread.id = posts[postIndex].postId;
    divCommentsThread.className = "comments";

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
    submitCommentBtn.onclick = function(e){messageBoard.submitComment(e)}
    var hr = document.createElement('hr');

    // appendChild nodes on comment form DOM
    divCommentForm.appendChild(divCommentsThread);
    divCommentForm.appendChild(inputCommentText);
    divCommentForm.appendChild(inputCommentorName);
    divCommentForm.appendChild(submitCommentBtn);
    divCommentForm.appendChild(hr);

    return divCommentForm;
  }

  /**
   *  Method to toggle show/hide comments for each Post DOM displayed in browser
   *  called in onclick set in buildPostDOM() method
   */
  toggleShowHideComments(e) {
    // find DOM element class and target id for individual Post instance 
    if(e.target.classList.contains('post-comments')){
      var item = e.target.closest('.post-item').getAttribute('id');
      // toggles show/hide for comments of Post instance in browser
      if(document.getElementsByClassName('comments')[item].classList.contains('show')){
        document.getElementsByClassName('comments')[item].classList.remove('show');
        document.getElementsByClassName('post-comments')[item].innerHTML = "Show Comments";
      } else {
        document.getElementsByClassName('comments')[item].className += ' show';
        document.getElementsByClassName('post-comments')[item].innerHTML = "Hide Comments";
        for(var i = 0; i < this.getPosts().length; i++){
          if(this.getPosts()[i].getComments().length !== 0){
            this.getPosts()[i].renderComments();
          }
        }
      }
    }
  }
  // click event adds comment to Post instance property comments array and displays in browser
  submitComment(e) {
    var item = e.target.closest('.post-item').getAttribute('id');
    var posts = this.getPosts();
    var currentPost = posts[item];
    currentPost.addComment();
    document.getElementsByClassName('comment-text')[item].value = "";
    document.getElementsByClassName('commentor-name')[item].value = "";
    document.getElementsByClassName('comments')[item].className += ' show';
    document.getElementsByClassName('post-comments')[item].innerHTML = "Hide Comments";
    currentPost.renderComments();

  }

}

// Post class
class Post {
  constructor(currentMessageBoard, post, postUserName, comments, postId){
    this.currentMessageBoard = currentMessageBoard;
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

  // 
  addComment() {
    var commentInput = document.getElementsByClassName('comment-text')[this.postId];
    var commentInputName = document.getElementsByClassName('commentor-name')[this.postId];
    var comments = this.getComments();

    switch(true){
      case(commentInput.value === ""):
        alert("'Comment Text' input cannot be blank.");
        break;
      case(commentInputName.value === ""):
        alert("'Your Name' input cannot be blank.");
        break;
      default:

      var newComment = {};
      newComment.comment = commentInput.value;
      newComment.commentInputName = commentInputName.value;
      newComment.commentId = comments.length;
      comments.push(newComment);
      this.setComments(comments);
    }
  }
  // deletes comment 
  deleteComment(e) {
    this.comments.splice(e.target.closest('.comment-panel').getAttribute('id'), 1);
    this.renderComments();
  }

  // populates comment DOM display elements in browser
  populateCommentsDisplay(commentIndex) {
    var thisPost = this;

    var commentPanel = document.createElement('div');
    commentPanel.id = commentIndex;
    commentPanel.className = "comment-panel";

    var removeCommentBtn = document.createElement('button');
    var removeCommentTextNode = document.createTextNode(" X ");
    removeCommentBtn.append(removeCommentTextNode);
    removeCommentBtn.className = "remove-comment-btn";
    removeCommentBtn.onclick = function(e) {thisPost.deleteComment(e)};

    var commentContent = document.createElement('p');
    var commentContentTextNode = document.createTextNode(this.comments[commentIndex].comment);
    commentContent.append(commentContentTextNode);
    commentContent.className = "comment-content";

    var contentDeleteRow = document.createElement('div');
    contentDeleteRow.className = "content-delete-row";
    contentDeleteRow.appendChild(removeCommentBtn);
    contentDeleteRow.appendChild(commentContent);

    var commentPostedBy = document.createElement('p');
    var commentPostedByTextNode = document.createTextNode("Posted By: " + this.
    comments[commentIndex].commentInputName);
    commentPostedBy.append(commentPostedByTextNode);
    commentPostedBy.className = "comment-posted-by";

    commentPanel.appendChild(contentDeleteRow);
    commentPanel.appendChild(commentPostedBy);
    commentPanel.appendChild(document.createElement('hr'));
    return commentPanel;
  }

  // loops through 'this' Posts commments and populates DOM display on browser
  renderComments() {
    var postComments = document.getElementsByClassName("comments")[this.postId];
      while(postComments.hasChildNodes()){
        postComments.removeChild(postComments.firstChild);
      }
      for(var i = 0; i < this.comments.length; i++){
        var newCommentInputPanel = this.populateCommentsDisplay(i)
        postComments.append(newCommentInputPanel);
      }
    }
}

// Coment Class
class Comment {
  constructor(commentId, comment, commentor){
    
    this.commentId = commentId;
    this.comment = comment;
    this.commentor = commentor;
  }

}

// eventListener for postBtn 
postBtn.addEventListener('click', function(){
  messageBoard.addPost();
  postInput.value = "";
  postUserName.value = "";
  messageBoard.renderPage();

});

// Instantiates variable for new MessageBoard class & call to renderPage() funciton
var messageBoard = new MessageBoard();
messageBoard.renderPage();

