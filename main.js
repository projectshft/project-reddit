/**
 * Part 2 plan
 * 
 * [X] Add comments to post object
 * 
 * [X] Add 'remove' and 'comments' links to all posts
 * 
 * [X] Click handler on remove to delete post
 * 
 * [X] Add comment section to post html
 *  initially empty, with add comment section, not visible
 * 
 * [X] Click handler on comments to toggle visibility
 * 
 * [X] Refactor checkForValidText to take jquery object as argument
 * 
 * [X] Click handler in 'post comments' 
 *  adds comment to html
 *  'x' next to comment
 * 
 * [X] Click handler on x's next to comments to delete comment
 * 
 * [X] Removing posts while comments visible sets them all back to invisible
 *  on rendere check if it should stay visible
 */


const posts = [];
/**
 * Make posts objects like so:
 * { 
 *    postText: 'sometext',
 *    postAuthor: 'someauthor',
 *    comments: [
 *                {
 *                  commentText: 'someText',
 *                  commentAuthor: 'someAuthor
 *                }
 *              ] 
 * }
 */

//pass jquery object referencing a textarea or input
const checkForValidText = ($textArea) => ($textArea.val().trim() === '') ? false : true;

const renderPosts = () => {

  console.log('Rendering posts and comments');

  const $postsContainer = $('#posts');

  //clear all posts then rerender all posts like in shopping cart
  $postsContainer.empty();

  posts.forEach( (post, postIndex) => {

    const visibility = (posts[postIndex].commentsOpen) ? '' : 'd-none';

    let htmlString = 
      `<div class="container" data-id="${postIndex}">
        <div class="row">
          <div class="post-container">
            <button class="remove-post blue-link-button">remove</button><button class="comments-toggle blue-link-button">comments</button><p class="post-text mb-0 d-inline-block">${post.postText}</p>
          </div>
        </div>
        <div class="visibility-wrapper ${visibility}">
          <div class="comments-container">`;
            
    //add comments to string here
    post.comments.forEach( (comment, commentIndex) => {

      htmlString +=
      `     <div class="row" data-cid="${commentIndex}">
              <p class="mr-1 mb-0">${comment.commentText} </p>
              <p class="mb-0">Posted By: <b>${comment.commentAuthor}</b></p>
              <button class="remove-comment-button close text-primary ml-1"><span aria-hidden="true">&times;</span></button>
            </div>`

    });        
            
    htmlString +=        
      `   </div>
          <div class="row">
            <input class="new-comment-text mb-1 mt-1" type="text" placeholder="Comment Text"></input>
            <input class="new-comment-author ml-1 mb-1 mt-1" type="text" placeholder="User Name"></input>
            <button class="btn btn-primary new-comment-button ml-2" type="button">Post Comment</button>
          </div>
        </div>
        <div class="row">
          <p class="post-author mb-0">Posted By: <b>${post.postAuthor}</b></p>
        </div>
      <hr/>
      </div>`

    //add comment section div to string above, invisible
    //foreach comment in comments[], add to htmlString

    $postsContainer.append(htmlString);

  });

};

const newPostButtonClickHandler = (event) => {
  event.preventDefault();

  //check to see if anything is written to text areas
  //  if no text in one or the other, do nothing
  //    ignore whitespace? so if user only enters spaces/tabs it won't post
  // use helper function to use with other buttons
  if (!checkForValidText($('#new-post-text')) || !checkForValidText($('#new-post-author'))) {
    console.log('Invalid input, post message and author required');
    return;
  }

  console.log('Adding post');

  //save postText and postAuthor to variables, maybe not necessary
  const $postText = $('#new-post-text');
  const $postAuthor = $('#new-post-author');

  //create post object and add to posts array
  const newPost = {
    postText: $postText.val(),
    postAuthor: $postAuthor.val(),
    comments: [],
    commentsOpen: false
  };

  posts.push(newPost);

  //clear posts section front end - done in render function
  //render all posts
  renderPosts();

  //clear input
  $postText.val('');
  $postAuthor.val('');

  //after submitting and clearing, set focus back to textarea, better ux if submitted with enter
  $postText.focus();

};

const removePostButtonClickHandler = function() {

  //$(this).closest('.container').remove();
  //above only removes html from site - post is still in posts[]
  //instead add index as data in post html
  //  remove post from posts[]
  //  rerender

  console.log('Removing post');

  const index = $(this).closest('.container').data().id;

  posts.splice(index,1);

  renderPosts();

};

const commentsToggleButtonClickHandler = function() {

  //find comments div invisibility wrapper
  //if currently invisible, set to visible and vice versa
 
  console.log('Toggling comment visibility');

  const $currentVisibilityWrapper = $(this).closest('.container').find('.visibility-wrapper');

  ($currentVisibilityWrapper.hasClass('d-none'))
    ? $currentVisibilityWrapper.removeClass('d-none')
    : $currentVisibilityWrapper.addClass('d-none');

  //get current post id and set commentsOpen flag
  const index = $(this).closest('.container').data().id;

  posts[index].commentsOpen = (posts[index].commentsOpen) ? false : true;

};

const newCommentButtonClickHandler = function() {

  const $commentText = $(this).siblings('.new-comment-text');
  const $commentAuthor = $(this).siblings('.new-comment-author');
  
  //validate input
  if (!checkForValidText($commentText) || !checkForValidText($commentAuthor)) {
    console.log('Invalid input, comment message and author required');
    return;
  }

  console.log('Adding comment');

  //add comment to posts.comments[]
  const commentObject = {
    commentText: $commentText.val(),
    commentAuthor: $commentAuthor.val()
  };

  const index = $(this).closest('.container').data().id;

  posts[index].comments.push(commentObject);

  //render
  renderPosts();

};

const removeCommentButtonClickHandler = function() {

  console.log('Removing comment');

  const commentIndex = $(this).closest('.row').data().cid;
  const postIndex = $(this).closest('.container').data().id;

  posts[postIndex].comments.splice(commentIndex,1);

  renderPosts();

};


//post button for part 1
$('#new-post-button').click(newPostButtonClickHandler);

//$('#new-post-button').click( function() { $(this).addClass('invisible'); });
// above was to test bootstrap visible/invisible classes


//delegated click handler for buttons not rendered yet
$('#posts').on('click', '.remove-post', removePostButtonClickHandler);
$('#posts').on('click', '.comments-toggle', commentsToggleButtonClickHandler);
$('#posts').on('click', '.new-comment-button', newCommentButtonClickHandler);
$('#posts').on('click', '.remove-comment-button', removeCommentButtonClickHandler);