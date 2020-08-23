//An array to store posts and names
const arrayOfPostsAndNames = [];
const arrayOfCommentsAndNames = [];

$('#postButton').click(function () {
  //Onclick, assign the text box values to variables
  let userPost = $('#post-text').val();
  let userName = $('#post-name').val();

  //Alert an error if either text box is empty
  if (userPost == 0 || userName == 0) {
    alert('Please add both a post and your name.');
  } else {
    //if not empty, store values in an object.
    let userPostAndName = {
      post: userPost,
      name: userName,
    };
    //Push object into array
    arrayOfPostsAndNames.push(userPostAndName);

    //goto Render!
    renderListofPostsAndName(arrayOfPostsAndNames);
  }
});

const renderListofPostsAndName = (arrayWithNestedObjToDisplay) => {
  console.log('rendering!');

  //To clear the display of posts before re-rendering:
  //Assign parent node (ol) to postList.
  //While parent has child nodes (li), remove them one by one
  var postList = $('.post-list-items')[0];
  while (postList.hasChildNodes()) {
    postList.removeChild(postList.firstChild);
  }

  // Render the list of posts by looping through the array's nested objects
  for (let i = 0; i < arrayWithNestedObjToDisplay.length; i++) {
    //build the content of the list item
    let listItem = $(
      '<li id=anItem class=post-list>' +
        '<a class="remover">' +
        'remove ' +
        '</a>' +
        '<a class="commenter">' +
        ' comment ' +
        '</a>' +
        '<br>' +
        arrayWithNestedObjToDisplay[i].post +
        '<br>' +
        'Posted by: ' +
        '<b>' +
        arrayWithNestedObjToDisplay[i].name +
        '</b>' +
        '</li>'
    );

    $('.post-list-items').append(listItem);
  }

  //Clear the text and boxes
  $('#post-text').val('');
  $('#post-name').val('');
  // $('.commentText').val('');
  // $('.commentName').val('');

  //Plan: If 'remove' is clicked, delete post from list and
  //remove object from array
  $('.remover').on('click', function (event) {
    console.log('remover clicked');

    //get the index of the post (value of the ol[index]) to associate w/ array index
    let removePostItemNumber = $(event.target.parentElement).index();
    Number(removePostItemNumber);

    //Use array .splice method to delete associated object from array
    arrayWithNestedObjToDisplay.splice(removePostItemNumber, 1);
    //Remove the list item from the ordered list
    event.target.parentElement.remove();

    //Remove the comment box if displayed
    if ($('#addAComment').css('display') === 'block') {
      $('#addAComment').css('display', 'none');
    }
  });

  let commentPostItemNumber;

  $('.commenter').on('click', function (event) {
    console.log('commenter clicked');
    // console.log($('#addAComment'));

    commentPostItemNumber = $(event.target.parentElement).index();
    Number(commentPostItemNumber);

    //append a new ordered list to the index of the list item
    // $(event.target.parentElement).append()

    //fix needed: toggle on and off only if current post.
    //If new post and comments are open, keep open with new
    //commentPostItemNumber
    if ($('#addAComment').css('display') === 'none') {
      $('#addAComment').css('display', 'block');
    } else {
      $('#addAComment').css('display', 'none');
    }
    return commentPostItemNumber;
  });

  $('#commentButton')
    .unbind()
    .click(function () {
      console.log('comment button clicked');

      let userCommentText = $('.commentText').val();
      let userCommentName = $('.commentName').val();

      if (userCommentText == 0 || userCommentName == 0) {
        alert('Please add both a comment and your name.');
      } else {
        let userCommentAndName = {
          parentID: commentPostItemNumber,
          commText: userCommentText,
          commName: userCommentName,
        };

        // console.log(userCommentAndName);

        arrayOfCommentsAndNames.push(userCommentAndName);

        console.log(arrayOfCommentsAndNames);

        renderComments(arrayOfCommentsAndNames);
        // arrayWithNestedObjToDisplay[
        //   commentPostItemNumber
        // ].comment = arrayOfComments;

        // console.log(arrayWithNestedObjToDisplay);
        // // renderListofPostsAndName(arrayWithNestedObjToDisplay);
      }
    });

  const renderComments = (arrayToRender) => {
    console.log('rendering comments');
    console.log(arrayToRender);

    for (let i = 0; i < arrayToRender.length; i++) {
      //build the content of the list item
      let commentItem = $(
        '<ol class=comment-list-items data-parent=".a-post">' +
        '<li id=Comments class=comments-list>' +
        'Post index: ' + ' ' + arrayToRender[i].parentID +
          arrayToRender[i].commText +
          'Posted by: ' +
          '<b>' +
          arrayToRender[i].commName +
          '</b>' +
          '</li>' +
          '</ol>'
      );

      $('.comment-list-items').append(commentItem);
    }

    //Clear the comment boxes

    $('.commentText').val('');
    $('.commentName').val('');
  };
};
