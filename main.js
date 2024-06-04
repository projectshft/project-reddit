var button = document.getElementsByClassName('btn-submit')[0];

button.addEventListener('click', function () {
  // defined variables to create post
  var parentDiv = document.createElement('div');
  document.body.appendChild(parentDiv);
  parentDiv.classList.add("parent-div");
  var userInputText = document.getElementsByClassName('post')[0].value;
  var userInputName = document.getElementsByClassName('names')[0].value;
  var textLi = document.createElement('li');
  var nameLi = document.createElement('li');
  nameLi.classList.add('name-li');
  var userInputTextElement = document.createTextNode(userInputText);
  var userInputNameElement = document.createTextNode(userInputName);
  var postedBy = document.createElement('string')
  postedBy.classList.add('posted-by');
  postedBy.innerHTML = 'Posted By: ';
  var commentDiv = document.createElement('hr')
  commentDiv.classList.add('comment-div');
  var postDiv = document.createElement('hr')
  postDiv.classList.add('post-div')

  // defined variables to create comment
  var newCommentDiv = document.createElement('div');
  newCommentDiv.classList.add("new-comment-div");
  var commentBox = document.createElement('input');
  commentBox.type = 'text';
  commentBox.classList.add('comment-box');
  commentBox.id = 'comment-box';
  commentBox.name = 'comment-box';
  commentBox.placeholder = 'Comment Text';
  var nameBox = document.createElement('input');
  nameBox.type = 'text';
  nameBox.classList.add('name-box');
  nameBox.id = 'name-box';
  nameBox.name = 'name-box';
  nameBox.placeholder = 'Your Name'
  var submitCommentButton = document.createElement('button');
  submitCommentButton.classList.add('btn-submit-comment');
  submitCommentButton.innerHTML = "Submit Comment";

  // check if fields are all filled
  if (userInputText == '' || userInputName == '') {
    alert('Please fill all required fields');
    return;
  }
  // button to remove post
  var removeButton = document.createElement('button');
  removeButton.classList.add('btn-remove');
  removeButton.innerHTML = "Remove";

  // button to toggle comments
  var commentButton = document.createElement('button');
  commentButton.classList.add('btn-comment');
  commentButton.innerHTML = "Comments";

  // create post
  textLi.appendChild(userInputTextElement);
  nameLi.appendChild(userInputNameElement);
  parentDiv.append(textLi, postedBy, nameLi, removeButton, commentButton, commentBox, nameBox, submitCommentButton, commentDiv, postDiv);

  // clear post input fields
  let output = document.getElementById("output");
   function clearAllInputs(event) {
     var allInputs = document.querySelectorAll("input");
     allInputs.forEach((singleInput) => (singleInput.value = ""));
     output.innerHTML;
   }
  var allInputs = document.querySelectorAll('input');
  allInputs.forEach(singleInput => singleInput.value = '');


   // submit comment
  submitCommentButton.addEventListener('click', function () {
    parentDiv.appendChild(newCommentDiv);
    parentDiv.insertBefore(newCommentDiv, postDiv);
    var userInputComment = document.getElementsByClassName('comment-box')[0].value;
    var commentLi = document.createElement('li');
    var userInputCommentElement = document.createTextNode(userInputComment);
    var userInputCommentName = document.getElementsByClassName('name-box')[1].value;
    var commentNameLi = document.createElement('li');
    commentNameLi.classList.add('comment-name')
    var userInputCommentNameElement = document.createTextNode(userInputCommentName);
    var commentPostedBy = document.createElement('string')
    commentPostedBy.innerHTML = 'Posted By: ';
    commentPostedBy.classList.add('comment-posted-by');
    var removeCommentButton = document.createElement('button');
    removeCommentButton.classList.add('btn-remove-comment');
    removeCommentButton.innerHTML = 'Remove Comment';

    // check if fields are all filled
    var commentInput = commentButton.closest('div').querySelector('input');
    var nameInput = commentButton.closest('div').querySelector('input.name-box');
    if (commentInput.value == '' || nameInput.value == '') {
      alert('Please fill all required fields');
      return;
    }

    commentLi.appendChild(userInputCommentElement);
    commentNameLi.appendChild(userInputCommentNameElement); 
    newCommentDiv.append(commentLi, commentPostedBy, commentNameLi, removeCommentButton);

 // remove comment
  removeCommentButton.addEventListener('click', function () {
    commentLi.removeChild(userInputCommentElement);
    commentNameLi.removeChild(userInputCommentNameElement);
    commentPostedBy.remove();
    removeCommentButton.remove();
  });

    // clear comment input fields
    let output = document.getElementById("output");
    function clearAllInputs(event) {
      var allInputs = document.querySelectorAll("input");
      allInputs.forEach((singleInput) => (singleInput.value = ""));
      output.innerHTML;
  }

 var allInputs = document.querySelectorAll('input');
 allInputs.forEach(singleInput => singleInput.value = '');
}); 

  // remove post
  removeButton.addEventListener('click', function () {
    textLi.removeChild(userInputTextElement);
    nameLi.removeChild(userInputNameElement);
    postedBy.remove();
    removeButton.remove();
    commentButton.remove();
    commentDiv.remove();
    commentBox.remove();
    nameBox.remove();
    submitCommentButton.remove();
    newCommentDiv.remove();
    postDiv.remove();
   });
     // toggle comments
  commentButton.addEventListener('click', function () {
    var comments = newCommentDiv.children;
    for (let i = 0; i < comments.length; i++) {
      const comment = comments[i];
      if (comment.style.visibility === 'hidden') {
        comment.style.visibility = 'visible';
    } else {
        comment.style.visibility = 'hidden';
    }};
    if (commentBox.style.visibility === 'hidden' && nameBox.style.visibility === 'hidden') {
      commentBox.style.visibility = 'visible', nameBox.style.visibility = 'visible';
    } else {
    commentBox.style.visibility = 'hidden', nameBox.style.visibility = 'hidden';
    }; 
    if (submitCommentButton.style.visibility === 'hidden') {
    submitCommentButton.style.visibility = 'visible';
    } else {
     submitCommentButton.style.visibility = 'hidden';
    };
  });
});