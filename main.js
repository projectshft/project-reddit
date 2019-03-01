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
    name: 'Mike',
    post: 'Cool post yall...',
    comments: []
  },
  {
    name: 'Jake',
    post: 'Cool post yall...',
    comments: {
      author: 'Luis',
      comment: 'man this post sucks...',
    }
  }
];

/** 
 * Renders a post object to the user
 * @param { Object } userPost - An object that contains a name, post, and comment properties.
 */
function renderPost(userPost) {

  $postContainer.append(`
    <div class="alert alert-primary">
      <p>${userPost.post}</p>  
      <p class="post-author">${userPost.name}</p>
      
      <p onclick="toggleCommentForm()" class="post-comment-btn">comments<p>
      
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




function com(name) {
  var user = postData.find(function (userFound) {
    // console.log(userFound.name === name, name, userFound.name);
    return userFound.name === name;
    // return userFound.name === name;
  });
  return user;
}




function submitComment() {
  var postAuthorClicked = $(event.target).closest('.alert').find('.post-author').text();
  // console.log('and the author is-->', postAuthorClicked, 'end comment')
  var postUserObj = com(postAuthorClicked);
  console.log('found user object', postUserObj);

}


function toggleCommentForm() {
  $(event.target).closest('.alert').find('.comment-form').toggleClass('show');
}


/** Handle submitting form */
function submitForm() {
  var postObj = {};
  var postBody = $('#post-body').val();
  var name = $('#post-name').val();
  postObj.name = name;
  postObj.post = postBody;

  postData.push(postObj);
  // render post to user
  renderPost(postObj)
  // push post object to our arra
};
