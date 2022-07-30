var $posts = $("#posts");
var $submitBtn = $("#submit");
var $inputPost = $("#post-text");
var $inputName = $("#name");

$submitBtn.click(function() {
    var name = $inputName.val();
    var message = $inputPost.val();

    //create div for the whole "post"
    var $post = $("<div></div>");
    $post.addClass("panel");
    $post.addClass("row")


    //create div ("content") for the post, author, comment button
    var $content = $("<div></div>");
    $content.addClass("col-xs-9");
    
    var $commentButton = $("<button></button>");
    $commentButton.addClass("btn-link");
    $commentButton.text("view comments");
    $commentButton.click(expandPost);

    $content.append("<p>" + message +"</p>"); 
    $content.append("<p>Posted by: " + name + "</p>");
    $content.append($commentButton);

    //create div ("button")for the delete and edit buttons
    var $buttons = $("<div></div>");
    $content.addClass("col-1-xs-offset-2");
    
    var $deleteBtn = createButton("trash", deletePost,"danger");
    var $editBtn = createButton("pencil", editPost);

    $buttons.append($editBtn, $deleteBtn);


    $post.append($content);
    $post.append($buttons);
    $posts.append($post);
});

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
    var $button = $(e.target)
    var $parentPost = $button.parent().parent().parent();
    var $parentPostcontent = $parentPost.children().first();
    var $text = $parentPostcontent.children().first();
    
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

var expandPost = function() {
    //more code here
};
