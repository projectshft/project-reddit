// [x] A user should be able to use the form at the bottom of the page to create a new post.

    // "Create a new post" means the user can fill out info, hit submit, and see post appear in newsfeed

// [] New posts to the newsfeed should have an option to leave a comment, and an option to remove the post

    // These should appear as buttons

// New Post

var button = document.getElementById('post-creation-submit-btn');

var postNumber = 0;

button.addEventListener('click', function () {
    var newsfeed = document.querySelector('.newsfeed');

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

    var newPostCommentButton = document.createElement('button');
    var newPostCommentButtonTextNode = document.createTextNode('Comments');
    newPostCommentButton.appendChild(newPostCommentButtonTextNode);
    newPostCommentButton.setAttribute('type', 'button');
    newPostCommentButton.setAttribute('class', 'btn btn-info commentButton');

    var newPostDeleteButton = document.createElement('button');
    var newPostDeleteButtonTextNode = document.createTextNode('Delete Post');
    newPostDeleteButton.appendChild(newPostDeleteButtonTextNode);
    newPostCommentButton.setAttribute('type', 'button');
    newPostDeleteButton.setAttribute('class', 'btn btn-danger deleteButton');

    var newPostHR = document.createElement('hr');

    newPostContainer.append(newPostBody);
    newPostContainer.append(newPostAuthor);
    newPostContainer.append(newPostCommentButton);
    newPostContainer.append(newPostDeleteButton);
    newPostContainer.append(newPostHR);

    newsfeed.append(newPostContainer);

    var deletePost = function () {
        var post = document.getElementsByClassName('user-post')[0];
        post.remove();
    };
    var deleteButton = document.getElementsByClassName('deleteButton')[0];
    deleteButton.addEventListener('click', deletePost);

    var commentOnPost = function () {
        console.log('hello');
    };
    var commentButton = document.getElementsByClassName('commentButton')[0];
    commentButton.addEventListener('click', commentOnPost);
});

/* Dummy Text:
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

Parzival, First to the Key
*/
