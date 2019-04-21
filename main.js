/*********************
 *  PostBoard module
 *********************/
const PostBoard = () => {
  // Global variable to store posts
  let postLibrary = [];
  let $posts = $('#post-viewer');

  /*******************
   *  Public functions
   *******************/
  /*****Fn: Add a post *****/
  // Create each post as an object; store it in the array postLibrary
  const newPost = (text, user) => {
    // Ensure that empty fields will not be accepted for posting
    if (text === '' || user === '') {
      alert(
        'All fields must be filled out for a submission to be posted. Please make sure the name and text fields are filled out.'
      );
    } else {
      postLibrary.push({ text: text, name: user, comments: [] });
    }
  };

  /*****Fn: Remove a post *****/
  const removePost = currentPost => {
    let $clickedPost = $(currentPost).closest('.post'); //select post to be removed
    let index = $clickedPost.index();
    postLibrary.splice(index, 1); // Remove designated post
    $clickedPost.remove();
  };

  /*****Fn: Toggle Comment *****/
  const toggleComments = currentPost => {
    let $clickedPost = $(currentPost).closest('.post');
    $clickedPost.find('.comments-box').toggle();
    // .toggleClass('show');
  };

  /*****Fn: Add a comment *****/
  const newComment = (text, name, postIndex) => {
    if (text === '' || name === '') {
      alert(
        'All fields must be filled out for a submission to be posted. Please make sure the name and text fields are filled out.'
      );
    } else {
      let comment = { text: text, name: name };
      // pushing the comment into the correct posts array
      postLibrary[postIndex].comments.push(comment);
    }
  };

  /*****Fn: Remove a comment *****/
  const removeComment = commentButton => {
    // Identify comment to be removed
    let $clickedComment = $(commentButton).closest('.comment');
    // Index of the comment element
    let commentIndex = $clickedComment.index();
    // Index of the associated post
    let postIndex = $clickedComment.closest('.post').index();
    // Remove the comment from the page
    $clickedComment.remove();
    // Remove the comment from the associated post object
    postLibrary[postIndex].comments.splice(commentIndex, 1);
  };

  /*******************
   *  Render Views
   *******************/
  /*****View: All posts *****/
  const renderPosts = () => {
    // Empty posts so there's no repeats in the rendering, then add from postLibrary array
    $posts.empty();
    for (let i = 0; i < postLibrary.length; i++) {
      let post = postLibrary[i];

      let commentsBox =
        '<div class="comments-box initially-hidden"><div class="comments-list"></div><br><section class="comment-input-fields"><div class="row align-items-right"><div class="col-8 offset-2 right-justify" id="comment-creator"><h4><strong>Add a comment</strong></h4></div><div class="col-8 offset-2 form-group"><input class="form-control commenter-name" id="commenter-name-input" type="text" placeholder="Your name" aria-required="true"/><textarea class="form-control comment-input" id="comment-body-input" type="text" placeholder="Comment text" aria-required="true"></textarea><button type="button" class="add-comment btn btn-primary float-right" id="comment-button">Post comment</button></div></div><hr></hr></section>';

      $posts.append(
        '<div class="post"><div><a href="#" class="remove-post float-left">Remove post</a><br>' +
          post.text +
          '<br><div class="posted-by float-right"><strong> Posted by: </strong><span class="poster">' +
          post.name +
          '</span><br><a href="#" id="comments-toggler">Show/Hide comments</a><br><hr/></div><br>' +
          commentsBox +
          '</div>'
      );
    }
  };

  /*****View: All comments of one post *****/
  const renderComments = () => {
    // Empty comments so there's no repeats in the rendering
    $('.comments-list').empty();
    for (let i = 0; i < postLibrary.length; i++) {
      let post = postLibrary[i];
      // Index of the current post in the postLibrary array
      let index = postLibrary.indexOf(post);

      // Find post element equavlent to current post
      let $post = $('#post-viewer')
        .find('.post')
        .eq(index);

      for (let j = 0; j < post.comments.length; j++) {
        let comment = post.comments[j];
        // Append comment to associated post
        $post
          .find('.comments-list')
          .append(
            '<br><div class="comment"><a href="#" class="remove-comment float-left">Remove comment</a><br>' +
              comment.text +
              '<br><div class="by float-right"> By: <strong><span class="commenter">' +
              comment.name +
              '</strong><br></hr>' +
              '</div></div>'
          );
      }
    }
  };

  return {
    newPost: newPost,
    renderPosts: renderPosts,
    removePost: removePost,

    newComment: newComment,
    renderComments: renderComments,
    removeComment: removeComment,
    toggleComments: toggleComments
  };
};

const app = PostBoard();
app.renderPosts();
app.renderComments();

/*********************
 *  Event Handlers
 **********************/
/*****e: Add a post *****/
$('.add-post').on('click', function(event) {
  event.preventDefault();
  let text = $('#post-body-input').val();
  let user = $('#name-input').val();
  // Clear the name and post input fields
  $('input[type=text], textarea').val('');
  app.newPost(text, user);
  app.renderPosts();
  app.renderComments();
});

/*****e: Remove a post *****/
$('#post-viewer').on('click', '.remove-post', function() {
  app.removePost(this);
});

/*****e: Show/Hide comments *****/
$('#post-viewer').on('click', '#comments-toggler', function() {
  app.toggleComments(this);
});

/*****e: Add a comment *****/
$('#post-viewer').on('click', '.add-comment', function() {
  let text = $(this)
    .siblings('.comment-input')
    .val();
  let name = $(this)
    .siblings('.commenter-name')
    .val();
  // Find index of the post
  let postIndex = $(this)
    .closest('.post')
    .index();
  // Clear the name and comment input fields
  $('input[type=text], textarea').val('');
  app.newComment(text, name, postIndex);
  app.renderComments();
});

/*****e: Remove a comment *****/
$('#post-viewer').on('click', '.remove-comment', function() {
  app.removeComment(this);
});
