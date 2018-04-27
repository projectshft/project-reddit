function addPost(name, text) {
  //create the post
  var template =
  "<div class='post'>"+
      "<div class='panel panel-default'>"+
        "<div class='panel panel-body'>"+text+"</div>"+
          "<div class='comments'>"+
            "<div class='comment-area'></div>"+
            "<div class='add-comment'>"+
              "<div class='form-inline'>"+
                "<input type='text' class='comment-text form-control' placeholder='Comment Text'></input>"+
                "<input type='text' class='comment-author form-control' placeholder='User Name'></input>"+
                "<button class='submit-comment btn btn-info'>submit</button>"+
                "</div>"+
            "</div>"+
          "</div>"+
        "<div class='panel-footer'>Posted by: <strong>"+name+"</strong>"+
          "<span class='options'><a class='toggle-comments'>comments</a> <a class='remove-post'>remove</a></span>"+
        "</div>"+
      "</div>"+
  "</div>";
  var row = $(template);

  var addComment = function(){
    var commentArea=$(this).closest(".comments").find(".comment-area");
    console.log(commentArea);
    var name = $(this).parent().find(".comment-author").val();
    var text = $(this).parent().find(".comment-text").val();
    var comment = $("<div class='comment'>"+
    text+
    " <span class='text-muted'>Posted by:</span> "+
    "<strong>"+name+"</strong> "+
    "<a class='rm-comment'>"+"<span class='glyphicon glyphicon-remove'>"+
    "</span>"+
    "</a>"+
    "</div>");
    //remove comment functionality
    comment.find(".rm-comment").click(function(){
      $(this).parent().remove();
    });
    commentArea.append(comment);
    $(this).parent().find("input").val("");//clear inputs
  };

  //functionality for "remove" link
  row.find(".remove-post").click(function(){
    $(this).closest(".post").remove();
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
  $(this).parent().find("input").val(""); //clear inputs
});
