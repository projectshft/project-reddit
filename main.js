//Arrays to store posts and names
const arrayOfPostsAndNames = [
  {
    name: 'joe',
    post: 'hey!',
    comments: [
      {
        aComment: 'joe rocks!',
        aCommenter: 'bill',
      },
    ],
  },
];

let aNewCommentForJoe = { anotherComment: 'srsly, joe is the best', anotherCommenter: 'fred' };
console.log(aNewCommentForJoe);

arrayOfPostsAndNames[0].comments.push(aNewCommentForJoe);

console.log(arrayOfPostsAndNames);
console.log("the comments are ",arrayOfPostsAndNames[0].comments)





// // const arrayOfCommentsAndNames = [];
// // let renderComments;

// $('#postButton').on('click', function () {
//   console.log('post button clicked!');
//   //TOFIX: after comments have been entered, if new
//   //post is added and Post button clicked, the posts are rendered
//   //correctly but all comments disappear. Need to re-render them.

//   //On click, assign the text box values to variables
//   let userPost = $('#post-text').val();
//   let userName = $('#post-name').val();

//   //Alert an error if either post text box is empty
//   if (userPost == 0 || userName == 0) {
//     alert('Please add both a post and your name.');
//   } else {
//     //if not empty, store values in an object.
//     let userPostAndName = {
//       post: userPost,
//       name: userName,
//     };

//     //Push object into array of posts
//     arrayOfPostsAndNames.push(userPostAndName);

//     //goto Render!
//     renderListofPostsAndName(arrayOfPostsAndNames);
//   }
// });

// const renderListofPostsAndName = (arrayWithNestedObjToDisplay) => {
//   console.log('rendering!');
//   //Plan: clear the display of posts before re-rendering.
//   //Assign parent node (ol) to listOfPostsToClear.
//   //While parent has child nodes (li), remove them one by one

//   var listOfPostsToClear = $('.post-list-items')[0];
//   while (listOfPostsToClear.hasChildNodes()) {
//     listOfPostsToClear.removeChild(listOfPostsToClear.firstChild);
//   }

//   // Render the list of posts by looping through the array's nested objects
//   for (let i = 0; i < arrayWithNestedObjToDisplay.length; i++) {
//     //build the content of the list item
//     let listItem = $(
//       '<li class="post-list">' +
//         '<a class="remover">' +
//         'remove ' +
//         '</a>' +
//         '<a class="commenter">' +
//         ' comment ' +
//         '</a>' +
//         '<br>' +
//         arrayWithNestedObjToDisplay[i].post +
//         '<br>' +
//         'Posted by: ' +
//         '<b>' +
//         arrayWithNestedObjToDisplay[i].name +
//         '</b>' +
//         '</li>'
//     );

//     //Append this post to the ordered list w/ class 'post-list-items'
//     //Note: list numbers are displayed so nested comments can be debugged.
//     $('.post-list-items').append(listItem);
//   }

//   //Clear the text and boxes
//   $('#post-text').val('');
//   $('#post-name').val('');

//   $('.remover').on('click', function (event) {
//     console.log('remover clicked');
//     //Plan: If 'remove' is clicked, delete post from list and
//     //remove object from array. Remove all associated comments.

//     //get the index of the post (value of the ol[index]) to associate w/ array index
//     let removePostItemNumber = $(event.target.parentElement).index();
//     Number(removePostItemNumber);

//     //Use array .splice method to delete associated object from array
//     arrayWithNestedObjToDisplay.splice(removePostItemNumber, 1);
//     //Remove the list item from the ordered list
//     event.target.parentElement.remove();

//     //Remove the comment box if displayed
//     if ($('#addAComment').css('display') === 'block') {
//       $('#addAComment').css('display', 'none');
//     }
//   });

//   let postIndex;

//   $('.commenter').on('click', function (event) {
//     console.log('commenter clicked');
//     //PLAN: This mini-module should 1) make the comments box visible or not.
//     //2) Store the index of the parent that was clicked (in case that helps with nested list creation).
//     //3) Possibly create a ordered list child linked to the parent li?

