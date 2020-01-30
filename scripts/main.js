let countPosts = 0;
let posts = [];
let $postsList = $('.posts');
let $commentsList = $('');
let $commentInput = $('');
let comments = [];

let renderComment = function(num, postNum, text, author) {
  let commentRow =
   '<span contenteditable="true">' + text + '</span>'
    + '<span> Comment By: </span> <span class="userName">' + author + '</span>'
    + '<span id="remove-comment-'+ postNum + '-' + num + '" class="remove">x</span><br>';

  let $row = $(commentRow);

  return $row;
}

let renderPost = function(postNumber, postText, postAuthor, comments) {

    let template =
     '<div class="post" id="'+ postNumber +'">'
   + '<div class="post-text"><span id="remove-post'+ postNumber +'" class="remove-post">remove</span>'
   + '<span id="show-post-comments'+ postNumber +'" class="show-comments">comments</span><span contenteditable="true">'
   + postText + '</span></div>'
   + '<div id="comments'+ postNumber +'" style="display: none"></div>'
   + '<div id="input'+ postNumber +'" style="display: none"></div>'
   + '<div id="post-comment-row'+ postNumber +'"></div>'
   + '<div class="post-author">Posted By: ' + '<span class="userName">' + postAuthor + '</span>' + '</div>'
   + '</div>';

   let $row = $(template);

   return $row;
}

let displayPosts = function() {
  $postsList.empty();

  for (let i = 0; i < posts.length; i++) {
    //console.log('Print values of the post array:' +posts[i].text +' '+ posts[i].author +' '+ posts[i].comments);
    let $postRow = renderPost(i + 1, posts[i].text, posts[i].author, posts[i].comments);
    $postsList.append($postRow);
  }
}

let displayComments = function(postId) {
  $commentsList.empty();
  //console.log('From display comments function: '+postId);
  for (let i = 0; i < posts[postId].comments.length; i++) {
    let $commentRow = renderComment(i + 1, postId, posts[postId].comments[i].text, posts[postId].comments[i].author);
    $commentsList.append($commentRow);
  }
}

let displayCommentInput = function(index) {
  $commentInput.empty();

  let commentRow =
      '<form style="margin-top:5px;" onsubmit="event.preventDefault();">'
      + '<input id="comment-text'+ index +'" type="text" class="comment-input" placeholder="Comment Text">'
      + '<input id="comment-user'+ index +'" type="text" class="comment-input" placeholder="User Name">'
      + '<button id="addComment'+ index +'" type="submit" class="btn btn-primary postCommentBtn">Post Comment</button>'
      + '</form>';

    $commentInput.append(commentRow);
}

// on post submit event save input to the posts array and render posts
$('#postBtn').on('click', function() {
  //get input values
  let $postText = $('#post-text').val();
  let $postAuthor = $('#author').val();

  if(($postText || $postAuthor) == '') {
    alert('Please enter post and author.')
  } else {
    let post = {
      text: '',
      author: '',
      comments: []
    };

    //post object to add to the posts array
    post.text = $postText;
    post.author = $postAuthor;
    //post.comments = [];

    //add new post to a posts array
    posts.push(post);

    displayPosts();
    countPosts++;

    //clear input fields
    $('#post-text').val('');
    $('#author').val('');
  }
})

$('.posts').on('click', '.show-comments', function(e) {
  e.preventDefault();

  let currentIndex = $(this).attr('id').slice(-1);
  $commentsList = $('#comments' + currentIndex);
  $commentInput = $('#input' + currentIndex);

  displayCommentInput(currentIndex);

  $('#comments' + currentIndex).toggle('slow');
  $('#input' + currentIndex).toggle('slow');

  //displayComments(currentIndex - 1);
  if(posts[currentIndex-1].comments.length > 0) {
    comments = Array.from(posts[currentIndex-1].comments);
  }

});

//add comments
$('.posts').on('click', '.postCommentBtn', function(e) {
   e.preventDefault();

   //clear comments div before we append additional comments
   $commentsList.empty();

   //get the index of the element we clicked so we can identify the post index to add comments to
   let currentIndex = $(this).attr('id').slice(-1);
   $commentsList = $('#comments' + currentIndex);
   $commentInput = $('#input' + currentIndex);

   //save values of input fields in the variables to use them in the comment object
   let $commentText = $('#comment-text' + currentIndex).val();
   let $commentAuthor = $('#comment-user' + currentIndex).val();

   //debugger;
   let comment = {};
   comment.text = $commentText;
   comment.author = $commentAuthor;

   //add new comment to comments array for the post id = currentIndex-1
   posts[currentIndex-1].comments.push(comment);
   comments = Array.from(posts[currentIndex-1].comments);

  //using Handlebars to display comments
   let source = $('#comments-template').html();
   const template = Handlebars.compile(source);
   var newHTML = template({comments});

   // append our new html to the comments div on the page
   $('#comments' + currentIndex).append(newHTML);

   //clear input fields
   $commentText = $('#comment-text' + currentIndex).val('');
   $commentAuthor = $('#comment-user' + currentIndex).val('');
})

//delete a post with comments
$('.posts').on('click', '.remove-post', function(e) {
  e.preventDefault();
  let post = $(this).attr('id').slice(-1);

  posts.splice(post-1, 1);

  displayPosts();
  countPosts--;
});

//delet the comment of the post
$('.posts').on('click', '.remove', function(e) {
  e.preventDefault();
  //problem with rendering comments - work in progress!!
  //debugger
  //get comment index to remove
  let comment = $(this).attr('id').slice(-1);
  //console.log('Comment index: ' + comment);

  let postIndex = $(this).attr('id');

  //get post index from the comment id
  let index = postIndex.split('-');

  //remove the comment
  posts[index[2]].comments.splice(comment-1, 1);

  displayComments(index[2]);
});
