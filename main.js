var posts = [];
var seed = 0;

var addPost = function (){
  //get text from input on view
  var text = document.getElementById('input-box').value;
  // create new post
  var post = {
    text: text,
    votes: 0,
    id: getId()
  };
  // add post to array of posts
  posts.push(post);
  // update view with new post list
  // get reference to DOM element
  var target = document.getElementById('list-target');
  // inject new string HTML into target DOM Element
  target.innerHTML = createListMarkup(posts);
};
//return unique ID
var getId = function () {
  seed++
  return seed
};
var createListMarkup = function(posts){
  var markup = '';
  for(var i = 0; i < posts.length; i++){
    markup += '<p>' + posts[i].text + '</p>';
  }
  return markup;
}
