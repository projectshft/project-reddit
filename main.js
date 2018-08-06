// declare global variables
var newPosts;
var postText;
var postName;
$list = $('ul');

/* postButton func retrieves value of
user input and prints to webpage */
var postButton = function() {
  postText = ($('#post-text').val());
  postName = ($('#your-name').val());
  $list.append('<li>' + postText + "<br>Posted By: " + postName + '</li>' + "<hr>");
};
/* jQuery here links button#1 to
click event */
$('button#1').on('click', postButton);
///
var postComment = function() {
  commentText = ($('#comment-text').val());
  commentName = ($('#user-name').val());
};
// attempt at button#2 functionality
$('.posts').on('click', 'button#2', postComment () {
 console.log('clicked!');
});
