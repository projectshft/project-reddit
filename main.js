// submit post when button (id = submit) clicked
// post to the top of div sith id='posts' and include the form
// give new post id= * name of person posting *
postCounter = 1;

$('#submit').click(function () {
  var postName = $("#nameInput").val();
  var postMsg = $("#postInput").val();

  // make sure msg or name aren't blank
  if (postName === '') {
    alert('Please include your name');
  };

  if (postMsg === '') {
    alert('Please post something first');
  }

  if (postName != '' && postMsg != '') {
    // set counter for posts so the div's they are in will be unique for comments 
    postCounter += 1;


    var newHTML =
    '<div id="post' + postCounter + '"><p>' + postMsg + " - Posted By: " + postName + '</p><hr></div>';
    $("#post1").append(newHTML);

    // clear inputs
    $("#nameInput").val('');
    $("#postInput").val('');

    console.log(postCounter);
  }
});