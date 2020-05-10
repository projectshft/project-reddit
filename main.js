//Creating post element when post button is clicked
$('#post-button').click(function() {

  var postName = $('#name').val();

  var postMessage = $('#message').val();

  //Using jquery object to hold data for remove link in order to bind click event to it
  var $removeLink = $('<a/>', {
    type: 'button',
    href: '#',
    class: 'remove-link',
    text: '(Remove) ',
    click: function() {
      $(this).parent().remove();
    },
  })

  //Using jquery object to hold data for comment link in order to bind click event to it
  var $commentLink = $('<a/>', {
    type: 'button',
    href: '#',
    class: 'comment-link',
    text: ' (Show Comments) ',
    click: function() {
      $(this).siblings('.comment-section').toggleClass('hide');
      if ($(this).siblings('.comment-section').hasClass('hide')) {
        $(this).text(' (Show Comments) ');
      } else {
        $(this).text(' (Hide Comments) ');
      }
    }
  });

  //create new link to navigate to what looks like a separate comments page
  var $commentsPageLink = $('<a/>',
    {
      type: 'button',
      href: '#',
      class: 'comments-page-link',
      text: ' (Go to Comments Page -->) ',
      // click: function() {
      //
      // }
    });

  //new link to allow for editing post
  var $editLink = $('<a/>', {
    type: 'button',
    href: '#',
    class: 'edit-link',
    text: '(Edit) ',
    click: function() {
      var editMessage = $(event.target).siblings('.user-message').val();
      var editName = $(event.target).siblings('.username').val();
      var $editInput = $('<form/>',
        {
          class: 'form-inline edit-input',
          html: '<div class="form-group">' +
            '<input type="text" class="form-control edit-message" value=' + editMessage + '>' +
            '</div>  ' +
            '<div class="form-group">' +
            '<input type="text" class="form-control edit-name" value=' + editName + '></input>' +
            '</div>  '
        });
      var $editInputButton = $('<button/>', {
        type: 'button',
        class: 'btn btn-primary comment-button',
        text: 'Submit',
        // click: function() {
        //   //find values of comment form input and add them to the comment section when post is clicked
        //   var commentName = $(this).siblings().find('.comment-name').val();
        //   var commentMessage = $(this).siblings().find('.comment-message').val();
        //
        //   //Creating object to hold comment data which the remove comment button can be appended to
        //   var $comment = $('<p/>', {
        //     class: 'comment',
        //     html: commentMessage + ' | <em>Comment By: <strong>' + commentName + '</strong></em>'
          });
        $editInput.append($editInputButton);

        //when edit is clicked, show edit form, when clicked again, remove form
        if ($(event.target).siblings().hasClass('edit-input')) {
          console.log('if');
          $(event.target).siblings('.edit-input').remove();
        } else {
          console.log('else');
          $(event.target).closest('.post').find('hr').before($editInput);
        }

    },
  })

  //Creating comment form object to append functional post comment button to it
  var $commentForm = $('<form/>', {
    class: 'comment-form form-inline',
    html: '<div class="form-group">' +
      '<input type="text" class="form-control comment-message" placeholder="Add New Comment" required>' +
      '</div>  ' +
      '<div class="form-group">' +
      '<input type="text" class="form-control comment-name" placeholder="Your Name" required>' +
      '</div>  '
  });

  //Create object for comment button in order to attach click handler to it
  var $commentButton = $('<button/>', {
    type: 'button',
    class: 'btn btn-primary comment-button',
    text: 'Post Comment',
    click: function() {
      //find values of comment form input and add them to the comment section when post is clicked
      var commentName = $(this).siblings().find('.comment-name').val();
      var commentMessage = $(this).siblings().find('.comment-message').val();

      //Creating object to hold comment data which the remove comment button can be appended to
      var $comment = $('<p/>', {
        class: 'comment',
        html: commentMessage + ' | <em>Comment By: <strong>' + commentName + '</strong></em>'
      });

      //Create object to hold comment remove button and attach click event to it to delete the comment
      var $commentRemoveButton = $('<button/>', {
        class: "comment-remove-button btn btn-default btn-xs",
        text: 'X',
        click: function() {
          $(this).parent().remove();
        }
      });

      //Add remove button to comment
      $comment.append($commentRemoveButton);

      //Adding comment to comment section on click
      $(this).parent().siblings('.comments-container').append($comment);
    }
  });

  //Attach comment button to comment form
  $commentForm.append($commentButton);

  //Create comment section object in order to be able to append comment form to it
  var $commentSection = $('<section/>', {
    class: 'comment-section hide'
  });

  $commentSection.append('<section class="comments-container"><h4>Comments:</h4></section><hr>')
  $commentSection.append($commentForm);
  $commentSection.append('<hr>');

  //Creating object for post in order to append the remove and comment links to it before adding to DOM
  var $post = $('<article/>', {
    class: 'post',
    html: '<p class="user-message">' +
      postMessage + '</p>' + '<p class="username">Posted By: <strong>' +
      postName + '</strong></p><hr>'
  });

  //adding functional comment link and remove link to post
  $post.prepend($commentsPageLink);
  $post.prepend(' | ');
  $post.prepend($commentLink);
  $post.prepend(' | ');
  $post.prepend($editLink);
  $post.prepend(' | ');
  $post.prepend($removeLink);
  $post.append($commentSection)

  //adding post to posts section
  $('#posts').append($post);

});
