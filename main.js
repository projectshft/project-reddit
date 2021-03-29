//i had a difficult time with this. talked/worked with my mentor several times and spent all of sunday working on it. I wasnt able to get some of the functionality 

var redditPosts = [];

var renderPage = function () {
  $('.posts').empty();
  for (var index = 0; index < redditPosts.length; index++) {
    var comments = '';
    for (var i = 0; i < redditPosts[index].comments.length; i++) {
      var comment = redditPosts[index].comments[i];
      comments += `<div class="comment " id="comment-${i}"><p><button class="btn btn-xs btn-danger" id="delete-comment-${i}">Delete</button> ${comment.name} - Posted By: ${comment.text}</p></div>`
      
    }
    $('.posts').append(`<div class="post"><p><button class="btn btn-xs btn-danger" class="delete" id="delete-${index}">Delete</button> <button class="btn btn-xs btn-info" id="commentButton">Comment</button> <a>${redditPosts[index].message}</a> - Posted By: ${redditPosts[index].name} <a id="editPost">(Edit post)</a></p><div class="comments">${comments}</div></div><hr>`);
    
  }
  $('#commentButton').on('click', function() {
    $('#commentForm').toggle();
  });
  
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
$(`#delete`).on('click', function () {
    //wasnt able to find way to delete unique id or proper syntax to access it
  });
$('#submitComment').on('click', function() {
  var $commentName = $('#commentName').val();
  var $commentText = $('#commentText').val();


  if ($commentName === '') {
    alert('Commenter name is empty. Please enter your name');
  } else if ($commentText === '') {
    alert('Comment field is empty. Please enter a comment')
  } else {
    redditPosts.push( {comments: [{name: $commentName, text: $commentText}]})
  };

  var clearComment = function() {
    $('#commentName').val('');
    $('#commentText').val('');
  }
  clearComment();
  renderPage();  
});

renderPage();
