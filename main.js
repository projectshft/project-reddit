/** A div that will contain all of our posts*/
var $postContainer = $("#post-content");
/** An array of posts objects */
var postData = [
  {
    name: 'Andres',
    post: 'Cool post yall...',
    comments: [
      {
        author: 'Luis',
        content: 'this sucks...'
      },
      {
        author: 'Bob',
        content: 'what she said'
      }
    ]
  },
  {
    name: 'Smith',
    post: 'Cool post yall...',
    comments: []
  },
];

/** 
 * Renders a post object to the user
 * @param { Object } userPost - An object that contains a name, post, and comment properties.
 */
function renderPost(userPost) {

  $postContainer.append(`
    <div class="alert alert-primary">
      <p class="post-content">${userPost.post}</p>
      <div class="post-author-container">
        posted by: <p class="post-author">${userPost.name}</p>
      </div>  
      
      <p onclick="toggleCommentForm()" class="post-comment-btn">comments<p>
      <div class="comment-container"></div>
      
      <form class="comment-form">
          <div class="form-group comment-form-name">
            <input type="text" class="form-control" id="comment-name" placeholder="Your name">
          </div>

          <div class="form-group">
            <textarea class="form-control" placeholder="Enter Comment" id="comment-body" rows="3"></textarea>
          </div>
          <button type="button" onClick="submitComment()" id="comment-submit-btn" class="btn btn-primary">Post Comment</button>
  
        </form>
    </div> 
  `);

}

/** 
 * Function that renders comments to each post 
 * @param { Object } comment - An object that contains the comment author and content
 */
function renderComment(comment) {
  var $commentContainer = $(event.target).closest('.alert').find('.comment-container');

  $commentContainer.append(`
    <p>${comment.content} - posted by: <strong>${comment.author}<strong></p>
  `);
  console.log('user object', comment);
}


/** 
 * Function that finds the user object in the postData array 
 * @param { String } name - The name of the user
 */
function findUserObj(name) {
  var user = postData.find(function (userFound) {
    return userFound.name === name;
  });
  return user;
};



/** Function that handles submitting a comment */
function submitComment() {
  var commentArray = [];
  var commentObj = {};

  var commentAuthor = $(event.target).closest('.alert').find('#comment-name').val();
  var commentContent = $(event.target).closest('.alert').find('#comment-body').val();


  commentObj.author = commentAuthor;
  commentObj.content = commentContent;

  // get the author the comment will be submitted to 
  var postAuthorClicked = $(event.target).closest('.alert').find('.post-author').text();

  // get the user object
  var postUserObj = findUserObj(postAuthorClicked);
  // create a property 'comments' if it does not exist on the user object
  if (!postUserObj['comments']) {
    commentArray.push(commentObj);
    postUserObj.comments = commentArray;
    $(event.target).closest('.alert').find('#comment-name').val("Your name");
    $(event.target).closest('.alert').find('#comment-body').val("Enter comment");
  } else {
    // push the comment in the comments array 
    postUserObj['comments'].push(commentObj);
  };

  renderComment(commentObj);

  // reset form values 
  $(event.target).closest('.alert').find('#comment-name').attr("");
  $(event.target).closest('.alert').find('#comment-body').val(" Your name");

};

/** Handles the comments toggle */
function toggleCommentForm() {
  $(event.target).closest('.alert').find('.comment-form').toggleClass('show');
};


/** Handle submitting form */
function submitForm() {
  var postObj = {};
  var postBody = $('#post-body').val();
  var name = $('#post-name').val();
  postObj.name = name;
  postObj.post = postBody;

  postData.push(postObj);
  // render post to user
  renderPost(postObj);
};
