//When post button is clicked, post name & message above add new post
var addNewPost = $('button').on('click', function (e) {
  e.preventDefault();

  var name = $('.posts').append('<li><strong>'+ $('#name').val()+ '</strong></li>')

  var post = $('.posts').append('<li>'+ $('#message').val()+'</li>')
})

//add remove and comment links with new posts


//when comments is clicked small form for text and username (post button)
  //1. click comments link and open small form for text and username & post button

  //2. when user clicks post add to list of comments

  //3. when comment is posted, add X and when clicked, deletes posts
