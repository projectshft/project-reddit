//An array to store posts and names
const arrayOfPostsAndNames = [];
const arrayOfCommentsAndNames = [];
let renderComments;

$('#postButton').click(function () {
  //TOFIX: after comments have been entered, if new
  //post is added and Post button clicked, the posts are rendered
  //correctly but all comments disappear. Need to re-render them.

  console.log('post button clicked!');
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
  //Assign parent node (ol) to listOfPostsToClear.
  //While parent has child nodes (li), remove them one by one
  var listOfPostsToClear = $('.post-list-items')[0];
  while (listOfPostsToClear.hasChildNodes()) {
    listOfPostsToClear.removeChild(listOfPostsToClear.firstChild);
  }

  // Render the list of posts by looping through the array's nested objects
  for (let i = 0; i < arrayWithNestedObjToDisplay.length; i++) {
    //build the content of the list item

    let listItem = $(
      '<li class=post-list data-parent:post-list-items>' +
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

  let postIndex;

  $('.commenter').on('click', function (event) {
    console.log('commenter clicked');
    //PLAN: This mini-module should 1) make comments visible or not.
    //2) store the index of the parent that was clicked.
    //3) possibly create a ol child linked to the parent li?

    //TO FIX: obviously I don't want a new ol each time I click. 
    //HOW TO LINK THE CHILD ITEMS?
    $(event.target.parentElement).append($('<ol class=comment-list-items>'));

    postIndex = $(event.target.parentElement).index();
    Number(postIndex);

    //give the parent element a unique ID property
    $(event.target.parentElement).prop('id', postIndex);

    // $(event.target.firstChild).prop('id', postIndex);

    //toggle the comment block visible or hidden
    if ($('#addAComment').css('display') === 'none') {
      $('#addAComment').css('display', 'block');
    } else {
      $('#addAComment').css('display', 'none');
    }
    return postIndex;
  });

  $('#commentButton').unbind().on('click', function () {
      console.log('comment button clicked');
    
      let userCommentText = $('.commentText').val();
      let userCommentName = $('.commentName').val();

      if (userCommentText == 0 || userCommentName == 0) {
        alert('Please add both a comment and your name.');
      } else {
        let userCommentAndName = {
          postIndex: postIndex,
          commText: userCommentText,
          commName: userCommentName,
        };

        // console.log(userCommentAndName);

        arrayOfCommentsAndNames.push(userCommentAndName);

        renderComments(arrayOfCommentsAndNames);
        // arrayWithNestedObjToDisplay[
        //   commentPostItemNumber
        // ].comment = arrayOfComments;

        // console.log(arrayWithNestedObjToDisplay);
        // // renderListofPostsAndName(arrayWithNestedObjToDisplay);
      }
    });

  renderComments = (commentsArrayToRender) => {
    console.log('rendering comments');

    //append a new ordered list (for comments) to the posts (list items w/ class='post-list')
    // $('.post-list').append($('<ol class=comment-list-items>'));

    //To clear the display of comments before re-rendering:
    //Assign parent node (ol) to listOfCommentsToClear.
    //While parent has child nodes (li), remove them one by one
    var listOfCommentsToClear = $('.comment-list-items')[0];
    while (listOfCommentsToClear.hasChildNodes()) {
      listOfCommentsToClear.removeChild(listOfCommentsToClear.firstChild);
    }

    console.log(arrayWithNestedObjToDisplay); //posts
    console.log(commentsArrayToRender); //comments
    console.log(arrayWithNestedObjToDisplay[0]); //matching 0 post

    for (let i = 0; i < commentsArrayToRender.length; i++) {
      //build the content of the list item

      let commentItem = $(
        '<li class=comment-list data-parent:comment-list-items>' +
          commentsArrayToRender[i].commText +
          '  ' +
          ' Posted by: ' +
          '<b>' +
          commentsArrayToRender[i].commName +
          '</b>' +
          '</li>'
      );

      $('.comment-list-items').append(commentItem);
    }

    //Clear the comment boxes

    $('.commentText').val('');
    $('.commentName').val('');
    $('#addAComment').css('display', 'none');
  };
};
