var $postSubButton = $('.post-button');
var $authorInput = $('.post-author');
var $messageInput = $('.post-message');
var $posts = $('.posts');


  $postSubButton.on('click', function (event) {
    var message = $messageInput.val();
    var author = $authorInput.val();
    
    var postContent = '<p>' + message + ' - <span>Posted By: ' + author + '</span><hr>';
  
    $posts.append(postContent);
  });

