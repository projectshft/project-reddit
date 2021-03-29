

var redditPosts = [];

var renderPage = function () {
  $('.posts').empty();
  for (var index = 0; index < redditPosts.length; index++) {
    var comments = '';
    for (var i = 0; i < redditPosts[index].comments.length; i++) {
      var comment = redditPosts[index].comments[i];
      comments += `<div class="comment " id="comment-${i}"><p><button class="btn btn-xs btn-danger" id="delete-comment-${i}">Delete</button> ${comment.name} - Posted By: ${comment.text}</p></div>`
      
    }
    $('.posts').append(`<div class="post"><div class="btn btn-xs btn-danger delete" id="delete-${index}">Delete</div> <button class="btn btn-xs btn-info comment" id="commentButton">Comment</button> <a>${redditPosts[index].message}</a> - Posted By: ${redditPosts[index].name} <a id="editPost">(Edit post)</a><div class="comments-wrapper" style="display:none;"><div class="comments">${comments}</div>
    
    <form id="commentForm" style="margin-top:30px;" onsubmit="event.preventDefault();">
          <h4>Add a comment</h4>
        
          <div class="form-group">
            <input id="commentName" type="text"
              class="form-control"
              placeholder="Your Name"></input>
          </div>
          
          <div class="form-group">
            <textarea id="commentText" type="text"
            class="form-control"
            placeholder="Comment Text"></textarea>
          </div>
          <button id="submitComment" class="btn btn-primary">Submit Comment</button>
        </form>
    </div>
    <hr></div>`);
    
  }
  // $('#commentButton').on('click', function() {
  //   $('#commentForm').toggle();
  // });
};


$('#submitButton').on('click', function() {
  var $name = $('#postName').val();
  var $message = $('#post').val();

  if ($name === '') {
    alert('Poster name is empty. Please enter your name');
  } else if ($message === '') {
    alert('Post field is empty. Please enter text')
  } else {
    redditPosts.push({name: $name, message: $message, comments: []})
  }
 
  var clearForm = function() {
    $('#postName').val('');
    $('#post').val('');
  }
  clearForm();
  renderPage(); 
  
});

$('.posts').on('click', '.delete', function () {
  var postIndex = $(this).closest('.post').index();
  redditPosts.splice(postIndex, 1);
  renderPage();
});

$('.posts').on('click', '.comment', function () {
  $(this).closest('.comments-wrapper').toggle();
  // var form = $(this).closest('#commentForm');
  // console.log(form);
});
  
// $('#submitComment').on('click', function() {
//   var $commentName = $('#commentName').val();
//   var $commentText = $('#commentText').val();


//   if ($commentName === '') {
//     alert('Commenter name is empty. Please enter your name');
//   } else if ($commentText === '') {
//     alert('Comment field is empty. Please enter a comment')
//   } else {
//     redditPosts.push( {comments: [{name: $commentName, text: $commentText}]})
//   };

//   var clearComment = function() {
//     $('#commentName').val('');
//     $('#commentText').val('');
//   }
//   clearComment();
//   renderPage();  
// });

renderPage();
