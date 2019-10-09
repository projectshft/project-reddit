var button = document.getElementsByTagName('button')[0];

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
    var HTMLposts = `<p>${posts[i].post}</p>
      <p><strong> Posted by: ${posts[i].author}</strong></p></div>`;



    $('#postsHTML').append(HTMLposts);
  }
};

button.addEventListener('click', function () {

  var userName = document.getElementsByClassName('name')[0].value;

  var userText = document.getElementsByClassName('postText')[0].value;

  // var obj = document.createElement('obj');

  addPost(userName, userText);
  renderPosts();
  obj.appendChild(userInputElement);

  document.getElementsByClassName('names')[0].append(obj);

  console.log(postObject);
});

// var renderCurrentPost = function () {