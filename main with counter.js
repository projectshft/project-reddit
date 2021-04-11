// submit post when button (id = submit) clicked

// global variable to assign a unique id number to root post and keep 
// comments together with it
var postCounter = 1;

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


    var $newHTML =`
      <div id="post` + postCounter + `">
        <p><span id="remove-post">remove </span><span id="show-or-hide-comments">comments </span>` + postMsg + ` - Posted By: ` +
      postName + `</p><hr></div>
    `;

    $("#post1").append($newHTML);

    // clear inputs
    $("#nameInput").val('');
    $("#postInput").val('');

    console.log(postCounter);
  }
});

$("#show-or-hide-comments").click(function () {
  // toggle show comments and input forms for "Comment Text" and "Your Name"
  var $commentFormHTML = `
  <form  id="comments-form" style="margin-top:30px;" onsubmit="event.preventDefault();">
    <div class="form-group">
      <input id="commentTextInput" class="form-control" type="text" placeholder="Comment Text">
    </div>
    <div class="form-group">
      <input id="commentNameInput" class="form-control" type="text" placeholder="Your Name">
    </div>

    <button id="submitComment" class="btn btn-primary">Submit Comment</button>
  </form>
  `;
  // if comments form exists, remove it, otherwise, add it
  // still need to make sure it sticks with the proper post
  var $addNewForm = '#comments-list' + postCounter;  
  // instead of postCounter, needs to be grabbed number of div we're in
  

  if ($("#comments-form").length) {
    $("#comments-form").remove();
  } else {
    $().append($commentFormHTML);
  }
});

$("#remove-post").click(function() {
  // remove post or comment
  // remove this post
  $("#")
})

// comments should be lists under the p, not other p's but should still be removable

// remove should remove post and all comments under it