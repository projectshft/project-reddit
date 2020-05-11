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
      $(this).closest('.post').remove();
    },
  })

  //Using jquery object to hold data for comment link in order to bind click event to it
  var $commentLink = $('<a/>', {
    type: 'button',
    href: '#',
    class: 'comment-link',
    text: ' (Show Comments) ',
    click: function() {
      $(this).closest('.post').find('.comment-section').toggleClass('hide');
      if ($(this).closest('.post').find('.comment-section').hasClass('hide')) {
        $(this).text(' (Show Comments) ');
      } else {
        $(this).text(' (Hide Comments) ');
      }
    }
  });

  //create new link to navigate to what looks like a separate comments page
  var $commentsPageLink = $('<a/>', {
    type: 'button',
    href: '#',
    class: 'comments-page-link',
    text: ' (Go to Comments Page -->) ',
    click: function() {

      //hide everything but header
      $('main').addClass('hide-all');

      //if comments are toggled closed, open them
      if ($(this).closest('.post').find('.comment-section').hasClass('hide')) {
        $(this).closest('.post').find('.comment-section').removeClass('hide');
        $(this).closest('.post').find('.comment-link').text('Hide Comments')
      }

      //hide the other links on post
      $(this).closest('.post').find('.post-links').addClass('hide-all');

      //turn inline comment form into full form
      $(this).closest('.post').find('.comment-form').removeClass('form-inline');

      var originalPost = $(this).closest('.post')

      //back button will make main content reappear, and undo other temporary changes
      var $backButton = $('<a/>', {
        class: 'back-button',
        href: '#',
        type: 'button',
        text: 'Back',
        click: function() {
          $(originalPost).append(postClone);
          $('main').removeClass('hide-all');
          $(originalPost).find('.post-links').removeClass('hide-all');
          $(originalPost).find('.comment-form').addClass('form-inline');
          $(this).remove();
        }

      });

      $(originalPost).prepend($backButton);

      var postCloneThatIsNotActuallyACloneBecauseItIsPassingByReference = originalPost.contents();

      $('main').after(postCloneThatIsNotActuallyACloneBecauseItIsPassingByReference);

    }
  });

  //new link to allow for editing post
  var $editLink = $('<a/>', {
    type: 'button',
    href: '#',
    class: 'edit-link',
    text: '(Edit) ',
    click: function() {
      //values of original post
      var originalMessage = $(this).closest('.post').find('.user-message').text();
      var originalName = $(this).closest('.post').find('.username').text();

      //creating form for user to edit post
      var $editInput = $('<form/>', {
        class: 'form-inline edit-input',
        html: '<div class="form-group">' +
          '<input type="text" class="form-control edit-message" value="' + originalMessage + '">' +
          '</div>  ' +
          '<div class="form-group">' +
          '<input type="text" class="form-control edit-name" value="' + originalName + '"></input>' +
          '</div>  '
      });

      //button for submitting edited post
      var $editInputButton = $('<button/>', {
        type: 'button',
        class: 'btn btn-primary edit-button',
        text: 'Submit',
        click: function() {
          //find values of edit input form
          var editedName = $(this).siblings().find('.edit-name').val();
          var editedMessage = $(this).siblings().find('.edit-message').val();

          //apply edits
          $(this).closest('.post').find('.username').text(editedName);
          $(this).closest('.post').find('.user-message').text(editedMessage);
          $(this).closest('.edit-input').remove();
        }
      });

      $editInput.append($editInputButton);

      //when edit is clicked, show edit form, when clicked again, remove form
      if ($(this).siblings().hasClass('edit-input')) {
        $(this).siblings('.edit-input').remove();
      } else {
        $(this).closest('.post').find('.posted-by').after($editInput);
      }
    }
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
      postMessage + '</p>' + '<p class="posted-by">Posted By: <span class="username">' +
      postName + '</span></p><hr>'
  });

  var $postLinks = $('<p/>', {
    class: "post-links"
  });

  //adding functional links to container with formatting
  $postLinks.append($removeLink);
  $postLinks.append(' | ');
  $postLinks.append($editLink);
  $postLinks.append(' | ');
  $postLinks.append($commentLink);
  $postLinks.append(' | ');
  $postLinks.append($commentsPageLink);

  //adding links and comment section to post
  $post.prepend($postLinks);
  $post.append($commentSection);

  //adding post to posts section
  $('#posts').append($post);

});
