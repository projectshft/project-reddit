/* I worked on it for 20+ hours and could not for the life of me figure it out :( */

var createPost = $('#post').on('click', function () {
  var postCounter = 0;

  var textInput = $('.post-input')[0].value;
  var nameInput = $('.name-input')[0].value;

  var $newPost = document.createElement('div');
  var $postAuthor = document.createElement('div');
  var $post = document.createElement('tr')
  var $commentLink = document.createElement('div')

  var $commentSection = $('.comments')[0];
  $commentSection.cloneNode(true)
  

  $newPost.classList.add('fs-4');
  $postAuthor.classList.add('fs-6');
  $post.classList.add('card');
  $commentLink.classList.add('link-primary', 'comment-button');

  var postElement = document.createTextNode(textInput);
  var nameElement = document.createTextNode('Posted By: ' + nameInput);
  var commentBtn = document.createTextNode('Comments');
  
  $newPost.appendChild(postElement);
  $postAuthor.appendChild(nameElement);
  $commentLink.appendChild(commentBtn);

  
  var $commentNew = $('.comments')[0];
  var $commentDiv = document.createElement('div');
  $commentDiv.setAttribute('id', postCounter);
  $commentDiv.append($commentNew);

  $post.appendChild($newPost);
  $post.appendChild($postAuthor);
  $post.append($commentDiv);
  $post.appendChild($commentLink);
  $('.posts').append($post);
  postCounter++;

  $('.posts').on('click', '.comment-button', function () {
    var $comments = $(this).parent().find($commentDiv).children();

    if ($comments.prop('classList').contains('comments-hide')) {
      $comments.prop('classList').replace('comments-hide', 'comments-show');
    } else {
      $comments.prop('classList').replace('comments-show', 'comments-hide');
    }
  });

  $('#submit-comment').on('click', function () {
    var commentInput = $('.comment-input')[0].value;
    var commentNameInput = $('.comment-name-input')[0].value;

    var $newComment = document.createElement('div');
    var $commentAuthor = document.createElement('div');
    var $comment = document.createElement('tr')

    $newComment.classList.add('fs-6');
    $commentAuthor.classList.add('text-muted');

    var commentElement = document.createTextNode(commentInput);
    var commentNameElement = document.createTextNode('Posted By: ' + commentNameInput);
    
    $newComment.appendChild(commentElement);
    $commentAuthor.appendChild(commentNameElement)

    $comment.appendChild($newComment);
    $comment.appendChild($commentAuthor);
    $('.post-comments').append($comment);
    });
  
});

