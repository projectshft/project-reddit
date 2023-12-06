document.getElementById('submit').addEventListener('click', function () {
  var name = document.getElementById('name').value;
  var text = document.getElementById('message').value;

  var postsDiv = document.querySelector('.posts');

  var newPostDiv = document.createElement('div');

  var newPostTextP = document.createElement('p');
  var newPostTextNode = document.createTextNode(text);
  newPostTextP.appendChild(newPostTextNode);

  var newPostNameP = document.createElement('p');
  var newPostNameNode = document.createTextNode('Posted By: ' + name);
  newPostNameP.appendChild(newPostNameNode);





  var deletePost = document.createElement('div');
  deletePost.textContent = 'Delete ';
  deletePost.addEventListener('click', function() {
  postsDiv.removeChild(newPostDiv);
  });

  var comment = document.createElement('div');
  comment.textContent = 'Comment';
  comment.addEventListener('click', function() {
    
  var commentInput = document.createElement('input');
  commentInput.placeholder = 'Your Name';

  var submitInput = document.createElement('input');
  submitInput.placeholder = 'Comment Text';

  var submitButton = document.createElement('button');
  submitButton.textContent = 'Submit Comment ';
  submitButton.addEventListener('click', function() {
  var commentInfo = document.createElement('p')
  commentInfo.textContent = '  ' + submitInput.value + 'Posted by: ' + commentInput.value;
  newPostDiv.appendChild(commentInfo);
  });

  newPostDiv.appendChild(commentInput);
  newPostDiv.appendChild(submitInput);
  newPostDiv.appendChild(submitButton);
    
  });

  newPostDiv.append(newPostTextP);
  newPostDiv.append(newPostNameP);
   newPostDiv.append(deletePost);
  newPostDiv.append(comment);
  postsDiv.append(newPostDiv);
});
