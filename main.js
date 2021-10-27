var posts = [];
var currId = 0;

var Post = function(text, author, id, comments) {
  this.text = text;
  this.author = author;
  this.id = id;
  this.comments = comments;
};

// On submit, create new Post with user input.
var submitNewPost = () => {
  var name = $("#name").val();
  var text = $("#text").val();
  var id = currId;
  var comments = [];
  currId++;

  var newPost = new Post(text, name, id, comments);

  // Push newPost to posts array.
  posts.push(newPost);

  // Reset inputs.
  $("#name").val('');
  $("#text").val('');


  // Create post structure html.
  var postStructure = 
    `<div class="post-section" data-id=${id}><li><i class="bi bi-x-circle" data-id = ${id} onclick='deletePost(this)' ></i><strong>${text}</strong> - ${name}</li><i data-id = ${id} onclick='toggleComments(this)' class="bi bi-chat-text-fill" alt="toggle-comments"></i>
  `

  // Create post comments html.
  var postComments = 
  `<div data-id = ${id} class="comment-section show-comments"><h6><strong>Comments:</strong></h4>`
    + `<div data-id = ${id} class="comments"></div>`
    + '<form id="comment-form-' + id + '" onsubmit="event.preventDefault();">'
    + `<input type="text" id="comment-text" data-id = ${id} placeholder="comment" >`
    + `<input type="text" id="comment-author" data-id = ${id} placeholder="comment author">`
    + `<button id="submit" class="btn btn-primary" data-id = ${id} onclick="submitNewComment(this);">Post</button>`
    + '</form>'
    + '</div>'
    + '</div'
    
    ;


  // Append posts div with newest Post.
  $('.posts').append(
    postStructure + postComments
  );
};

// Helper function to get id of post
var getPost = (event) => {
  var dataId = $(event).data();
  return dataId;
}

var submitNewComment = (event) => {
  // Use helper function to get corresponding post id.
  var postId = getPost(event);
  var id = postId.id;

  // Find post with same id in posts array.
  var post = posts.filter(p => p.id == id);

  // Obtain the corresponding post's comments array.
  var comments = post[0].comments;

  // Obtain comment form inputs.
  var comment = $("#comment-text[data-id='" + id + "']").val();
  var author = $("#comment-author[data-id='" + id + "']").val();

  // Store comment form inputs into newComment object.
  var newComment = {
    comment: comment,
    author: author
  };

  // Push newComment to comments array.
  comments.push(newComment);

  // Create commentStructure containing new comment.
  var commentStructure = `<li class="comment-section">${comment} - ${author}</li>`

  // Find comment section of corresponding post using the id.
  var $commentSection = $(".comments[data-id='" + id + "']")

  // Append comment section with commentStructure containing new comment.
  $commentSection.append(commentStructure);

  // Reset form.
  resetForm(id);
};

// Reset comment form inputs.
var resetForm = (id) => {
  $("#comment-text[data-id='" + id + "']").val('');
  $("#comment-author[data-id='" + id + "']").val('');
}

var toggleComments = (event) => {
  // Use clicked toggle icon to obtain data-id.
  var postId = getPost(event);
  var id = postId.id;

  // Find div with data-id = post and toggleClass of 'show-comments'
  var $commentSection = $(".comment-section[data-id='" + id + "']")
  $commentSection.toggleClass('show-comments');

};

var deletePost = (event) => {
  // Use helper function to get corresponding post id.
  var postId = getPost(event);
  var id = postId.id;

  // Remove post from posts array using splice, which will alter the original array
  posts.splice(id, 1);

  // Remove the deleted element from the DOM.
  $(".post-section[data-id='" + id + "']").remove();



}
