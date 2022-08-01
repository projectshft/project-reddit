var $posts = $("#posts");
var $submitBtn = $("#submit");
var $inputPost = $("#post-text");
var $inputName = $("#name");

//used for creating unique post IDs
var postCount = 0;

//boolean to check if 
var isViewingComments = false;

$submitBtn.click(function() {
    var name = $inputName.val();
    var message = $inputPost.val();

    //check if BOTH name and message are nonempty
    if (!(name && message)) {
        return false;
    }

    (isViewingComments) ? createComment(name, message) : createPost(name, message);
    
});

var createPost = function(name, message) {
    //increment post count, used for creating unique post id
    //think of a way to do ids disconnected with the number of posts (getUTC?)
    
    var randomString = generateString();
    var postId = randomString + Date.now();

    //create div for the whole "post"
    var $post = $("<div></div>");
    $post.addClass("panel panel-default");
    $post.addClass("row")
    $post.attr({
        "data-id": postId,
        "display": "block"
    });
    
    //create div ("content") for the post, author, comment button
    var $content = $("<div></div>");
    $content.addClass("col-xs-9");
    
    var $commentButton = $("<button></button>");
    $commentButton.addClass("btn-link");
    $commentButton.text("view comments");
    $commentButton.click(toggleComments);

    //create comment section for post
    var $comments = $("<div></div>");
    $comments.attr({
        "data-id" : `comments-${postCount}`,
        "class" : "panel-group"
    });
    $comments.css("display", "none");

    $content.append("<p>" + message +"</p>"); 
    $content.append("<p>Posted by: " + name + "</p>");
    $content.append($commentButton);
    $content.append($comments);

    //create div ("button")for the delete and edit buttons
    var $buttons = $("<div></div>");
    $content.addClass("col-1-xs-offset-2");
    
    //work ids into the buttons
    var $deleteBtn = createButton("trash", deletePost,"danger");
    var $editBtn = createButton("pencil", editPost);

    $buttons.append($editBtn, $deleteBtn);

    $post.append($content);
    $post.append($buttons);
    $posts.append($post);
};

//creates Bootstrap buttons with an click event listener
var createButton = function(icon, func, bootstrapStyle="default") {
    var $newButton = $("<button></button>");
    $newButton.addClass(`btn btn-${bootstrapStyle}`);
    $newButton.append('<i class="fa fa-'+icon+'"></i>');
    $newButton.click(func);
    return $newButton;
};

var deletePost = function(e) {
    var $parentPost = $(e.target).parent().parent().parent();
    $parentPost.remove();
};

var editPost = function(e) {
    var $button = $(e.target);
    var $parentPost = $button.parent().parent().parent();
    var $parentPostcontent = $parentPost.children().first();
    var $text = $parentPostcontent.children().first().children().first();
    
    //check if post is currently in editing or not
    if ($button.hasClass("btn-warning")) {
        //if currently in editing
        //make a new <p> with the edited text
        //$text is now the editable area
        var $editedText = $("<p></p>");
        $editedText.text($text.val());

        //replace editable text area with edited text
        $text.replaceWith($editedText);
    } else {
        //if not currently in editing
        //create editable text area
        var $formGroup = $("<div></div>");
        $formGroup.addClass("form-group");
        var $editArea = $("<textarea></textarea>");
        $editArea.addClass("form-control");
        $editArea.attr("type", "text");
        $editArea.text($text.html());

        //replace current text with editable text area
        $text.replaceWith($editArea);
    }

    $button.toggleClass("btn-warning");
};

var toggleComments = function(e) {
    var $button = $(e.target);
    var $parentPost = $button.parent().parent();
    var parentPostId = $parentPost.attr("data-id");
    var $commentSection = $(`div[data-id="comments-${parentPostId}"]`);

    if (isViewingComments) {
        //show other posts
        $parentPost.siblings().show();
        //change button text
        $button.text("view comments");
        //change bool
        isViewingComments = false;
        //hide comment section
        $commentSection.css("display", "none");
    } else {
        //hide other posts
        $parentPost.siblings().hide();
        //change button text
        $button.text("hide comments");
        //change bool
        isViewingComments = true;
        //show comment section
        $commentSection.css("display", "inline-block");
    }

    //change text of forms
    toggleForm();
};

var toggleForm = function() {
    if (isViewingComments) {
        $inputPost.attr("placeholder", "Comment Text");
        $submitBtn.text("Submit Comment");
    } else {
        $inputPost.attr("placeholder", "Post Text");
        $submitBtn.text("Submit Post");
    }
}

var createComment = function(name, message) {
    var $parentPost = $posts.children("div[display='block']");
    var parentPostId = $parentPost.attr("data-id");
    var $commentSection = $parentPost.find(`div[data-id="comments-${parentPostId}"]`);



    //build comment
    var $comment = $("<div>");
    $comment.addClass("panel panel-default");
    
    var $commentAuthor = $("<div>");
    $commentAuthor.addClass("panel-header");
    $commentAuthor.html('<button class="btn btn-warning"><i class="fa fa-window-close"></i></button>' + name);

    //build remove button for comment
    var $closeBtn = $($commentAuthor.children()[0]);
    $closeBtn.css("padding", "3px 6px");
    $closeBtn.click();

    var $commentMessage = $("<div>");
    $commentMessage.addClass("panel-body");
    $commentMessage.text(message);

    $comment.append($commentAuthor);
    $comment.append($commentMessage);

    //add to comment section
    $commentSection.append($comment);
};

var generateString = function() {
    var result = "";
    var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (i=0; i<5; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    };
    return result;
}
