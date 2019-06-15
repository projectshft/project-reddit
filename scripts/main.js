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

//submit event to handle creation of new comments
$("#post-items").on('click','.comment-form-btn',function(){
		event.preventDefault();
		console.log("comment button clicked");

		//grab unique post Id #
		let currentPost = $(this).closest('.user-post');
    let postId = currentPost.attr('data-post-number');
    let postComments = $("#post-items").find('#post-comments-'+ postId);
    
    //grab current comment values
    // debugger
    let commentText = $("#post-items").find('#commentText-'+ postId).val();
    let commentUserName = $("#post-items").find('#commentUserName-'+ postId).val();

    var newComment = createComment(commentText, commentUserName);

    //adds comment to inner html of post-comments
    postComments.append(newComment);		
});

var createComment = function(commentContent, commentUserName) {
    var commentTemplate =
        '<div class="user-comment">' +
        '  <p class="comment-content">' + commentContent + '	| <span><b>Commented By: </b><em>' + commentUserName + '</em></p></span>' +
        '</div>';
    console.log(commentTemplate);
    return commentTemplate;
};



//function that handles posting deletion



//onHover function that displays the 'x' to delete a post or edit post or post comments
// var onHover = function () {
//    var postItem = $(this).find('.user-post');

//  };



//EXTENSION: function that enables users to edit posts

//function that handles comment creation

		

//function that handles comment deletion





//EXTENSION: function that displays posts in a "new" screen, with comments below.