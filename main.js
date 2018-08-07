var comment;
var edit;
var remove;
var postNum = 0;
var commentNum = 0;
var comListNum = 0;

$('button').click(function() {
  var newPost = $('#forum').append('<div id="post' + postNum + '"></div>');

  var text = $('#post' + postNum).append('<hr><li id="textArea">' + $('#text').val() + '</li>');
  var name = $('#post' + postNum).append('<li><h5>' + 'Posted by: ' + '<b>' + $('#name').val() + '</li></b></h4>');
  var comment = $('#post' + postNum).append('<a class="comment glyphicon glyphicon-comment" style="display:inline-block; width: 50px;"><div id="msgbox"></div></a>');
  var edit = $('#post' + postNum).append('<a class="edit glyphicon glyphicon-edit" style="display:inline-block; width: 50px;"></a>');
  var remove = $('#post' + postNum).append('<a class="remove glyphicon glyphicon-remove" style="display:inline-block; width: 50px;"></a>');

  postNum++;
//Above are the elements created after the user makes an input of initial name and post.
  $('a.remove').click(function(e) {
    $(e.target).parent().remove();
  });
//Above removes each single post
  $('a.comment').click(function(e) {
    // var commentSubmit = $('#post' + postNum).append('<div class="comment-box' + commentNum + '"></div>')
    var commentBox = $(e.target).parent().append('<div class="comment-box' + commentNum +'"><input id="usernameText" type="text" class="form-control" placeholder="Username" class="userName"><input id="commentText" type="text" class="form-control" placeholder="Add Comment Here!" class="comment"></input></input><button id="post-comment" type="button" class="comment-button">Post</button></div>');
    commentNum++;
//Above creates a comment box for each post.
    $('#post-comment').click(function(e) {
    var newComment = $(newPost).append('<div class="comment-area' + postNum + '"></div>')
    var commentList = $(e.target).parent().append('<hr><li><div class="comment-area' + comListNum +'">' + $('#commentText').val() + ' - Comment made by: <b>' + $('#usernameText').val() + '</b></div></li>');

    });
// Above posts each comment underneath it's appropriate post.... however I can only get the first post to work. I believe it's something to do with parent elements.

  });


});
