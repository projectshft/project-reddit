$('.post').click( function (a) {
  a.preventDefault(); // Prevent default submit behavior on click
  a.stopImmediatePropagation();
  let $posts = $('.posts');

  // Get the poster's name and message
  let $message = $('#message').val();
  let $name = $('#name').val();

  // Creating a post template
  let template =
    '<li>' +
    ' <p>' +
    '   <a href="#" class="post-remove">remove</a>' +
    '   <a href="#" class="comment-show">comments</a>' +
    '   <span class="message-text">' + $message + '</span>' +
    ' </p>' +
    ' <div class="comments">' +
    '   <ul class="comment-thread">' +
    '   </ul>' +
    '   <form class="form-inline">' +
    '     <input type="text" class="form-control mb-2 mr-2 comment-text" placeholder="Comment Text" required>' +
    '     <input type="text" class="form-control mb-2 mr-2 comment-username" placeholder="User Name" required>' +
    '     <button type="submit" class="btn btn-primary mb-2 comment-post">Post Comment</button>' +
    '   </form>' +
    ' </div>' +
    ' <p class="message-name">Posted By: <strong>' + $name + '</strong></p>' +
    '<hr></li>';

  $posts.append(template);
  // $(this).parent().find('.comments').last().toggle();
  // $commentsToggle.toggle();

  // Remove current post
  $('.post-remove').click( function () {
    $(this).closest('li').remove();
  });

  // Toggle comments
  $('.comment-show').click( function () {
    // $(this).parent().find('.comments').toggle();
    // $commentsToggle.hide();
    let $comments = $(this).parent().next();
    $comments.toggle();
  });


  $('.comment-post').click( function(a) {

    a.preventDefault(); // Prevent default submit behavior on click
    a.stopImmediatePropagation();
    // Get the comment thread, new comment message, and user name
    let $commentThread = $(this).parent().prev();
    console.log($commentThread);
    let $commentText = $(this).prev().prev().val();
    let $commentUserName = $(this).prev().val();

    // Create a remove comment button
    let removeComment = '<strong class="comment-remove">&times</strong>';

    let template =
      '<li>' +
      ' <p>' + $commentText + ' Posted By: ' + $commentUserName + ' ' + removeComment + '</p>' +
      '</li>';

    $commentThread.append(template);

    $('.comment-remove').click( function () {
      $(this).parent().remove();
    });
  });
});
