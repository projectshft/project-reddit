var postNumber = 0;

//function that handles posting creation
var createPost = function(postContent, userName, postNumber) {

	var commentForm =
		'<div>' +
		'<form class="form-inline comment-form">' +
		'<input type="text" class="form-control mb-2 mr-sm-2" id="commentText-' + postNumber + '" placeholder="Comment Text" required>' +
		'<input type="text" class="form-control mb-2 mr-sm-2" id="commentUserName-'+ postNumber + '" placeholder="User Name" required>' +
		'<button type="button" class="btn btn-primary btn-sm mb-2 comment-form-btn">Post Comment</button></form>' +
		'</div>';

  var postTemplate =
      '<div class="user-post grey-separator top-padded" data-post-number="' + postNumber + '">' +
      '<p><button type="button" class="btn btn-link btn-sm remove-post">Remove</button><button type="button" class="btn btn-link btn-sm">Comments</button></p>' +
      '  <p class="post-content"> ' + postContent + ' </p>' +
      '<div id="post-comments-'+ postNumber + '"></div>' + commentForm +
      '  <p class="post-name"><b>Posted By:</b> <em>' + userName + '</em> </p>' +
      '</div>';

  return postTemplate;
};

//function to create new comment html template
var createComment = function(commentContent, commentUserName) {
    var commentTemplate =
        '<div class="user-comment">' +
        '  <p class="comment-content">' + commentContent + '	| <span><b>Commented By: </b><em>' + 
        commentUserName + '</em>    <i class="fa fa-times-circle remove-comment"></i></span></p>' +
        '</div>';
    
    return commentTemplate;
};

//submit event to handle creation of new posts
$("#post-form").submit(function(event) {
    event.preventDefault();
    let postItems = $('#post-items');
    let postText = $('#postText').val();
    let userName = $('#userName').val();
    var newPost = createPost(postText, userName, postNumber);
    //adds post to inner html of post-items
    postItems.append(newPost);
    postNumber++;
});

//function that handles posting deletion
$("#post-items").on('click','.remove-post',function(){
		event.preventDefault();
		console.log("post delete button clicked");

		//grab this post and delete
		let currentPost = $(this).closest('.user-post');
		currentPost.remove();
    
});

//submit event to handle creation of new comments
$("#post-items").on('click','.comment-form-btn', function(){
		event.preventDefault();

		//grab unique post Id # and comments section
		let currentPost = $(this).closest('.user-post');
    let postId = currentPost.attr('data-post-number');
    let postComments = $("#post-items").find('#post-comments-'+ postId);
    
    //grab current comment values
    // debugger
    let commentText = $("#post-items").find('#commentText-'+ postId).val();
    let commentUserName = $("#post-items").find('#commentUserName-'+ postId).val();

    //creates comment using html template function
    var newComment = createComment(commentText, commentUserName);

    //adds comment to inner html of post-comments for current post
    postComments.append(newComment);		
});

//function that handles comment deletion
$("#post-items").on('click','.remove-comment', function(){
		event.preventDefault();

		//grab this comment
		let currentComment = $(this).closest('.user-comment');
		currentComment.remove();
    
});


//EXTENSION: function that enables users to edit posts

//EXTENSION: function that displays posts in a "new" screen, with comments below.