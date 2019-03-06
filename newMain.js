//TO-DO: modify html to accept/speak with "appendComment" function and buttons
//TO-DO: comments toggle
//To-DO: "remove" functions for posts and comments
//TO-DO: "edit" functions for posts and comments

//****************************************************************************** */
// Create a module to house the postboard.
var PostBuilder = function() {
  // Maintain the post library as an array of objects for use within the PostBuilder scope. Set it equal to empty, initially.
  let postLibrary = [];

  // Create variables for alerts, error messages, and other maintenance messages (in this scope so they can be easily modified).
  let emptyFieldAlert = 'Please make sure both fields are filled in.';
  let noComments = 'There are no comments on this post yet.';

  // A function that ensures both the name field *and* the textbody field have been filled out. Prevents empty submissions.
  let checkThatNameAndTextFieldsAreBothCompleted = function(
    nameField,
    textField
  ) {
    let bothAreFilled = false;
    if (nameField && textField) {
      bothAreFilled = true;
    } else alert(emptyFieldAlert);
    return bothAreFilled;
  };

  // Create each post as an object, and store it in an array of objects
  let addPostToLibrary = function(posterName, postTextBody) {
    // Initialize empty comments object to be included in post object
    let commenterNameEmpty = '';
    let noComments = 'There are no comments on this post yet.';
    let initialCommentsObj = { comments: [commenterNameEmpty, noComments] };

    // Create post object and add to the post library
    let newEntryForPostLibrary = {
      name: posterName,
      textBody: postTextBody,
      commentsBody: initialCommentsObj
    };
    postLibrary.push(newEntryForPostLibrary);
  };

  // Append the post to the html
  let appendPostToPage = function(nameToAppend, textToAppended) {
    $('#post-viewer').append(
      `<p>${textToAppend}</p><p align="right"><i>Posted by: <b>${$nameToAppend}</b></i><br><p align-left><button
      class="btn btn-dark btn-sm"
      type="button"
      data-toggle="collapse"
      data-target="#comment-card"
      aria-expanded="false"
      aria-controls="specific-comment-card"
      id="comment-toggle-button">View comments
    </button><button
    type="button"
    class="btn btn-outline-danger btn-sm"
    id="post-remove-button">Remove Post</button><div class="border-bottom my-3"></div>`
    );

    // Empty the name and post-body input fields
    // Use empty() ??? Use va() and empty() together?
    $('#name-input').val('');
    $('#post-body-input').val('');
  };

  // let removePost = function() {

  // }

  let addCommentToLibrary = function(commenterToAdd, commentToAdd) {
    // If the post has not been commented on before, shift the first comment (the placeholder comment) out of the comments array
    for (var prop in this.comments) {
      if (this.comments[0] === noComments) {
        this.comments.shift();
        console.log(
          'The "noComments" message should be shifted out and the comments array should be empty.'
        );
        console.log('The current comments array is: ', this.comments);
        break;
      }
    }

    let newCommentEntry = [commenterToAdd, commentToAdd];
    this.comments.push(newCommentEntry); // this

    // Create post object and add to the post library
    // let newEntryForCommentList = { name: posterName, textBody: postTextBody, commentsBody: initialCommentsObj };
    postLibrary.push(newCommentEntry);
  };

  let appendCommentToPage = function(commenterNameToAppend, commentToAppend) {
    // Append $postComment html output variable to the post-viewer
    $('#comment-viewer').append(
      `<p class="align-center">${$commentBodyOutput}</p><p class="align-right">By: <b>${$commenterNameOutput}</b></i></p><a  href="#"><i class="fas fa-trash-alt"></i><p align="right"><i></a><div class="border-bottom my-3"></div>`
    );

    // Empty the name and post-body input fields
    // Use empty() ??? Use va() and empty() together?
    $('#commenter-name-input').val('');
    $('#comment-body-input').val('');
    var newEntryForCommentEntity = [
      { posts: [$commenterNameOutput, $commentBodyOutput] }
    ];
    console.log(newEntryForCommentEntity);
    // postEntity.push(newEntryForCommentEntity);
    // return newEntryForCommentEntity;
  };

  // let removeComment = function (){

  // }

  // return the "protected" functions
  // add edit later
  return {
    checkThatNameAndTextFieldsAreBothCompleted: checkThatNameAndTextFieldsAreBothCompleted,
    addPostToLibrary: addPostToLibrary,
    appendPostToPage: appendPostToPage,
    //editPost: editPost
    // removePost: removePost,
    // toggleComments: toggleComments,
    addCommentToLibrary: addCommentToLibrary,
    appendCommentToPage: appendCommentToPage
    // editComment: editComment
    // removeCommment: removeComment
  };
};

