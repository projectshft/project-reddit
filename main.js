//Creating post element when post button is clicked
$('#post-button').click(function() {

  var postName = $('#name').val();

  var postMessage = $('#message').val();

//using jquery object to hold data for remove link in order to bind click event to it
  var $removeLink = $('<a/>',
    {
      type: 'button',
      href: '#',
      class: 'remove-link',
      text: 'remove ',
      click: function() { $(this).parent().remove(); },

    })

//using jquery object to hold data for comment link in order to bind click event to it
  var $commentLink = $('<a/>',
    {
      type: 'button',
      href: '#',
      class: 'comment-link',
      text: ' comments ',
      click: function() { debugger; $(this).siblings('.comments').toggleClass('hide'); }
    });

//creating comment form
  var commentForm = '<form id="comment-form">' +
    '<h3>Add a New Comment</h3>' +
    '<div class="form-group">' +
    '<textarea type="text" class="form-control comment-message" placeholder="Comment Text" required></textarea>' +
    '</div>' +
    '<div class="form-group">' +
    '<input type="text" class="form-control comment-name" placeholder="Your Name" required></input>' +
    '</div>' +
    '<button type="button" class="btn btn-primary comment-button">Post</button>' +
    '</form>'

  //Create comment section
  var commentSection = '<section class="comments hide">' + commentForm + '</section>'

//Creating jquery object for post in order to append remove and comment links to it before adding to DOM
  var $post = $('<article/>', {
    class: 'post',
    html:  '<p>' +
      postMessage + '</p>' + commentSection + '<p class="username">Posted By: <strong>' +
      postName + '</strong></p><hr>'
  });

//adding functional comment and remove links to post
  $post.prepend($commentLink);
  $post.prepend($removeLink);

//adding post to posts section
  $('#posts').append($post);


});
