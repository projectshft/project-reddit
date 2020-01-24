$('.btn btn-primary').on('click', 'div', function () {
 $(".form-control").submit();
 debugger;
 console.log('is this working?')
});

// $("form").submit(function(){
//   alert("Submitted");
// });

$('.btn btn-primary').click(function () {
  var userName = $('.userName').val();
  console.log('hi');
  $('.posts').append('<div>' +  userName + '</div>');
  var userInput = $('.userInput').val();
  console.log('hi');
  $('.posts').append('<div>' +  userInput + '</div>');


  //two methods - click v. on click
  // var deleteName = $('li').click(function () {
  //   $(this).remove();
  });
//
// $('.students').on('click', 'li', function(){
//  $(this).remove();
