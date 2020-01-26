var posts = {
  post1: {postUser: "Paul", postContent: "Storm", postUpvotes: 1, postComments: []},
  post2: {postUser: "Johanna", postContent: "Storm", postUpvotes: 1, postComments: []},
  post3: {postUser: "Charles", postContent: "Storm", postUpvotes: 1, postComments: []},
  post4: {postUser: "Hanna", postContent: "Storm", postUpvotes: 1, postComments: []}
};
var postCounter = 4;

// Function called in renderPosts used to create initial page layout when
var addPageLayout = function() {
  // Clear page
  $("ul").remove();
  $(".submission-form").remove();
  $("#posts-title").remove();
  $(".fa-book-open").remove();

  // And posts title and ul for posts
  $(".main-content").append("<h3 id='posts-title'>Posts</h3>");
  $(".main-content").append("<i class='fas fa-book-open'></i>");
  $(".main-content").append("<ul id='posts' class='posts'></ul>");

  // Create form for submitting new posts
  var submissionForm =
     "<form class='submission-form' style='margin-top:0px;' onsubmit='event.preventDefault();'>"
      + "<h2>New post</h2>"
      + "<i class='fas fa-pen'></i>"
      + "<br>"
      + "<div class='form-group col-md-6 col-md-offset-1'>"
        + "<input id='name' type='text'"
          + "class='form-control'"
          + "placeholder='Name'></input>"
      + "</div>"

      + "<div class='form-group col-md-6 col-md-offset-1'>"
        + "<textarea id='message' type='text'"
        + "class='form-control'"
        + "placeholder='Message'></textarea>"
      + "</div>"

      + "<div class='col-md-6 col-md-offset-1'>"
        + "<button id='submit-post' type='submit' class='btn btn-primary'>Post</button>"
      + "</div>"
    + "</form>"

  $(".main-content").append(submissionForm);
}

// renders posts with upvote, downvote, edit and remove createButtons
var renderPosts = function(posts) {
  $("ul").empty();

  // Generate each post. Including post content, post buttons and comment sections
  for (var i = 0; i < Object.keys(posts).length; i++) {
    var postElement =
    '<li id="' + Object.keys(posts)[i] + '">'
    + posts[Object.keys(posts)[i]].postUser + ": " + posts[Object.keys(posts)[i]].postContent
    + '</li>'
    $('ul').append(postElement)

    var remove = "<button class='remove-post'>Remove</button>";
    var edit = "<button id=" + Object.keys(posts)[i] + '-edit' +" class='edit-post'>Edit</button>";
    var upvote = "<button class='upvote-post'>+</button>";
    var downvote = "<button class='downvote-post'>-</button>";
    var comments = "<button class='comments'>Comments</button>"
    if (posts[Object.keys(posts)[i]].displayComments == 0) {
      var commentsSection = "<div id=" + Object.keys(posts)[i] + '-comments' +" class='comments-section-hide'></div>"
    } else {
      var commentsSection = "<div id=" + Object.keys(posts)[i] + '-comments' +" class='comments-section-show'></div>"
    }

    $("#"+Object.keys(posts)[i]).append("<br>")
    $("#"+Object.keys(posts)[i]).append(remove)
    $("#"+Object.keys(posts)[i]).append(edit)
    $("#"+Object.keys(posts)[i]).append(upvote)
    $("#"+Object.keys(posts)[i]).append(downvote)
    $("#"+Object.keys(posts)[i]).append('<span>' + posts[Object.keys(posts)[i]].postUpvotes + '</span>')
    $("#"+Object.keys(posts)[i]).append(comments)
    $("#"+Object.keys(posts)[i]).append(commentsSection)

    posts[Object.keys(posts)[i]].postComments.forEach(function(comment) {
      $("#" + Object.keys(posts)[i] + "-comments").empty();
      for (var j = 0; j < posts[Object.keys(posts)[i]].postComments.length; j ++) {
        var commentId = Object.keys(posts)[i] + "-comment-" + j
        var commentElement = "<span id='" + commentId + "'class='comment'>"+posts[Object.keys(posts)[i]].postComments[j][0]+": "+posts[Object.keys(posts)[i]].postComments[j][1]+"</span>";
        $("#" + Object.keys(posts)[i] + "-comments").append("<span class='fa fa-window-close'></span>")
        $("#" + Object.keys(posts)[i] + "-comments").append(commentElement)
        $("#" + Object.keys(posts)[i] + "-comments").append("<br>")
      }
    })

    var addCommentForm = "<form style='margin-top:30px' onsubmit='event.preventDefault()';>"
    + "<textarea type='text' id='new-comment-user' class='form-control' placeholder='Comment User'></textarea>"
    + "<textarea type='text' id='new-comment' class='form-control' placeholder='Add a comment'></textarea>"
    + "<button type='submit' class='submit-comment btn btn-primary'>Post Comment</button>"
    + "</form>";

    $("#" + Object.keys(posts)[i] + "-comments").append(addCommentForm)
  }

  // Add on click functionality to remove-post, upvote-post, downvote-post and edit-post
  $(".remove-post").click(function() {
    delete posts[$(this).parent().attr("id")]
    $(this).parent().remove();
  })

  $(".upvote-post").click(function() {
    posts[$(this).parent().attr('id')].postUpvotes ++;
    renderPosts(posts)
  })

  $(".downvote-post").click(function() {
    posts[$(this).parent().attr('id')].postUpvotes --;
    renderPosts(posts)
  })

  $(".edit-post").on("click", function() {
    $(".edit-post").off();
    editPost($(this));
  })
}

