const posts = [];
/**
 * Make posts objects like so:
 * { postText: [text], postAuthor: [author] }
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

  posts.forEach( post => {

    let htmlString = 
      `<div class="container">
        <div class="row">
          <div class="post-container">
            <p class="post-text mb-0">${post.postText}</p>
            <p class="post-author">Posted By: <b>${post.postAuthor}</b></p>
          </div>
        </div>
      </div>
      <hr/>`

      $postsContainer.append(htmlString);

  });

};

const newPostButtonClickHandler = function(event) {
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
    postAuthor: $postAuthor.val()
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



//post button for part 1
$('#new-post-button').click(newPostButtonClickHandler);