/* Comment Driven Dev
files needed:
    -index.html
    -main.js
    -style.css

need to link:
    -bootstrap (above my style.css link in html file)
    -jquery (at the bottom of my html file)

requirements: 
    Part 1
        -use Bootstrap 3 or 4
        -write clean and pretty html, css, and javascript (hr tag to separate posts)
        -use correct comments (with intent) and logging; (refer to Sean's powerpoint)
        -utilize patterns to organize javascript if necessary
        -use JQuery

        functionality:
        add post (Requires name and input) (.posts div in html file)
        add comment
        all posts will go to page, newer ones above

    Part 2
        -We now want users to be able to leave comments on each post. When a user clicks 'comments' (above each post) it should toggle the comments and input box visible/hidden.
        -When a user clicks the 'x' next to a comment, it should delete it.
        -When a user fills out the two comment inputs and clicks 'Post Comment' it should immediately add the comment to the list of comments.
        -when a user clicks 'remove' above a post, it should remove the post, too.

        to consider:
        this
        data-names
    
    Additions:
        -post timestamp
        -comment timestamp
        -reddit navbar
*/

// User Story 1: when a user fills out the two post inputs and clicks "Post", it should immediately add the post to the posts section, with username and message
$('button').on('click', function(e) {
    e.preventDefault();
    var $postContent = $('#message').val();
    var $userName = $('#name').val();
    var dt = new Date();
    var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();

    $('.posts').prepend('<div> <a href="#">remove </a>' + '<a href="#">comments</a> <br>' + $postContent + '<br> Posted by: ' + $userName + ' at ' + time + '<hr /> </div>');
});  
 
// User Story 2: when a user clicks "comments" (above each post), it should toggle the comments and input box visible/hidden

// User Story 3: when a user clicks the 'x' next to a comment, it should delete it

// User Story 4: when a user fills out the two comment inputs and clicks "Post Comment", it should immediately add the comment to the list of comments

// User STory 5: when a user clicks 'remove' above a post, it should remove the post, too


 /* ----------------
 Below is alternative code without jQuery:

var button = document.getElementsByClassName('btn')[0]; //variable for the button

button.addEventListener('click', function(e) { //the listener won't listen until button is clicked

    e.preventDefault(); //
    var post = document.getElementById('message').value; //create a variable for the post
    var userName = document.getElementById('name').value; //create a variable for the username associated with the post
    var messageString = "<div>" + post + "<br>" + "Posted By: " + userName + "<hr />" + "</div>";

    document.getElementsByClassName('posts')[0].innerHTML += messageString;
}); 
*/       