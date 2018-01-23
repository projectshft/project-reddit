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

//var text = ;
//var user = ;
var postData = {
  posts: [
    { post: $('.post-text').val(), name: $('.your-name').val() },
  ]
};

var source = $('#post-template').html();
var template = Handlebars.compile(source);
var newHTML = template(postData);

// append our new html to the page
$('.post').append(newHTML);

var addPost = function () {
  $('.add-post').click(function () {
    if ($('.post-text').val() === ""|| $('.your-name').val() === "") {
          alert('Please complete both input fields');
        } else {
      $('.posts').append($('.post-text').val() + ' Posted By: ' + $('.your-name').val());
      }
    });
};
addPost();


/*      if ($('.post-text').val() == ""|| $('.post-text').val() == "") {
        alert('Please complete both input fields');
      } else {
        $('div.posts').append(text);
      }
    });
}*/
