document.getElementById('submit').addEventListener('click', function () {
    var nameInput = document.getElementById('name');
    var messageInput = document.getElementById('message');

    var name = nameInput.value;
    var text = messageInput.value;

    var postsDiv = document.querySelector('.posts');
    var newPostDiv = document.createElement('div');
    var newPostTextP = document.createElement('p');

    var deleteText = document.createElement('span');
    deleteText.textContent = 'Remove';
    deleteText.style.cursor = 'pointer';
    deleteText.style.color = 'blue';
    deleteText.addEventListener('click', function () {
        postsDiv.removeChild(newPostDiv);
    });

    var comments = document.createElement('span');
    comments.textContent = 'Comments';
    comments.style.cursor = 'pointer';
    comments.style.color = 'blue';
    comments.style.paddingLeft = '5px';
    comments.style.paddingRight = '5px';
    comments.addEventListener('click', function () {
        var commentsSection = document.createElement('div');
        commentsSection.className = 'comments'; 
        

        var form = document.createElement('form');
        form.style.marginTop = '20px';

        var commentUserName = document.createElement('input');
        commentUserName.setAttribute('type', 'text');
        commentUserName.setAttribute('class', 'visible form-control');
        commentUserName.setAttribute('placeholder', 'Your Name');
        commentUserName.style.marginBottom = '15px';

        var commentTextArea = document.createElement('textarea');
        commentTextArea.setAttribute('class', 'visible form-control');
        commentTextArea.setAttribute('placeholder', 'Comment Text');
        commentTextArea.style.marginBottom = '15px';

        var submitComment = document.createElement('button');
        submitComment.textContent = 'Submit Comment';
        submitComment.setAttribute('class', 'btn btn-primary')
        submitComment.addEventListener('click', function (event) {
            event.preventDefault();
            handleCommentSubmission(commentUserName.value, commentTextArea.value, commentsSection);
        });

        
        
        
        form.appendChild(commentUserName);
        form.appendChild(commentTextArea);
        form.appendChild(submitComment);
        commentsSection.appendChild(form);
        newPostTextP.appendChild(commentsSection);

    });

    newPostTextP.appendChild(deleteText);
    newPostTextP.appendChild(comments);

    var newPostTextNode = document.createTextNode('  Message: ' + text + ' - ');

    var nameSpan = document.createElement('span');
    nameSpan.textContent = 'Posted by: ' + name;

    newPostTextP.appendChild(newPostTextNode);
    newPostTextP.appendChild(nameSpan);

    var newPostHR = document.createElement('hr');

    newPostDiv.appendChild(newPostTextP);
    newPostDiv.appendChild(newPostHR);
    postsDiv.appendChild(newPostDiv);

    nameInput.value = '';
    messageInput.value = '';
});

function handleCommentSubmission(username, comment, commentsSection) {
    var newCommentP = document.createElement('p');
    newCommentP.textContent = 'Comment: ' + comment + ' - Comment by: ' + username;

    commentsSection.appendChild(newCommentP);
}

