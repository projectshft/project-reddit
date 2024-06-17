document.getElementById('submit').addEventListener('click', (event) => {
  event.preventDefault();

  //get the values of the entries for every post
  let postAuthor = document.getElementsByClassName('p-name')[0].value;
  let postContent = document.getElementsByClassName('post')[0].value;

  //The content that will be display in each post, signed by whoever wrote it
  let post = `"${postContent}" Posted by ${postAuthor}`;
  let entry = document.createElement('p');
  entry.setAttribute("id", randomId());
  entry.innerHTML = post;

  //Click to remove posts 
  let removePostButton = document.createElement('button');
  removePostButton.textContent = "Remove";
  removePostButton.addEventListener('click', function() {
    removePost(entry.id)
  });
  
//This decides where the post and removal button is going to display, as a child to each post 
  let createPost = document.getElementsByClassName('post-section')[0];
  createPost.appendChild(entry);
  entry.appendChild(removePostButton);

  //clear posts
  document.getElementsByClassName('entry-form')[0].value = '';
  

});


//comments


document.getElementById('comment').addEventListener('click', (event) => {
  event.preventDefault(); 
  
  //get data from "Your reply" and "your comment"
  let commentContent = document.getElementsByClassName('comment')[0].value;
  let commentAuthor = document.getElementsByClassName('c-name')[0].value;
  
  //What displays 
  let comment = `${commentAuthor} said "${commentContent}"`;
  let nextComment = document.createElement('p')
  nextComment.setAttribute("id", randomId());
  nextComment.innerHTML = comment;

  //trigger when "reply to post" is clicked
  let createComment = document.getElementsByClassName('post-section')[0].appendChild(nextComment)
  nextComment.innerHTML = comment; 


  let removeComment = document.createElement('button');
  removeComment.textContent = "Remove";
  removeComment.addEventListener('click', function() {
    document.getElementById(nextComment.remove());
  });
  //Position where the comment and remove botton will go
  let commentArea = document.getElementsByClassName('comment-section')[0];
  commentArea.appendChild(nextComment);
  nextComment.appendChild(removeComment);


  document.getElementsByClassName('entry-form')[0].value = '';
  

});

function randomId () {
 var id = Math.floor(Math.random()*100000000) 
 return id
};

function removePost (id) {
  document.getElementById(id).remove(); 

}

//Test for github
