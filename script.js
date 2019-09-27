//Where will posts will be held once submitted

//Post events to page after button has been clicked
//Add posts to the page

//Allow users to comment on posts
//Display comments attached to posts

//render delete button to remove posts

//array to hold all posts as they are submitted
let posts = [];

let $postButton = $('.submit-post');
let $postBoard = $('.post-board');
let $userName = $('.user-name');

//add click event to submit material
$postButton.click(function(event) {
  event.preventDefault();
  $postBoard.append('<li><strong>Name: ' + $('.user-name').val() + '</strong><br>' + '<strong>Post: </strong>' + $('.post-text').val() + '<br>' + '<button type="button" class="btn btn-secondary btn-sm">Comment</button></li>');
  //$postBoard.append('<li><strong>Post: </strong>' + $('.post-text').val() + '</li>');
});
// $postBoard.append('<li><strong>Name: </strong>' + $('.user-name').val() + '</li>');
// $postBoard.append('<li><strong>Post: </strong>' + $('.post-text').val() + '</li>');
