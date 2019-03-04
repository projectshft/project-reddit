//need to make an array for all of the created posts
var DisplayedPosts = [];
//need to create a function that adds a post to the page
var addPost = function () {
//need an object to gather the user input for the post
    var post = {
        name: $('#name').val(),
        text: $('#text').val(),
        comments: []
    };
//Push the post to the array
    DisplayedPosts.push(post);
//make variable for comments html dom
    var commentsView = '<div class="comments">' + '<div class="commentsView"></div>' + '<input type="text" class="commentInput" placeholder="Comment Here">' + '<input type="text" class="userInput" placeholder="Username Here"><button class="addButton">Add Comment</button></div>';

//Need to be able to append the post html dom
    $('.postView').append('<div class="post">' + '<button class="deleteButton"> Delete</button>' + '<button class="commentButton">Comment</button>' + post.text + commentsView + '<div> Created by: <b>' + post.name + '</b></div> </div>');

//Clear input area so you can have a new post
    $('#name').val("");
    $('#text').val("");
    };
//need to be able to call the add post function when you click on the post button
$('.postButton').click(function (event) {
    event.preventDefault();
    addPost();
});



//part 2
//need a function to that adds a comment to the post
var addComment = function (name, text, postViewIndex) {
//need an object for the comment input
    var userComment = {
        commentname: name,
        commenttext: text
    }
//has to be able to push the comment to the post in the displayedposts array
    DisplayedPosts[postViewIndex].comments.push(userComment);
//need to be able to find the correct post to add the comment
    var postIndex = $('.postView').find('.post').eq(postViewIndex);

//need to be able to append the comment created to the dom html
    postIndex.find('.commentsView').append('<div class="comment">' + userComment.commenttext + " Posted by: " + '<b> ' + userComment.commentname + '</b>' + '<a href="#" class="delete">Delete</a></div>');

//need to clear the input area
    $('.userInput').val("");
    $('.commentInput').val("");
};

//need to create a function to be able to delete a comment
var deleteComment = function (postViewIndex, commentViewIndex) {
    DisplayedPosts[postViewIndex].comments.splice(commentViewIndex, 1);
}
//need to create a funtion to delete a post
var deletePost = function (postViewIndex) {
    DisplayedPosts.splice(postViewIndex, 1);
}

// when the add comment is clicked a comment needs to be added to the post
$('.postView').on('click', '.addButton', function (event) {
    event.preventDefault();
    var userName = $(this).siblings('.userInput').val()
    var userText = $(this).siblings('.commentInput').val()
    var postViewIndex = $(this).closest('.post').index();
    addComment(userName, userText, postViewIndex);
});
// when the delete button is clicked the whole post needs to be deleted
$('.postView').on('click', '.deleteButton', function () {
    var removePost = $(this).closest('.post').index();
    deletePost(removePost);
    $(this).closest('.post').remove();
});
// when the delete button next to the comment is clicked the comment needs to delete from the post
$('.postView').on('click', '.delete', function () {
    var currentPost = $(this).closest('.post').index();
    var removeComment = $(this).closest('.comment').index();
    deleteComment(currentPost, removeComment);
    $(this).closest('.comment').remove();
});

//should toggle between showing and hiding when comment button is clicked
$('.postView').on('click', '.commentButton', function (show) {
    show.preventDefault();
    $(this).parent().children('.comments').toggle('.show');
});
