let elementAttributes = {
  deleteButton: {
    tag: "a",
  }
}

document.getElementById('submitPost').addEventListener('click', function () {
  // GETTING POST INPUT VALUES
  var name = document.getElementById('name').value;
  var post = document.getElementById('post').value;

  // DIV WHERE POSTS ARE HELD
  var postsDiv = document.querySelector('.posts');

  // DIV WHERE EACH NEW POST IS CREATED
  var newPostDiv = document.createElement('div');
  newPostDiv.className = 'newPost';
  var newPostId = Math.floor(Math.random() * 1000);
  // var newPostNameP = document.createElement('p');

  newPostDiv.innerHTML = `<div id="${newPostId}"> <a onclick="deletePost(${newPostId})">remove</a> <a onclick="toggleComments(${newPostId})">comment</a> ${post} -  Posted By: ${name}</div>`;

  var newPostHR = document.createElement('hr');

  let commentsDiv = document.createElement('div');
  commentsDiv.className = 'comments';
  commentsDiv.id = `comments${newPostId}`;
  commentsDiv.hidden = true;

  let postedCommentsDiv = document.createElement('div');
  postedCommentsDiv.className = 'postedComments'


  // CREATING COMMENTS INPUT
  let commentsInputDiv = document.createElement('div');
  commentsInputDiv.className = 'commentsInput';
  commentsInputDiv.id = `commentInput${newPostId}`;
  commentsInputDiv.innerHTML = `<form style="margin-top:30px;" onsubmit="event.preventDefault();">
  <div class="form-group">
    <input id="commentText" type="text" class="form-control" placeholder="Comment Text"></input>
  </div>

  <div class="form-group">
    <input id="commentName" type="text" class="form-control" placeholder="Your Name"></input>
  </div>

  <button id="submitComment" class="btn btn-primary" onclick="addComment(${newPostId})">Submit Comment</button>
  </form>`;

  commentsDiv.appendChild(postedCommentsDiv);
  commentsDiv.appendChild(commentsInputDiv);

  postsDiv.append(newPostDiv);
  newPostDiv.append(commentsDiv);
  newPostDiv.append(newPostHR);

});


// FUNCTIONS

let deletePost = (postId) => {
  console.log('deleted')
  console.log(postId)

  document.getElementById(postId).closest('.newPost').remove()

};

let addComment = (postId) => {
  console.log('add comment worked')

  let newCommentId = Math.floor(Math.random() * 1000);
  let commentText = document.getElementById(`commentInput${postId}`).querySelector('#commentText').value;
  let commentName = document.getElementById(`commentInput${postId}`).querySelector('#commentName').value;


  let postedCommentsDiv = document.getElementById(postId).closest('.newPost').querySelector('.postedComments');
  let newCommentDiv = document.createElement('div');

  newCommentDiv.innerHTML = `<div id="${newCommentId}"> <a onclick="deleteComment(${newCommentId})">remove</a> ${commentText} -  Posted By: ${commentName}</div>`;

  postedCommentsDiv.append(newCommentDiv);
};

let deleteComment = (commentId) => {
  console.log('deleted comment')

  document.getElementById(commentId).remove()

};

let toggleComments = (postId) => {

  let comments = document.getElementById(`comments${postId}`);
  comments.toggleAttribute('hidden');
};