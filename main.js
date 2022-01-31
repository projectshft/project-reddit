var userName = $('#name');
var message = $('#message');
var submit = $('.submit-btn');
var $remCom = ('<strong>X </strong>')

$('.submit-btn').on('click', function () {
  var nameVal = $(userName).val();
  var msgVal = $(message).val();

  if (msgVal === "") {
    window.alert("Your message cannot be empty!");
  }

  if (msgVal !== "") {
    $('.comments').append($remCom + msgVal + ' - Written by: ' + nameVal + '<br>');
  }

  $(userName).val("");
  $(message).val("");
});

$('.comments').on('click', function (e) {
  var $element = $(e.target);

  $element.remove();
  
})
