var postsDiv = document.getElementsByClassName('posts')[0];

document.getElementById('submit-post').addEventListener('click', function () {
    postsDiv.append(createPost(document.getElementById('post-name'), document.getElementById('post-text')));
});

var createPost = function(name, text) {
    var postName = name.value;
    var postText = text.value;

    var newPost = document.createElement('div');
    newPost.setAttribute('class', 'post');

    var commentDiv = document.createElement('div');
    commentDiv.setAttribute('class', 'comments hidden');
    var comments = document.createElement('div');
    commentDiv.appendChild(comments);

    var postTextParagraph = document.createElement('p');
    var postTextElement = document.createTextNode(postText + ' - Posted by: ' + postName);
    postTextParagraph.appendChild(postTextElement);
    
    var showCommentsButton = document.createElement('button');
    showCommentsButton.setAttribute('type', 'button');
    showCommentsButton.setAttribute('class', 'btn-xs btn-info show-comments');
    showCommentsButton.innerHTML = 'show comments';

    showCommentsButton.addEventListener('click', function () {
        console.log(showCommentsButton.parentElement.querySelector('.comments'));
        if(showCommentsButton.parentElement.querySelector('.comments').classList.contains('hidden')) {
            showCommentsButton.parentElement.querySelector('.comments').className = 'comments';
        } else {
            showCommentsButton.parentElement.querySelector('.comments').className += ' hidden';
        }
    });

    var removePostButton = document.createElement('button');
    removePostButton.setAttribute('type', 'button');
    removePostButton.setAttribute('class', 'btn-xs btn-danger remove-comment');
    removePostButton.innerHTML = 'remove post';

    removePostButton.addEventListener('click', function () {
        removePostButton.parentElement.remove();
    });

    var commentForm = document.createElement('form');
    commentForm.setAttribute('class', 'comment-form')
    commentForm.setAttribute('onsubmit', 'event.preventDefault();');

    var commentTextGroup = document.createElement('div');
    commentTextGroup.setAttribute('class', 'form-group');
    commentTextGroup.innerHTML = '<textarea class="form-control" id="comment-text" type="text" placeholder="Your Comment"></textarea>';

    var commentNameGroup = document.createElement('div');
    commentNameGroup.setAttribute('class', 'form-group');
    commentNameGroup.innerHTML = '<input class="form-control" id="comment-name" type="text" placeholder="Your Name" />';

    var commentSubmitButton = document.createElement('div');
    commentSubmitButton.innerHTML = '<button class="btn btn-primary" id="submit-comment">Submit Comment</button>';
    commentSubmitButton.addEventListener('click', function () {
        comments.append(createComment(commentSubmitButton.parentElement.querySelector('#comment-name'),commentSubmitButton.parentElement.querySelector('#comment-text')))
    });

    commentForm.appendChild(commentTextGroup);
    commentForm.appendChild(commentNameGroup);
    commentForm.appendChild(commentSubmitButton);
    commentDiv.appendChild(commentForm);

    var postBreak = document.createElement('hr');

    newPost.append(removePostButton);
    newPost.append(showCommentsButton);
    newPost.append(postTextParagraph);
    newPost.append(commentDiv);
    newPost.append(postBreak);

    return newPost;
};

var createComment = function (name, text) {
    var commentName = name.value;
    var commentText = text.value;

    var commentDiv = document.createElement('div');
    commentDiv.setAttribute('class', 'comment');

    var commentTextParagraph = document.createElement('p');
    var commentTextElement = document.createTextNode(commentText + ' - Posted by: ' + commentName);
    commentTextParagraph.appendChild(commentTextElement);

    var removeCommentButton = document.createElement('button');
    removeCommentButton.setAttribute('type', 'button');
    removeCommentButton.setAttribute('class', 'btn-xs btn-danger');
    removeCommentButton.innerHTML = 'remove comment';

    removeCommentButton.addEventListener('click', function () {
        removeCommentButton.parentElement.remove();
    });

    commentDiv.appendChild(removeCommentButton);
    commentDiv.appendChild(commentTextParagraph);

    return commentDiv;
};