// write function to give comment button hide/display functionality
var hideDisplayComments = function(commments) {
  if(commments.next().attr('class') == "comments-section-hide") {
    posts[commments.parent().attr('id')].displayComments = 1
    commments.next().attr('class', 'comments-section-show')
  } else {
    posts[commments.parent().attr('id')].displayComments = 0
    commments.next().attr('class', "comments-section-hide")
  }
}

// write function to give delete comment icon functionality
var deleteComment = function(comment) {
  var commentPosition = comment.next().attr('id').slice(-1)
  var postId = comment.parent().parent().attr('id')
  var commentsBefore = posts[postId].postComments.slice(0,commentPosition)
  var commentsAfter = posts[postId].postComments.slice(commentPosition,)
  var commentsAfter = commentsAfter.slice(1,)
  var editedComments = commentsBefore.concat(commentsAfter)
  posts[postId].postComments = editedComments
  renderPosts(posts)
}

// write function to give submit comment button functionality
var submitComment = function(comment) {
  if (comment.parent().children("textarea").val().length != 0 && comment.parent().children("textarea").next().val().length != 0) {
    var commentUser = comment.parent().children("textarea").val();
    var commentContent = comment.parent().children("textarea").next().val();
    var commentUserContent = []
    commentUserContent.push(commentUser)
    commentUserContent.push(commentContent)
    posts[comment.parent().parent().parent().attr('id')].postComments.push(commentUserContent);
    renderPosts(posts)
  } else {
    alert("You cannot post an empty comment or a userless comment!")
  }
}

var editPost = function(button) {
  $(".edit-post").off();

  var editForm =
  "<form style='margin-top:30px' onsubmit='event.preventDefault()';>"
  + "<textarea type='text' id='edited-content' class='form-control'>" + posts[button.parent().attr('id')].postContent + "</textarea>"
  + "<button type='submit' id='submit-edit' class='btn btn-primary'>Submit Edit</button>"
  + "</form>";

  button.parent().append(editForm);

  $("#submit-edit").click(function(button) {
    posts[$(this).parent().parent().attr('id')].postContent = $("#edited-content").val();
    renderPosts(posts);
  })
}

