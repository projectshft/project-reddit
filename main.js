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
  // $("#delete-comment").click(function(){
  //
  // })

//Adding html elements when hypertext link is clicked

  $(".add-comment").click(function(){
    $(".comment-row").append( '<div>' + '<input type="text" class="form-control1" id="input-box2" placeholder="Comment" aria-label="Recipient"></input>'
    + '<input type="text" class="form-control1" id="input-box3" placeholder="User Name" aria-label="Recipient"></input>'
    + '<button onclick="createComment()" id="com-button" type="button" class="btn btn-primary btn-small">Post</button>' + '</div>');




  })

};
var comments = [];
var createComment = function () {

  var userInput = $("#input-box2").val();
  var userId = $("#input-box3").val();

    var comment = {
      input: userInput,
      id: userId
  }
debugger;

  comments.push(comment);
  console.log(comments);
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
    markup += '<div class="comment-row">' + '<p>' + '<a href="#" id="delete-comment">Remove</a>' + ' ' + '<a href="#" class="add-comment">Comment</a>' + ' ' + posts[i].text + '</p>' + '<p>' + namePrepend + ' ' + posts[i].name + '</p>' + '</div>';
  }
  return markup;
}
