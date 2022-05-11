// A user should be able to use the form at the bottom of the page to create a new post.

// New Post

var button = document.getElementById('post-creation-submit-btn');

button.addEventListener('click', function () {
    var newsfeed = document.querySelector('.newsfeed');

    var postText = document.getElementById('post-text').value;
    var postAuthor = document.getElementById('post-author').value;

    var newPostContainer = document.createElement('div');

    var newPostBody = document.createElement('p');
    var newPostBodyTextNode = document.createTextNode(postText);
    newPostBody.appendChild(newPostBodyTextNode);

    var newPostAuthor = document.createElement('p');
    var newPostAuthorTextNode = document.createTextNode(postAuthor);
    newPostAuthor.appendChild(newPostAuthorTextNode);

    newPostHR = document.createElement('hr');

    newPostContainer.append(newPostBody);
    newPostContainer.append(newPostAuthor);
    newPostContainer.append(newPostHR);

    newsfeed.append(newPostContainer);
});

/* Dummy Text:
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

Parzival, First to the Key
*/
