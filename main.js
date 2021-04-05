//PART 1
//grab text user input
//grab name user input
//put that in posts div
  //'I like cheese - Posted By: Aaron'

$('#submit').on('click', function () {
  var userText = $('#post-text').val();
  var userName = $('#name').val(); 
  $('.posts').append('<p>' + userText + ' - Posted By: ' + userName + '</p'); 
  $('.posts').append('<hr>');
});

//PART 2
//add remove and comments buttons in front of post
  // 'remove comments I like chees - Posted By: aaron'
