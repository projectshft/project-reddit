var posts = [];
var source = $('#post-template').html();
console.log(source);
var template = Handlebars.compile(source);

$('#post-button').click(function(e){
  e.preventDefault();
  var post = {
    name: $('#post-name').val(),
    message: $('#post-message').val()
  };
  posts.push(post);
  renderPosts(post);
})

var renderPosts = function (post) {
  var newHTML = template(post);
  console.log('The newHTML is: ', newHTML);
  $('.post-container').append(newHTML);
}
