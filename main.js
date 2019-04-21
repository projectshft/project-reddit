/*********************
 *  PostBoard module
 *********************/
const PostBoard = () => {
  // Global variable to store posts
  let postLibrary = [];
  let $posts = $('#post-viewer');
  // Error message for alerts
  let INCOMPLETE_SUB =
    'All fields must be filled out for a submission to be posted. Please make sure the name and text fields are filled out.';
  /**********************
   *  Public functions
   **********************/
  /*****Fn: Add a post *****/
  const newPost = (text, user) => {
    // Create each post as an object; store it in the postLibrary array
    if (user === '' || text === '') {
      // Ensure that empty fields will not be accepted for posting
      alert(INCOMPLETE_SUB); // Notify user of attempt to submit empty field(s)
    } else {
      postLibrary.push({ name: user, text: text, comments: [] });
    }
  };

  /*****Fn: Remove a post *****/
  const removePost = currentPost => {
    let $clickedPost = $(currentPost).closest('.post'); //Select post to be removed
    let index = $clickedPost.index(); // Index of the post
    postLibrary.splice(index, 1); // Remove designated post
    $clickedPost.remove();
  };

  /*****Fn: Toggle comment *****/
  const toggleComments = currentPost => {
    let $clickedPost = $(currentPost).closest('.post');
    $clickedPost.find('.comments-box').toggle();
  };

  /*****Fn: Add a comment *****/
  const newComment = (text, name, postIndex) => {
    if (name === '' || text === '') {
      // Ensure that empty fields will not be accepted for comments
      alert(INCOMPLETE_SUB); // Notify user of attempt to submit empty field(s)
    } else {
      let comment = { name: name, text: text };
      postLibrary[postIndex].comments.push(comment); // Push comment into associated post's comment array
    }
  };

  /*****Fn: Remove a comment *****/
  const removeComment = commentButton => {
    let $clickedComment = $(commentButton).closest('.comment'); //Select comment to be removed
    let commentIndex = $clickedComment.index(); // Index of the comment element
    let postIndex = $clickedComment.closest('.post').index(); // Index of the associated post
    $clickedComment.remove(); // Remove the comment from the page
    postLibrary[postIndex].comments.splice(commentIndex, 1); // Remove the comment from the associated post object
  };

  /*******************
   *  Render Views
   *******************/
  /*****View: All posts *****/
  const renderPosts = () => {
    $posts.empty(); // Empty posts first so there's no repeats in the rendering
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
    $('.comments-list').empty(); // Empty comments first so there's no repeats in the rendering
    for (let i = 0; i < postLibrary.length; i++) {
      let post = postLibrary[i];
      let index = postLibrary.indexOf(post);
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
app.renderPosts(); // Render posts upon page load
app.renderComments();

/*********************
 *  Event Handlers
 **********************/
/*****e: Add a post *****/
$('.add-post').on('click', function(event) {
  event.preventDefault();
  let text = $('#post-body-input').val();
  let user = $('#name-input').val();
  $('input[type=text], textarea').val(''); // Clear the name and post text input fields
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
  $('input[type=text], textarea').val(''); // Clear the name and comment text input fields
  app.newComment(text, name, postIndex);
  app.renderComments();
});

/*****e: Remove a comment *****/
$('#post-viewer').on('click', '.remove-comment', function() {
  app.removeComment(this);
});
