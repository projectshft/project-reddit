

  $('#submit').click(function (){
  
    var userInputName = $('#name').val();
      var userInputMessage = $('#message').val();
    
    var template = function(){
      var newPostDiv = $('<div></div>').addClass("post");
      
     
      $('<button></button>').addClass("btn btn-link btn-xs remove").text('Remove').appendTo(newPostDiv);
      $('<p></p>').text(userInputMessage + ` - Posted By: ` + userInputName).appendTo(newPostDiv);  
      $('<hr>').appendTo(newPostDiv);
      
      $('.posts').append(newPostDiv);
    };
  
  var $post = $(template);
  
  return $post;
});


$('.posts').on('click', '.remove',function(e){
var $element = $(e.target);
$element.closest('div').remove();
});
  

    

