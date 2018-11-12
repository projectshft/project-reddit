
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
var remove = $('<button id="btn-remove">Remove</button>');
var comment = $('<button id="btn-comment">Comment</button>');
var checkbox = $('<div class="form-check form-check-inline">' + '<input class="form-check-input" type="checkbox" id="x" value="option1">' + '<label class="form-check-label" for="x">&#x2716</label>' + '</div>');


var createPost = function () {
    // Gets name and post input from user when they click the 'post' button. 
    var post = {
        text: $('#text').val(),
        name: $('#name').val(),
    }

    //add to array
    Postings.push(post);

    // Appends it to the other posts  
    $('.post-list').append(
        '<li>', remove, comment,
        "" + post.text + '<b>' + " Posted by: " + '</b> ' + post.name,
        checkbox,
        '</li>'
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
// When "Comment" button is clicked, the comment input box toggles hidden/visible - set CSS
//uncomment display in CSS
$('#btn-comment').click(function (event) {
    event.preventDefault();
    //$("#commentForm").slidetoggle('slow', function () {
    $(this).html("Make a comment on this post.");
    //})
});




// //When the 'Post Comment" button is clicked, the comment is appended to THAT post ALONG with an X button
// var createComment = function () {
//     // Gets name and post input from user when they click the 'post' button. 
//     var comment = {
//         commentText: $('#commentText').val(),
//         userName: $('#userName').val(),
//     }

//     Postings[comments].push(comment);

//     $('this.li').append(
//         '<li>'
//         + "" + comment.commentText + '<b>' + " Posted by: " + '</b> ' + comment.userName
//         + '<div class="form-check form-check-inline">' + '<input class="form-check-input" type="checkbox" id="x" value="option1">' + '<label class="form-check-label" for="x">&#x2716</label>' + '</div>'
//         + '</li>'
//     );
//     // $('.post-list this.li').append(
//     //     '<li>'
//     //     + "" + comment.commentText + '<b>' + " Posted by: " + '</b> ' + comment.userName
//     //     + '<div class="form-check form-check-inline">' + '<input class="form-check-input" type="checkbox" id="x" value="option1">' + '<label class="form-check-label" for="x">&#x2716</label>' + '</div>'
//     //     + '</li>'
//     // );

//     //clears form
//     $('#commentText').val("");
//     $('#userName').val("");
// };


// $('.btn-postComment').click(function (event) {
//     event.preventDefault();
//     createComment();
// });
// console.log(Postings);

// //When "x"button (next to post) is clicked, the comment is deleted.

// ///When the 'Remove' button is clicked, the entire post (including comments) is deleted.
// //$('#btn-remove').click(function(event){
// //     this.
// // }
// // })

