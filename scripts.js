var Postings = [];

var createPost = function () {
    // Gets name and post input from user when they click the 'post' button. 
    var post = {
        text: $('#text').val(),
        name: $('#name').val(),
        comments: []
    };

    var comments = '<div class="comments">' + '<div class="commentsList"></div>' +'<input type="text" class="commentText" placeholder="Your comment">' + '<input type="text" class="userName" placeholder="User Name"><button class="btn add-comment">Add Comment</button></div>';

    //add to array
    Postings.push(post);

    // Appends it  
    $('.post-list').append('<div class="post">' + '<button class="btn-remove">Remove</button>' + '<button class="btn-comment">Comment</button>' + post.text + comments + '<div> Posted by: <b>' + post.name + '</b></div> <hr/></div>');
      
    //clears form so ready for new post
    $('#text').val("");
    $('#name').val("");
};

$('.btn-primary').click(function (event) {
    event.preventDefault();
    createPost();
    console.log(Postings);
});



/////////////////PART 2//////////////////////////

var createComment = function (text, name, postIndex) {
    // Gets name and post input from user when they click the 'post' button. 
    var comment = {
        commentText: text,
        userName: name
    }
    //add comment to Postings array for that post
    Postings[postIndex].comments.push(comment);
    console.log(Postings);

    //Find post with that postIndex on DOM
    var $post = $('.post-list').find('.post').eq(postIndex);
    
     //Append comment to DOM
    $post.find('.commentsList').append(
        '<div class="comment">' + comment.commentText + " Posted by: " + '<b> ' + comment.userName + '</b>' + '<a href="#" class="delete">Delete</a></div>'
    );

    //clears form
    $('.commentText').val("");
    $('.userName').val("");
};

var removeComment = function (postIndex, commentIndex) {
    //delete that comment from Postings array for that post
    Postings[postIndex].comments.splice(commentIndex, 1);
    console.log(Postings);
}
// When "Comment" button is clicked on a post, toggle show/hide

// $('.post-list').on('click', '.btn-comment', function(e) {
//     e.preventDefault();
//     // $('.comments').toggleClass('show');
//     alert('Make a comment.');
//     //toggle the comment form to visible

// });


//When Add Comment button is clicked, get the input and trigger the createComment function
$('.post-list').on('click', '.add-comment', function (event) {
    event.preventDefault();
    var text = $(this).siblings('.commentText').val()
    var name = $(this).siblings('.userName').val()
    var postIndex = $(this).closest('.post').index();
    createComment(text, name, postIndex);
});

// When "delete" button (next to comment) is clicked, the comment is deleted from DOM.
$('.post-list').on('click', '.delete', function (){
    var commentIndex = $(this).closest('.comment').index();
    var postIndex = $(this).closest('.post').index();
    removeComment(postIndex, commentIndex);
    $(this).closest('.comment').remove();
});

// ///When the 'Remove' button is clicked, the entire post (including comments) is deleted.
// $('#btn-remove').click(function(){
//     $(this).detach(Postings[i]);
// });

