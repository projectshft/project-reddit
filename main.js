// on submitting form, establish variables from the input fields
$('#submit').on('click', function () {
  let $userName = $('#name').val();
  let $userMessage = $("#message").val();
  let hRule = '<hr />'
  
  // append a post based on the input fields to the posts class with remove and comment buttons inline.
  $('.posts').append(`<div class ="post-row"<div><p id="post-content"><button class="removebtn">Remove</button><button class="commentbtn">Comment</button> "${$userMessage}" - Posted By: <span><strong>${$userName}</strong></span></p></div></div>${hRule}`);

  // reset the form to placeholder text upon submitting.
  $('.post-form').trigger('reset');

  // remove post function
  $('.posts').on('click', '.removebtn', function (e) { 
    $(e.target).parent().remove();
  });

  // on clicking comment button, reveal comment submission form
  $(".commentbtn").on('click', function () {
    $('.comment-form').toggle();
   }); 

  // on submitting comment form, establish variables from the input fields
  $('#comment-submit').on('click', function () {
    let $commentName = $('#comment-name').val();
    let $commentMessage = $("#comment-message").val();

    // append a comment to the post-row with remove button
    $('.post-row').children().append(`<div class="comment-row"><p id="comment-content"><button class="removebtn">Remove</button> "${$commentMessage}" - Posted By: <span><strong>${$commentName}</strong></span></p></div>`);  

    // reset comment form to placeholder text
    $('.comment-form').trigger('reset');
  
    // on clicking comment button, show/hide comments
    $('.commentbtn').on('click', function () {
       $('.comment-row').toggle();
    });
  
    // remove comment function
    $('.comment-row').on('click', '.removebtn', function (e) { 
      $(e.target).parent().remove();
    });
  
  })  

});  
// all of this works for one post and one comment. because I'm appending comments to the .post-row class, they appear on every post I make.
// in general functionality breaks down after one post with one comment. Not sure how to fix it!
   