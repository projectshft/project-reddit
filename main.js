//PART 1
//grab text user input
//grab name user input
//put that in posts div
  //'I like cheese - Posted By: Aaron'

$('#submit').on('click', function () {
  var userText = $('#post-text').val();
  var userName = $('#name').val(); 

  var $postElement = $('.posts').append('<div data-id="post">'); 

  $postElement.append('<p>' + '<button type="button" class="btn btn-link" id="remove">remove</button>' + '<button type="button" class="btn btn-link" id="comment">comment</button>'  + userText + ' - Posted By: ' + userName + '</p'); 

  $('.posts').append('<hr>');
});

//PART 2
//add remove and comments buttons in front of post
  // 'remove comments I like chees - Posted By: aaron'
//maybe add a <span> before the <p> with the posts and fill it with the 2 links??? 
//<button type="button" class="btn btn-link">Link</button>
//add a new <div> with each post and comments???? 

//onClick event listener for the comment and remove
  //changes 'comment' to 'comments'
  //opens up comments if there are comments
    //add a new div <div 'id="comments">
    //has form with posts and name boxes
    //submit comment button 
      //onClick event listener that posts a comment 
  //remove button removes comments 
  
