/**
 * Part 2 plan
 * 
 * [X] Add comments to post object
 * 
 * [X] Add 'remove' and 'comments' links to all posts
 * 
 * [X] Click handler on remove to delete post
 * 
 * Add comment section to post html
 *  initially empty, with add comment section, not visible
 * 
 * Click handler on comments to toggle visibility
 * 
 * Click handler in 'post comments' 
 *  adds comment to html
 *  'x' next to comment
 * 
 * Click handler on x's next to comments to delete comment
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

const checkForValidText = () => {

  if ($('#new-post-text').val().trim() === '' || $('#new-post-author').val().trim() === '')
    return false;

  return true;

};

const renderPosts = () => {

  let $postsContainer = $('#posts');

  //clear all posts then rerender all posts like in shopping cart
  $postsContainer.empty();

  posts.forEach( (post, index) => {

    let htmlString = 
      `<div class="container" data-id="${index}">
        <div class="row">
          <div class="post-container">
            <button class="remove-post blue-link-button">remove</button><button class="comments-toggle blue-link-button">comments</button><p class="post-text mb-0 d-inline-block">${post.postText}</p>
            <p class="post-author">Posted By: <b>${post.postAuthor}</b></p>
          </div>
        </div>
        <div class="visibility-wrapper d-none">
          <div class="row">
            <div class="comments-container"></div>
          </div>
          <div class="row">
            <input class="new-comment-text" type="text" placeholder="Comment Text"></input>
            <input class="new-comment-author ml-1" type="text" placeholder="User Name"></input>
            <button class="btn btn-primary new-comment-button ml-2" type="button">Post Comment</button>
          </div>
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
  if (!checkForValidText()) {
    console.log('Invalid input, post message and author required');
    return;
  }

  //save postText and postAuthor to variables, maybe not necessary
  let $postText = $('#new-post-text');
  let $postAuthor = $('#new-post-author');

  //create post object and add to posts array
  let newPost = {
    postText: $postText.val(),
    postAuthor: $postAuthor.val(),
    comments: []
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

const removeButtonClickHandler = function() {

  //$(this).closest('.container').remove();
  //above only removes html from site - post is still in posts[]
  //instead add index as data in post html
  //  remove post from posts[]
  //  rerender

  const index = $(this).closest('.container').data().id;

  posts.splice(index,1);

  renderPosts();

};

const commentsToggleButtonClickHandler = function() {

  //find comments div invisibility wrapper
  //if currently invisible, set to visible and vice versa

  let $currentPostContainer = $(this).closest('.container'); 
  let $currentVisibilityWrapper = $currentPostContainer.find('.visibility-wrapper');

  if ($currentVisibilityWrapper.hasClass('d-none'))
    $currentVisibilityWrapper.removeClass('d-none');
  else
    $currentVisibilityWrapper.addClass('d-none');

};



//post button for part 1
$('#new-post-button').click(newPostButtonClickHandler);

//$('#new-post-button').click( function() { $(this).addClass('invisible'); });
// above was to test bootstrap visible/invisible classes


//delegated click handler for buttons not rendered yet
$('#posts').on('click', '.remove-post', removeButtonClickHandler);
$('#posts').on('click', '.comments-toggle', commentsToggleButtonClickHandler);

