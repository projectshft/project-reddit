$('#submit').click(function () {
  var post = $('#post').val();
  var name = $('#name').val();
  $('.posts').append("<div id='postContainer'><span id='remove'><font color='#0000ff'>Remove</font></span>" + " " + "<span id='comment'><font color='#0000ff'>Comment</font></span>" +  " " + post + ' - Posted By: ' + name + "</div>");
 
});

$('.posts').on('click', '#remove', function (e) {
  
  var $element = $(e.target);
  
  $element.remove();
});



//  step 1: append buttons on line 4, have all HTML wrapped in <div> with class of post -- add in entire comments section of html
//      every posts div should have a div of comments
//      in CSS you can hide comments
//  step 2: remove 
//  step 3: listen for clicks hide/show buttons every post 

// //$('.posts').hover(function() {
//   $(this).css('text-decoration','none');
//   },
//   function() {
//   $(this).css('text-decoration','underline');
//   });


// "<button class='btn btn-sm' id='remove'><font color='#0000ff'>remove</font></button>" + " " + "<button class='btn btn-sm'><font color='#0000ff'>comments</font></button>"