var createPost = function (postMessage, postName) {
  //var $submitPost = $("#button");
  var $postMessage = $('.postMessage').val();
  var $postName = $('.postName').val();
  var $viewPosts = $('.view-posts');


  var template = 
    '<tr class="post">' +
      '<td class="text-of-post">' + $postMessage + ' </td>' +
      '<p>'+
      '<td class="name-of-post">' + ' - posted by: ' + $postName + 
      '</td>' + '</p>' +
      '<td class="remove-post">' + 
    '&nbsp;&nbsp;&nbsp;' + 
    'delete' + 
    '</td>' +
    '</tr>' + 
    '<tr class="post-actions">' + 
    '<td class="comment-post">' + 
    'Comment' + 
    '</td>' + '</tr>'
    ;

  $viewPosts.append(template);

  
};


$('button').on('click', function () {
  // var text = $('#message').val();
  
  // alert(text);

  createPost();
});