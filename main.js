document.getElementById('submit').addEventListener('click', function(){
 
  var nameInput = document.getElementById('name');
  var textInput = document.getElementById('message');
  var name = nameInput.value;
  var text = textInput.value;

  var postsDiv = document.querySelector('.posts');
  var newPostDiv = document.createElement('div');

  var newPostTextP = document.createElement('p');
  var newPostTextNode = document.createTextNode(text);
  newPostTextP.appendChild(newPostTextNode);

  var newPostNameP = document.createElement('p');
  var newPostNameNode = document.createTextNode('Posted By: ' + name);
  newPostNameP.appendChild(newPostNameNode);
  newPostNameP.style.fontWeight = 'bold';

  var newPostHR = document.createElement('hr');

  var deletePostDiv = document.createElement('div');
  var deletePostButton = document.createElement('span');
  deletePostButton.textContent = 'Remove Post';
  deletePostButton.style.cursor = 'pointer';
  deletePostButton.style.color = 'blue';
  deletePostButton.style.fontWeight = 'bold';

  var commentsButton = document.createElement('span');
  commentsButton.textContent = 'Comments';
  commentsButton.style.cursor = 'pointer';
  commentsButton.style.color = 'blue';
  commentsButton.style.fontWeight = 'bold'

  var form = document.createElement('form');
  var formGroup = document.createElement('div');
  formGroup.classList.add('form-group');
  form.style.marginTop = '20px';

  var commentUserName = document.createElement('input');
    commentUserName.setAttribute('type', 'text');
    commentUserName.setAttribute('id', 'commentId');
    commentUserName.setAttribute('class', 'form-control');
    commentUserName.setAttribute('placeholder', 'Your Name');

    var commentTextArea = document.createElement('textarea');
    commentTextArea.setAttribute('class', 'form-control');
    commentTextArea.setAttribute('id', 'commentTextbox');
    commentTextArea.setAttribute('placeholder', 'Comment Text');

    var submitComment = document.createElement('button');
    submitComment.className = 'submit-comment btn btn-primary';
    submitComment.textContent = 'Submit Comment';


    var createCommentsElement = function (name, text){

    var commentDiv = document.createElement('div')
    var commentTextP = document.createElement('p');
    commentTextP.textContent = text;
    var commentNameP = document.createElement('p');
    commentNameP.textContent = 'Posted By: ' + name;
    commentDiv.appendChild(commentTextP);
    commentDiv.appendChild(commentNameP);

    return commentDiv;
    }

    submitComment.addEventListener('click',function(){
      var commentName = commentUserName.value;
      var commentText = commentTextArea.value;

      var commentsElement = createCommentsElement(commentName, commentText);
      newPostDiv.appendChild(commentsElement)
      commentUserName.value = "";
      commentTextArea.value = "";
    })

    deletePostButton.addEventListener('click', function(){
      newPostDiv.remove();
    });

    nameInput.value = "";
    nameInput.placeholder = "Your Name"
    textInput.value = "";
    textInput.placeholder = "Post Text"

    newPostDiv.append(commentsButton);
    newPostDiv.append(deletePostDiv);

    formGroup.appendChild(commentUserName);
    formGroup.appendChild(commentTextArea);

    form.appendChild(formGroup);
    document.body.appendChild(form);

    deletePostDiv.appendChild(deletePostButton);
newPostDiv.append(deletePostButton);
    newPostDiv.append(form)
    newPostDiv.append(submitComment)
    newPostDiv.append(newPostTextP);
    newPostDiv.append(newPostNameP);
    newPostDiv.append(newPostHR);
    postsDiv.append(newPostDiv);
})