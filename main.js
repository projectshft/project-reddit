// Needs to have:
// title "ReReddit"
// posts formatted: post content - Posted By: Postername
// needs to display as list items with break line 
// need form input lines for post text and name
// need sumbit post button that pushes content to list

// let button = document.getElementById('submit')

// button.addEventListener('click', function(){
//   // retreive values of name and message inputs
//   let nameInput = document.getElementById('name').value;
//   let postInput = document.getElementById('message').value;

//   // create new <p> inside <div class='posts'>
//   let postDiv = document.querySelector('.posts');
//   let element = document.createElement('p');

//   // create text nodes for name and message
//   // create new <hr> for seperating posts
//   let elementText = document.createTextNode(`${postInput}`) 
//   let elementText2 = document.createTextNode(` Posted By: ${nameInput}`)
//   let newPostHR = document.createElement('hr');

//   // create text node for comments
//   // does this need to happen in here? 
//   let commentText = document.createTextNode('Comment ');

//   // append all new elements and nodes
//   // oder matters ... why?
//   postDiv.append(element);
//   element.appendChild(commentText);
//   element.appendChild(elementText);
//   element.appendChild(elementText2);
//   element.appendChild(newPostHR);

//   // add class to commentText text node, does this order matter?
//   commentText.className += 'comment-text';
  
// });

// trying to connect listener to "comment" text node
// how do I turn comment into a link/button using this js method above?
// how to add class name/id to "comment" text node created above so I can reference it

// do I need to make a hyperlink in order to add an eventlisterner?
// and if so how can I make "comment" into a hyperlink while inside the event listener?


// let viewCommentForm = document.getElementsByClassName('comment-form')[0];
// let commentText = document.getElementsByClassName('comment-text')[0];

// commentText.addEventListener('click', function () {
//   if(viewCommentForm.className.indexOf('show') === -1) {
//     viewCommentForm.className = 'comment-form';
//   } else {
//     viewCommentForm.className += ' show'
//   }
// });


// post function with vaiable as posts
// and variables with comments (array)
// another function to add comment to post
// then push comment to post 
// seperate function to take data from comment function to 
// create list of posts
// good practice: do functions that are specific

// -------------------------------------------

const post = () => {
  let button = document.getElementById('submit');
  let postIdCounter = 1;

  button.addEventListener('click', () => {
    let nameInput = document.getElementById('name').value;
    let postInput = document.getElementById('message').value;

    let postDiv = document.querySelector('.posts');
    let element = document.createElement('p');
    let element2 = document.createElement('p');
    
    let elementText = document.createTextNode(postInput);
    let elementText2 = document.createTextNode(' Posted By: ' + nameInput);
    let newPostHR = document.createElement('hr');

    let commentLink = document.createTextNode('Comment ');

    element.setAttribute('id', postIdCounter);
    postIdCounter++;

    element2.setAttribute('id', 'comment-link');

    postDiv.append(element2);
    element2.appendChild(commentLink);
    postDiv.append(element);
    element.appendChild(elementText);
    element.appendChild(elementText2);
    element.appendChild(newPostHR);
  
  });
}

post();

const comment = () => {
  let button2 = document.getElementById('submit2');

  button2.addEventListener('click', () => {
    let nameInput2 = document.getElementById('name2').value;
    let postInput2 = document.getElementById('message2').value;

    let commentDiv = document.querySelector('p');
    let element2 = document.createElement('div');

    let commentText = document.createTextNode(postInput2);
    let commentName = document.createTextNode(' Posted by: ' + nameInput2);
    let newCommentHR = document.createElement('hr');

    commentDiv.append(element2);
    element2.appendChild(commentText);
    element2.appendChild(commentName);
    element2.appendChild(newCommentHR);

  })
};

comment();

const commentToggle = () => {
  let getCommentLink = document.getElementById('comment-link');
  let getCommentForm = document.getElementById('comment-form');

  console.log(getCommentLink)
  
  getCommentLink.addEventListener('click', () => {
    if (getCommentForm.className.indexOf('show') === -1) {
      getCommentForm.className += ' show';
    } else {
      getCommentForm.className = 'comment-form';
    };
  })
};

commentToggle();

// issue is that I am trying to getCommentForm before it is created. 