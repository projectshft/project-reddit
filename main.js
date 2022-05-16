$('#submit').click(function () {
  var text = $('#message').val();
  var name = $('#name').val() + ' <button>Remove Comments</button>';
  var newP = {html: text + ' - Posted By: ' + name};
     if (text.length) {
       $('<p/>', {html: text + ' - Posted By: ' + name}).appendTo('div.posts');
    
    
     $("form").trigger("reset");
  }

});
 
  

$('.posts').on('click', 'button', function (el){
   $(this).parent().remove()


});




