/*
        =================== KNOWN ISSUES ===================
        ---Page needs more comments.
        ---Could document what is happening with more logs.
        ---Need to work on spacing newlines.
        ---Create a function: projectApp that holds all the
            functions that the click events target (make
            posts private).
        ---Currently I had more ids in my HTML than I need
            Started to use .closest() and .sibling(), but
            need to finish the work.
        ---Something is wrong with saveToLocalStorage()
            were I sometimes have to remove a post twice
        ====================================================
*/
var renderPosts = function(){
  let postCheck = getFromLocalStorage();
  if(postCheck.length==0){ //If statement to pre-load original post if all posts deleted
    posts = [{
      'userName': 'Hew',
      'postMessage': 'Welcome to my project',
      'comments': [{
        'commenter': 'Hew',
        'commentMessage': 'You can make comments here'
      }],
    }]
  }
  else{
    posts = getFromLocalStorage();
  }
  $('.posts').empty();

  for (var postCount = 0; postCount < posts.length; postCount+= 1){

    var source = $('#post-template').html();
    var template = Handlebars.compile(source);
    var newHTML = template({
      postCount:postCount+1,
      userName:posts[postCount].userName,
      message:posts[postCount].postMessage});
    $(newHTML).appendTo($('.posts'));
    /* ------creates the html for the new post and appends it to div with class = "posts"------ */

    $('input').val('')
    $('textarea').val('')
  }
  console.log("appended post # "+posts.length+".")
}


var renderComments = function(thisPostId) {
  $('.comments-section').empty();

  for (var postCount = 0; postCount < posts.length; postCount+= 1){
    var post = posts[postCount];
    var index = posts.indexOf(post);
    var $post = $('.posts').find('.a-post').eq(index);

    for (var commentCount = 0; commentCount < post.comments.length; commentCount++) {
      var commentSection = postCount+1
      var comment = post.comments[commentCount];

      var source = $('#comment-template').html();
      var template = Handlebars.compile(source);
      var newHTML = template({
        commentCount:commentCount+1,
        commenter:comment["commenter"],
        commentMessage:comment.commentMessage
      });

        $(newHTML).appendTo($('#comments-section-'+commentSection));
        // ------creates the html for the new post and appends it to div with class = "posts"------
    }
  }
  $('input').val('')
  $('textarea').val('')
}
