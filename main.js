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
  //Assign parent node (ul) to postList.
  //While parent has child nodes (li), remove them one by one
  var postList = $('.post-list-items')[0];
  while (postList.hasChildNodes()) {
    postList.removeChild(postList.firstChild);
  }

  // Render the list of posts by looping through the array's nested objects
  let counter = 0;
  for (let i = 0; i < arrayWithNestedObjToDisplay.length; i++) {
    counter++;
    let listItem = $('<li>' + 
    '<a id="remover">' +
    'remove ' +
    '</a>' +
    '<a id="commenter">' +
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
    '</li>');

    listItem.className = counter;
    console.log(listItem);

    $('.post-list-items').append(listItem);
      
    
   

    arrayWithNestedObjToDisplay[i].postNumber = counter;
    // console.log(arrayWithNestedObjToDisplay);
  }

  //Clear the text boxes
  $('#post-text').val('');
  $('#post-name').val('');

  // Add onclick function to ul of posts
  $('.post-list-items').click(function (event) {
    console.log('removing');

    //If the remove button is clicked, delete the parent li.
    if ((event.target || event.srcElement).id === 'remover') {
      console.log('removing step2');
      console.log(event.target.parentElement);
      // event.target.parentElement.remove();
    
    }
  });



  $('#commenter').click(function () {
    console.log('commenting!');
  });
};
