document.getElementById('submit').addEventListener('click', function() {
  var name = document.getElementById('name').value;
  var text = document.getElementById('message').value;

  var postsDiv = document.querySelector('.posts');
  
  var newPostDiv = document.createElement('div');
  
  var newPostTextP = document.createElement('p');
  var newPostTextNode = document.createTextNode(text + ' - Posted By: ' + name);
  newPostTextP.appendChild(newPostTextNode);

  var removeButton = document.createElement('button');
  $(removeButton).attr({
    'type': 'button',
    'id': 'remove-button',
    'class': 'btn btn-link inline-block'
  }); 
  removeButton.textContent = '(Delete Post)';

  var commentsButton = document.createElement('button');
  $(commentsButton).attr({
    'type': 'button',
    'id': 'comment-button',
    'class': 'btn btn-link inline-block'
  }); 
  commentsButton.textContent = 'Comments';

  var commentSection = document.createElement('form');
  $(commentSection).attr({
    'id': 'comment-section',
    'style': 'margin-top: 10px;',
    'onsubmit': 'event.preventDefault();'
  });
  //Hides comment section until user clicks the comments button
  $(commentSection).toggle();
  
  var commentDiv = document.createElement('div');
  $(commentDiv).attr('id', 'comment-div');
  commentSection.append(commentDiv);
  
  var commentInput = document.createElement('input');
  $(commentInput).attr({
    'id': 'comment-message',
    'type': 'text',
    'class': 'form-control',
    'style': 'margin-top: 10px',
    'placeholder': 'Comment Text'
  });
  commentDiv.append(commentInput);
  
  var commentName = document.createElement('input');
  $(commentName).attr({
    'id': 'comment-name',
    'type': 'text',
    'class': 'form-control',
    'style': 'margin-top: 5px',
    'placeholder': 'Your Name'
  });
  commentDiv.append(commentName);
  
  var commentSubmit = document.createElement('button');
  $(commentSubmit).attr({
    'id': 'comment-submit',
    'class': 'btn btn-primary btn-sm',
    'style': 'margin: 10px'
  });
  commentSubmit.textContent = 'Submit Comment';
  commentDiv.append(commentSubmit);

  var newPostHR = document.createElement('hr');

  newPostDiv.append(newPostTextP);
  newPostDiv.append(commentSection);

  newPostDiv.append(removeButton);
  newPostDiv.append(commentsButton);

  //Places a small line between the posts for separation and readability
  newPostDiv.append(newPostHR);

  postsDiv.append(newPostDiv);
  
  //Resets the user input fields to the placeholder texts after the user has submitted their post
  $('#myform')[0].reset();
});



$('.posts').on('click', '#remove-button', function(e) {
  var $removeButton = $(e.target);
  $removeButton.parent().remove();
});


$('.posts').on('click', '#comment-button', function(e) {
  var $commentsButton = $(e.target);
  $commentsButton.siblings('form').toggle();
});

$('.posts').on('click', '#comment-submit', function() {
    var commentName = $(this).siblings('#comment-name').val();
    var commentText = $(this).siblings('#comment-message').val();
    
    var newCommentDiv = document.createElement('div');
    $(newCommentDiv).attr('style', 'padding-left: 30px');

    var newCommentTextP = document.createElement('span');
    
    var newCommentTextNode = document.createTextNode(commentText + ' - Posted By: ' + commentName);
    newCommentTextP.appendChild(newCommentTextNode);

    var removeCommentButton = document.createElement('button');
    $(removeCommentButton).attr({
      'type': 'button',
      'id': 'remove-button',
      'class': 'btn btn-link inline-block'
    }); 
    removeCommentButton.textContent = '(Delete Comment)';

    newCommentDiv.append(newCommentTextP);
    newCommentDiv.append(removeCommentButton);
    
    //inserts the user submitted comment above the input fields
    $(this).siblings('#comment-message').before(newCommentDiv);

    //resets the user input fields after the user has submitted their comment.
    $(this).closest('#comment-section')[0].reset();
});


