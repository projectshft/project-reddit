var $postSubmitButton = $('#post-submit-button');

$postSubmitButton.on('click', function () {
  var $postName = $('#post-name');
  var $postText = $('#post-text');
  
  createPost($postName, $postText);

  // reset both post input fields to placeholder text and focus to post text field
  $postName.val('');
  $postText.val('');
  $postText.focus();
});

var createPost = function ($postName, $postText) {  
  var postTemplate = 
    '<div class="container">' +
      '<div class="row post-row">' +
        '<div class="col-md-2"></div>' +
        '<div class="col-md-8">' +
          '<hr>' +   
          '<button type="button" class="btn btn-link btn-xs inline post-remove">remove</button> ' +
          '<button type="button" class="btn btn-link btn-xs inline post-comments">comments</button> ' +
          '<p class="inline">' + $postText.val()+ ' - Posted By: ' + $postName.val() + '</p>' +
        '</div>' +
        '<div class="col-md-2"></div>' +
      '</div>' +
      '<div class="row comment-input-row">' +
        '<div class="col-md-2"></div>' +
        '<div class="col-md-8">' +
          '<form>' +
            '<div class="form-group">' +
              '<input class="form control comment-text" placeholder="Comment Text"/>' +
            '</div>' +
            '<div class="form-group">' +
              '<input class="form control comment-name" placeholder="Your Name"/>' +
            '</div>' +
            '<button type="button" class="btn btn-primary comment-submit-button">Submit Comment</button>' +
          '</form>' +
        '</div>' +
        '<div class="col-md-2"></div>' +
      '</div>' +
    '</div>';
  
  var $postInputContainer = $('.post-input-form').closest('.container');
  $(postTemplate).insertBefore($postInputContainer);

  // click handler for the remove button on a post
  var $postRemoveButton = $('.post-remove');
  
  $postRemoveButton.on('click', function (e) {
    // prevents this event handler from acting on other posts, if they are present
    e.stopImmediatePropagation();

    var $postToRemove = $(this.closest('.container'));
    $postToRemove.remove();
  });

  // click handler for the comments button on a post
  var $postCommentsButton = $('.post-comments');

  $postCommentsButton.on('click', function (e) {
    e.stopImmediatePropagation();

    // unhide comment input fields and comment(s), if any
    var $commentInputRow = $(this).closest('.container').find('.comment-input-row');
    $commentInputRow.toggleClass('show');
    $commentInputRow.find('.comment-text').focus();
    $(this).closest('.container').find('.comment-row').toggleClass('show');

    // click handler for submitting comment
    var $commentSubmitButton = $commentInputRow.find('.comment-submit-button');

    $commentSubmitButton.on('click', function (e) {
        e.stopImmediatePropagation();
        
        var $currInputRow = $(this).closest('.comment-input-row');
        var $commentText = $currInputRow.find('.comment-text');
        var $commentName = $currInputRow.find('.comment-name');

        createComment($commentName, $commentText, $currInputRow);

        // reset both comment input fields to placeholder text and focus to comment text field
        $commentName.val('');
        $commentText.val('');
        $commentText.focus();
      });

    var createComment = function($commentName, $commentText, $currInputRow) {
      var commentTemplate = 
        '<div class="row comment-row show">' +
        '<div class="col-md-2"></div>' +
        '<div class="col-md-8">' +
          '<button type="button" class="btn btn-link btn-xs inline comment-remove">remove</button> ' +
          '<p class="inline">' + $commentText.val()+ ' - Posted By: ' + $commentName.val() + '</p>' +
        '</div>' +
        '<div class="col-md-2"></div>' +
        '</div>';

      $(commentTemplate).insertBefore($currInputRow);

      // click handler for removing comment
      var $commentRemoveButton = $('.comment-remove');
  
      $commentRemoveButton.on('click', function (e) {
          e.stopImmediatePropagation();
      
          var $commentToRemove = $(this.closest('.comment-row'));
          $commentToRemove.remove();
        });
      };
  }); 
};
