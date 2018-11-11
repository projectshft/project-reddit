
//create an object that houses both the posts and the comments
// var Postings = {
//     originalPost: { },

//     comments: [
//         {},
//     ]
// };

//var Postings = [];


//Part 1 - Gets name and post input from user when they click the 'post' button. Appends it to the other posts with the post on 1 line and the name on a 2nd line. 

var createPost = function () {
    var post = {
        text: $('#text').val(),
        name: $('#name').val()
    }
    $('.post-list').append('<li>' + 'post.text' + '< br > ' + ' < b > ' + " Posted by: " + '</b > ' + post.name + '</li >')
};

$('.btn-primary').click(function (event) {
    event.preventDefault();
    createPost();
});
console.log('post');
/*
/////////////////PART 2//////////////////////////
// When "Comment" button is clicked, the comment input box toggles hidden/visible
$('.btn-comment').click(function (event) {
    event.preventDefault();
    $("#comments").toggle(display);
    //createPost();
});
//When the 'Post Comment" button is clicked, the comment is appended to THAT post ALONG with an X button
$('.btn-postComment').click(function (event) {
    event.preventDefault();
}

        //ADD class .form-check AND .form-check-inline  for checkbox
        //UTF-8 dingbat code for X = &#x2716 or &#10006; OR X inside checkbox = &#10062 or &#x274E


    //When "x"button (next to post) is clicked, the comment is deleted.

//When the 'Remove' button is clicked, the entire post (including comments) is deleted.
*/