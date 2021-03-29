var numberOfPosts = 0;

$('#submit-post').on('click', function () {
  numberOfPosts = numberOfPosts + 1;
  var userInputMesg = $('#message').val();
  var userInputName = $('#name').val();
  var post = document.createElement('div');
  post.classList.add('new-post' + numberOfPosts);
  post.setAttribute('id', 'new-post' + numberOfPosts);
  var divElement = document.createElement('p');
  divElement.classList.add(numberOfPosts);
  var commentButton = document.createElement('button');
  commentButton.classList.add('btn', 'btn-link', 'comment');
  commentButton.classList.add(numberOfPosts);
  commentButton.setAttribute('id', 'comment-on-post' + numberOfPosts);
  commentButton.setAttribute('number', numberOfPosts);
  commentButton.textContent = 'comment';
  commentButton.setAttribute('action', 'create');
  var removeButton = document.createElement('button');
  removeButton.classList.add('btn', 'btn-link', 'remove');
  removeButton.setAttribute('id', 'remove-post' + numberOfPosts);
  removeButton.textContent = 'remove';
  var allComments = document.createElement('div');
  allComments.classList.add('all-comments' + numberOfPosts);

  var postsDiv = $('.submitted-posts');
  var userInputElement = document.createTextNode(userInputMesg + " - Posted by: " + userInputName);

  divElement.appendChild(commentButton);
  divElement.appendChild(removeButton);
  divElement.appendChild(userInputElement);
  divElement.appendChild(allComments);

  post.append(divElement);
  postsDiv.append(post);

  removePost();
  addCommentForm();
});

var removePost = function () {
  $('#remove-post' + numberOfPosts).on('click', function (e) {
    if (e.target.classList.contains('remove')) {
      var postToRemove = e.target.closest('div');
    }
    postToRemove.remove();
  });
}


var addCommentForm = function () {

  $('#comment-on-post' + numberOfPosts).on('click', function (e) {
    var $element = $(e.target);
    var number = $element.attr('number');
    var commentForm = $('.comment-form-' + number);

    if ($element.attr('action') === 'create') {
      var form = document.createElement('form');
      form.classList.add('comment-form-' + numberOfPosts);
      form.classList.add('show');
      form.setAttribute('id', 'comments');
      form.setAttribute('style', 'margin-top:10px');
      form.setAttribute('onsubmit', 'event.preventDefault()');
      var divComment = document.createElement('div');
      divComment.classList.add('form-group');
      var inputDivComment = document.createElement('input');
      inputDivComment.classList.add('form-control');
      inputDivComment.setAttribute('id', 'comment-text');
      inputDivComment.setAttribute('type', 'text');
      inputDivComment.setAttribute('placeholder', 'Comment Text');
      var divCommentName = document.createElement('div');
      divCommentName.classList.add('form-group');
      var inputDivCommentName = document.createElement('input');
      inputDivCommentName.classList.add('form-control');
      inputDivCommentName.setAttribute('id', 'comment-name');
      inputDivCommentName.setAttribute('type', 'text');
      inputDivCommentName.setAttribute('placeholder', 'Name');
      var formButton = document.createElement('button');
      formButton.classList.add('btn', 'btn-primary');
      formButton.setAttribute('id', 'submit-comment');
      formButton.setAttribute('number', numberOfComments);
      formButton.setAttribute('type', 'submit');
      formButton.textContent = 'Submit Comment';

      divComment.appendChild(inputDivComment);
      divCommentName.appendChild(inputDivCommentName);
      form.append(divComment);
      form.append(divCommentName);
      form.append(formButton);
      var posts = $('.new-post' + numberOfPosts);
      posts.append(form);

      $element.attr('action', 'hide');
    }
    else if ($element.attr('action') === 'hide') {
      commentForm.addClass('hide');
      commentForm.removeClass('show');
      $element.attr('action', 'show');
    } else {
      commentForm.addClass('show');
      commentForm.removeClass('hide');
      $element.attr('action', 'hide');
    }
    submitComment();
  });
}

var numberOfComments = 0;
var submitComment = function () {
  $('#submit-comment').on('click', function (event) {
    numberOfComments = numberOfComments + 1;
    var $comment = $(event.target);
    var number = $comment.attr('number');
    var userInputComment = $('#comment-text').val();
    var userInputCommentName = $('#comment-name').val();
    var comment = document.createElement('div');
    comment.classList.add('new-comment' + numberOfComments);
    comment.setAttribute('id', 'new-comment' + numberOfComments);
    var commentDiv = document.createElement('p');
    commentDiv.classList.add(numberOfComments);
    var removeCommentButton = document.createElement('button');
    removeCommentButton.classList.add('btn', 'btn-link', 'remove-comment');
    removeCommentButton.setAttribute('id', 'remove-comment');
    removeCommentButton.textContent = 'remove this comment';

    var commentSection = $('.submitted-posts').find('.all-comments' + numberOfPosts);

    var userInputCommentElement = document.createTextNode(userInputComment + " - Posted by: " + userInputCommentName);
    commentDiv.appendChild(removeCommentButton);
    commentDiv.appendChild(userInputCommentElement);
    comment.append(commentDiv);
    commentSection.append(comment);

    removeComment();
  });
}


var removeComment = function () {
  $('#remove-comment').on('click', function (e) {
    console.log('click remove');
    if (e.target.classList.contains('remove-comment')) {
      var commentToRemove = e.target.closest('p');
    }
    commentToRemove.remove();
  });
};