// Add functionality to submit post button. When post is submitted add post data to posts object
var addPost = function() {
  if ($("#message").val().length !== 0 && $("#name").val().length !== 0) {
    postCounter += 1;
    var postContent = $("#message").val();
    var postUser = $("#name").val();
    var postId = "post" + postCounter;
    postUpvotes = 1;
    postComments = [];
    displayComments = 0;

    posts[postId] = {
      postUser: postUser,
      postContent: postContent,
      postUpvotes: postUpvotes,
      postComments: postComments,
      displayComments: displayComments
    };

    $("#message").val("");
    $("#name").val("");

    renderPosts(posts);
  } else {
    alert("Your post must have a name and message!")
  }
}

// When a post is clicked remove other posts from page and enlarge clicked post content
var expandPost = function(postText) {
  postId = postText.parent().attr('id')

  // Clear the page
  $("ul").remove();
  $(".submission-form").remove();
  $("#posts-title").remove();
  $(".fa-book-open").remove()

  // Enlarge and display post comments
  var postContent = "<h2 class='h2-post' id='" + postId+ "'>" + posts[postId].postUser + ": " + posts[postId].postContent
    + "<i class='fas fa-file-alt'></i>"
    + "</h2>"
  var backButton = "<button class='back btn btn-primary'>Back</button>"

  // Add post comments
  var commentsTitle = "<h3>Comments<h3>"
  var commentsSection = "<h4 id='" + postId + "-comments" + "' class='comments-section-show'></h4>"

  $(".main-content").append(backButton)
  $(".main-content").append(postContent)
  $("#" + postId).append(commentsSection)

  $("#" + postId + "-comments").append("<br>")

  // Generate comment sections comments
  for (var j = 0; j < posts[postId].postComments.length; j ++) {
    var commentId = postId + "-comment-" + j
    var commentElement = "<span id='" + commentId + "'class='comment'>"+posts[postId].postComments[j][0]+": "+posts[postId].postComments[j][1]+"</span>";
    $("#" + postId + "-comments").append("<span class='fa fa-window-close'></span>")
    $("#" + postId + "-comments").append(commentElement)
    $("#" + postId + "-comments").append("<br>")
  }

  // generate form for submitting new comments
  var addCommentForm = "<form style='margin-top:15px' onsubmit='event.preventDefault()';>"
  + "<textarea type='text' id='new-comment-user' class='form-control' placeholder='Comment User'></textarea>"
  + "<textarea type='text' id='new-comment' class='form-control' placeholder='Add a comment'></textarea>"
  + "<button type='submit' class='submit-comment btn btn-primary'>Post Comment</button>"
  + "</form>";

  $("#" + postId + "-comments").append(addCommentForm)

  $(".back").click(function() {
    $(".main-content").empty();
    renderPosts(posts);
  })

  // Add funcionality for submit comment button inside of expandPost
  $(".submit-comment").click(function() {
    if ($(this).parent().children("textarea").val().length != 0 && $(this).parent().children("textarea").next().val().length != 0) {
      var commentUser = $(this).parent().children("textarea").val();
      var commentContent = $(this).parent().children("textarea").next().val();
      var commentUserContent = []
      commentUserContent.push(commentUser)
      commentUserContent.push(commentContent)
      posts[$(this).parent().parent().parent().attr('id')].postComments.push(commentUserContent);
      $(".main-content").empty()
      expandPost($(this).parent().parent())
    } else {
      alert("You cannot post an empty comment or a userless comment!")
    }
  })

  // Add functionality for window close icon inside of expandPost
  $(".fa-window-close").click(function() {
    var commentPosition = $(this).next().attr('id').slice(-1)
    var postId = $(this).parent().parent().attr('id')
    var commentsBefore = posts[postId].postComments.slice(0,commentPosition)
    var commentsAfter = posts[postId].postComments.slice(commentPosition,)
    var commentsAfter = commentsAfter.slice(1,)
    var editedComments = commentsBefore.concat(commentsAfter)
    posts[postId].postComments = editedComments
    $(".main-content").empty()
    expandPost($(this).parent())
})
}
