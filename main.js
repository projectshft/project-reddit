var $userName = $('#name');
var $message = $('#message');
var submit = $('.submit-btn');

$('.submit-btn').on('click', function () {
  var $nameVal = $userName.val();
  var $msgVal = $message.val();

  if ($msgVal === "" || $nameVal === "") {
    window.alert("please complete all fields");
  }

  if ($msgVal !== "" && $nameVal !== "") {
    $('.comments').append(`<div class ="post-row"<div><p id="post-content"><button class="deletebtn">Delete</button><button class="comment-btn">Comment</button> "${$msgVal}" - Posted By: <span><strong>${$nameVal}</strong></span></p></div></div><hr>`);
  }

  $userName.val("");
  $message.val("");
});
 

$('.comments').on('click', '.deletebtn', function (e) { 
  $(e.target).parent().remove();
});

$('.comments').on('click', '.comment-btn', function () {
  $('.comment-form').toggle('slow');
 }); 

$('#comment-submit').on('click', function () {
 var $commentName = $('#comment-name').val();
 var $commentMessage = $("#comment-message").val();

$('.post-row').append(`<div class="comment-row"><p id="comment-content"><button class="deletebtn">Delete</button> "${$commentMessage}" - Posted By: <span><strong>${$commentName}</strong></span></p></div>`);  

$('.comment-form').trigger('reset');

$('.commentbtn').on('click', function () {
    $('.comment-row').toggle();
 });

 $('.comment-row').on('click', '.deletebtn', function (e) { 
  $(e.target).parent().remove();
});
});