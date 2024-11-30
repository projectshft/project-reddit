const authorInput = document.getElementById('name');
const messageInput = document.getElementById('message');
const postButton = document.getElementById('submit');
const messageBoard = document.getElementById('posts'); // Container for posts

var messages = [];

// Function to display messages dynamically
function postMessages() {
    messageBoard.innerHTML = ''; // Clear previous messages

    for (let i = 0; i < messages.length; i++) {
        const element = messages[i];
        var messageElement = createMessageElement(element, i);
        messageBoard.append(messageElement);
    }
}

// Function to create a message element
function createMessageElement(message, index) {
    var div = document.createElement('div');
    div.className = 'message';

    var messageContent = document.createElement('div');
    messageContent.className = 'message-content';
    messageContent.innerHTML = `${message.content} <strong>-posted by: ${message.author || 'Anonymous'}</strong>`;

    var controls = document.createElement('div');
    controls.className = 'message-controls';

    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn btn btn-danger btn-sm';
    deleteBtn.textContent = 'Remove';
    deleteBtn.onclick = () => {
        messages = removeMessage(index);
        postMessages();
    };

    controls.append(deleteBtn);
    div.append(messageContent);
    div.append(controls);

    // Comments section
    var commentsSection = document.createElement('div');
    commentsSection.className = 'comments-section';

    //comments toggle
    var commentsToggle = document.createElement('span');
    commentsToggle.className = 'comments-toggle';
    commentsToggle.textContent = `Comments (${message.comments ? message.comments.length : 0})`;
    commentsToggle.onclick = () => {
        commentsSection.classList.toggle('visible');
    };

    // comments list
    var commentsList = document.createElement('div');
    commentsList.className = 'comments-list';
    if (message.comments) {
        for (let i = 0; i < message.comments.length; i++) {
            var commentDiv = document.createElement('div');
            commentDiv.className = 'comment';

            var commentContent = document.createElement('div');
            commentContent.innerHTML = `${message.comments[i].text}<strong> -posted by: ${message.comments[i].author}</strong>`;
       
            var deleteCommentBtn = document.createElement('button');
            deleteCommentBtn.className = 'delete-btn btn btn-danger btn-sm';
            deleteCommentBtn.textContent = 'Remove';
            deleteCommentBtn.onclick = () => {
                message.comments.splice(i, 1);
                postMessages();
            };

            commentDiv.appendChild(commentContent);
            commentDiv.appendChild(deleteCommentBtn);
            commentsList.append(commentDiv);
        }
    }  

    // comment input & button
    var commentNameInput = document.createElement('input');
    commentNameInput.type = 'text';
    commentNameInput.className = 'comment-input';
    commentNameInput.placeholder = 'your name here';

    var commentInput = document.createElement('input');
    commentInput.type = 'text';
    commentInput.className = 'comment-input';
    commentInput.placeholder = 'add comment';

    var commentBtn = document.createElement('button');
    commentBtn.className = 'btn btn-primary';
    commentBtn.textContent = 'post comment';
    commentBtn.onclick = () => {
        const commentText = commentInput.value.trim();
        const commentAuthor = commentNameInput.value.trim();
        if (commentText) {
            if (!message.comments) message.comments = [];
            message.comments.push({
               text: commentText,
               author: commentAuthor || 'Anonymous'
            });
            commentInput.value = '';
            commentNameInput.value = '';
            postMessages();
        }
    };

    commentsSection.append(commentsList);
    commentsSection.append(commentNameInput);
    commentsSection.append(commentInput);
    commentsSection.append(commentBtn);
    div.append(commentsToggle);
    div.append(commentsSection);

    return div;
}

// Function to remove a message by index
function removeMessage(index) {
    messages.splice(index, 1);
    return messages;
}

// Event listener for the submit button
postButton.addEventListener('click', function () {
    const messageContent = messageInput.value.trim();
    const authorName = authorInput.value.trim();

    if (messageContent) {
        messages.push({ 
            author: authorName || 'Anonymous',
            content: messageContent,
            comments:[]
         });
        messageInput.value = ''; // Clear input fields
        authorInput.value = '';
        postMessages(); // Refresh message board
    } else {
        alert('Please enter a message before submitting.');
    }
});
