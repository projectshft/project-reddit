var submitButton = document.getElementById('submit');

submitButton.addEventListener('click', function () {
  //creating variables to hold the input values of the post and the name of the user
  var postText = document.getElementById('message').value;
  var name = document.getElementById('name').value;
  
  //creates a variable for an already exist 'div' element with a class of 'posts'
  var postsDiv = document.getElementsByClassName('posts')[0];

  //creates new element for the posts being made by the users
  var newPostDiv = document.createElement('div');

  //creating the paragraph element and text node that the user inputs will be appended to
  var postElement = document.createElement('p');
  var postNode = document.createTextNode(postText + ' - Posted By: ' + name);
  postElement.appendChild(postNode);

  //creates a break element
  var newPostHR = document.createElement('hr');

  //creates a button that can remove the submitted post
  var removeButtonElement = document.createElement('button');
  removeButtonElement.setAttribute('id', 'remove-post');
  removeButtonElement.setAttribute('class', 'btn btn-primary');
  removeButtonElement.appendChild(document.createTextNode('Remove Post'));
  // event listener of the 'Remove Post' button
  removeButtonElement.addEventListener('click', function () {
    this.parentElement.remove();
  });

  // creates a button that show comments and allow you to make new comments when clicked
  var commentsButtonElement = document.createElement('button');
  commentsButtonElement.setAttribute('id', 'comments-button');
  commentsButtonElement.setAttribute('class', 'btn btn-primary');
  commentsButtonElement.appendChild(document.createTextNode('Comments'));

  //appending all of the post elements and buttons to newPostDiv element. this will allow each new post to have its on div element
  newPostDiv.append(postElement);
  newPostDiv.append(removeButtonElement);
  newPostDiv.append(commentsButtonElement);
  newPostDiv.append(newPostHR);

  //appends 'newPostDiv' element to the parent 'postsDiv'
  postsDiv.append(newPostDiv);

  //creates a div element that will contain comments
  var commentDiv = document.createElement('div');
  commentDiv.setAttribute('class', 'comments');

  // event listener for the comments button that will unhide the forms and comments if they already exist, or it will created the forms if no forms or comments exist and/or this is the first time clicking on the 'comments' button
  commentsButtonElement.addEventListener('click', function () {
    if (commentDiv.firstChild) {
      commentDiv.hidden = false;
      return;
    }
    
    //creating the necessary form, h3, div, input, and button elements for the input of comments
    var commentForm = document.createElement('form');
    commentForm.setAttribute('style', 'margin-top: 30px');
    commentForm.setAttribute('onsubmit', 'event.preventDefault();');
  
    var h3Element = document.createElement('h3');
    h3Element.appendChild(document.createTextNode('Comments'));

    var commentInputDiv = document.createElement('div');
    commentInputDiv.setAttribute('class', 'form-group');
  
    var commentTextArea = document.createElement('input');
    commentTextArea.setAttribute('id', 'comment');
    commentTextArea.setAttribute('type', 'text');
    commentTextArea.setAttribute('class', 'form-control');
    commentTextArea.setAttribute('placeholder', 'Comment');
  
    var commentNameDiv = document.createElement('div');
    commentNameDiv.setAttribute('class', 'form-group');
  
    var commentNameInput = document.createElement('input')
    commentNameInput.setAttribute('id', 'comment-name');
    commentNameInput.setAttribute('type', 'text');
    commentNameInput.setAttribute('class', 'form-control');
    commentNameInput.setAttribute('placeholder', 'Your Name');
  
    var commentButton = document.createElement('button');
    commentButton.setAttribute('id', 'submit');
    commentButton.setAttribute('class', 'btn btn-primary');
    commentButton.appendChild(document.createTextNode('Submit Comment'));
  
    // event listener for the 'Submit Comment' button
    commentButton.addEventListener('click', function () {
      //using 'this' below fixed an issue where submitting comments only took values from the comment form of the first post instead of the comment form of the post being commented on
      var commentText = this.form[0].value;
      var commentName = this.form[1].value;
      
      //just like with posts at the beginning, this creates div, paragraph, hr, and button elements for the input of comments
      var newCommentDiv = document.createElement('div');
  
      var commentElement = document.createElement('p');
      var commentNode = document.createTextNode(commentText + ' - Comment By: ' + commentName);
      commentElement.appendChild(commentNode);
      
      var newPostHR = document.createElement('hr');
  
      var removeCommentButtonElement = document.createElement('button');
      removeCommentButtonElement.setAttribute('id', 'delete-comment');
      removeCommentButtonElement.setAttribute('class', 'btn btn-primary');
      removeCommentButtonElement.appendChild(document.createTextNode('Remove Comment'));
      
      //event listener for the 'remove comment' button
      removeCommentButtonElement.addEventListener('click', function () {
        this.parentElement.remove();
      });
      
      //appending the appropriate comment elements to the 'newCommentDiv' element
      newCommentDiv.append(commentElement);
      newCommentDiv.append(removeCommentButtonElement);
      newCommentDiv.append(newPostHR);
      
      //this appends the newly submitted comments below its corresponding post but above the forms to submit new comments
      commentDiv.insertBefore(newCommentDiv, commentDiv.getElementsByTagName('form')[0]);

      //clears the input values after they're submitted
      document.querySelectorAll('input').forEach(singleInput => singleInput.value = '');

    });
    
    // a button to hid the comments from view so only posts can be seen
    var closeCommentButton = document.createElement('button');
    closeCommentButton.setAttribute('id', 'close');
    closeCommentButton.setAttribute('class', 'btn btn-primary');
    closeCommentButton.appendChild(document.createTextNode('Close Comments'));

    //appending of the div and form elements for making comments to posts possible
    commentInputDiv.append(commentTextArea);
  
    commentNameDiv.append(commentNameInput);
  
    commentForm.append(h3Element);
    commentForm.append(commentInputDiv);
    commentForm.append(commentNameDiv);
    commentForm.append(commentButton);
    commentForm.append(closeCommentButton);
  
    commentDiv.append(commentForm);
  
    newPostDiv.append(commentDiv);
  
  
    closeCommentButton.addEventListener('click', function () {
      commentDiv.hidden = true;
    })
  
  });

  //clears the input values after they are submitted
  document.querySelectorAll('input').forEach(singleInput => singleInput.value = '');
});
