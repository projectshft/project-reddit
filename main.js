var commentCommentHtml = "<input id='comment-text' placeholder='Comment'></input>";
var commentUserHtml = "<input id='comment-name' placeholder='Your Name'></input>";
var postRemoveHtml = "<a id='remove-post'>remove</a>";
var postCommentsHtml = "<a id='view-comments'>comments</a>";
var commentButtonHtml = "<button type='button' class='btn btn-primary' id='create-comment'>Submit Comment</button>";
var commentRemoveHtml = "<a id='remove-comment'>x</a>";

//listen for clicks and get values from input boxes for posts
var createPost = $('#create-post').on('click', function () {
  var postText = $('#post-text').val();
  var yourName = $('#your-name').val().bold();

  //add post to the page
  if (postText == '' && yourName == '') {
    alert('You must enter text in both fields.');
  }
  else if (postText == null && yourName == null) {
    alert('You must enter text in both fields');
  }
  else if (postText != '' && yourName != '') {
    $('#posts-list').append("<li>" + postRemoveHtml + " " + postCommentsHtml + " " + postText + '</li>' + '<li>'
    + 'Posted by: ' + yourName + '</li>' + '<br>' + commentCommentHtml + commentUserHtml + '<br>' + commentButtonHtml);
  }

  //remove post from page
  var remove = $("#remove-post").click(function(){
      //loop through to remove just the post that is clicked on
      // for (i = 0; i <)
      $("li").remove();
      $("#comment-text").remove();
      $("#create-comment").remove();
      $("#comment-name").remove();
  });
  //listen for clicks and get values from input boxes for comments
  var createComment = $('#create-comment').on('click', function () {
    var commentText = $('#comment-text').val();
    var commentName = $('#comment-name').val().bold();

    //add comment to page
    if (commentText == '' && commentName == '') {
      alert('You must enter text in both fields.');
    }
    else if (commentText == null && commentName == null) {
      alert('You must enter text in both fields');
    }
    else if (commentText != '' && commentName != '') {
      $('#comments-list').append("<li id='idkWhatToName'>" + commentText + "</li>" + "<li id='iStillDontKnow'>"
      + 'Posted by: ' + commentName + '</li>' + commentRemoveHtml);
    }
    // toggle comment section on and off
    $("#view-comments").click(function(event){
           $("#comment-section").toggle();
    });
    //remove comments
    var removeComment = $("#remove-comment").click(function(){
      //loop through to remove just the comment that is clicked on
      // for (i = 0; i <)
      $("#idkWhatToName").remove();
      $("#iStillDontKnow").remove();
    });
  });
});

//get user input upon hitting enter
// function runScript(e) {
//     if (e.keyCode == 13) {
//         var userInput = document.getElementsByClass("user-input").value;
//         onClick();
//     }
// }

//Notes: wanted individual items to be removed instead of just removing them all upon click
//wanted to use for loops to do this
//wanted functionality to be able to hit enter and serve as a click
