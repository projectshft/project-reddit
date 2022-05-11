// A user should be able to use the form at the bottom of the page to create a new post.

// New Post

var button = document.getElementById('post-creation-submit-btn');

button.addEventListener('click', function () {
    var postText = document.getElementById('post-text').value;
    var postAuthor = document.getElementById('post-author').value;
    console.log(postText);
    console.log(postAuthor);
});

/* Dummy Text:
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

Parzival, First to the Key
*/
