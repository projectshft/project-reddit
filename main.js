const submitButton = document.querySelector('.submit-btn');

submitButton.addEventListener('click', function(){
  const pageHr = document.createElement('hr')
  const name = document.querySelector('.input-name').value;
  const post = document.querySelector('.input-post').value;
  const postSection = document.querySelector('.post-section');
  const form = document.querySelector('form');

  // Creating post div
  let newPost = document.createElement('div');
  newPost.style.textAlign = 'center';
  newPost.style.marginBottom = '10px';
  
  // Creating post text
  const newPostText = document.createElement('p');
  const newPostContent = document.createTextNode(post);
  newPostText.appendChild(newPostContent);
  
  // Creating name text
  const newName = document.createElement('p');
  const newNameText = document.createTextNode('By: ' + name);
  newName.appendChild(newNameText);
  
  // Creating button div
  let newButton = document.createElement('div');
  newButton.style.textAlign = 'center';
  newButton.style.marginBottom = '10px';

  // Creating remove button
  let rmButton = document.createElement('button');
  rmButton.style.marginBottom = "20px";
  rmButton.style.textAlign = "center";
  rmButton.style.fontSize = "10px";
  rmButton.appendChild(document.createTextNode("Remove"));
  rmButton.addEventListener('click', function() {
    postSection.removeChild(newPost);
    postSection.removeChild(pageHr);
  });

  // Creating Comment button
  let commentButton = document.createElement('button');
  commentButton.style.fontSize = '10px';
  commentButton.appendChild(document.createTextNode('Comment'));
  commentButton.addEventListener('click', function() {
    // Open the comment form below the post
    createCommentForm(newPost);
  });

  newButton.appendChild(rmButton);
  newButton.appendChild(commentButton);

  // Creating a section for comments
  let commentSection = document.createElement('div');
  commentSection.className = 'comment-section';
  commentSection.style.textAlign = 'center';
  commentSection.style.marginTop = '10px';

  
  if(name === '' || post === ''){
    alert('Please fill out all fields.')
    form.reset();
  } else {  
    newPost.append(newPostText, newNameText, newButton, commentSection, pageHr);
    postSection.appendChild(newPost);
    form.reset();
  }
});

function createCommentForm(parentPost) {
  // Create the comment form
  const commentForm = document.createElement('form');
  const commentInput = document.createElement('textarea');
  commentInput.setAttribute('placeholder', 'Enter your comment...');
  const commentSubmitButton = document.createElement('button');
  commentSubmitButton.appendChild(document.createTextNode('Submit Comment'));

  commentSubmitButton.addEventListener('click', function(event) {
    event.preventDefault();
    const commentText = commentInput.value;
    if (commentText.trim() !== '') {
      
      const comment = document.createElement('div');
      comment.className = 'comment';
      comment.appendChild(document.createTextNode('Comment: ' + commentText));

      // Create Remove Comment button
      let deleteCommentButton = document.createElement('button');
      deleteCommentButton.style.fontSize = '10px';
      deleteCommentButton.style.marginLeft = '20px'
      deleteCommentButton.appendChild(document.createTextNode('Remove Comment'));
      deleteCommentButton.addEventListener('click', function() {
        removeComment(parentPost, comment);
      });

      comment.appendChild(deleteCommentButton);
      parentPost.querySelector('.comment-section').appendChild(comment);
      commentInput.value = '';
      commentForm.style.display = 'none';
    }
  });

  commentForm.appendChild(commentInput);
  commentForm.appendChild(commentSubmitButton);

  // Add comments section
  if (!parentPost.querySelector('.comment-section')) {
    let commentSection = document.createElement('div');
    commentSection.className = 'comment-section';
    parentPost.appendChild(commentSection);
  }

  parentPost.querySelector('.comment-section').appendChild(commentForm);
}

// Remove the comment from the comment section
function removeComment(parentPost, comment) {
  parentPost.querySelector('.comment-section').removeChild(comment);
}
