

var nameObject = {};
var textObject = {};
var postArray =[];
var initialPost = [];
var postNewThread = "";
var commentersName = "";
var commentersText = "";


//original post
$('#post-button').click(function(){
  var postersName = $('.your-name').val();
  var postersText = $('.post-text').val();
  nameObject = {name:postersName};
  textObject = {text:postersText};
  postArray = [nameObject,textObject]
  initialPost.push(postArray);
  $('.post-here').append("<dl>"+postersText+"<br>Posted By: <strong>"+postersName+"</strong></dl>");
  $('.your-name').val('');
  $('.post-text').val('');
// add comment box to orginal post
  $('.post-here').append('<input class = commenter-text placeholder=Comment-Text></input');
  $('.post-here').append('<input class = commenter-name placeholder=User-Name></input');
  $('.post-here').append('<button id=post-comment-button class =btn-primary>post comment</button>');
});

$('dl').each(function(){
  $('.post-here').append('<input class = commenter-text placeholder=Comment-Text></input>');
  $('.post-here').append('<input class = commenter-name placeholder=User-Name></input>');
  $('.post-here').append('<button id=post-comment-button class =btn-primary>Post Comment</button>');
});

//comments post to orginal post
$('#post-comment-button').click(function(){
  commentersText = $('.commenter-text').val();
  commentersName = $('.commenter-name').val();
  $('dl').append("<dd>"+commentersText+"  Posted By: <strong>"+commentersName +"</strong></dl>");
  $('.commenter-text').val('');
  $('.commenter-name').val('');
});
$( document ).ready(function() {});
