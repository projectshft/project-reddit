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
  


    var remove = document.createElement('div');
    remove.innerHTML = "Remove";
    var comments = document.createElement('div');
    comments.innerHTML = "Comments";
    var x = document.createElement('div');
    


    // create message div and add html
    var message = document.createElement('div');
    message.innerHTML = userInputMessage;

    //create author div and add html 
    var author = document.createElement('div');
    author.innerHTML = userInputName;

    // create outer div to store inner message and author divs
    var newPost = document.createElement('div');
    newPost.append(remove);
    newPost.append(comments);
    newPost.append(message);
    newPost.append(author);

    //modify newPost class
    newPost.setAttribute("class", "newPost");

    //add new post to html div for posts 
    var posts = $('#posts');
    posts.append(newPost);
    
    // add line break to end of posts div
    var lineBreak = document.createElement('div');
    lineBreak.innerHTML = "<hr>";
    posts.append(lineBreak);

  }); // click event
  

    var posts = $('#posts');
    posts.click(function () { 
      console.log(this);
    });

}); //on load event
    


  


  


