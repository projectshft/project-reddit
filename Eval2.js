$('#postsHTML').on('click', '.bRemove', function() {
  console.log("You clicked remove")
  removePost();
});


var projectRedditApp= function () {

var button = document.getElementsByTagName('button')[0];
//create empty posts array
var posts = []
var $posts = $('.posts');

var addPost = function (user, text) {
  var postObject = {
    post: text,
    author: user
  }
  posts.push(postObject);
};


var renderPosts = function () {
  $('#postsHTML').empty();

  //for loop to iterate through addposts
  for (let i = 0; i < posts.length; i++) {
    console.log(posts[i]);

    //use string template to create html friendly format for our user input
    var HTMLposts = `<button type="button" class ="bComments">Comments</button>
    <button type="button" class ="bRemove">Remove</button><p>${posts[i].post}</p> 
      <p><strong> Posted by: ${posts[i].author}</strong></p></div>`;


    $('#postsHTML').append(HTMLposts);
  }
};

$('#postsHTML').on('click', '.bRemove', function() {
  console.log("You clicked remove")
  removePost();
});

var removePost= function (currentPost) {
    currentPost.parentNode.parentNode.removeChild(currentPost.parentNode);

};




$('#postsHTML').on('click', '.bComments', function() {
  console.log("You clicked comments")
});


//event listener to grab new post inputs
button.addEventListener('click', function () {

  var userName = document.getElementsByClassName('name')[0].value;

  var userText = document.getElementsByClassName('postText')[0].value;
  
  // if userName = null || userText = null  {
  //   alert("Please enter a valid response!")
  // }
  // else {
  

  addPost(userName, userText);
  renderPosts();
//   // obj.appendChild(userInputElement);

//   document.getElementsByClassName('names')[0].append(obj);

//   console.log(postObject);
// });


//Adding comments- 
//Every post by default has a "remove" button and a "comments" button 
//   and an empty comments array.
//On comments click, display comments and input field identical to posts
//On "post comment" button click, append comment to the array on that post
//Loop through and display comments on current post.
// 



});

};