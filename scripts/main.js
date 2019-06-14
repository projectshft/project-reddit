$("#post-form").submit(function(event) {
    $postItems = $('#post-items');
    postText = $('#postText').val();
    userName = $('#userName').val();
    //console.log(postText, userName);
    var newPost = createPost(postText, userName);
    //alert( "Handler for post .submit() called." );
    console.log(newPost);

    //need to add inner html here somehow
    $postItems.append(newPost);
    event.preventDefault();
});


//function that handles posting creation
var createPost = function(postContent, userName) {
    var postTemplate =
        '<div class="user-post grey-separator top-padded">' +
        '<p><button type="button" class="btn btn-link btn-sm remove-post">Remove</button><button type="button" class="btn btn-link btn-sm">Comments</button></p>' +
        '  <p class="post-content"> ' + postContent + ' </p>' +
        '<div class="post-comments"></div>' + commentForm +
        '  <p class="post-name"><b>Posted By:</b> <em>' + userName + '</em> </p>' +
        '</div>';

    return postTemplate;
};

//function that handles posting deletion



//onHover function that displays the 'x' to delete a post or edit post or post comments
// var onHover = function () {
//    var postItem = $(this).find('.user-post');

//  };



//EXTENSION: function that enables users to edit posts

//function that handles comment creation
$("#comment-form").submit(function(event) {
    $postComments = $(this).closest(".post-comments");
    commentText = $('#commentText').val();
    commentUserName = $('#commentUserName').val();
    //console.log(commentText, userName);
    var newcomment = createcomment(commentText, commentUserName);
    //alert( "Handler for comment .submit() called." );
    console.log(newcomment);

    //need to add inner html here somehow
    $postComments.append(newcomment);
    event.preventDefault();
});

var createComment = function(commentContent, commentUserName) {
    var commentTemplate =
        '<div class="user-comment">' +
        '  <p class="comment-content"> ' + commentContent + '	<b>Commented By:</b><em>' + commentUserName + '</em></p>' +
        '</div>';

    return commentTemplate;
};

var commentForm =
	'<form id="comment-form" class="form-inline">' +
	'<input type="text" class="form-control mb-2 mr-sm-2" id="commentText" placeholder="Comment Text" required>' +
	'<input type="text" class="form-control mb-2 mr-sm-2" id="commentUserName" placeholder="User Name" required>' +
	'<button type="submit" class="btn btn-primary btn-sm mb-2">Post Comment</button></form>';

//function that handles comment deletion





//EXTENSION: function that displays posts in a "new" screen, with comments below.