

////create a global object that keeps the posts, maybe
//const posts = {};
// const postTemplate = '<div class="post-container"><p class="post-content">Test</p><p class="post-author">Test</p></div>';

//when the user clicks Post button.. 
  //create a div for the entire post and child divs for the message. 
  //add the post name and content to the object, maybe

$('#submit').click(function() {
  const postContent = $('#message').val();
  const postAuthor = $('#name').val();

  //the post will contain the author name and post content, and 2 links to either remove or add comments
  //consider creating a comment section that will be part of the post template but hidden from view until the comments button is clicked
  const postTemplate = '<div class="post-container"><a class="comments-link"><span>Comments   </span></a><a class="remove-link"><span>Remove</span></a><p class="post-content">' + postContent + '</p><section class="comments-section"><div class="comments-div"></div><form class="form-class" style="margin-top:10px;" onsubmit="event.preventDefault();"><input id="" type="text" class="form-control short-input comment-content" placeholder="Comment Text"></input><input id="" type="text" class="form-control short-input comment-author" placeholder="User Name"><button class="btn btn-primary comment-button">Post Comment</button></form></section><p class="post-author">Posted by: <strong>' + postAuthor + '</strong></p></div>';  

  //create a variable that will point to the post template created for each post click. (we need this to specify which post we are manipulating and adding click events to)
  const $postTemplate = $(postTemplate);
  
 
   //if the remove link is clicked, the post will be removed from the page 
  $postTemplate.find('.remove-link').click(function() {
    $(this).parent().remove();
  });

  //if the comments link is clicked, a name and text field and comment button will be shown and if the comments are showing they will be hidden
  $postTemplate.find('.comments-link').click(function() {
    if ($(this).nextAll('.comments-section').is(':hidden')) {
      $(this).nextAll('.comments-section').show();
    } else {
      $(this).nextAll('.comments-section').hide();
    }
  })

  //the post will be posted under the heading, child of the .post-div and above the form, each new post will be added below
  $('.posts').append($postTemplate);


  //if the comment button is clicked the comments/commenter will appear under the post with an "x", comments listed top to bottom. 
  $postTemplate.find('.comment-button').click(function() {
    
    const commentContent = $(this).siblings('.comment-content').val();
    const commentAuthor = $(this).siblings('.comment-author').val();
    
    const commentTemplate = '<div><span class="comment-span">' + commentContent + '</span><span>  Posted by: <strong>' + commentAuthor + '</strong></span><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></div>';

    //add the comment template to the comments div
    const $commentTemplate = $(commentTemplate);
    $postTemplate.find('.comments-div').append($commentTemplate);

    //if the "x" is clicked, the comment will be removed
    $commentTemplate.find('.glyphicon-remove').click(function() {
      $(this).parent().remove();
    })

  })
  
})


  //use css and/or bootstrap to..
  // style the page (border btw posts),
  
  // change input field heights/ widths and margins
  
  // make glyph icon blue  

  //clear all the text input fields after clicking post or comment




    /* postTemplate = 
  <div class="post-container">
    <a class="comments-link"><span>Comments   </span></a> 
    <a class="remove-link"><span>Remove</span></a> 
    <p class="post-content">' + postContent + '</p>
    <form class="form-class" style="margin-top:30px;" onsubmit="event.preventDefault();">
      <input id="" type="text" class="form-control short-input comment-content" placeholder="Comment Text"></input>
      <input id="" type="text" class="form-control short-input comment-author" placeholder="User Name">
      <button class="btn btn-primary comment-button">Post Comment</button></form>
    <p class="post-author">Posted by: <strong>' + postAuthor + '</strong></p>
  </div>';
  */

 
  // var $post = $(postTemplate);
  // $post.find('.remove-link').click(function() {
  //   $(this).parentNode.remove();
  // })


  // $('.remove-link').click(function() {
  //   $(this).parent().remove();
  // })  


  

  // $('.comments-link').click(function() {
  //   //$(this).siblings('.form-class').toggle();
  //  // $(this).nextAll('.form-class').toggle();

  //   if ($(this).nextAll('.form-class').is(':hidden')) {
  //     $(this).nextAll('.form-class').show();
  //   } else {
  //     $(this).nextAll('.form-class').hide();
  //   }
  // })

 





$('#submit').click();



















