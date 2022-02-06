alert('js page connected');

var $postSubmitButton = $('.post-submit');
var $postContainer = $('.post-container');
var editMode = false;

$postSubmitButton.on('click', function(e) {
    console.log(e.target);
    addPost();
});

var addPost = function() {
    var $postTextInput = $('#post-text-input');
    var $postCreatorInput = $('#post-creator-input');
    var postId = $('.post').length + 1;
    //build container for posts
    var $post = $(`<div></div>`);
    //build buttons for deleting and toggling comments section for posts
    var $postDeleteButton = $(`<button class="btn btn-danger">X</button>`);
    var $postCommentsButton = $(`<button class="btn btn-success">Comments</button>`);
    //build container for comments
    var $postComments = $(`<div id="comments-${postId}" class="post-comments"></div>`);
    //when post delete button clicked the whole post is removed
    $postDeleteButton.on('click', function() {
        $post.remove();
    });
    //when post comments button clicked.......needs to create a comment container and give it a visible class, then change comment button's on click to toggle the visibility
    $postCommentsButton.on('click', function() {
        $postComments.append(createCommentInputs());
    });
    //build the post by appending the pieces of it individually
    $post.append($postDeleteButton);
    $post.append($postCommentsButton);
    $post.append(`
    <p class="post-text"><strong>${$postTextInput.val()}- Posted By: ${$postCreatorInput.val()}</strong></p>
    `);
    $post.append($postComments);
    $post.append('<hr>');
    $postContainer.append($post);
    //reset the post inputs to give fresh start for next post
    clearInputs($postTextInput, $postCreatorInput);
}

//function that takes a comment container as an argument then appends the comment and changes the button to be able to toggle visibility of the post's comments container
var addComment  = function() {
    var $commentTextInput = $('#comment-text-input');
    var $commentCreatorInput = $('#comment-creator-input');

}

var createCommentInputs = function(id) {
    var commentInputs = `
                        <div>
                            <div class="form-group">
                                <label class="sr-only" for="comment-text-input"></label>
                                <input
                                class="form-control input-lg"
                                placeholder="Comment Text"
                                type="text"
                                id="comment-text-input"
                                />
                            </div>
                            <div class="form-group">
                                <label class="sr-only" for="comment-creator-input"></label>
                                <input
                                class="form-control input-lg"
                                placeholder="Your Name"
                                type="text"
                                id="comment-creator-input"
                                />
                            </div>
                        </div>
                        `
    var $commentButton = $('<button class="btn btn-primary btn-lg post-submit">Submit Comment</button>');
    var $commentInputs = $(commentInputs);
    $commentButton.on('click', function() {
        $commentInputs.remove();
    });
    $commentInputs.append($commentButton);
    return ($commentInputs);
}

var editPost = function(post) {

}

var clearInputs = function(input1, input2) {
    input1.val(function() {return ''});
    input2.val(function() {return ''});
}