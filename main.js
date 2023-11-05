function form() {
  let forms = ('.form-control');
  
  forms.each( function(input) {
    (forms[input]).val('')
  })
}


let mesg = function(comment, by) {
  let newPage = 
  '<div class="new-posts">'
  + '<div class="actual-post">'
    + '<div>'
      + '<div class="row-10 post">'
        + '<p class="message">'
          + '<strong>Comment: </strong>' + comment
          + '</p>'
        + '</div>'
      + '<div class="row-10 author">'
        + '<p class="posted">'
          + '<strong>Posted By: </strong>' + by
          + '</p>'
        + '</div>'
      + '</div>'
      + '</div>'
    + '</div>'
  + '</div>'
+ '</div>'
;
  
let post = (newPage);
return post;
}


$('#submit').on('click', function () {
  var post = $('#post').val();
  var name = $('#name').val();
        var postSection = $('.post-container');
  var newPost = mesg(post, name);

  if (post && name) {
    postSection.append(newPost);
  }

  form();
})