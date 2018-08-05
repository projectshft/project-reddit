var posts = [];
var seed = 0;

var addPost = function (){
  //get text from input on view
  var text = $('#input-box').val();
  var name = $('#input-box1').val();
  // create new post
  var post = {
    text: text,
    name: name,
    // id: getId()
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
// var getId = function () {
//   seed++
//   return seed
// };
var createListMarkup = function(posts){
  var markup = '';
  var namePrepend = "Posted By:";
  for(var i = 0; i < posts.length; i++){
    markup += '<p>' + '<a href="#">Remove</a>' + ' ' + '<a href="#">Comment</a>' + ' ' + posts[i].text + '</p>' + '<p>' + namePrepend + ' ' + posts[i].name + '</p>';
  }
  return markup;
}
