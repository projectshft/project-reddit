// // $(document).ready(function() {
//   //form submit
//   $('#postbtn').on('click', function() {
//     // avoid page reload
//     // e.preventDefault()

    // get message
//     let getMessage = $('#postname').val();
//     var getPost = $('#posttext').val();
//     console.log(click)
//   //   console.log(getMessage)
//   //   console.log(getPost);

//   //   if(getMessage !== '') {
//   //     // prepare messgage
//       let newMessage = "<p class='message'>" + getMessage + "</p>" + "<p>" + getPost + "</p>";

// //   //     //apend message to box
//       $(newMessage).appendTo('#postin');

//   //     //clear the form
//   //     $('input').val("");
//   //   }
//   // });

// console.log('hello')
//   
// var commentBox = function test() {
//   var r = "$('<input/>').attr({
//                type: "button",
//                id: "field"
//           })";
// }
// $("body").append(r);

var postButton = $ (".post")
var commentLink = $('#commentlink')


var clickPost = $(postButton).on('click', function () {

  var place = $('#place')
  var getMessage = $('#postname').val();
  var getPost = $('#posttext').val();
  
  var commentBubble = $('<input id="commentbubble" class="alert alert-success" role="alert"/>')
  var commentBtn = $('<input id="commentbar" type="button" value="Comment"/>');
  var commentBar = $('<input id="commenttab" placeholder="comment" type="text" />')
  var nameCommentBar = $('<input id="commentname" placeholder="name" type="text" />')


  $('<h4>' + getMessage + '</h4>').appendTo(place);
  $('<p>' + getPost + '</p>').appendTo(place);
  $(commentBtn).appendTo(place);
  console.log('click')

$("#commentbar").on('click', function () {
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
  })
  postComment();
  // $(commentPost).appendTo("#commenttab")
})
})

clickPost();