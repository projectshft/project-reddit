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
    '</tr>' +
    '<tr class="post-comments">' +
    '</tr>'
    ;

  $viewPosts.append(postTemplate);

  $('.view-posts').on('click','.comment-on-post', function () {
    //viewComments();
    postToComments();
  });

  
  $('.remove-post').on('click', function (e) {
    var $element = $(e.target);
    $element.closest('.post').remove();
  });

};

var postToComments = function () {
  var $postComments = $('.post-comments');
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

  $postComments.append(commentFormTemplate);

  $('#submit-comment').on('click', function () {
    // var $commentMessage = $('.commentMessage').val();
    // var $commentName = $('.commentName').val();
    // var newComments = {
    //   commentMessage: $commentMessage,
    //   commentName: $commentName
    // };
  
    // posts.comments.push(newComments);
    // console.log(posts.comments);
    viewComments();
  });
  // $viewComments.append('late append');

  // return $commentRow;
  // };  
};


var viewComments = function () {
  var $commentMessage = $('.commentMessage').val();
  var $commentName = $('.commentName').val();
  var $viewComments = $('.view-comments');
  

  var commentTemplate = 
    '<tr class="comment">' +
      '<td class="the-commenter">' + $commentName + ' commented: ' + '</td>' +
      '<td class="the-comment">' +
        $commentMessage + 
      '</td>' + 
      '<td class="comment-actions">' + 
        '<a class="remove-comment">' + 'Delete' + '</a>' + 
      '</td>' +
    '</tr>' 
    ;

  $viewComments.append(commentTemplate);

  $('.remove-comment').on('click', function (e) {
    var $element = $(e.target);
    $element.closest('.comment').remove();
  });

    // var $commentRow = $(commentTemplate);


    // for (var i = 0; i < posts.comments.length; i++) {
    //   var $postComments = commentTable(posts.comments[i].commentMessage, posts.comments[i].commentName);
    //   $viewComments.append($postComments);
    // }
  
};




$('#submit').on('click', function () {
  createPost();
});