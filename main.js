const posts = [];
// structure to compile post and method that pushes information to posts array. Info is later displayed by displayPosts
const compilePost = function (message, name) {
  let index = posts.length;
  let post = {
    message: message,
    name: name,
    index: index
  }
  posts.push(post);
};

// actual display of posts
const postDiv = document.querySelector('.posts');
const displayPosts = function () {
  posts.forEach(function(eachPost) {
    let index = eachPost.index;
    let displayBoolean = eachPost.displayComments;
    let createPost = '<button class="btn btn-primary remove-post-button">' + 'Remove' + '</button>' + '<b class="post-index">' + index + '</b>' + '<button class="btn btn-primary comment-button">' + 'Comment' + '</button>' + '<b class="display-comments">' + displayBoolean + '</b>' + eachPost.message + ' Posted by: ' + eachPost.name + '<div class="post-comments-div">' + createComments() +'</div>' + '<hr>';
    let element = document.createElement('div');
    postDiv.appendChild(element);
    element.className = 'each-post';
    element.innerHTML = createPost;
  })
};
// create comment HTML
const createComments = function() {
  let commentBoxHTML = '<form class="comment-form" style="margin-top:30px" onsubmit="event.preventDefault();">' +
  '<div>' +
    '<input id="comment" type="text" class="comment-input" placeholder="Comment Text"></input>' +
  '</div>' +
  '<div>' +
    '<input id="comment-name" type="text" class="comment-name-input" placeholder="Name"></input>'+
  '</div>' +
  '<button id="sumbit-comment" class="btn btn-primary">Submit Comment</button>' +
  '</form>';
  return commentBoxHTML;
} 
// triggering post on submitPosts button by calling compilePost and displayPost
const submitPostButton = document.getElementById('sumbit-post');
submitPostButton.addEventListener('click', function() {
  let nameInput = document.getElementById('name').value;
  let messageInput = document.getElementById('message').value;
  let postIndex = document.getElementById('post-index');
  compilePost(messageInput, nameInput, postIndex);
  postDiv.innerHTML = '';
  displayPosts();
  console.log(posts);
});
// removebutton event listener, also updateds post index
document.querySelector('.posts').addEventListener('click', function(e){
  if(e.target.closest('.remove-post-button')){
    let thisPostIndex = e.target.nextElementSibling.innerHTML;
    posts.splice(thisPostIndex, 1);
    for (let i = 0; i < posts.length; i++){
      posts[i].index = i 
      }
    }
  postDiv.innerHTML = '';
  displayPosts();
  }
);