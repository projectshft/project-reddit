
$('#submit').on('click', function() {
  var text = $('#text').val();
  var name = $('#name').val();

  //comments appear above inputs

$('.posts-appear').append('<div class="post">' + text + " " + ' Posted By: ' + " " + name + '<button type="button" class="btn btn-link" id="option1" >Comment</button>' + '<button type="button" class="btn btn-link" id="option2" >Remove</button>');



$("#option2").on('click', function () {
  return $('text').remove();
});
  




})


