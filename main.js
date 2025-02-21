
document.getElementById('submit').addEventListener('click', function () {
  var name = document.getElementById('name').value;
  var text = document.getElementById('message').value;

  var postsDiv = document.querySelector('.posts');

  /*creating a new post */
  var newPostDiv = document.createElement('div');

  var newPostTextP = document.createElement('p');
  var newPostTextNode = document.createTextNode(text);
  newPostTextP.appendChild(newPostTextNode);

  var newPostNameP = document.createElement('p');
  var newPostNameNode = document.createTextNode('Posted By: ' + name);
  newPostNameP.appendChild(newPostNameNode);

  var newPostHR = document.createElement('hr');
  
  /* Remove post Button */
  var removeLink = document.createElement('a');
  removeLink.href = "#";
  removeLink.textContent = "Remove";
  removeLink.className = "remove-link";

  removeLink.addEventListener('click', function(){
    newPostDiv.remove();
  });

  /* Comment Button */
  var commentLink = document.createElement('a');
  commentLink.href = "#";
  commentLink.textContent = "Comment";
  commentLink.className = "comment-link";

  commentLink.addEventListener('click', function () {

    /*Find the comment input*/
    var commentInputContainer = newPostDiv.querySelector('.comment-input-container');
  
    if (!commentInputContainer) {
      
      commentInputContainer = document.createElement('div');
      commentInputContainer.className = 'form-group comment-input-container';
  
      var commentInput = document.createElement('textarea');
      commentInput.className = 'form-control comment-input';
      commentInput.placeholder = 'Comment Here';
      commentInput.style.marginBottom = '15px'

      var commentName = document.createElement('input');
      commentName.className = 'form-control comment-name';
      commentName.placeholder = 'Name';
      commentName.style.marginBottom = '15px'


      var submitComment = document.createElement('button');
      submitComment.className = 'btn btn-primary';
      submitComment.textContent = 'Submit Comment';

      submitComment.addEventListener('click', function () {
        var commentText = commentInput.value;
        var commentNameText = commentName.value;
        var newCommentP = document.createElement('p');
        newCommentP.textContent = commentNameText + ": " + commentText;

        /* Remove Comment Button */
        var removeCommentLink = document.createElement('a');
        removeCommentLink.href = "#";
        removeCommentLink.textContent = " x ";
        removeCommentLink.className = "remove-link";

        removeCommentLink.addEventListener('click', function () {
          newCommentP.remove();
        });
        
        newCommentP.appendChild(removeCommentLink);
        newPostDiv.appendChild(newCommentP);
        commentInputContainer.classList.remove('visible');
      });

      commentInputContainer.appendChild(commentInput);
      commentInputContainer.appendChild(commentName);
      commentInputContainer.appendChild(submitComment);

      newPostDiv.appendChild(commentInputContainer);
    } else {
      if (commentInputContainer.classList.contains('visible')) {
        commentInputContainer.classList.remove('visible');
      } else {
        commentInputContainer.classList.add('visible');
      }
    }
  });

  newPostDiv.appendChild(removeLink);
  newPostDiv.appendChild(commentLink);
  newPostDiv.appendChild(newPostTextP);
  newPostDiv.appendChild(newPostNameP);
  newPostDiv.appendChild(newPostHR);

  postsDiv.appendChild(newPostDiv);
});
