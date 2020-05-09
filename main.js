//Creating post element when post button is clicked
$('#post-button').click(function() {

      var postName = $('#name').val();

      var postMessage = $('#message').val();

      //using jquery object to hold data for remove link in order to bind click event to it
      var $removeLink = $('<a/>', {
        type: 'button',
        href: '#',
        class: 'remove-link',
        text: 'remove ',
        click: function() {
          $(this).parent().remove();
        },

      })

      //using jquery object to hold data for comment link in order to bind click event to it
      var $commentLink = $('<a/>', {
        type: 'button',
        href: '#',
        class: 'comment-link',
        text: ' comments ',
        click: function() {
          $(this).siblings('.comments').toggleClass('hide');
        }
      });

      //creating comment form
      var $commentForm = $('<form/>',
       {
          class: 'comment-form',
          html:
            '<h3>Add a New Comment</h3>' +
            '<div class="form-group">' +
            '<textarea type="text" class="form-control comment-message" placeholder="Comment Text" required></textarea>' +
            '</div>' +
            '<div class="form-group">' +
            '<input type="text" class="form-control comment-name" placeholder="Your Name" required></input>' +
            '</div>'
        });

        //create object for comment button in order to attach click handler to it
        var $commentButton = $('<button/>', {
          type: 'button',
          class: 'btn btn-primary comment-button',
          text: 'Post'
          // click: function() {
          //   $(this).
          // }
        });

        //attach comment button to comment form
        $commentForm.append($commentButton);

        //Create comment section object to be able to append form with functional button to  it
        var $commentSection = $('<section/>', {
          class: 'comments hide',
          text: 'Comments:'
        });

        $commentSection.append($commentForm);

        //find values of comment form input and add them to the comment section when post is clicked
        var commentName = $('.comment-name').val();
        var commentMessage = $('.comment-message').val();

        var $comment = $('<p/>', {
          class: 'comment',
          html: commentMessage + 'Posted by: <strong>' + commentName + '</strong>'
        });

        //Creating jquery object for post in order to append remove and comment links to it before adding to DOM
        var $post = $('<article/>', {
          class: 'post',
          html: '<p>' +
            postMessage + '</p>' + '<p class="username">Posted By: <strong>' +
            postName + '</strong></p><hr>'
        });

        //adding functional comment and remove links to post
        $post.prepend($commentLink); $post.prepend($removeLink); $post.append($commentSection)

        //adding post to posts section
        $('#posts').append($post);


      });
