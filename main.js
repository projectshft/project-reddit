// [x] A user should be able to use the form at the bottom of the page to create a new post.

    // "Create a new post" means the user can fill out info, hit submit, and see post appear in newsfeed

// [] New posts to the newsfeed should have a button option to remove the post

// New Post Creation/Submit

var button = document.getElementById('post-creation-submit-btn');

button.addEventListener('click', function () {
    var newsfeed = $('.newsfeed');

    var postText = document.getElementById('post-text').value;
    var postAuthor = document.getElementById('post-author').value;

    var newPostContainer = document.createElement('div');
    newPostContainer.setAttribute('class', 'user-post');

    var newPostBody = document.createElement('p');
    var newPostBodyTextNode = document.createTextNode(postText);
    newPostBody.appendChild(newPostBodyTextNode);

    var newPostAuthor = document.createElement('p');
    var newPostAuthorTextNode = document.createTextNode('Posted By: ' + postAuthor);
    newPostAuthor.appendChild(newPostAuthorTextNode);

    var newPostDeleteButton = document.createElement('button');
    var newPostDeleteButtonTextNode = document.createTextNode('Delete Post');
    newPostDeleteButton.appendChild(newPostDeleteButtonTextNode);
    newPostDeleteButton.setAttribute('class', 'btn btn-danger');
    newPostDeleteButton.addEventListener('click', function () {
        var post = $(this).closest('.user-post');
        post.remove();
    });

    var newPostHR = document.createElement('hr');

    newPostContainer.append(newPostBody);
    newPostContainer.append(newPostAuthor);
    newPostContainer.append(newPostDeleteButton);
    newPostContainer.append(newPostHR);

    newsfeed.append(newPostContainer);
});

/* Dummy Text:
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

Parzival, First to the Key
*/