// Initiate
let app = PostBuilder();
// Currently unable to store posts (no backend). Future design will have to include a renderPosts function to display the postLibrary
// As currently designed (per assignment guidelines) the postLibrary has to be populated anew each time the page is refreshed.
// Receive poster name and post-text inputs via click event.

// Click event handler for "Post"
$('#post-button').on('click', function(event) {
  event.preventDefault();
  let $nameOutput = $('#name-input').val();
  let $textOutput = $('#post-body-input').val();
  console.log('$nameOutput is: ', $nameOutput);
  console.log('$textOutput is: ', $textOutput);
  // let fullPostOutput = [$nameOutput, $textOutput];
  // console.log("fullPostOutput is :", fullPostOutput);

  checkThatNameAndTextFieldsAreBothCompleted($nameOutput, $textOutput);
  addPostToLibrary($nameOutput, $textOutput);
  appendPostToPage($nameOutput, $textOutput);
});

// Click event handler for "Post Comment"
$('#post-comment-button').on('click', function(event) {
  event.preventDefault();
  var $commenterNameOutput = $('#commenter-name-input').val();
  var $commentBodyOutput = $('#comment-body-input').val();
  console.log('$commenterNameOutput is: ', $commenterNameOutput);
  console.log('$commentBodyOutput is: ', $commentBodyOutput);

  checkThatNameAndTextFieldsAreBothCompleted(
    $commenterNameOutput,
    $commentBodyOutput
  );
  addPostToLibrary($commenterNameOutput, $commentBodyOutput);
  appendPostToPage($commenterNameOutput, $commentBodyOutput);
});

// TO-DO
// Click event handler for "Edit Post"
// Click event handler for "Remove Post"
// Click event handler for "Comment" toggle button
// Click event handler for "Edit Comment"
// Click event handler for "Remove Comment"

//*********************************************************************************************************

//   // Output the to the "post viewer" section of the html.
//   // Append $postIt html output variable to the post-viewer
//   $('#post-viewer').append(
//     `<p>${$textOutput}</p><p align="right"><i>Posted by: <b>${$nameOutput}</b></i><br><p align-left><button
//     class="btn btn-dark btn-sm"
//     type="button"
//     data-toggle="collapse"
//     data-target="#comment-card"
//     aria-expanded="false"
//     aria-controls="specific-comment-card"
//     id="comment-toggle-button">View comments
//   </button><button
//   type="button"
//   class="btn btn-outline-danger btn-sm"
//   id="post-remove-button">Remove Post</button><div class="border-bottom my-3"></div>`
//   );

//   // Create a variable to point to the new post entity and return it so it may be used to update the state of the message board array
//   var newEntryForPostEntity = [
//     { posts: [$nameOutput, $textOutput, 'There are no comments on this post.'] }
//   ];
//   console.log('The newEntryForPostEntity object is: ', newEntryForPostEntity);
//   postBoard.push(newEntryForPostEntity);
//   console.log('The postBoard array is: ', postBoard);
//   console.log(newEntryForPostEntity);
//   // return newEntryForPostEntity;
//   /////////////////////////////////////////////////////////////////////////////

// // Create each post as an object, and store it in an array of objects

// var postBoard = [];

// // Receive poster name and post-text inputs. Outputs them to the "post viewer" section of the html.
// $('#post-button').on('click', function(event) {
//   event.preventDefault();
//   var $nameOutput = $('#name-input').val();
//   var $textOutput = $('#post-body-input').val();
//   console.log('$nameOutput is: ', $nameOutput);
//   console.log('$textOutput is: ', $textOutput);

//   // Check to make sure neither name or post body is an empty field when post button is clicked. Disallow and alert user.
//   // alert(
//   //   'Please enter your name and post and make sure both fields are used.'
//   // );
// });

// // Append output variable to the post-viewer

