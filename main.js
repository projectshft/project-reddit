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
    var parentPost = $(e.target).parent().parent().parent();
};

var expandPost = function() {

};
