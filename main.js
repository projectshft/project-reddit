function addPost(name, text) {
  //create the post
  var template =
  "<div class='post'>"+
      "<div class='panel panel-default'>"+
        "<div class='panel panel-body'>"+text+"</div>"+
        "<div class='panel-footer'>Posted by: <strong>"+name+"</strong>"+
          "<span class='options'><a class='toggle-comments'>comments</a> <a class='remove-post'>remove</a></span>"+
        "</div>"+
      "</div>"+
    "<div class='comments'>"+
      "<div class='comment-area'></div>"+
      "<div class='add-comment'>"+
        "<input class='comment-text' placeholder='Comment Text'></input>"+
        "<input class='comment-author' placeholder='User Name'></input>"+
        "<button class='submit-comment btn btn-info'>submit</button>"+
      "</div>"+
    "</div>"+
  "</div>";
  var row = $(template);

  var addComment = function(){
    var commentArea=$(this).parent().parent().find(".comment-area");
    var name = $(this).parent().find(".comment-author").val();
    var text = $(this).parent().find(".comment-text").val();
    var comment = $("<div class='comment'>"+text+" <span class='text-muted'>Posted by:</span> <strong>"+name+"</strong> <a class='rm-comment'><span class='glyphicon glyphicon-remove'></span></a></div>");
    //remove comment functionality
    comment.find(".rm-comment").click(function(){
      $(this).parent().remove();
    });
    commentArea.append(comment);
  };

  //functionality for "remove" link
  row.find(".remove-post").click(function(){
    $(this).parent().remove();
  });
  //functionality for "comments" link
  row.find(".toggle-comments").click(function(){
    $(this).closest(".post").find(".comments").toggle();
  });
  row.find(".submit-comment").click(addComment);

  $("#posts").append(row);
}



$("#add-post").click(function(){
  var text = $("#post-text").val();
  var name = $("#post-author").val();
  addPost(name, text);
});