// //check data-target // Use panel? regular div?
// $('#post-viewer').append(
//   `<p>${$textOutput}</p><p align="right"><i>Posted by: <b>${$nameOutput}</b></i><br><p align="left"<button
//   class="btn btn-outline-dark btn-sm"
//   type="button"
//   data-toggle="collapse"
//   data-target="#comment-card"
//   aria-expanded="false"
//   aria-controls="specific-comment-card"
//   id="comment-toggle-button">View comments
// </button><p align="right>
// <a href="#"><i class="fas fa-trash-alt"></p><div class="border-bottom my-3"></div>`
// );

// // Empty the name and post-body input fields
// // Use empty() ??? Use va() and empty() together?
// $('#name-input').val('');
// $('#post-body-input').val('');

// // Create a variable to point to the new post entity and return it so it may be used to update the state of the message board array
// var newEntryForPostEntity = [
//   {
//     posts: [
//       $nameOutput,
//       $textOutput,
//       ["There aren't any comments on this post yet."]
//     ]
//   }
// ];
// console.log('The newEntryForPostEntity object is: ', newEntryForPostEntity);

// console.log('The postBoard array is: ', postBoard);

// /////////////////////////////////////////////////////////////////////////////

// // Enable a way to build the posts
// function buildPostEntity(post) {
//   var postEntity = [
//     {var nameOfPoster: 'post.name',
//       textOfPost: '',
//       commentsMadeUpon: [{ nameOfCommenter: '', textOfComment: '' }]
//     }
//   ];

//   // buildCommentEntity ???
//   var titleAndType =
//     '<div><span class="forum-title">' +
//     post.title +
//     '</span>' +
//     buildPostType(post.type) +
//     '</div>';

//   var author =
//     '<div class="forum-author">By: ' +
//     post.author +
//     ' on ' +
//     postDate(post.date) +
//     '</div>';

//   var body = '<pre>' + post.body + '</pre>';

//   var comment =
//     '<div class="forum-comment"> <div class="btn-group"><a class="btn btn-mini btn-primary" role="button" data-toggle="modal" id="btn-forum-comment"><i class="icon-comment icon-white"></i> comment</a></div></div>';

//   var footer = '<hr style="border-top: 1px dotted #b0b0b0;border-bottom: 0px">';

//   var entry = titleAndType + author + body + comment + footer;

//   return entry;
// }

// // Receive poster name and post-text inputs. Outputs them to the "post viewer" section of the html.
// $('#post-button').on('click', function() {
//   // event.preventDefault(); ???
//   // If-SO: pass 'event' as parameter of function
//   var $nameOutput = $('#name-input').val();
//   var $textOutput = $('#post-body-input').val();
//   console.log('$nameOutput is: ', $nameOutput);
//   console.log('$textOutput is: ', $textOutput);

//   // Append $postIt html output variable to the post-viewer

//   // Empty the name and post-body input fields
//   // Use empty() ??? Use va() and empty() together?
//   $('#name-input').val('');
//   $('#post-body-input').val('');

//   // Create a variable to point to the new post entity and return it so it may be used to update the state of the message board array
//   var newEntryForPostEntity = [
//     { posts: [$nameOutput, $textOutput, 'There are no comments on this post.'] }
//   ];
//   console.log(newEntryForPostEntity);
//   // return newEntryForPostEntity;
//   /////////////////////////////////////////////////////////////////////////////
// });

// $('#post-comment-button').on('click', function() {
//   var $commenterNameOutput = $('#commenter-name-input').val();
//   var $commentBodyOutput = $('#comment-body-input').val();
//   console.log('$commenterNameOutput is: ', $commenterNameOutput);
//   console.log('$commentBodyOutput is: ', $commentBodyOutput);
//   // var $oneCommentOutput = ()

//   // Append $postComment html output variable to the post-viewer
//   $('#comment-viewer').append(
//     `<p class="align-center">${$commentBodyOutput}</p><p class="align-right">By: <b>${$commenterNameOutput}</b></i></p><a  href="#"><i class="fas fa-trash-alt"></i><p align="right"><i></a><div class="border-bottom my-3"></div>`
//   );

//   // Empty the name and post-body input fields
//   // Use empty() ??? Use va() and empty() together?
//   $('#commenter-name-input').val('');
//   $('#comment-body-input').val('');
//   // var newEntryForCommentEntity = [
//   //   { comments: [$commenterNameOutput, $commentBodyOutput] }
//   // ];
//   console.log(newEntryForCommentEntity);
//   // postEntity.push(newEntryForCommentEntity);
//   // return newEntryForCommentEntity;
// });
