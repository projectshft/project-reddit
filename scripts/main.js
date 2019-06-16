var postNumber = 0;

//function that handles posting creation
var createPost = function(postContent, userName, postNumber) {

    var commentForm =

        '<form class="form-inline comment-form">' +
        '<input type="text" class="form-control mb-2 mr-sm-2" id="commentText-' + postNumber + '" placeholder="Comment Text" required>' +
        '<input type="text" class="form-control mb-2 mr-sm-2" id="commentUserName-' + postNumber + '" placeholder="User Name" required>' +
        '<button type="button" class="btn btn-primary btn-sm mb-2 comment-form-btn">Post Comment</button></form>';

    var editPostModal =
        '<div class="modal fade" id="postModal-' + postNumber + '" tabindex="-1" role="dialog" aria-labelledby="postModalLabel" aria-hidden="true">' +
        '<div class="modal-dialog" role="document">' +
        '<div class="modal-content">' +
        '<div class="modal-header">' +
        '<h5 class="modal-title" id="postModalLabel-' + postNumber + '">Edit post by ' + userName + '</h5>' +
        '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
        '<span aria-hidden="true">&times;</span>' +
        '</button></div>' +
        '<div class="modal-body">' +
        '<form><div class="form-group">' +
        '<input type="text" class="form-control" id="edit-post-form-' + postNumber + '">' +
        '</div></div>' +
        '<div class="modal-footer">' +
        '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>' +
        '<button type="button" class="btn btn-primary update-post">Update Post</button>' +
        '</div></div></div></div>';

    var postTemplate =
        '<div class="user-post grey-separator top-padded" data-post-number="' + postNumber + '">' +
        '<p><button type="button" class="btn btn-link btn-sm remove-post">Remove</button>' +
        '<button type="button" class="btn btn-link btn-sm edit-post" data-toggle="modal" data-target="#postModal-' + postNumber + '">Edit</button>' +
        '<button type="button" class="btn btn-link btn-sm toggle-comments">Comments</button></p>' +
        '  <p class="post-content"> ' + postContent + ' </p>' +
        '<div class="commentArea">' +
        '<div id="post-comments-' + postNumber + '"></div>' + commentForm +
        '</div>' +
        '  <p class="post-name"><b>Posted By:</b> <em>' + userName + '</em></p>' +
        editPostModal +
        '</div>';

    // console.log(editPostModal);
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
$("#post-items").on('click', '.remove-post', function() {
    event.preventDefault();
    console.log("post delete button clicked");

    //grab this post and delete
    let currentPost = $(this).closest('.user-post');
    currentPost.remove();

});

//function that displays comments section and comment form
$("#post-items").on('click', '.toggle-comments', function() {
    event.preventDefault();
    //grab unique post Id # and comments section
    let currentPost = $(this).closest('.user-post');
    let postId = currentPost.attr('data-post-number');
    let postCommentArea = currentPost.find('.commentArea');

    //adds or removes display value for comment section
    postCommentArea.toggle();

});

//submit event to handle creation of new comments
$("#post-items").on('click', '.comment-form-btn', function() {
    event.preventDefault();

    //grab unique post Id # and comments section
    let currentPost = $(this).closest('.user-post');
    let postId = currentPost.attr('data-post-number');
    let postComments = $("#post-items").find('#post-comments-' + postId);

    //grab current comment values
    // debugger
    let commentText = $("#post-items").find('#commentText-' + postId).val();
    let commentUserName = $("#post-items").find('#commentUserName-' + postId).val();

    //creates comment using html template function
    var newComment = createComment(commentText, commentUserName);

    //adds comment to inner html of post-comments for current post
    postComments.append(newComment);
});

//function that handles comment deletion
$("#post-items").on('click', '.remove-comment', function() {
    event.preventDefault();

    //grab this comment
    let currentComment = $(this).closest('.user-comment');
    currentComment.remove();

});


//EXTENSION: function that enables users to edit posts

//controls the edit posts modal
$("#post-items").on('click', '.edit-post', function(event) {
    //grab unique post Id # and post modal
    let currentPost = $(this).closest('.user-post');
    let currentPostContent = currentPost.find('.post-content').text();
    let postId = currentPost.attr('data-post-number');
    let postModal = $("#post-items").find('#postModal-' + postId);

    //sets form input value within modal 
    postModal.find('.modal-body input').val(currentPostContent);
});

//controls the actual edit post submission button
$("#post-items").on('click', '.update-post', function(event) {
    //grab unique post Id # and post modal
    let currentPost = $(this).closest('.user-post');
    let currentPostContent = currentPost.find('.post-content');
    let postId = currentPost.attr('data-post-number');
    let postModal = $("#post-items").find('#postModal-' + postId);

    //grabs the value every time Update Post button is clicked
    let newContent = postModal.find('.modal-body input').val();
    currentPostContent.text(newContent);

    //manually hiding the modal here
    postModal.modal('hide');
});

//EXTENSION: function that displays posts in a "new" screen, with comments below.