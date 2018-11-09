var $postButton = $('#post-button');
var $textInput = $('#message');
var $usernameInput = $('#name');
var $postsSection = $('#posts');
var source = $('#post-template').html();
var template = Handlebars.compile(source);
var posts = [];

//master unique id generator
var id = 0;

//when post button is clicked, the text and name from the boxes should appear as a new post
$postButton.click(() => {
  newText = $textInput.val();
  newUsername = $usernameInput.val();
  id++;
  newPost = {
    postText: newText,
    username: newUsername,
    comments: [],
    id: id
  };
  posts.push(newPost);
  renderPosts();
})

//build the top line of remove post & comments show/hide buttons
//TODO - can I use handlebars for this line template too?
//TODO - make comments start as hidden
var createTopLine = (post => {
  var lineTemplate = '<div class="top-line"><a href="#" class="remove-post" data-post-id="' + post.id + '">remove </a><a href="#" class="comments-show-hide" data-post-id="post' + post.id + '">comments </a>'

  //remove the specific post when the remove link is clicked.
  var handleRemoveClick = function(e) {
    e.preventDefault();
    var removeId = $(this).data('post-id');
    posts = posts.filter(post => post.id !== removeId);
    renderPosts();
  }

  //show/hide the comments section by individual post.
  var toggleComments = function(e) {
    e.preventDefault();
    var postId = '#handlebars' + $(this).data('post-id');
    $(postId).children('.comment-area').toggle();
  }

  //build the line and individually bind click handlers to each link
  var $topLine = $(lineTemplate);
  $topLine.on('click', '.remove-post', handleRemoveClick);
  $topLine.on('click', '.comments-show-hide', toggleComments);
  //return the line to the posting click handler to assemble with the post text
  return $topLine;
})

//clear out the posts section and re-print the current status
var renderPosts = function() {
  $postsSection.empty();
  posts.forEach(post => {
    var $topLine = createTopLine(post);
    let newHTML = template(post);
    $postsSection.append($topLine);
    $postsSection.append(newHTML);
  })
}

//listen for post comment button clicks and push the comment into the array, then render it


//allow for editing posts
//render "separate" edit comments page
//style updates
