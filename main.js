document.getElementById('submit').addEventListener('click', (event) => {
  event.preventDefault();

  // Get the values of the entries for every post
  let postAuthor = document.getElementsByClassName('p-name')[0].value;
  let postContent = document.getElementsByClassName('post')[0].value;

  // The content that will be displayed in each post, signed by whoever wrote it
  let post = `"${postContent}" Posted by ${postAuthor}`;
  let entry = document.createElement('p');
  entry.setAttribute("id", randomId());
  entry.innerHTML = post;

  // Click to remove posts 
  let removePost = document.createElement('button');
  removePost.textContent = "Remove";
  removePost.addEventListener('click', function() {
    document.getElementById(entry.id).remove();
  });

  // This decides where the post and removal button are going to display, as a child to each post 
  let createPost = document.getElementsByClassName('post-section')[0];
  createPost.appendChild(entry);
  entry.appendChild(removePost);

  // Clear posts
  document.getElementsByClassName('entry-form')[0].reset();
});

// Comments
document.getElementById('comment').addEventListener('click', (event) => {
  event.preventDefault(); 

  // Get data from "Your reply" and "your comment"
  let commentContent = document.getElementsByClassName('comment')[0].value;
  let commentAuthor = document.getElementsByClassName('c-name')[0].value;
  
  // What displays 
  let comment = `${commentAuthor} said "${commentContent}"`;
  let nextComment = document.createElement('p');
  nextComment.setAttribute("id", randomId());
  nextComment.innerHTML = comment;

  // Trigger when "reply to post" is clicked
  let commentArea = document.getElementsByClassName('comment-section')[0];
  commentArea.appendChild(nextComment);

  let removeComment = document.createElement('button');
  removeComment.textContent = "Remove";
  removeComment.addEventListener('click', function() {
    document.getElementById(nextComment.id).remove();
  });

  // Position where the comment and remove button will go
  nextComment.appendChild(removeComment);

  // Clear comments
  document.getElementsByClassName('comment')[0].value = '';
  document.getElementsByClassName('c-name')[0].value = '';
});

function randomId() {
  return Math.floor(Math.random() * 100000000);
}

function removePost(id) {
  document.getElementById(id).remove(); 
}

