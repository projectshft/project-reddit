//PART 1
//grab text user input
//grab name user input
//put that in posts div
  //'I like cheese - Posted By: Aaron'


$('#submit').on('click', function () {
  var userText = $('#post-text').val();
  var userName = $('#name').val(); 

 // $('.posts').append('<div class="post">'); ??

  $('.posts').append('<p id="post">' + '<button type="button" class="btn btn-link" id="remove">remove</button>' + '<button type="button" class="btn btn-link" id="comment">comment</button>'  + userText + ' - Posted By: ' + userName +'</p>'); 

  $('.posts').append('<hr>');

}); 


//PART 2
//add remove and comments buttons in front of post
  // looks like --- 'remove comment I like chees - Posted By: aaron'
// use this for remove and comment <button type="button" class="btn btn-link">Link</button>
//add a new <div> with each post and comments inside a <p>???? 

//onClick event listener for the comment and remove
  //changes 'comment' to 'comments'
  //opens up comments if there are comments
    //add a new div <div 'id="comments">
    //has a form with posts and name boxes
    //submit comment button 
      //onClick event listener that posts a comment 
  //remove button removes comments
  

//remove button 
$('.posts').on('click', 'p', function (e) {
  var $element = $(e.target);
  
  if($element.attr('id') === 'remove') {
    $element.closest('p').remove(); 
  }; 
  
});

//comment button
$('.posts').on('click', 'p', function (e) {
  var $element = $(e.target);
  
  if($element.attr('id') === 'comment') {
   $(this).append('<div id="comments-element">');
   //$('#comments-form').css("display", "block"); 
   $('#comments-element').append($('#comments-form').show());
  };
});

//submit comment 
$('#comments-form').on('click', 'button', function (e) {

})


