//Old code where users could delete a post by simply clicking on it

// $(document).ready(function() {
//   $('button').on('click', function () {
//     var commentVal = $('#input-comment').val();
//     var nameVal = $('#input-name').val();
  
//   var post = $('<p>').html(commentVal + ' - Posted By: ' + nameVal);

  
//   $('.posts').append(post);
//   });

//   $('p').on('click', function (e) {
//     var $element = $(e.target);
//     $element.remove();

//   })
// });

//New code after extentions were applied





$(document).ready(function() {
  $('button').on('click', function () {
    var commentVal = $('#input-comment').val();
    var nameVal = $('#input-name').val();
  
    var post = $('<div>').addClass('post');
    var postContent = $('<div>').addClass('post-content').html(commentVal + ' - Posted By: ' + nameVal);
    postContent.appendTo(post);
    var postButtons = $('<div>').addClass('post-buttons').appendTo(post);

    var editPost = $('<button>').addClass('btn btn-primary').text('Edit').appendTo(postButtons);
    var deletePost = $('<button>').addClass('btn btn-danger').text('Delete').appendTo(postButtons);

    $(post).appendTo($('.posts'));

    $(editPost).on('click', function() {
   
      var currentPost = postContent.text().split(' - Posted By: ')[0];
    
     
      var postText = $('<div>').addClass('post-text').appendTo(postContent);
      var newInput = $('<input>').val(currentPost).appendTo(postText);
      var saveButton = $('<button>').addClass('btn btn-success').text('Save').appendTo(postButtons);
      
    
      $(saveButton).on('click', function() {
        var newText = newInput.val();
        postContent.html(newText + ' - Posted By: ' + nameVal);

    
        $(postText).remove();


        $(editPost).appendTo(postButtons);
        $(deletePost).appendTo(postButtons);
        $(saveButton).detach();
      });
      
      $(editPost).detach();
      $(deletePost).detach();
      

      $(newInput).on('click', function(e) {
        e.preventDefault();
      });
    });

    $(deletePost).on('click', function() {
      post.remove();
    });

    postContent.on('click', function(e) {

      if (!$(e.target).is('input')) {
        var postText = $(this).text().split(' - Posted By: ')[0];
        var postName= $(this).parent().find('.comments').html();
        displayPostPage(postText, postName);
      }
    });
  });

  function displayPostPage(postText, postName) {
  
    $('.container').hide();
    var postPage = $('<div>').addClass('post-page').appendTo($('body'));

    var postTextDiv = $('<div>').addClass('post-title').html(postText).appendTo(postPage);
    var postNameDiv = $('<div>').addClass('post-comments').html(postName).appendTo(postPage);

    var backButton = $('<button>').text('Back').appendTo(postPage);
    $(backButton).on('click', function() {
     
      $('.container').show();
      postPage.remove();
    });
  }
});
