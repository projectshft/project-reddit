// get access to the submit button 
const submitButton = document.getElementById('submit');

//Event Listener that allows submit button to post 
submitButton.addEventListener('click', function () {

  //get values for post message and name
  const postMessage = document.getElementById('message').value;
  const postName = document.getElementById('name').value;

  // this variable creates a break between posts
  const newPostHR = document.createElement('hr');

  //Access to posts spot in HTML
  const postDiv = document.getElementsByClassName('posts')[0];

  //create new div, paragraph, and textnode for when posts are added
  const newPostDiv = document.createElement('div');
  const postElement = document.createElement('p');
  const postNode = document.createTextNode(postMessage + ' - Posted By: ' + postName);

  //Adding text node into new p element
  postElement.appendChild(postNode);

  //add in remove button for posts and event listener
  const removeButton = document.createElement('button');
  removeButton.setAttribute('id', 'remove-button');
  removeButton.setAttribute('type', 'button');
  removeButton.setAttribute('class', 'btn btn-danger btn-sm');
  removeButton.appendChild(document.createTextNode('Remove Post'));
  removeButton.addEventListener('click', function () {
    this.parentElement.remove()
  });

  //comment button
  const commentButton = document.createElement('button');
  commentButton.setAttribute('id', 'comment-button');
  commentButton.setAttribute('type', 'button');
  commentButton.setAttribute('class', 'btn btn-primary btn-sm');
  commentButton.appendChild(document.createTextNode('Comment'));


  //adding new p element, buttons, and break into new div
  newPostDiv.append(postElement);
  newPostDiv.append(removeButton);
  newPostDiv.append(commentButton);
  newPostDiv.append(newPostHR);

  //adding new div into post div
  postDiv.append(newPostDiv);

  //add elements for comment section
  const commentPostDiv = document.createElement('div');
  commentPostDiv.setAttribute('class', 'comments');
  
  // event listener for the comments button
  commentButton.addEventListener('click', function () {
    if (commentPostDiv.firstChild) {
      commentPostDiv.hidden = false;
      return;
    }

    //add comment form section
    const commentForm = document.createElement('form');
    commentForm.setAttribute('style', 'margin-top:30px');
    commentForm.setAttribute('onsubmit', 'event.preventDefault();');

    const commentHeader = document.createElement('h3');
    commentHeader.appendChild(document.createTextNode('Comments'));

    const commentMessageDiv = document.createElement('div');
    commentMessageDiv.setAttribute('class', 'form-group');
  
    const commentMessage = document.createElement('input');
    commentMessage.setAttribute('id', 'comment');
    commentMessage.setAttribute('type', 'text');
    commentMessage.setAttribute('class', 'form-control');
    commentMessage.setAttribute('placeholder', 'Enter Your Comment');

    const commentNameDiv = document.createElement('div');
    commentNameDiv.setAttribute('class', 'form-group');

    const commentName = document.createElement('input');
    commentName.setAttribute('id', 'comment-name');
    commentName.setAttribute('type', 'text');
    commentName.setAttribute('class', 'form-control');
    commentName.setAttribute('placeholder', 'Enter Your Name');

    //add comment submit button
    const commentSubmitButton = document.createElement('button');
    commentSubmitButton.setAttribute('id', 'comment-submit');
    commentSubmitButton.setAttribute('class', 'btn btn-primary btn-sm');
    commentSubmitButton.appendChild(document.createTextNode('Submit Comment'));

    //add event listener for submit comment
    commentSubmitButton.addEventListener('click', function () {
      const commentMessageValue = this.form[0].value;
      const commentNameValue = this.form[1].value;

    //create new div for comments to go after submitted
    const newCommentDiv = document.createElement('div');

    const newCommentP = document.createElement('p');
    const commentTextNode = document.createTextNode(commentMessageValue + '- Comment By: ' + commentNameValue);

    newCommentP.appendChild(commentTextNode);

    const newCommentHR = document.createElement('hr');

    //add remove button for comments
    const removeCommentButton = document.createElement('button');
    removeCommentButton.setAttribute('id', 'remove-comment');
    removeCommentButton.setAttribute('class', "btn btn-danger btn-sm");
    removeCommentButton.setAttribute('type', 'button');
    removeCommentButton.appendChild(document.createTextNode('Remove Comment'));

    //event listener for remove button
    removeCommentButton.addEventListener('click', function () {
      this.parentElement.remove();
    });

    //append comment data to new comment div
    newCommentDiv.append(newCommentP);
    newCommentDiv.append(removeCommentButton);
    newCommentDiv.append(newCommentHR);

    commentPostDiv.insertBefore(newCommentDiv, commentPostDiv.getElementsByTagName('form')[0]);

    //clear comment input sections
    document.querySelectorAll('input').forEach(singleInput => singleInput.value = '');
    });

    //button to hide comments
    const hideCommentButton = document.createElement('button');
    hideCommentButton.setAttribute('id', 'close');
    hideCommentButton.setAttribute('class', 'btn btn-primary btn-sm');
    hideCommentButton.appendChild(document.createTextNode('Hide Comments'));

  //appending all the comments and inputs under the posts section
    commentMessageDiv.append(commentMessage);
    commentNameDiv.append(commentName);

    commentForm.append(commentHeader);
    commentForm.append(commentMessageDiv);
    commentForm.append(commentNameDiv);
    commentForm.append(commentSubmitButton);
    commentForm.append(hideCommentButton);

    commentPostDiv.append(commentForm);
    newPostDiv.append(commentPostDiv);

    //comment hide button
    hideCommentButton.addEventListener('click', function () {
      commentPostDiv.hidden = true;
    });
  });

  //clear input and text area boxes after button press
  document.querySelectorAll('input').forEach(singleInput => singleInput.value = '');
  document.querySelectorAll('textarea').forEach(singleInput => singleInput.value = '')
});
