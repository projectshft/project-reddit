//PART 1
//grab text user input
//grab name user input
//put that in posts div
  //'I like cheese - Posted By: Aaron'

//POSTS
$('#submit').on('click', function () {
  var userText = $('#post-text').val();
  var userName = $('#name').val(); 

  $('.posts').append('<div id="post-el"><p id="post">' + '<button type="button" class="btn btn-link" id="remove">remove</button>' + '<button type="button" class="btn btn-link" id="comment">comment</button>'  + userText + ' - Posted By: ' + userName +'<hr></p></div>'); 
  //$('#post').append('<div id="comment-el">')
  $('.posts').append($('#comments-form')); 

}); 

//PART 2
//remove button 
$('.posts').on('click', 'p', function (e) {
  var $element = $(e.target);
  
  if($element.attr('id') === 'remove') {
    $('.posts').append($('#comments-form')); 
    $element.closest('div').remove(); 
  } else if($element.attr('id') === 'remove-comment') {
    $element.closest('p').remove();
  }
}); 

//comment button
$('.posts').on('click', 'p', function (e) {
  var $element = $(e.target);
  
  if($element.attr('id') === 'comment') {
   $element.closest('p').append($('#comments-form'));
   $('#comment-el').show();   
   $('#comments-form').show();
  // $('#comments-form').toggle();
  } 
});

//submit comment 
$('#comments-form').on('click', 'button', function (e) {
  var $element = $(e.target);

  var userComment = $('#post-comment').val();
  var userCommentName = $('#name-comment').val();

  $element.closest('p').append('<div id="comment-el">' + '<p id="posted-comment">' + '<button type="button" class="btn btn-link" id="remove-comment">remove</button>' + userComment + ' - Posted by: ' + userCommentName + '</p>' + '</div>');

  $('.posts').append($('#comments-form')); 
  $('#comment-el').show(); 
  $('#comments-form').hide();
});
//not working great

