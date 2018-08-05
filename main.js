// // plain javascript

// var button = document.getElementsByTagName('button')[0];

// button.addEventListener('click', function () { 
//   console.log('button clicked');

//   // get name
//   var userInputName = document.getElementById('name').value;
//   console.log('name: ', userInputName);

//   // get message
//   var userInputMessage = document.getElementById('message').value;
//   console.log('msg: ', userInputMessage);

//   // add name and message to page
//   var userInput = document.createTextNode(userInputName + ' - ' + userInputMessage);

//   var newPost = document.createElement('li');
//   newPost.appendChild(userInput);

//   var posts = document.getElementsByClassName('posts')[0];
//   posts.append(newPost);
// });

// jQuery 

$(document).ready(function() {
  console.log('document loaded');

  var Button = $('#button');
  console.log(Button);

  Button.click(function () { 
    console.log('button is clicked');

    // get value of name-add "Posted by;"
    var userInputName = $('#name').val();
    console.log(userInputName);
    userInputName = "Posted By: " + userInputName;

    //get message input
    var userInputMessage = $('#message').val();
    console.log(userInputMessage);
    userInputMessage = "Post: " + userInputMessage;

    // create message div and add html
    var message = document.createElement('div');
    message.innerHTML = userInputMessage;

    //create author div and add html 
    var author = document.createElement('div');
    author.innerHTML = userInputName;

    // create outer div to store inner message and author divs
    var newPost = document.createElement('div');
    newPost.append(message);
    newPost.append(author);

    //modify newPost class
    newPost.setAttribute("class", "newPost");
  
    //add new post to html div for posts 
    var posts = document.getElementsByClassName('posts')[0];
    posts.append(newPost);
    
    // add line break to end of posts div
    var lineBreak = document.createElement('div');
    lineBreak.innerHTML = "<hr>";
    posts.append(lineBreak);

    });




});





