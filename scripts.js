
//create an object through JQUERY BELOW that houses both the posts and the comments.  This is my plan.
// var Postings = [{
//         text:
//         name:
//         comments:[ {
//             comment:
//             userName:
//             }
//         ]
//     }
// ];

//Part 1 - 

var Postings = [];
var createPost = function () {
    // Gets name and post input from user when they click the 'post' button. 
    var post = {
        text: $('#text').val(),
        name: $('#name').val(),
        comments: {}
    }
    Postings.push(post);

    // Appends it to the other posts with the post on 1 line and the name on a 2nd line. 
    $('.post-list').append('<li>' + post.text + '<br>' + '<b>' + " Posted by: " + '</b> ' + post.name);

    //clears form
    $('#text').val("");
    $('#name').val("");
};
console.log(Postings);

$('.btn-primary').click(function (event) {
    event.preventDefault();
    createPost();
});


/////////////////PART 2//////////////////////////
//NOW when append a POST:
function createRemoveButton() {
    //create button
    return $('<button/>', {
        id: "remove",
        text: "Remove",
        click: removePost()
    })
};

//append it
$('.post-list').prepend(createRemoveButton());

//event - //When the 'Remove' button is clicked, the entire post (including comments) is deleted.
// $('#remove').click(function(event){
function removePost() {

}
// })

createRemoveButton();


    //add X = delete comment after post


// When "Comment" button is clicked, the comment input box toggles hidden/visible - set CSS

    // $('.btn-comment').click(function (event) {
    //     event.preventDefault();
    //     $("#comments").toggle(display);
    //     //createPost();
    // });

//When the 'Post Comment" button is clicked, the comment is appended to THAT post ALONG with an X button
    // $('.btn-postComment').click(function (event) {
    //     event.preventDefault();
    // }


//When "x"button (next to post) is clicked, the comment is deleted.


