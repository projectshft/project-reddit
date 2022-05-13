// var button = document.getElementById('post-creation-submit-btn');

// button.addEventListener('click', function () {
//     var newsfeed = $('.newsfeed');

//     var postText = $('textarea#post-text').val();
//     var postAuthor = $('textarea#post-author').val();

//     var newPostContainer = document.createElement('div');
//     newPostContainer.setAttribute('class', 'user-post');

//     var newPostBody = document.createElement('p');
//     var newPostBodyTextNode = document.createTextNode(postText);
//     newPostBody.appendChild(newPostBodyTextNode);

//     var newPostAuthor = document.createElement('p');
//     var newPostAuthorTextNode = document.createTextNode('Posted By: ' + postAuthor);
//     newPostAuthor.appendChild(newPostAuthorTextNode);

//     var newPostDeleteButton = document.createElement('button');
//     var newPostDeleteButtonTextNode = document.createTextNode('Delete Post');
//     newPostDeleteButton.appendChild(newPostDeleteButtonTextNode);
//     newPostDeleteButton.setAttribute('class', 'btn btn-danger');
//     newPostDeleteButton.addEventListener('click', function () {
//         var post = $(this).closest('.user-post');
//         post.remove();
//     });

//     var newPostHR = document.createElement('hr');

//     newPostContainer.append(newPostBody);
//     newPostContainer.append(newPostAuthor);
//     newPostContainer.append(newPostDeleteButton);
//     newPostContainer.append(newPostHR);

//     newsfeed.append(newPostContainer);
// });

/* Dummy Text:
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

Parzival, First to the Key
*/

var postNumber = 0

$('#post-creation-submit-btn').click(function () {
    var postText = $('textarea#post-text').val();
    var postAuthor = $('textarea#post-author').val();
    postNumber++;
    $('.newsfeed').append('<div class="user-post" id="user-post' + postNumber + '"></div>');
    $('div#user-post' + [postNumber]).append('<p>' + postText + '</p>');
    $('div#user-post' + [postNumber]).append('<p>- ' + postAuthor + '</p>');
    $('div#user-post' + [postNumber]).append('<button class="btn btn-danger">Delete Post</button>');
    $('div#user-post' + [postNumber]).append('<hr>');
    $('.btn-danger').click(function () {
        var post = $(this).closest('.user-post');
        post.remove();
    })
});
