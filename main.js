const postsDiv = document.querySelector('.posts');

const button = document.getElementById("submit");

// Post Button Event
button.addEventListener('click', function(){
  const name = document.getElementById('yourName').value;
  const text = document.getElementById('message').value;
  
  const newPostDiv = document.createElement('div');
    newPostDiv.className = "postDiv col-md-6 offset-md-2";



  // Creating the Post's Text
  const newPostTextP = document.createElement('p');
  const newPostTextNode = document.createTextNode(text);
    newPostTextP.appendChild(newPostTextNode);


    
  // Creating the User's Name
  const newPostNameP = document.createElement('p');
  const newPostNameNode = document.createTextNode('Posted By: ' + name);
    newPostNameP.appendChild(newPostNameNode);
  


  // Creating the comment and remove section
    const newPostSpan = document.createElement('span');

  const newPostRemove = document.createElement('a');
  const newPostRemoveNode = document.createTextNode('remove');
    newPostRemove.className = "link";
    newPostRemove.appendChild(newPostRemoveNode);
    newPostRemove.style.display = "inline"

  const seperatorElement = document.createElement('p');
  const seperator = document.createTextNode(' | ')
    seperatorElement.appendChild(seperator);
    seperatorElement.style.display = "inline"

    const newPostComments = document.createElement('a');
      const newPostCommentsNode = document.createTextNode('comments');
      newPostComments.className = "new-post-comments link";
      newPostComments.appendChild(newPostCommentsNode);
      newPostComments.style.display = "inline"

    newPostComments.classList.add("post-comments");
    newPostRemove.classList.add("post-remove");

    // Creating the comment section and form

  const makeComment = document.createElement('div');
        makeComment.className = "comments-all"
        makeComment.style.display = "none"
  const commentForm = document.createElement('form')
        commentForm.className = "form"
  const commentText = document.createElement('input')
        commentText.className = "form-control text-muted comment"
        commentText.type = "text"
        commentText.name = "comment"
        commentText.id = "comment"
        commentText.placeholder = "Comment Text"
  const commenterName = document.createElement('input')
        commenterName.className = "form-control text-muted commenter"
        commenterName.type = "text"
        commenterName.id = "commenter"
        commenterName.name = "comment"
        commenterName.placeholder = "Your Name"
  const commentButton = document.createElement('input');
        commentButton.className = "btn btn-primary"
        commentButton.type = "button"
        commentButton.value = "Submit Comment"
     
  const commentSection = document.createElement('div')
        commentSection.className = "comment-section"
      commentSection.appendChild(commentForm)
      commentForm.appendChild(commentText);
      commentForm.appendChild(commenterName);
      commentForm.appendChild(commentButton);
      makeComment.appendChild(commentSection);

      

      // Adding comment button functionality
      commentButton.addEventListener('click', function()
        {
          const parentForm = this.closest('.form')
          const parent = this.closest('.comment-section')
          const name = parentForm.querySelector('.commenter').value;
          const comment = parentForm.querySelector('.comment').value;
          const commentDiv = document.createElement('div');
          commentDiv.className = "comment-div";
          const commentNode = document.createTextNode(comment);
          const space = document.createElement('br');
          const nameNode = document.createTextNode(`Posted By: ${name}`);
          // remove comment
          const commentRemove = document.createElement('a');
          const commentRemoveNode = document.createTextNode('remove');
          commentRemove.className = "comment-remove link";
          const removeSeperator = document.createElement('p');
          const removeSeperatorNode = document.createTextNode(' | ')
          removeSeperator.style.display = "inline"
          removeSeperator.appendChild(removeSeperatorNode);
          commentRemove.appendChild(commentNode);
          commentRemove.style.display = "inline"
          commentRemove.appendChild(commentRemoveNode);
          
          commentDiv.appendChild(commentNode);
          commentDiv.appendChild(space);
          commentDiv.appendChild(nameNode);
          commentDiv.appendChild(removeSeperator);
          commentDiv.appendChild(commentRemove);
          parent.insertBefore(commentDiv, parentForm);
          parentForm.querySelector('.commenter').value = ""
          parentForm.querySelector('.comment').value = ""
          
          commentDiv.addEventListener("click", function (e)
          {
            if (e.target.classList.contains("comment-remove"))
            {
              const commentDiv = e.target.closest('.comment-div');
               commentDiv.style.display = "none";
            }
})
          
        })


    const newPostHR = document.createElement('hr');
    
    newPostDiv.appendChild(newPostTextP);
    newPostDiv.appendChild(newPostNameP);
    newPostDiv.appendChild(newPostSpan);
    newPostSpan.appendChild(newPostRemove);
    newPostSpan.appendChild(seperatorElement);
    newPostSpan.appendChild(newPostComments);
    newPostDiv.appendChild(makeComment);
    newPostDiv.appendChild(newPostHR);
   
    postsDiv.append(newPostDiv);
    document.getElementById('yourName').value = "";
    document.getElementById('message').value = "";
  });

// Remove Post functionality
postsDiv.addEventListener("click", function (e)
{
  if (e.target.classList.contains("post-remove"))
    {
      const postDiv = e.target.closest('.postDiv');
      postDiv.style.display = "none";
    }
})

// Comment toggle functionality
postsDiv.addEventListener("click", function (e)
{
  if (e.target.classList.contains("new-post-comments"))
    {
      const commentSection = this.querySelector('.comments-all');
      if(commentSection.style.display === "none")
      {
      commentSection.style.display = "inline"; 
    
      }
      else{commentSection.style.display = "none"}
    }
})