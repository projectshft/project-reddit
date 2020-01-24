var posts = {
  post1: {postUser: "Paul", postContent: "Storm", postUpvotes: 1, postComments: []},
  post2: {postUser: "Johanna", postContent: "Storm", postUpvotes: 1, postComments: []},
  post3: {postUser: "Charles", postContent: "Storm", postUpvotes: 1, postComments: []},
  post4: {postUser: "Hanna", postContent: "Storm", postUpvotes: 1, postComments: []}
};
var postCounter = 4;

// When user presses post the a new object is created which stores the post content, user name, comments and upvote count
$("#submit-post").click(function() {
    if ($("#message").val().length !== 0 && $("#name").val().length !== 0) {
    postCounter += 1;
    var postContent = $("#message").val();
    var postUser = $("#name").val();
    var postId = "post" + postCounter;
    postUpvotes = 1;
    postComments = [];

    posts[postId] = {
      postUser: postUser,
      postContent: postContent,
      postUpvotes: postUpvotes,
      postComments: postComments
    };

    $("#message").val("");
    $("#name").val("");

    renderPosts(posts);
  } else {
    alert("Your post must have a name and message!")
  }
});
