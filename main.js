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

 /**
  * Extension 1 plan
  * 
  * [X] Add edit button on posts
  * 
  * [X] Click handler for edit button
  *   [X] save current post text - dont need to save, text is in post object
  *   [X] remove post text div
  *   [X] add text area
  *   [X] add saved text to text area
  *   [X] add save button
  *   [X] add cancel button
  * 
  * [X] Turn off click handler if edit is open
  * 
  * [X] Click handler for save button
  * 
  * [X] Click handler for cancel button
  * 
  * [X] For both of the above, reset edit button click handler
  * 
  * [X] Have edit button toggle opening/closing edit area/buttons
  */

  /**
   * Extension 2 Plan
   * 
   * [X] Add click handler on individual posts
   * 
   * [ ] Create renderIndividualPostPage function
   *  [X] set everything on main page invisible - class d-none?
   *  [X] Back button with click handler that calls renderPosts
   *  [X] post text
   *  [X] post author
   *  [X] Back button also renders addpost section
   *  [ ] edit post button
   *  [ ] remove post button
   *  [ ] dynamic comments section
   *  [ ] add new comments section
   * 
   * [ ] When done remove commentsOpen from post objects
   * 
   * [ ] Change renderPosts()
   *  [ ] remove comments and add comment section
   *  [ ] remove edit and remove buttons
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
 *              ],
 *    commentsOpen: true/false
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
            <button class="remove-post blue-link-button">remove</button>
            <button class="comments-toggle blue-link-button">comments</button>
            <button class="edit-post blue-link-button">edit</button>
            <p class="post-text mb-0 d-inline-block">${post.postText}</p>
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

const renderIndividualPostPage = (index) => {

  console.log(`Rendering individual post #${index}`);

  //remove everything - maybe refactor to visible/invisible
  const $postsContainer = $('#posts');
  const $addPostsContainer = $('#addPosts');
  $postsContainer.empty();
  $addPostsContainer.empty();

  //back button
  const backButton = 
    `<div class="container">
      <div class="row">
        <button class="back-button blue-link-button">Back</button>
      </div>
    </div>`;

    $postsContainer.append(backButton);

  //post body and post author
  const postBody =
    `<div class="container">
      <div class="row">
        <div class="post-container">
          <h1 class="post-text">${posts[index].postText}</h1>
          <p class="post-author">Posted by: <b>${posts[index].postAuthor}</b></p>
        </div>
      </div>
    </div>`;

    $postsContainer.append(postBody);

  //comments
  posts[index].comments.forEach( (comment, commentIndex) => {

    const commentBody =
      `<div class="container">
        <div class="row">
          <div class="comment-container">
            <p class="comment-text mb-0">${posts[index].comments[commentIndex].commentText} Commented by: <b>${posts[index].comments[commentIndex].commentAuthor}</b></p>
          </div>
        </div>
      </div>`;

    $postsContainer.append(commentBody);

  })

  //add comment section in the $addPostsContainer section
  const addCommentForms =
    `<form class="col-md-6 mt-1">
     <h3>Add a New Comment</h3>

      <div class="form-group">
        <textarea id="new-comment-text" type="text"
          class="form-control"
          placeholder="Comment Text"></textarea>
      </div>

      <div class="form-group">
        <input id="new-comment-author" type="text"
          class="form-control"
          placeholder="Your Name"></input>
      </div>
    
      <button id="new-comment-button" class="btn btn-primary">Post</button>
    </form>`;

  $addPostsContainer.append(addCommentForms);

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

const newCommentEnterKeypressHandler = function(event) {

  if (event.keyCode !== 13)
    return;

  console.log('Enter key pressed');

  //use already existing click handler
  $(this).siblings('.new-comment-button').click();

};

const editPostButtonClickHandler = function() {

  console.log('Editing post');

  //if not in edit already, go into edit mode
  //else rerender
  if($(this).siblings('p').length === 0) {
    console.log('Exiting edit');
    renderPosts();
    return;
  }

  $(this).siblings('p').remove();

  //add text area
  //add saved text to text area
  const index = $(this).closest('.container').data().id;

  const htmlString =
  `<div class="container">
    <div class="row">
      <textarea>${posts[index].postText}</textarea>
    </div>
    <div class="row">
      <button class="btn btn-primary save-edit-button mt-1 mr-1">Save</button>
      <button class="btn btn-primary cancel-edit-button mt-1 mr-1">Cancel</button>
    </div>
  </div>`;

  $(this).parent().append(htmlString);

  //add save button - done
  //add cancel button - done

};

const saveEditButtonClickHandler = function() {

  //validate input
  const $editText = $(this).closest('.container').find('textarea');

  if (!checkForValidText($editText)) {
    console.log('Invalid input, edit message');
    return;
  }

  console.log('Saving edit');

  //find post index
  const index = $(this).closest('.post-container').closest('.container').data().id;

  //save edit to post
  posts[index].postText = $(this).closest('.container').find('textarea').val();

  //rerender
  renderPosts();

};

const cancelEditButtonClickHandler = function() {

  //on cancel, don't need to save anything
  renderPosts();

};

const goToPostPageClickHandler = function() {

  const index = $(this).closest('.container').data().id;

  console.log(`Going to post #${index}`);

  renderIndividualPostPage(index);

};

const goToMainPage = function() {

  console.log('Going to main page');

  renderPosts();

  //redraw addPost section
  const $addPosts = $('#addPosts');

  $addPosts.empty();

  const addPostsForm =
    `<form class="col-md-6 mt-1">
      <h3>Add a New Post</h3>

      <div class="form-group">
        <textarea id="new-post-text" type="text"
          class="form-control"
          placeholder="Post Text"></textarea>
      </div>

      <div class="form-group">
        <input id="new-post-author" type="text"
          class="form-control"
         placeholder="Your Name"></input>
      </div>
    
      <button id="new-post-button" type="buton" class="btn btn-primary">Post</button>
    </form>`;

  $addPosts.append(addPostsForm);

};


//post button for part 1
$('#new-post-button').click(newPostButtonClickHandler);

//$('#new-post-button').click( function() { $(this).addClass('invisible'); });
// above was to test bootstrap visible/invisible classes
//const $turnOnEditClickHandler = $('#posts').on('click', '.edit-post', editPostButtonClickHandler);
//above line doesn't work? ask about it if there's time

//delegated click handler for buttons not rendered yet
$('#posts').on('click', '.remove-post', removePostButtonClickHandler);
$('#posts').on('click', '.comments-toggle', commentsToggleButtonClickHandler);
$('#posts').on('click', '.edit-post', editPostButtonClickHandler);

$('#posts').on('click', '.new-comment-button', newCommentButtonClickHandler);
$('#posts').on('click', '.remove-comment-button', removeCommentButtonClickHandler);

$('#posts').on('click', '.save-edit-button', saveEditButtonClickHandler);
$('#posts').on('click', '.cancel-edit-button', cancelEditButtonClickHandler);

//add delegated keypress handler for comment textboxes so user can press enter
$('#posts').on('keypress', '.new-comment-text', newCommentEnterKeypressHandler);
$('#posts').on('keypress', '.new-comment-author', newCommentEnterKeypressHandler);

//handlers for extension 2 - will probably not use above handlers after
$('#posts').on('click', '.post-container', goToPostPageClickHandler);
$('#posts').on('click', '.back-button', goToMainPage);








//"run" script to save time for debugging
posts.push({
  postText: 'this is a test post',
  postAuthor: 'debugger',
  comments: [
    {
      commentText: 'this is a test comment',
      commentAuthor: 'debugger'
    },
    {
      commentText: 'this is also a test comment',
      commentAuthor: 'debugger'
    }
  ],
  commentsOpen: true
});
posts.push({
  postText: 'this is a test post #2',
  postAuthor: 'debugger',
  comments: [
    {
      commentText: 'this is a test comment #2',
      commentAuthor: 'debugger'
    },
    {
      commentText: 'this is also a test comment #2',
      commentAuthor: 'debugger'
    }
  ],
  commentsOpen: true
})

renderPosts();

//$('.edit-post').click();