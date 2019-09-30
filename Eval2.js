var button = document.getElementsByTagName('button')[0];

var posts =[];


button.addEventListener('click', function () {
 
  var userInput = document.getElementsByClassName('name')[0].value;

  var userText = document.getElementsByClassName('postText')[0].value;

  var obj = document.createElement('obj');

 
   var postObject = {
    post: userText,
    author: userInput,
  }
  
  posts.push(postObject);
 console.log(posts);
 
  obj.appendChild(userInputElement);
  
  document.getElementsByClassName('names')[0].append(obj);

  console.log(postObject);
});