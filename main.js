//An array to store posts and names
const arrayOfPostsAndNames = [];

$('button').click(function () {
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
        '<hr>' +
        '</li>'
    );

    $('.post-list-items').append(listItem);
  }

  //Clear the text boxes
  $('#post-text').val('');
  $('#post-name').val('');

  
  $('.remover').on('click', function () {
    console.log('clicked');

    let listItemNumber = $(event.target.parentElement).index();
    Number(listItemNumber);

    console.log(listItemNumber);
    console.log(arrayWithNestedObjToDisplay[listItemNumber]);

    arrayWithNestedObjToDisplay.splice(listItemNumber, 1);
    event.target.parentElement.remove();
  });



  
  // // Add onclick function to ol of posts
  //   $('.post-list-items').one('click', function(event) {
  //     console.log('removing');

  //     //If the remove button is clicked, delete the parent li.
  //     if ((event.target).id === 'remover') {
  //       console.log('removing step2');
  //       let listItemNumber = $(event.target.parentElement).index();
  //       Number(listItemNumber);
  //       // console.log(listItemNumber);
  //       // console.log(arrayWithNestedObjToDisplay[listItemNumber]);
  //       arrayWithNestedObjToDisplay.splice(listItemNumber, 1);
  //       event.target.parentElement.remove();
  //       // arrayWithNestedObjToDisplay);
  //     }
  // });
};

// document.getElementsByTagName('li')[0].addEventListener('click', function (e) {
//   if ((e.target || e.srcElement).id == 'remover') {
//     console.log('click');
//   }
// });
