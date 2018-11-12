// 1. Trying to add a variable that calls for comment and name.
var posts = [];
var comments = [[]];

//create a createPost function that creates a post object when clicking post button
//push that post into post array
function Post(name, message) {
  this.name = name;
  this.message = message;
}

function Comment(name, comment){
  this.name = name;
  this.comment = comment;
}

var removePost = function(index){
  posts.splice(index, 1);
  DisplayPosts(posts);
}

var createPost = function(name, message) {
    //grab the username input and message input values and set them to keys on a object's properties
    var post = new Post(name, message);
    posts.push(post);
    DisplayPosts(posts);
};

function DisplayPosts(posts) {+
  $(".forum").empty();
  for (var i = 0; i < posts.length; i++) {
      $('.forum').append('<div><a class="mr-2" onclick="removePost(' + i + ')">Remove</a> <a class="mr-2" onclick="toggleComments(' + i + ')">Comments</a>' + ' '+ posts[i].message + '</div>');
      $('.forum').append('<div>' + 'Posted By:' + ' ' + "<strong>" + posts[i].name + "</strong>" + '</div>');
      $('.forum').append('<div id="comments' + i + '">Comments</div>');

      DisplayComments(i);
      $('.forum').append('<div>&nbsp;</div>');
   }
 }

function DisplayComments(index) {
  var element = "comments" + index;
  /*if(comments){
    for(var i = 0; i < comments[index].length; i++){
        $('#' + element).append('<div id="comments' + i + '">" + comments[index][i].commment"</div>');
        $('#' + element).append('<div>&nbsp;</div>');
    }
  }*/

  $('#' + element).append('<div><input id="comment" placeholder="Comment Text"/><input id="name" placeholder="User Name"/><button onclick="CreateComment(" + index + ", comment.val(), name.val())" class="btn btn-primary">Post Comment</button></div>');

}

function toggleComments(index){
  var element = "#comments" + index;
  $(element).toggle();
}

function CreateComment(postIndex, name, comment){
  var comment = new Comment(name, cmt);
  comments.push([index, cmt]);
}

function RemoveCommment(postIndex, commentIndex){

}

$( document ).ready(function() {
    $('button').on('click', function() {
      var name = $('#name').val();
      var message = $('#message').val();
      createPost(name, message);
    });
});
