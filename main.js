

//create post model
var PostModel = function(id, userPost, userName){
  var attributes = {
    id: id,
    userPost: userPost,
    userName: userName
  }
  return{
    attributes: attributes
  }
};

//store post models in array
let posts = [];

//reusable functions
let generateId = function(){
  return uniqueId = Date.now() + Math.random();
}

let updatePostView = function(postsArray){
  // first empty the div
  $('.posts-list').empty();
  //iterate through array and render each post 
  postsArray.forEach(function(post){
    let source = $('#post-template').html();
    let template = Handlebars.compile(source);
    let newHTML = template(post);
    this.$('.posts-list').append(newHTML);
  })
}

let removePost = function(post){
//find index of post that was clicked and use index to determine which post to delete from array
let index = posts.findIndex(function(item){
return item.attributes.id == post.getAttribute('data-key');
})
posts.splice(index, 1);
//re-render posts div with newly modified posts array as source
updatePostView(posts);
}

let toggleComments = function(clickedPost){
  let $clickedPost = $(clickedPost).closest('.list-group-item');
  let comments = $clickedPost.find('.comments-section').toggle();
}

//event listeners
$('.post-button').click(function(){
  let id = generateId();
  var $userPost = $('.user-post-text').val();
  var $userName = $('.user-post-name').val();
  var newPost = PostModel(id, $userPost, $userName);
  //store new post in post array
  posts.push(newPost);
  //update view in response to model change
  updatePostView(posts);
})

$('.posts-list').on('click', '.remove-button', function(e){
  let $postToDelete = e.target.parentElement;
  removePost($postToDelete);
});

$('.posts-list').on('click', '.comments-button', function(){
  toggleComments(this);
})

//post click function, adds hidden comment area that can be toggled with comment button and is later appended with post comments function
// $('.post-button').click(function() {
//   var $postText = $('#user-post-text').val();
//   var $userName = $('#user-post-name').val();
//   $('.posts-list').append('<li class = "list-group-item">' +
//     '<button type="button" class="btn btn-primary btn-sm remove-button"> remove</button>' +
//     '<button type="button" class="btn btn-primary btn-sm comment-button"> comments</button>' +
//     $postText + '<br>' + "Posted By: " +
//     '<b>' + $userName + '</b>' +
//     '<div class = "collapse comments-display card card-body">' +
//     '<ul class="comments">' + '</ul>' +
//     '<input type="text" class ="comment-text" placeholder="Comment Text"> <input type="text" placeholder="User Name" class="comment-user">' +
//     '<button type="button" class="btn btn-primary btn-sm post-comment-button"> Post Comment</button>' +
//     '</div>' + '</li>');
// });



//event listeners - remove post, comment toggle, post comment
// $('.posts-list').on('click', '.remove-button', function() {
//   var $postToDelete = $(this).closest('.list-group-item');
//   $postToDelete.remove();
// });

// $('.posts-list').on('click', '.comment-button', function() {
//   var $commentsToToggle = $(this).siblings('.comments-display');
//   $commentsToToggle.toggle();
// });

// $('.posts-list').on('click', '.post-comment-button', function() {
//   $(this).siblings('.comments').append('<li class="list-unstyled">' + $(this).siblings('.comment-text').val() +
//     " Posted By: " + $(this).siblings('.comment-user').val() +
//     '<i class="fas fa-times"></i>' + '</li>');
// });
// //add remove functionality to x icon for each comment
// $('.posts-list').on('click', '.fa-times', function() {
//   var $commentToDelete = $(this).closest('.list-unstyled');
//   $commentToDelete.remove();
// });
