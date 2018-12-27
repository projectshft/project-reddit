var Postings = [];

//global button creation for non-Bootstrap buttons
var checkbox = $('<div class="form-check form-check-inline">' + '<input class="form-check-input" type="checkbox" id="x" value="option1">' + '<label class="form-check-label" for="x">&#x2716</label>' + '</div>');


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
        '<div class="comment">' + comment.commentText + " Posted by: " + '<b> ' + comment.userName + '</b>' + '<input class="form-check-input" type="checkbox" id="x" value="option1"></div>'
    );

    //clears form
    $('.commentText').val("");
    $('.userName').val("");
};

// When "Comment" button is clicked on a post, 
// $('.post-list').on('click', '.btn-comment', function(e) {
//     e.preventDefault();
//     // $('.comments').toggleClass('show');
//     alert('Make a comment.');
//     //toggle the comment form to visible

// });


//ISSUE - post and comment disappear
$('.post-list').on('click', '.add-comment', function (event) {
    event.preventDefault();
    var text = $('.commentText').val()
    var name = $('.userName').val()
    var postIndex = $(this).closest('.post').index();
    createComment(text, name, postIndex);
});

// When "x"button (next to post) is clicked, the comment is deleted.
$('.form-check').click(function (){
    $(this).detach();
});

// ///When the 'Remove' button is clicked, the entire post (including comments) is deleted.
$('#btn-remove').click(function(){
    $(this).detach(Postings[i]);
});

