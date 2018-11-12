
//create an object that houses both the posts and the comments.  This is my plan.
// var Postings = [{
//     text: "",
//     name: "",
//     comments: [{
//         comment: "",
//         userName: ""
//     }
//     ]
// }
// ];

//Part 1 - 

var Postings = [];

//global button creation for non-Bootstrap buttons
var remove = $('<button class="btn-remove">Remove</button>');
var comment = $('<button class="btn-comment">Comment</button>');

var checkbox = $('<div class="form-check form-check-inline">' + '<input class="form-check-input" type="checkbox" id="x" value="option1">' + '<label class="form-check-label" for="x">&#x2716</label>' + '</div>');


var createPost = function () {
    // Gets name and post input from user when they click the 'post' button. 
    var post = {
        text: $('#text').val(),
        name: $('#name').val(),
        comments: ""
    }

    //add to array
    Postings.push(post);

    // Appends it  
    //ISSUE - only puts the 3 buttons on the 1st post 
    $('.post-list').append(
        '<li>', remove, comment,
        + "" + post.text + '<b>' + " Posted by: " + '</b> ' + post.name, checkbox, '</li>'
    );

    //clears form
    $('#text').val("");
    $('#name').val("");
};

$('.btn-primary').click(function (event) {
    event.preventDefault();
    createPost();
    console.log(Postings);
});



/////////////////PART 2//////////////////////////

var createComment = function () {
    // Gets name and post input from user when they click the 'post' button. 
    var comment = {
        commentText: $('#commentText').val(),
        userName: $('#userName').val(),
    }
    //ISSUE adds comment as next object
    Postings.push(comment);
    console.log(Postings);

    //ISSUE I believe comment is there, but hidden by comment form
    $('.post-list', 'li').append(
        '<li>'
        + "" + comment.commentText + '<b>' + " Posted by: " + '</b> ' + comment.userName, checkbox, '</li>'
    );

    //clears form
    $('#commentText').val("");
    $('#userName').val("");
};

// When "Comment" button is clicked on a post, 
//uncomment display in CSS
//??How do I get it to add an event listener to the button, not just the document???
$('btn-comment').click(function () {
    $('#commentForm').toggle(display);
    alert('Make a comment.');
    //toggle the comment form to visible

});


//ISSUE - post and comment disappear
$('.btn-postComment').click(function (event) {
    event.preventDefault();
    createComment();
    console.log(Postings);
});

// When "x"button (next to post) is clicked, the comment is deleted.
$('.form-check').click(function (){
    $(this).detach();
});

// ///When the 'Remove' button is clicked, the entire post (including comments) is deleted.
$('#btn-remove').click(function(){
    $(this).detach(Postings[i]);
});

