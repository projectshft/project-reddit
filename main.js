// your code here

var postButton = document.getElementById('submit');




postButton.addEventListener('click', function(){

  //grab name and message
  var name = document.getElementById('name').value;
  var message = document.getElementById('message').value;

  //create elements to hold individual post

  var rowDiv = document.createElement('div');
  var postDiv = document.createElement('div');
  var btnGroup = document.createElement('div');
  var btnDiv = document.createElement('div');
  
  var postElement = document.createElement('p');


  rowDiv.classList.add('row');
  btnDiv.classList.add('col-xs-5');
  postDiv.classList.add('col-xs-5');
  btnGroup.classList.add('btn-group');

  // creating text node for post

  var postInput = document.createTextNode(message + ' - Posted by: ' + name);
  
  // put post data into post element
  postElement.appendChild(postInput);

  //put post element into post div
  postDiv.appendChild(postElement);


// creating of delete button and adding to delete div
  var deleteButton = document.createElement('button');
  deleteButton.append('Delete');
  deleteButton.classList.add('btn','btn-primary');

  btnGroup.appendChild(deleteButton);

// creation of comment button and adding to comment div
  var commentButton = document.createElement('button');
  commentButton.append('Comment');
  commentButton.classList.add('btn','btn-secondary','comment');
  
  btnGroup.appendChild(commentButton);



  //add all into row div
  rowDiv.appendChild(postDiv);
  btnDiv.appendChild(btnGroup);
  rowDiv.appendChild(btnDiv);
  
  var hrBreak = document.createElement('hr');
  hrBreak.classList.add('brk');

  //append containerDiv to posts div
  document.getElementsByClassName('posts')[0].append(rowDiv);
  document.getElementsByClassName('posts')[0].appendChild(hrBreak);
  
  //deleting message by clicking delete button
  deleteButton.addEventListener('click', function(){
  var messageDiv = deleteButton.closest('.row');
  var hr = document.getElementsByClassName('brk')[0];
  messageDiv.remove();
  hr.remove();
});

});

//comment button info

//steps for comments
//1 when clicked, give name and message prompt ****NEED IF STATEMENT TO STOP FROM ADDING MORE COMMENT PROMPTS*** if find closest btn group contains child with class comment form, do not add
//2 when submit is entered, message is posted as a comment of orignal messange
// Post button - find closest row then go to first col-xs-4 and then input message in its own div at the bottom of that column

//3 at any point all comments for said message shoudl be able tp be hidden by clicking the comment button.

//step 1 - when clicked, name and message options pop up

var commentButton = document.querySelectorAll('.comment');
document.body.addEventListener('click',function(e){

  if (e.target.classList.contains('comment')){
    var buttonGroup = e.target.closest('.btn-group');
    if (buttonGroup.querySelector('.comment-form')){
      return;
    } else{
    
      //for when the button is clicked
      var formContainer = document.createElement('div');
      formContainer.classList.add('comment-form');

      // Create nameInput div and input
      var nameInputDiv = document.createElement('div');
      nameInputDiv.classList.add('form-group');

      var nameInput = document.createElement('input');
      nameInput.setAttribute('id', 'name');
      nameInput.setAttribute('type', 'text');
      nameInput.setAttribute('placeholder', 'Name');
      nameInput.classList.add('form-control');

      nameInputDiv.appendChild(nameInput);

      // Create message Textarea
      var messageInputDiv = document.createElement('div');
      messageInputDiv.classList.add('form-group');

      var messageInput = document.createElement('textarea');
      messageInput.setAttribute('id', 'message');
      messageInput.setAttribute('type', 'text');
      messageInput.setAttribute('placeholder', 'Message');
      messageInput.classList.add('form-control');

      messageInputDiv.appendChild(messageInput);

      // Create sbmit Button
      var submitButton = document.createElement('button');
      submitButton.setAttribute('id', 'submit');
      submitButton.classList.add('btn', 'btn-primary');
      submitButton.innerText = 'Post';

      // Append everything to the form container
      formContainer.appendChild(nameInputDiv);
      formContainer.appendChild(messageInputDiv);
      formContainer.appendChild(submitButton);

      // Append the formContainer after the clicked button
      e.target.parentElement.appendChild(formContainer);

      
      // submit button - adds comment under message and adds delete button for comment

      submitButton.addEventListener('click', function(){
        var postRow = submitButton.closest('.row');
        var postCol = postRow.getElementsByClassName('col-xs-5')[0];
        var commentRow = document.createElement('div');
        var commentDiv = document.createElement('div');
        var buttonDiv = document.createElement('div')
        var removeButton = document.createElement('button');
        var comment = document.createElement('p');


        commentRow.classList.add('row');
        commentDiv.classList.add('col-xs-6');
        buttonDiv.classList.add('col-xs-4');
        comment.classList.add('text-muted');
        
        removeButton.innerText = "Remove";
        comment.innerText = messageInput.value + ' - Posted by: ' + nameInput.value;


        // remove comment
        removeButton.addEventListener('click', function(){
          commentRow.remove();
        })

        //add divs to post column 
        buttonDiv.appendChild(removeButton);
        commentDiv.appendChild(comment);

        commentRow.appendChild(buttonDiv);
        commentRow.appendChild(commentDiv);


        postCol.appendChild(commentRow);


      })
    };
  };

});