/**
 * Part 2 plan
 * 
 * Add comments to post object DONE
 * 
 * Add 'remove' and 'comments' links to all posts DONE
 * 
 * Click handler on remove to delete post
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
      <hr/>
      </div>`

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

const commentsToggleButtonClickHandler = () => {

  console.log('sup');

};



//post button for part 1
$('#new-post-button').click(newPostButtonClickHandler);

//delegated click handler for buttons not rendered yet
$('#posts').on('click', '.remove-post', removeButtonClickHandler);
$('#posts').on('click', '.comments-toggle', commentsToggleButtonClickHandler);

