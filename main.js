var makePost = function(text, writer) {
  var template = 
  '<div class="new-posts">'
+ '<div class="current-post">'
+ '<div>'
+ '<div class="row-10">'
+ '<p class="post-message">'
+ '<em>Message: </em>' + text
+ '</p>'
+ '</div>'
+ '<div class="row-10">'
+ '<p class="made-post">'
+ '<strong>Posted By: </strong>' + writer
+ '</p>'
+ '</div>'
+ '</div>'
+ '<div class="row-10">'
+ '<button type="button" class="btn btn-secondary remove-button">Remove Post</button>'
+ '</div>'
;

let $post = $(template);
return $post;
}



$('#submit').on('click', function () {
  var $post = $('#post').val();
  var $name = $('#name').val();
  var postContainer = $('.post-container');
  var $newPost = makePost($post, $name);

  postContainer.append($newPost);

  postContainer.on('click', '.remove-button', function (e) {
    $(e.target).closest('.new-posts').remove();
  })
});

