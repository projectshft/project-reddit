

////create a global object that keeps the posts, maybe
const posts = {};
// const postTemplate = '<div class="post-container"><p class="post-content">Test</p><p class="post-author">Test</p></div>';

//when the user clicks Post button.. 
  //create a div for the entire post and child divs for the message. 
  //add the post name and content to the object, maybe

$('#submit').click(function() {
  const postContent = $('#message').val();
  const postAuthor = $('#name').val();

  //the post will contain the author name and post content, and 2 links to either remove or add comments
  //consider creating a comment section that will be part of the post template but hidden from view until the comments button is clicked
  const postTemplate = '<div class="post-container"><a class="comments-link"><span>Comments   </span></a><a class="remove-link"><span>Remove</span></a><p class="post-content">' + postContent + '</p><form class="form-class" style="margin-top:30px;" onsubmit="event.preventDefault();"><input id="" type="text" class="form-control short-input" placeholder="Comment Text"></input><input id="" type="text" class="form-control short-input" placeholder="User Name"><button class="btn btn-primary">Post Comment</button></form><p class="post-author">Posted by: <strong>' + postAuthor + '</strong></p></div>';  
  
  // const commentTemplate = '<form style="margin-top:30px;" onsubmit="event.preventDefault();"><input id="" type="text" class="form-control" placeholder="Comment Text"></input><input id="" type="text" class="form-control" placeholder="User Name"><button class="btn btn-primary">Post Comment</button></form>';

  //$('.post-content').append($(commentTemplate));
  //$(commentTemplate).insertAfter('.post-content');
  //look up how to add line between posts in bootstrap
 
  //the post will be posted under the heading, child of the .post-div and above the form, each new post will be added below
  $('.posts').append(postTemplate);

  //if the remove link is clicked, the post will be removed from the page AND from the post object
  $('.remove-link').click(function() {
    $('.post-container').remove();
  })  

  //if the comments link is clicked, a name and text field and comment button will be shown and if the comments are showing they will be hidden
  $('.comments-link').click(function() {
    if ($('.form-class').is(':hidden')) {
    $('.form-class').show();
    } else {
      $('.form-class').hide();
    } 
  })

 //if the comment button is clicked the comments/commenter will appear under the post with an "x". The comment and comment author will go into the posts object as well.

//if the "x" is clicked, the comment will be removed

//create templates that will be used for each post and comment section 
 
})


$('#submit').click();



















