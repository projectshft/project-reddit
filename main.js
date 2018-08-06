var commentCommentHtml = "<input id='comment-comment' placeholder='comment'></input>";
var commentUserHtml = "<input id='comment-user' placeholder='username'></input>";
var postRemoveHtml = "<a id='remove-post'>remove</a>";
var postCommentsHtml = "<a id='view-comments'>comments</a>";
var commentButtonHtml = "<button type='button' class='btn btn-primary' id='create-comment'>Submit Comment</button>"

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
    + 'Posted by: ' + yourName + '</li>' + '<br>' + commentCommentHtml + '<br>' + commentButtonHtml);
  }
//remove post from page
  var remove = $("#remove-post").click(function(){
      // for (i = 0; i <)
      $("li").remove();
      $("#comment-comment").remove();
      $("#create-comment").remove();
  });
});

// var createComment = $('#create-comment').on('click', function () {
//   var postComment = $('#post-text').val();
//   var commentName = $('#your-name').val().bold();
//
// //add post to the page
//   if (postText == '' && yourName == '') {
//     alert('You must enter text in both fields.');
//   }
//   else if (postText == null && yourName == null) {
//     alert('You must enter text in both fields');
//   }
//   else if (postText != '' && yourName != '') {
//     $('#posts-list').append("<li>" + "<a>" + "remove" + " " + "</a>" + postComments + " " + postText + '</li>' + '<li>'
//     + 'Posted by: ' + yourName + '</li>' + '<br>' + commentComment + '<br>' + commentButton);
//   }
// });


//toggles comment section on and off
$("#view-comments").click(function(event){
       $("comment-section").toggle();
   });

//get user input upon hitting enter
// function runScript(e) {
//     if (e.keyCode == 13) {
//         var userInput = document.getElementsByClass("user-input").value;
//         onClick();
//     }
// }
