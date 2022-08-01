var $posts = $("#posts");
var $submitBtn = $("#submit");
var $inputPost = $("#post-text");
var $inputName = $("#name");

//boolean to check if 
var isViewingComments = false;
var isEditing = false;


$submitBtn.click(function() {
    var name = $inputName.val();
    var message = $inputPost.val();

    //used to identify post when commenting
    var parentPostId = $submitBtn.attr("data-post-to-append");

    //check if BOTH name and message are nonempty
    if (!(name && message)) {
        return false;
    }
    

    //create Post or Comment
    (isViewingComments) ? createComment(name, message, parentPostId) : createPost(name, message);
    
    //reset fields
    $inputName.val("");
    $inputPost.val("");
    
});

var createPost = function(name, message) {
    //generate unique ids
    var randomString = generateString();
    var UTC = Date.now();
    var postId = randomString + UTC;

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
    $commentButton.attr({"data-parent": postId});
    $commentButton.click(toggleComments);

    //create comment section for post
    var $comments = $("<div></div>");
    $comments.attr({
        "data-parent" : postId,
        "class" : "panel-group"
    });
    //$comments.text("Hi");
    $comments.css("display", "none");

    $content.append(`<p data-parent="${postId}">` + message +"</p>"); 
    $content.append("<p>Posted by: " + name + "</p>");
    $content.append($commentButton);
    $content.append($comments);

    //create div ("button")for the delete and edit buttons
    var $buttons = $("<div></div>");
    $content.addClass("col-1-xs-offset-2");
    
    //work ids into the buttons
    var $deleteBtn = createButton("trash", "danger");
    $deleteBtn.click(function() {
        var $parentPost = $(document).find(`div[data-id="${postId}"]`);
        $parentPost.remove();
    });

    var $editBtn = createButton("pencil");
    $editBtn.attr("data-id", `e${postId}`);
    $editBtn.click(function() {
        editPost(postId, $editBtn.attr("data-id"));
    });

    $buttons.append($editBtn, $deleteBtn);

    $post.append($content);
    $post.append($buttons);
    $posts.append($post);
};

//creates Bootstrap buttons with an click event listener
var createButton = function(icon, bootstrapStyle="default") {
    var $newButton = $("<button></button>");
    $newButton.addClass(`btn btn-${bootstrapStyle}`);
    $newButton.append('<i class="fa fa-'+icon+'"></i>');
    return $newButton;
};

var editPost = function(parentPostId, buttonId) {
    //var $text = $(`p[data-parent="${parentPostId}"]`);
    //var $edit = $(`input[data-parent="${parentPostId}"]`);
    var $button = $(`button[data-id="${buttonId}"]`);
    
    //check if ediitng
    if (isEditing) {
        var $edit = $(`input[data-parent="${parentPostId}"]`);

        //make p to replace $edit with
        var $text = $("<p></p>");
        $text.attr({
            "data-parent": parentPostId
        });
        $text.text($edit.val());
        //replace
        $edit.replaceWith($text);
    } else {
        var $text = $(`p[data-parent="${parentPostId}"]`);  

        //make form to replace $text with;
        var $edit = $("<input></input>");
        $edit.attr({
            "type": "text",
            "class": "form-control",
            "value": `${$text.text()}`,
            "data-parent": parentPostId
        });
        //replace
        $text.replaceWith($edit);
    }

    //change colors when in editing mode
    $button.toggleClass("btn-warning");

    //toggle Boolean
    isEditing = !isEditing;
};

var toggleComments = function(e) {
    var $button = $(e.target);
    console.log($button);
    var parentPostId = $button.attr("data-parent");
    var $parentPost = $(`div[data-id="${parentPostId}"]`);
    var $commentSection = $(`div[data-parent="${parentPostId}"]`);

    if (isViewingComments) {
        //show other posts
        $parentPost.siblings().css("display", "block");
        //change button text
        $button.text("view comments");
        //change bool
        isViewingComments = false;
        //hide comment section
        $commentSection.css("display", "none");
    } else {
        //hide other posts
        $parentPost.siblings().css("display", "none");
        //change button text
        $button.text("hide comments");
        //change bool
        isViewingComments = true;
        //show comment section
        $commentSection.css("display", "inline-block");
    }

    //change text of forms
    toggleForm(parentPostId);
};

var toggleForm = function(postToAppend) {
    if (isViewingComments) {
        $inputPost.attr("placeholder", "Comment Text");
        $submitBtn.text("Submit Comment");
        $submitBtn.attr("data-post-to-append", postToAppend);
    } else {
        $inputPost.attr("placeholder", "Post Text");
        $submitBtn.text("Submit Post");
        $submitBtn.attr("data-post-to-append", "");
    }
}

var createComment = function(name, message, parentPostId) {
    var $parentPost = $posts.children(`div[data-id="${parentPostId}"]`);
    var $commentSection = $parentPost.find(`div[data-parent="${parentPostId}"]`);   

    //build comment

    var $comment = $("<div>");
    $comment.addClass("panel panel-default");
    
    //add id for each comment
    var randomString = generateString();
    $comment.attr({
        "data-id": `${parentPostId}-${randomString}`
    });
    
    var $commentAuthor = $("<div>");
    $commentAuthor.addClass("panel-header");
    $commentAuthor.html('<button class="btn btn-warning"><i class="fa fa-window-close"></i></button>' + name);

    //build remove button for comment
    var $closeBtn = $($commentAuthor.children()[0]);
    $closeBtn.css("padding", "3px 6px");
    $closeBtn.click(function() {
        $(document).find(`[data-id="${parentPostId}-${randomString}"]`).remove();
    });

    var $commentMessage = $("<div>");
    $commentMessage.addClass("panel-body");
    $commentMessage.text(message);

    $comment.append($commentAuthor);
    $comment.append($commentMessage);

    //add to comment section
    $comment.appendTo($commentSection);
};

var generateString = function() {
    var result = "";
    var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (i=0; i<5; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    };
    return result;
}
