// Access posts div
const postsDiv = document.getElementsByClassName('posts')[0];

// Access message div
let postMessage = document.getElementById('message');

// Access name div
let postAuthor = document.getElementById('author');

// Access Submit Post button
let submitPostButton = document.getElementById('submit-post');

// Example Data Structure
// [{author: 'Jack Reacher', message: 'Hey', comments: []},{author: 'Frances Neagley', message: 'What's up?', comments: []}]

let posts = [];

// When the Submit Post button is clicked, create a new div under the posts div.
// Example: Text - Posted By: Name
submitPostButton.addEventListener('click', function () {
  
  let authorName = postAuthor.value;
  let messageContent = postMessage.value;

  let postObj = {
    author: authorName,
    message: messageContent,
    comments: [],
  }

  posts.push(postObj);

  postAuthor.value = "";
  postMessage.value = "";

  renderPosts();

});

const renderPosts = function() {
  
  // Empty the postsDiv
  while (postsDiv.hasChildNodes()) {
    postsDiv.removeChild(postsDiv.firstChild);
  }
  
  // Go through posts Array and render each post (Not the most efficient)
  for (post in posts) {
    let newPost = document.createElement('div');
    let postContent = document.createElement('p');
    postContent.innerHTML = `${posts[post].message} - Posted By: ${posts[post].author}`;
    const divider = document.createElement('hr');

    let comments = posts[post].comments;

    let commentsDiv = document.createElement('div');
    commentsDiv.setAttribute('class', 'comments-form d-none');

    let commentMessage = document.createElement('input');
    commentMessage.setAttribute('placeholder', 'Comment Text');
    commentMessage.setAttribute('id', 'comment-text');

    let commentAuthor = document.createElement('input');
    commentAuthor.setAttribute('placeholder', 'Your Name');

    let commentsButton = document.createElement('button');
    commentsButton.setAttribute('class', "btn btn-primary submit-comment")
    commentsButton.innerHTML = "Submit Comment";

    commentsButton.addEventListener('click', function () {
  
      let authorName = commentAuthor.value;
      let messageContent = commentMessage.value;
    
      let commentObj = {
        author: authorName,
        message: messageContent,
      }
    
      comments.push(commentObj);

      renderComments(comments, commentsDiv);
    
    });

    commentsDiv.appendChild(commentMessage);
    commentsDiv.appendChild(commentAuthor);
    commentsDiv.appendChild(commentsButton);

    let commentsLink = document.createElement('a');
    commentsLink.innerHTML = 'comments';
    commentsLink.addEventListener('click', function() { //This stops working after a comment is added.
      if (commentsDiv.classList.contains('d-none')) {
        commentsDiv.classList.remove('d-none');
      } else {
        commentsDiv.classList.add('d-none');
      }
    })

    //add comments link
    newPost.appendChild(commentsLink);

    //insert new post div
    newPost.appendChild(postContent);
    
    //insert content in the new post div
    postsDiv.appendChild(newPost);

    //add comments div
    postsDiv.appendChild(commentsDiv);

    //insert a horizontal rule to separate posts
    postsDiv.appendChild(divider);
  }

};

const renderComments = function(comments, div) {
  debugger;
  // Empty the comments div
  while (div.hasChildNodes()) {
    div.removeChild(div.firstChild);
  }
  
  for (comment in comments) {
    let commentContent = document.createElement('p');
    commentContent.innerHTML = `${comments[comment].message} - Posted By: ${comments[comment].author}`;

    div.previousElementSibling.appendChild(commentContent);
  }
};