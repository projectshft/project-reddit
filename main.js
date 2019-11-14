
//jQuery for posts and comments 

var $posts = $('.posts');
  
var createPost = function (text, user) {
	var text =$('text-post').value
	var user =$('user-name').value

}
// To put the new post in the html so the user can see it.  i think the comments containter part is wrong
var renderPosts = function () {
	$posts.empty();
  
	for (var i = 0; i < posts.models.length; i += 1) {
		var post = posts.models[i];
  
	var commentsContainer = '<div class="comments-container">' + '<div cass=comments-list></div>' +
		'<input type="text" class="comment-name" placeholder="Comment Text">' + '<input type="text" class="comment-user" placeholder>'
  
 // to render to comments after a post 
var renderComments = function () {
	$('.comments-list').empty();
  
	for (var i = 0; i < posts.models.length; i += 1) {
		
	var post = posts.models[i];
  
		var $post = $('.posts').find('.post').eq(index);
  
		for (var x = 0; x < post.get('comments').length; x += 1) {
		
		  var comment = post.get('comments')[x];
  
		};
	  };
	};
  
//variable to create comment  
var createComment = function (text, name, postIndex) {
	var comment = { text: text, name: name };
  
	var currentComments = posts.models[postIndex].get('comments');
  
	}
 //variable to remove comment that is closest  
	var removeComment = function (commentButton) {

	  var $clickedComment = $(commentButton).closest('.comment');
  		var commentIndex = $clickedComment.index();
  
	  var postIndex = $clickedComment.closest('.post').index();
  
	   $clickedComment.remove();
  
	  posts.models[postIndex].get('comments').splice(commentIndex, 1);
	}
  
}

};

