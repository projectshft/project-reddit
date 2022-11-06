function clearForm() {
  let $forms = $('.form-control');
  
  $forms.each( function(input) {
    $($forms[input]).val('')
  })
}


var createNewPost = function(message, author) {
  var template = 
  '<div class="new-posts">'
  + '<div class="actual-post">'

    + '<div>'
      + '<div class="row-10 post">'
        + '<p class="post-message">'
          + '<strong>Message: </strong>' + message
          + '</p>'
        + '</div>'
      + '<div class="row-10 author">'
        + '<p class="post-author">'
          + '<strong>Posted By: </strong>' + author
          + '</p>'
        + '</div>'
      + '</div>'

    + '<div class="row-10">'
      + '<div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">'
        + '<div class="btn-group mr-2" role="group" aria-label="First group">'
          + '<button type="button" class="btn btn-secondary remove-button">Remove Post</button>'

          + '</div>'
        + '</div>'
      + '</div>'
    + '</div>'

  + '</div>'
+ '</div>'
+ '</div>'
;
  
let $post = $(template);
return $post;
}


$('#submit').on('click', function () {
  var $post = $('#post').val();
  var $name = $('#name').val();
        var $postSection = $('.post-container');
  var $newPost = createNewPost($post, $name);

  if ($post && $name) {
    $postSection.append($newPost);
  }

  clearForm();

  $postSection.on('click', '.remove-button', function (e) {
    $(e.target).closest('.new-posts').remove();
  })
})


