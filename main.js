

//create post model
var PostModel = function(id, userPost, userName, comments){
  var attributes = {
    id: id,
    userPost: userPost,
    userName: userName,
    comments: []
  }
  return{
    attributes: attributes
  }
};

let CommentModel = function(commentId, text, name){
  let attributes = {
    commentId: commentId, 
    text: text, 
    name: name
  }
  return{
    attributes: attributes
  }
}

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

let updateCommentView = function(context, comment){
  $(context).siblings('.comments').append(`<li class="list-unstyled" data-key=${comment.attributes.commentId}>` + comment.attributes.text + " Posted by: " + comment.attributes.name + '<i class="fas fa-times"></i></li>')
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

let removeComment = function(clickedComment){
  //identify index of post comment belongs to
  let thisPost = $(clickedComment).closest('.list-group-item');
 
  let postIndex = posts.findIndex(function(item){
    return item.attributes.id == thisPost[0].dataset.key;
  })
// idenitfy comment to remove from array of that post
  let thisComment = $(clickedComment).closest('.list-unstyled');
  let commentIndex = posts[postIndex].attributes.comments.findIndex(function(comment){
    return comment.attributes.commentId == thisComment[0].dataset.key
  });
 //remove item from array
 posts[postIndex].attributes.comments.splice(commentIndex, 1);
//remove element from the dom
thisComment.remove();
}

let toggleComments = function(clickedPost){
  let $clickedPost = $(clickedPost).closest('.list-group-item');
  $clickedPost.find('.comments-section').toggle();
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

$('.posts-list').on('click', '.post-comment', function(e){
  let commentId = generateId();
  let $commentText = $('.comment-text').val();
  let $commentUser = $('.comment-user').val();
  let newComment = CommentModel(commentId, $commentText, $commentUser);
  //find which post to add it to
  let index = posts.findIndex(function(item){
    return item.attributes.id == e.target.parentElement.parentElement.getAttribute('data-key');
    });
  //add it to that post's comments array
  posts[index].attributes.comments.push(newComment);
  updateCommentView(this, newComment);
})

$('.posts-list').on('click', '.fa-times', function(){

  removeComment(this);
})

