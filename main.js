//when the post button is clicked the user input is taken
//and then it is placed in the comment area



//creating base html for the comments
var createPost = function(userName, userText) {
  return '<p>' + userText + '<br>' + 'Posted By: ' + userName + '</p>'
};



//creating a function that gets the input info from the user and places it in a div above the post bugtton

$('.post-button').on('click', function() {
  var postText = $('#post-text').val();
  var postName = $('#post-name').val();
  $('.comment-area').prepend(createPost(postName, postText));
});



//when comment is clicked on post after it is made, a toggle box
//pops up which allows someone to add comment and usder name and a button as well

//when someone clicks the x the comment is removed

//when someone clicks the remove button the entire post is deleted