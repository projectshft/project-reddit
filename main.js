var i = 0; 
// functionalizes a submit button
$('.btn-primary').on('click', function (){
  var $name = $('#name').val()
  var $message = $('#message').val()

  // posts userInput
  $('.posts').append(`<p><a>remove</a> ${$message} - Posted By: ${$name}</p>`)

  // resets post form
  $(document).ready(function() {
    $('#form')[0].reset();
  });

  // // creates a comment row, comments div and userInput template
  $('.posts').append('<div class="row comments-row"><div class="col-md-6 col-md-offset-3"><div class="comments"></div><form style="margin-top:30px;" id="form" onsubmit="event.preventDefault();"><div class="form-group"><input id="commenter-name" type="text"class="form-control"placeholder="Your Name"></input></div><div class="form-group"><textarea id="comment" type="text"class="form-control"placeholder="Post Comment"></textarea></div><button id="submit" class="btn btn-secondary">Submit Comment</button></form></div>');
  
  
  // functionalizes 'submit comment' button
  $(document).ready(function() {
  $('.btn-secondary').on('click', function (){
    var $commenterName = $('#commenter-name').val();
    var $comment = $('#comment').val();
  
    // resets comment form input
    $('#form')[0].reset();
      
    
    // appends comment to to post
    $('.comments').append(`<p><a>remove comment</a> ${$comment} - Posted By: ${$commenterName}</p>`);
    
    // creates unique button class for comments
    // $('.posts').attr("class", "comments" + i);
    // // $('.comments').attr("id", "commenter-name" + i);
    // // $('.comments').attr("id", "comment" + i);
    // i++;
    });

  });     
});
 

// functionalizes remove anchor
$(document).ready(function() {
  $('.posts').on('click', 'a', function() {
    $(this).closest('p').remove();
   });

});

