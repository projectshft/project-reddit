
// $('.myclone').clone().appendTo("body")
var newPost = $("#newpostbtn")
var postButton = $ (".post")
var commentLink = $('#commentlink')
var clone = $('.clone')

$(newPost).on('click', function () {

  $('.myclone').first().clone(true).appendTo("body")
  clickPost();
})



var clickPost = $(postButton).on('click', function () {
 

//post variables
  var place = $('#place')
  var getMessage = $('#postname').val();
  var getPost = $('#posttext').val();
  

  //Reset function
  var resetInput = function () {
    $('#posttext').val('');
    $('#postname').val('');
  }
  //create comment varaibles
  var commentBubble = $('<input id="commentbubble" class="alert alert-success" role="alert"/>')
  var commentBtn = $('<input id="commentbar" type="button" value="Comment"/>');
  var commentBar = $('<input id="commenttab" placeholder="name" type="text" />')
  var nameCommentBar = $('<input id="commentname" placeholder="comment" type="text" />')

//append to postBox
  $('<h4>' + getMessage + '</h4>').appendTo(place);
  $('<p>' + getPost + '</p>').appendTo(place);
  // $('#postname').css('display', 'none')
  // $('#posttext').css('display', 'none');
  // $(postButton).css('display', 'none');
  $(commentBtn).appendTo(place);
  console.log('click')
resetInput();

//comment function
$("#commentbar").on('click', function () {
  //reset comments
  var resetComments = function () {
    $('#commentname').val('');
    $('#commenttab').val('');
  }
  $(commentBar).appendTo(place)
  $(nameCommentBar).appendTo(place)
  // $(commentBubble).appendTo('#commentsection');
  $('#commentbar').css('display', 'none');

  var postComment = $('#commentbtn').on('click', function () {
    var getCommentName = $('#commenttab').val();
    var getComment = $('#commentname').val();

    $('<h4>' +  getCommentName + '</h4>').appendTo('#commentsection');
    $('<p>' + getComment + '</p>').appendTo('#commentsection');
    console.log('click')
    resetComments();
  })
  postComment();
  // $(commentPost).appendTo("#commenttab")
})
})

// clickPost();
$( document).on( "click", function( event ) {
  $( event.target ).closest(clickPost);
})
