var posts = [
  {
    name: "Ian",
    text: "Hardcoded message",
    comments: [
      {name:'john', text:'hello'}
    ]
  }
];

var renderPage = function() {
  $('.posts').empty();
  for (let i = 0; i < posts.length; i++) {
    var comments = '';
    for (let j = 0; j < posts[i].comments.length; j++) {
      var comment = posts[i].comments[j];
      comments += `<div class="comment" id="comment-${j}"><p><button class="btn btn-xs btn-danger deleteComment" id="delete-comment-${j}">Delete</button> ${comment.text} - Posted By: ${comment.name}</p></div>`

    }
      $('.posts').append(
        `<div class="post">
          
          <div type="button" id="delete-${i}" class="btn btn-danger btn-xs deletePost">Delete</div>
          <button type="button" class="comment btn btn-info btn-xs">Comment</button>
          ${posts[i].text} - Posted By: ${posts[i].name}</p>
          
          <div class="comments-wrapper" style="display:none">
            <div class="comments">${comments}</div>
            <form id="comment-form" onsubmit="event.preventDefault();">
              <h3>Add a Comment</h3>
              <div class="form-group">
                <input class="form-control" id="comment-text" placeholder="Comment Text" />
              </div>
              <div class="form-group">
                <input
                  class="form-control"
                  id="commenter-name"
                  placeholder="Your Name"
                />
              </div>
              <button type="button" id="submitComment" class="btn btn-primary">
                Add Comment
              </button>
            </form>
            </div>
            <hr>
        </div>`
        )
      
    }
}

$('#submitButton').click(function(){
  var $text = $('#post-text').val();
  var $posterName = $('#poster-name').val();

  var post = {
    name: $posterName,
    text: $text,
    comments: [],
  };

  if ($posterName === '') {
    alert('Poster name is empty. Please enter your name');
  } else if ($text === '') {
    alert('Post field is empty. Please enter text')
  } else {
    posts.push(post)
  }

  var clearForm = function() {
    $('#post-text').val('');
    $('#poster-name').val('');
  }

  renderPage();
  clearForm();
});

$('.posts').on('click', '.deleteComment', function () {
  var postIndex = $(this).closest('.post').index();
  var commentIndex = $(this).closest('.comment').index();
  posts[postIndex].comments.splice(commentIndex, 1);
  renderPage();
});

$('.posts').on('click', '.deletePost', function () {
  var postIndex = $(this).closest('.post').index();
  posts.splice(postIndex, 1);
  renderPage();
});

$('.posts').on('click', '.comment', function () {
  var form = $(this).closest('.post');
  form.children('.comments-wrapper').toggle();
});

$('.posts').on('click', '#submitComment', function(){
  var form = $(this).closest('.post');
  var index = form.index();

  var $commentText = form.find('#comment-text').val();
  var $commenterName = form.find('#commenter-name').val();

  var comment = {
    name: $commenterName,
    text: $commentText
  };

  if ($commenterName === '') {
    alert('Commenter name is empty. Please enter your name');
  } else if ($commentText === '') {
    alert('Comment field is empty. Please enter a comment')
  } else {
    posts[index].comments.push(comment)
  };  

  renderPage();  
})

renderPage();

