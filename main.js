// use bootstrap in HTML
// write clean and pretty HTML, CSS, and JavaScript
// utilize JS patterns to organize when necessary
// use jQuery

/* 1. listen for click, invoke function upon click,
 inside the function - get the values of input, r
entered into the form - are there any values?
render values to page */

var posts = [];
var postText;
var name;
$list = $('ul');

var clicked = function() {
  console.log('clicked!');
  postText = ($('#post-text').val());
  name = ($('#your-name').val());
  newPosts();
};

$('button').on('click', clicked);

var newPosts = function() {
  $list.append('<li>' + postText + "<br>Posted By: " + name + '</li>');
};







/* 2.

user should be able to click on the comment
button on each post and see a comment box pop
up where they can see other comments and add
their own. */

// 3. x button lets user remove a comments

/* 5. post comment button should add comment to
the list of comments */

/* 6. when a user clicks remove above a post it
should remove the whole post */
