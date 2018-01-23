/* 1. clean looking page
  2. a. a text box w input of post text
    b. a text box w input of name
  3. a submit/post button
    b. primary color and looking
  4. added posts display beneath the the previously posted post.

  5.ability to leave comments on each posts
    a.remove and comments buttons
    b.an 'x' by a post that when pushed deletes that post
    c.if both inputs in text box, should post their comments in comments list
    d. if 'remove' is pushed, should remove the post. Ask for confirmation first?
    e. enable users to edit posts
    f. Instead of having the comments appear right below the posts, enable a post to
     be "clickable" and for the page to seem to navigate to a new page that is
     dedicated to just that post and it's comments. Of course, it won't be a new page.
     Perhaps hide the original info and only display the comments of said post.
*/

//attempt to use handlebar to simplify the original code
var postData = {
  posts: [
    { post: "$('.post-text').val()", name: "$('.your-name').val()" },
  ]
};

var source = $('#post-template').html();
var template = Handlebars.compile(source);
var newHTML = template(postData);

/*var commentsContainer = '<div class="comments-container">' + '<div class=comments-list></div>' +
'<input type="text" class="comment-name">' +
'<button class="btn btn-primary add-comment">Post Comment</button> </div>';*/ //hidden here as a reference. not my actual code.
// append our new html to the page
$('.post').append(newHTML);
//function is run when the 'post' button is clicked
//function should take 1st input and post them beneath the previous post and take 2nd input and display "posted by:..."

$('.add-post').click(function () {
  //checks to make sure the are values in both input boxes.
  if ($('.post-text').val() === ""|| $('.your-name').val() === "") {
    //alerts user of error, that they don't have values in both input boxes.
    alert('Please complete both input fields');
  } else {
    //when there are 2 values, appends them in a string to an html element
    $('.posts').append('<div class="post">' + '<a href="#" class="remove">remove</a> ' + '<a href="#" class="show-comments">comments</a> ' + $('.post-text').val() + ' Posted By: ' + '<strong>' + $('.your-name').val() + '</strong>' + '</div>');
    $('.remove').click(removePost);
  }
});

//when user clicks on the remove button, it should remove that post.
//optionally add an alert to warn/confirm removal


var removePost = function () {
  //add an event listner to remove button when clicked
  $(this).parent().remove();

  return false;
};
