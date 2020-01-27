//TODO: Create an array variable that will store the user's post
// This post[] will store objects that will be the equivalent to a post

//TODO: populate this array belo from the post text input & your name input
//the array should populate once the user has filled in both fields and pressed the post button
var posts = [];
//TODO: Create global variables using jquery to get the element
//TODO: Use the global variables to listen for events
$('#post-button').click(function () {
    addPost();
});

function addPost() {
    //TODO: Grab the data from both input fields
    var $postText = $('#post-text').val();
    var $usernamePost = $('#post-username').val();
    // console error if postText or usernamePost return undefined
    if ($postText === "" || $usernamePost === "") {
        alert('Please fill out BOTH the Post Text & Username field!');
        // This throws an error and stops the function from running
        throw new Error('Please fill out BOTH the Post Text & Username field!');
    }
    // Create a counter
    var postCount = posts.length + 1;
    // TODO: Create a object that will store the values that were just retrieved
    var post = {
        id: 'post-' + postCount,
        text: $postText,
        user: $usernamePost,
        postComment: [],
    }

    //Now push the newPost {} into the posts []
    posts.push(post);

    // Added post to the DOM
    $('.posts').prepend('<div id="' + post.id + '" class="post">' + post.text + '<br>' + 'Posted By: ' + post.user + '</div>');
    //This creates the comment container 
    $('#' + post.id).append("<div class='comment-container form-group row'></div>");
    //Elements within the comment container
    $('#' + post.id).find('.comment-container').append('<div class="col-sm-12 posted-comments"></div>');
    $('#' + post.id).find('.comment-container').append('<div class="col-sm-4"><input type="text" class="comment-text form-control col-xs-3" placeholder="Comment Text" aria-label="Small"></div>');
    $('#' + post.id).find('.comment-container').append('<div class="col-sm-4"><input type="text" class="comment-username form-control col-xs-3" placeholder="Username" aria-label="Small"></div>');
    $('#' + post.id).find('.comment-container').append('<div class="col-sm-4"><button class="comment-button btn btn-default btn-primary">Comment</button></div>');
    // TODO: update DOM state
    // getDomState();
}

// This piece below is commented out because it is for future use
$(document).on('click', '.comment-button', function () {
    //TODO: Grab both input field from the comment-container class to store
    var $commentBtn = $(this);
    //TODO: grab post id to reference correct post
    var postID = $commentBtn.closest('.post').attr('id');
    var commentText = $('#' + postID).find('.comment-text').val();
    var commentUsername = $('#' + postID).find('.comment-username').val();
    // console error if postText or usernamePost return undefined
    if (commentText === "" || commentUsername === "") {
        alert('Please fill out BOTH the Comment Text & Username field!');
        throw new Error('Please fill out BOTH the Comment Text & Username field!');
        // return false
    }

    //TODO: Filter Posts Array to find correct post matching this id 
    var filteredPost = posts.filter(function (post) {
        return post.id === postID
    })

    var commentCount = filteredPost[0].postComment.length + 1;
    // TODO: Create a object that will store the values that were just retrieved
    var newComment = {
        index: 'index-' + commentCount,
        commentText: commentText,
        commentUser: commentUsername
    }



    //TODO: push newComment obj to post comment key that point to an array
    filteredPost[0].postComment.push(newComment);

    //TODO: Add removeButton
    var removeButton = '<span class="remove-icon btn-primary glyphicon glyphicon-remove" aria-hidden="true"></span>'

    //TODO: Append new comment to the Dom
    $('#' + postID).find('.posted-comments').append('<p data-index="' + newComment.index + '">' + commentText + ' Posted By:' + commentUsername + removeButton + '</p>');
});


//TODO: Add remove comment Icon functionality
$(document).on('click', '.remove-icon', function () {
    console.log(posts)
    var $removeIcon = $(this);
    //TODO: grab post id to reference correct post
    var postID = $removeIcon.closest('.post').attr('id');
    var removeCommentIndex = $('#' + postID).find('.posted-comments p').attr('data-index');
    //TODO: Filter Posts Array to find correct post matching this id
    var filteredPost = posts.filter(function (post) {
        return post.id === postID
    })

    //TODO: Find comment index to remove
    var removeIndex = filteredPost[0].postComment.findIndex(function (comment) {
        return comment.index === removeCommentIndex;

    });

    //TODO: remove comment from store
    filteredPost[0].postComment.splice(removeIndex, 1);

    //TODO: Now remove the comment from the DOM
    $('#' + postID).find('p').attr("data-index", removeIndex).remove();


});