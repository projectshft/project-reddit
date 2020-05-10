

////create a global object that keeps the posts, maybe
//const posts = {};
// const postTemplate = '<div class="post-container"><p class="post-content">Test</p><p class="post-author">Test</p></div>';

//when the user clicks Post button.. 
  //create a div for the entire post and child divs for the message. 
  //add the post name and content to the object, maybe

$('#submit').click(function() {
  const postContent = $('#message').val();
  const postAuthor = $('#name').val();

  //the post will contain the author name and post content, and 2 links to either remove or add comments. Comment section will be part of the post template but hidden from view until the comments button is clicked
  const postTemplate = 
  '<div class="post-container">' + 
    '<a class="comments-link links"><span>Comments</span></a>' +
    '<a class="remove-link links"><span>Remove</span></a>' + 
    '<p class="post-content">' + postContent + '</p>' + 
    '<section class="comments-section">' + 
      '<div class="comments-div"></div>' +
      '<form class="form-class form-inline" style="margin-top:10px;" onsubmit="event.preventDefault();">' +
        '<input type="text" class="form-control-sm comment-content" placeholder="Comment Text"></input>' + 
        '<input type="text" class="form-control-sm comment-author" placeholder="User Name">' + 
        '<button class="btn btn-primary comment-button">Post Comment</button>' +
      '</form></section>' + 
    '<p class="post-author">Posted by: <strong>' + postAuthor + '</strong></p></div>';  

  //create a variable that will point to the post template created for each post click. (we need this to specify which post we are manipulating and adding click events to)
  const $postTemplate = $(postTemplate);
  
 
   //if the remove link is clicked, the post will be removed from the page 
  $postTemplate.find('.remove-link').click(function() {
    $(this).parent().remove();
  });

  //if the comments link is clicked, the comments, comment input fields and comment button will toggle (hide/show)
  $postTemplate.find('.comments-link').click(function() {
    $(this).nextAll('.comments-section').toggle();
  })

  //the post will the child of the .posts div and above the form, each new post will be added below the prevoius post
  $('.posts').append($postTemplate);


  //if the comments button is clicked the comments/commenter will be added under the post, with an "x" for comment deletion, comments listed top to bottom. 
  $postTemplate.find('.comment-button').click(function() {
    
    const commentContent = $(this).siblings('.comment-content').val();
    const commentAuthor = $(this).siblings('.comment-author').val();
    
    const commentTemplate = 
    '<div class="comment-row">' +
      '<span class="comment-span">' + commentContent + '</span>' +
      '<span>Posted by: <strong>' + commentAuthor + '</strong></span>' +
      '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>' +
    '</div>';

    //add the comment template to the comments div
    const $commentTemplate = $(commentTemplate);
    $postTemplate.find('.comments-div').append($commentTemplate);

    //if the "x" is clicked, the comment will be removed
    $commentTemplate.find('.glyphicon-remove').click(function() {
      $(this).parent().remove();
    })

    //clear the comment input fields after clicking Comment button
    $(this).siblings('.comment-content').val('');
    $(this).siblings('.comment-author').val('');

  })
  //clear the post input fields after clicking Post button
  $('#message').val('');
  $('#name').val('');
})























