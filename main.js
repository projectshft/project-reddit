
// **************************************** VARIABLES **************************************** //

const posts = [];
const $postButton = {};
const $deleteCommentBtn = {};

// **************************************** FUNCTIONS **************************************** //

// Creates a post object, pushes to the posts array, and renders posts
let postId = 0;
let commentId = 0;
const createPost = (author, message) => {
  const post = {
    author: author,
    message: message,
    votes: 0,
    id: postId,
    comments: [],
    updatePost(newAuthor, newMessage) {
      this.author = newAuthor;
      this.message = newMessage;
    },
    addComment(comment) {
      this.comments.push(comment);
      commentId++; // Increment id for newly created comments
    },
    deleteComment(comment) {
      this.comments.splice(this.comments.indexOf(comment), 1);
    }
  };

  // Add post to posts list and increment id for newly created posts (post.id)
  posts.push(post);
  postId++;
};

// Render HTML for posts
const sortAndRenderPosts = () => {
  posts.sort((a, b) => b.votes - a.votes);
  
  // Handlebars template
  const source = $('#post-template').html();
  const template = Handlebars.compile(source);

  // Empty posts list, create HTML for each post, append to posts list
  $(`.posts-list`).empty();
  posts.map(post => {
    let postHTML = template(post);
    $(`.posts-list`).append(postHTML) ;
  });
};

// Handles ability to upvote, downvote, edit, and delete posts, as well as add comments to posts using their respective buttons
const handlePostButtonClick = jqButton => {
  const $clickedButton = jqButton.buttonClicked;
  const $associatedPost = jqButton.associatedPost;
  const htmlPostDataId = jqButton.associatedPost.data('id');

  // Maps JS post obj to HTML post DOM element, execute appropriate button action, re-render posts
  posts.map(post => {
    if(post.id === htmlPostDataId) {
      // Upvote post
      if($clickedButton.hasClass('upvote-post')) {
        post.votes++;
        sortAndRenderPosts();
      }
      // Downvote post
      else if($clickedButton.hasClass('downvote-post')) {
        post.votes--;
        sortAndRenderPosts();
        //TODO: Prevent double downvote (sorting issue). 
      }
      // Edit post
      else if($clickedButton.hasClass('edit-post')) {
        editPost($associatedPost, post);
      }
      // Delete post
      else if($clickedButton.hasClass('delete-post')) {
        posts.splice(posts.indexOf(post), 1);
        sortAndRenderPosts();
      }
      // Add comment to post
      else if($clickedButton.hasClass('add-post-comment')) {
        addPostComment($associatedPost, post);
        renderComments($associatedPost, post.comments); // Show existing comments
      }
    }
  });
};

// Update DOM to allow user to add a comment to an individual post's comments arr
const addPostComment = (jqPost, post) => {
  // Change 'Add Post' form to 'Add Comment' form
  $(`.add-comment`).find(`h3`).text(`Add a new comment`);
  $(`#name`).focus();
  $('#message').attr(`placeholder`, `Comment`);
  $(`.add-post-btn`).hide();
  $(`.add-comment-btn`).show();

  // Create post comment obj, add to post comments arr, render comments
  $(`.add-comment-btn`).on(`click`, function(e) {
    e.preventDefault();
    const postComment = {
      id: commentId,
      author: $(`#name`).val(),
      comment: $(`#message`).val()
    };
    post.addComment(postComment);
    renderComments(jqPost, post.comments);

    // Change form back to 'Add Post'
    $(`.add-comment`).find(`h3`).text(`Add a new post`);
    $(`#name`).val('').focus();
    $('#message').attr(`placeholder`, `Message`).val('');
    $(`.add-comment-btn`).hide();
    $(`.add-post-btn`).show();

    $(`.add-comment-btn`).off();
  });
};

// Render comments html
const renderComments = (jqPost, comments) => {
  // Update span that shows the number of comments a post has
  jqPost.find(`.comment-count`).text(comments.length);

  // Handlebars template
  const source = $('#comment-template').html();
  const template = Handlebars.compile(source);

  // Empty post comments list, create HTML for each comment, append to comments list
  jqPost.find(`.comments-list`).empty();
  comments.map(comment => {
    let commentHTML = template(comment);
    jqPost.find(`.comments-list`).append(commentHTML);
  });

  // Add listener for newly rendered 'Delete Comment' button
  $('.delete-comment').on('click', function() {
    $deleteCommentBtn.buttonClicked = $(this);
    $deleteCommentBtn.associatedComment = $(this).closest('.comment-item');
    deletePostComment($(this).closest('.post-item'));
  });
};

// Delete comment from post on page
const deletePostComment = jqPost => {
  // Map comment obj to html comment, delete comment obj, re-render page
  const closestCommentId = $deleteCommentBtn.associatedComment.data('id');
  posts.map(post => {
    post.comments.map(comment => {
      if (comment.id === closestCommentId) {
        post.deleteComment(comment);
        renderComments(jqPost, post.comments);
      }
    });
  });
};

// Update DOM to allow user to edit a post, thus updating the post obj, then rendering the update
const editPost = (jqPost, post) => {
  const $editPostForm = jqPost.find('.edit-post-form');
  const $editAuthorInput = jqPost.find('.edit-author');
  const $editMessageInput = jqPost.find('.edit-message');
  
  // Hide post contents from page while editing
  jqPost.find('.post').addClass('hide-el');

  // Show edit-post form with post obj values
  $editPostForm.removeClass('hide-el').addClass('show-el');
  $editAuthorInput.val(post.author).focus();
  $editMessageInput.val(post.message);

  // Update post obj props upon submission and re-render HTML
  $editPostForm.on('submit', function(e) {
    e.preventDefault();
    post.updatePost($editAuthorInput.val(), $editMessageInput.val());
    sortAndRenderPosts();
  });
};

// **************************************** GLOBAL EVENTS **************************************** //

// On form submission, a post should be created based off of the user's inputs
$(`.add-post-btn`).on(`click`, function(e) {
  // Prevent form from actually submitting anywhere
  e.preventDefault();

  // Get user's inputs and create the post obj
  let name = $(`#name`).val();
  let message = $(`#message`).val();
  createPost(name, message);
  sortAndRenderPosts();

  // Clear form and focus on input
  $(`#name`).val('').focus();
  $(`#message`).val('');
});

// Captures post's button that was clicked and its parent li AFTER being rendered onto the page
$(`.posts-list`).on(`click`, 'button', function() {
  // Determine which button was clicked and the data-id of the html post
  $postButton.buttonClicked = $(this);
  $postButton.associatedPost = $(this).parent();

  handlePostButtonClick($postButton);
});
