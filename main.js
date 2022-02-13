var availablePosts = posts;

var createPost = function (postMessage, postName) {
  //var $submitPost = $("#button");
  var $postMessage = $('.postMessage').val();
  var $postName = $('.postName').val();
  var $viewPosts = $('.view-posts');

  var newPost = {
    message: $postMessage,
    name: $postName,
    comments: []
  };

  posts.push(newPost);

  console.log(posts);
  
  var postTemplate = 
    '<tr class="post">' +
      '<td class="text-of-post">' + $postMessage + ' </td>' +
      '<td class="name-of-post">' + ' - posted by: ' + $postName + 
      '</td>' +
      '<td class="post-actions">' + 
        '<a class="remove-post">' + 'Delete' + '</a>' + 
        '&nbsp;//&nbsp;' +
        '<a class="comment-on-post">' + 'Comments' + '</a>' +
      '</td>' + 
    '</tr>' +
    '<tr class="view-comments">' +
    '</tr>'
    ;

  $viewPosts.append(postTemplate);

  $('.view-posts').on('click','.comment-on-post', function () {
    viewComments();
  });

  
  $('.remove-post').on('click', function (e) {
    var $element = $(e.target);
    $element.closest('.post').remove();
  });

};

var viewComments = function () {
  var $commentMessage = $('.commentMessage').val();
  var $commentName = $('.commentName').val();
  var $viewComments = $('.view-comments');

  console.log('click');

  $viewComments.append('appended');

  var newComments = {
    commentMessage: $commentMessage,
    commentName: $commentName
  };

  //posts.comments.push(newComments);

  var commentTable = function (commentMessage, commentName) {
    var commentTemplate = 
      '<td class="comment">' +
        '<p class="text-of-comment">' + commentMessage + 
        '&nbsp;'+
        ' - posted by: ' + commentName + 
      '</td>' + 
      '<td class="post-actions">' + 
        '<a class="remove-post">' + 'Delete' + '</a>' + 
        '&nbsp;//&nbsp;' +
        '<a class="comment-on-post">' + 'Comments' + '</a>' +
      '</td>' 
      ;

    var $commentRow = $(commentTemplate);


    for (var i = 0; i < posts.comments.length; i++) {
      var $postComments = commentTable(posts.comments[i].commentMessage, posts.comments[i].commentName);
      $viewComments.append($postComments);
    }
  };

  var commentFormTemplate = 
    '<div>' +
    '<form onsubmit="event.preventDefault();">' +
    '<h5>' + 
    'Add a new comment' + 
    '</h5>' + 
    '<div class="form-group"><input id="comment-name" type="text" class="form-control commentName" placeholder="Name"></input></div>' +
    '<div class="form-group"> <textarea id="comment-message" type="text" class="form-control commentMessage" placeholder="Message"></textarea></div>' +
    '<button id="submit-comment" class="btn btn-primary">' + 
    'Comment' + 
    '</button></form>' +
    '</div>'
    ;

  $viewComments.append(commentFormTemplate);
  $viewComments.append('late append');

  // return $commentRow;
  // };  
};




$('button').on('click', function () {
  // var text = $('#message').val();
  
  // alert(text);

  createPost();
});