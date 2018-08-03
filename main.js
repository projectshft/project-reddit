//listen for clicks and get values from input boxes
var onClick = $('button').on('click', function () {
  var postText = $('#post-text').val();
  var yourName = $('#your-name').val().bold();

//add post to the page
  if (postText == '' && yourName == '') {
    alert('You must enter text in both fields.');
  }
  else if (postText == null && yourName == null) {
    alert('You must enter text in both fields');
  }
  else if (postText != '' && yourName != '') {
    $('.comments').append('<li>' + "<a>" + "remove" + " " + "</a>" + "<a>"
    + "comments" + "</a>" + " " + postText + '</li>' + '<li>'
    + 'Posted by: ' + yourName + '</li>' + '<br>');
  }
});

var remove = $("#remove").click(function(){
    $("li").remove();
});
//remove items from page
// $('body').on('click', 'li', function () {
//   $(this).remove();
// });

//get user input upon hitting enter
// function runScript(e) {
//     if (e.keyCode == 13) {
//         var userInput = document.getElementsByClass("user-input").value;
//         onClick();
//     }
// }
