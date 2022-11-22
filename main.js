
const makePost = function() {
  $('#submit').on('click', function() {
    let userName = $('#name').val();
    let userMessage = $('#message').val();

    let postTemplate = '<div><p><a class="remove">remove</a> <a class="comments">comments</a> ' + userMessage + ' - Posted By: ' + userName + '</p><hr></div>';

    $('.posts').append(postTemplate);
    $("form").trigger("reset");
  });
}


makePost();


// const makeComments = function() {
//   $('.comments').on('click'), function(e) {
//     // if comments are hidden
//       // show comments and show input boxes of e.target
//   }
// }


