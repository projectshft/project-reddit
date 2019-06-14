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

  //create post object and add to posts array

  //clear posts section front end

  //render all posts

};



//post button for part 1
$('#new-post-button').click(newPostButtonClickHandler);