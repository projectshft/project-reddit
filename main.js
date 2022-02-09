alert('js page connected');

//create jQuery elements for posts container box and post inputs/submit button from template
var $postsContainer = $('.posts-container');
var $postTextInput = $('#post-text-input');
var $postCreatorInput = $('#post-creator-input');
var $postSubmitButton = $('.post-submit');

//add click listener to submit button that will create a post and append it to $postsContainer
$postSubmitButton.on('click', function() {
    addPost();
});

//build function that will create a post, the comments section for the post, and append all of it to the container of all posts
var addPost = function() {
    //if the text and creator fields are not both filled out alert the user to fill out both
    if(!$postTextInput.val() || !$postCreatorInput.val()) {
        alert('Both the post text and name fields must be filled out to submit a post');
        return;
    }
    //create post container that will hold each post and that post's comments section
    var $postSection = $('<div class="post-section"></div>');
    //create container for the post, which will hold the post's delete/comments buttons and the content of the post
    var $post = $(`<div class="post"></div>`);
    //create post buttons
    var $postDeleteButton = $(`<button class="btn btn-danger">Delete</button>`);
    var $postCommentsButton = $(`<button class="btn btn-success">Comments</button>`);
    //create comments section that will hold a container for all the comments and the inputs to add them
    var $commentsSection = $('<div class="comments-section"></div>');
    //create container for all of a post's comments 
    var $commentsContainer = $('<div class="comments-container"></div>');
    //create inputs for comments to be created and button to submit info from them
    var $commentTextInput = $(`
                            <div class="form-group">
                                <label class="sr-only" for="comment-text-input"></label>
                                <input
                                class="form-control input-lg"
                                placeholder="Comment Text"
                                type="text"
                                id="comment-text-input"
                                />
                            </div>`);
    var $commentCreatorInput = $(`<div class="form-group">
                                    <label class="sr-only" for="comment-creator-input"></label>
                                    <input
                                    class="form-control input-lg"
                                    placeholder="Your Name"
                                    type="text"
                                    id="comment-creator-input"
                                    />
                                </div>`);
    var $commentSubmitButton = $('<button class="btn btn-primary btn-md comment-submit">Submit Comment</button>');
    
    //add click listener to comment submit button that will create and append a comment to a post
    $commentSubmitButton.on('click', function() {
        //if the text and creator fields are not both filled out alert the user to fill out both
        if(!$commentTextInput.children('input').val() || !$commentCreatorInput.children('input').val()) {
            alert('Both the comment text and name fields must be filled out to submit a comment');
            return;
        }
        //create comment container to hold buttons and comment text/creator
        var $comment = $('<div class="comment"></div>');
        //create comment content element
        var $commentContent = `<p class="comment-text">${$commentTextInput.children('input').val()}- Posted By: ${$commentCreatorInput.children('input').val()}</p>`;
        //create comment delete button and add click listener that removes the comment when fired
        var $commentDeleteButton = $('<button class="btn btn-danger btn-sm">Delete</button>');
        $commentDeleteButton.on('click', function() {
            $comment.remove();
        });
        //put comment content and button in the comment container
        $comment.append($commentDeleteButton, $commentContent);
        //add the comment to container that holds all comments
        $commentsContainer.append($comment);
        //clear comment inputs
        $commentTextInput.children('input').val(() => '');
        $commentCreatorInput.children('input').val(() => '');
    });
    //put the container of all comments, the comment inputs, and the comment submit button into the comments section
    $commentsSection.append($commentsContainer, $commentTextInput, $commentCreatorInput, $commentSubmitButton);
    //hide the comments section so it's not seen initially until clicking the comments button for the post
    $commentsSection.toggle();
    //add click listener to post's comments button that will toggle the display of the post's comment section
    $postCommentsButton.on('click', function(e) {
        $commentsSection.toggle();
    });

    //build the post content element
    var postContent = `<p class="post-text"><strong>${$postTextInput.val()}- Posted By: ${$postCreatorInput.val()}</strong></p>`;
    //add click listener to post delete button that deletes the post (and all associated comments) when fired
    $postDeleteButton.on('click', function() {
        $postSection.remove();
    });
    //fill the post with its buttons and content
    $post.append($postDeleteButton, $postCommentsButton, postContent);
    //fill the post section with the post, its comments section, and a divider
    $postSection.append($post, $commentsSection, '<hr>');
    //add the newly created post section to the container that holds all post sections
    $postsContainer.append($postSection);
    //reset post inputs
    $postTextInput.val(function() {return ''});
    $postCreatorInput.val(function() {return ''});
}