//     //TO FIX: obviously I don't want to generate a new ol each time I click.
//     //HOW TO LINK THE CHILD ITEMS?
//     $(event.target.parentElement).append($('<ol class="comment-list-items">'));

//     // Possibly try an if loop to see whether children === 1, else add child.?
//     //($(event.target.parent).children()); //returns one

//     // Store the index of the post in case it can be used to link to child
//     postIndex = $(event.target.parentElement).index();
//     Number(postIndex);

//     //give the parent element a unique ID property in case it can be used to link to child
//     $(event.target.parentElement).prop('id', postIndex);

//     // $(event.target.firstChild).prop('id', postIndex);

//     //toggle the comment block visible or hidden
//     if ($('#addAComment').css('display') === 'none') {
//       $('#addAComment').css('display', 'block');
//     } else {
//       $('#addAComment').css('display', 'none');
//     }
//     return postIndex; //again, in case it might be useful elsewhere
//   });

//   $('#commentButton')
//     .unbind()
//     .on('click', function (event) {
//       console.log('comment button clicked');

//       //On click, assign the text box values to variables
//       let userCommentText = $('.commentText').val();
//       let userCommentName = $('.commentName').val();

//       //Alert an error if either comment text box is empty.
//       if (userCommentText == 0 || userCommentName == 0) {
//         alert('Please add both a comment and your name.');
//       } else {
//         //if not empty, store values in an object.
//         let userCommentAndName = {
//           postIndex: postIndex,
//           commText: userCommentText,
//           commName: userCommentName,
//         };

//         //Push object into array of comments
//         arrayOfCommentsAndNames.push(userCommentAndName);

//         //goto comment-rendering mini-module.
//         renderComments(arrayOfCommentsAndNames);
//       }
//     });

//   renderComments = (commentsArrayToRender) => {
//     console.log('rendering comments');

//     //append a new ordered list (for comments) to the posts here?
//     // $('.post-list').append($('<ol class="comment-list-items">'));

//     //To clear the display of comments before re-rendering:
//     //Assign parent node (ol) to listOfCommentsToClear.
//     //While parent has child nodes (li), remove them one by one
//     var listOfCommentsToClear = $('.comment-list-items')[0];
//     while (listOfCommentsToClear.hasChildNodes()) {
//       listOfCommentsToClear.removeChild(listOfCommentsToClear.firstChild);
//     }

//     // console.log(arrayWithNestedObjToDisplay); //posts
//     // console.log(commentsArrayToRender); //comments
//     // console.log(arrayWithNestedObjToDisplay[0]); //matching 0 post

//     for (let i = 0; i < commentsArrayToRender.length; i++) {
//       //build the content of the comment list item <li>

//       let commentItem = $(
//         '<li class="comment-list data-parent:comment-list-items">' +
//           commentsArrayToRender[i].commText +
//           '  ' +
//           ' Posted by: ' +
//           '<b>' +
//           commentsArrayToRender[i].commName +
//           ' ' +
//           '</b>' +
//           '<span class="glyphicon glyphicon-remove">' +
//           '</span>' +
//           '</li>'
//       );

//       //append this comment as a list item to the ordered list w class=comment-list-item
//       //FIX: unable to link this to the correct post.
//       $('.comment-list-items').append(commentItem);
//     }

//     //Clear the comment boxes

//     $('.commentText').val('');
//     $('.commentName').val('');
//     $('#addAComment').css('display', 'none');
//   };

//   $('.glyphicon-remove').on('click', function () {
//     console.log('glyphicon clicked!'); //no result
//     //TO FIX: cannot get to an action when clicking the glyph!
//     //PLAN: will delete comments individually when clicked.
//     //Model code on 'remover' code above, line 75, copied below.

//     //get the index of the comment (value of the ol[index]) to associate w/ array index
//     let removeCommentItemNumber = $(event.target.parentElement).index();
//     Number(removeCommentItemNumber);

//     //Use array .splice method to delete associated object from array
//     commentsArrayToRender.splice(removeCommentItemNumber, 1);
//     //Remove the list item from the ordered list
//     event.target.parentElement.remove();
//   });
// };
