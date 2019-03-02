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

    Edge Cases:
        -can you add an empty post?/without a username
        can you add an empty comment?/without a username

*/

var postsList = [];

//User Story 1: when a user fills out the two post inputs and clicks "Post", it should immediately add the post to the posts section, with username and message

$('button').on('click', function(e) {
    e.preventDefault();
    
    var $postContent = $('#message').val();
    var $userName = $('#name').val();

    //creates object of the post and username
    var post = {
        postContent: $postContent,
        userName: $userName
    }
    
    //adds post objects to the postsList array
    postsList.push(post);
    $renderPosts();
});

$renderPosts = function () {

    var dt = new Date(); //use moment.js (figure out how to download) to refactor timestamp
    var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds(); 

    //if the posts div has any posts, clear them out so that posts aren't duplicated in the prepend process
    if ( $('.posts').children().length > 0 ) {
        $('.posts').empty(); 
    };

    for (var i = 0; i < postsList.length; i++) {
        $('.posts').prepend('<li> <a href="#" class="remove-link"><i class="fa fa-trash" aria-hidden="true"></i></a>' + ' ' + '<a href="#" class="comment-link" data-name="comments"><i class="fa fa-comments" aria-hidden="true"></i></a> <br>' + postsList[i].postContent + '<br> Posted by: ' + postsList[i].userName + ' at ' + time + '<hr /> </li>');
    }
    //checks to make sure each new post is added to postsList
    console.log("When 'Post' is clicked, array posts becomes:", postsList);
};

// User Story 2: when a user clicks "comments" (above each post), it should toggle the comments and input box visible/hidden
//renderComments = function () {
$('.comment-link').on('click', function() {
    
    var $commentsTemplate =
        '<tr class="comments-view-comment-item">'
        + '  <td class="comment-item-number" data-song-number="' + songNumber + '">' + songNumber + '</td>'
        + '  <td class="comment-item-title">' + songName + '</td>'
        + '  <td class="comment-item-duration">' + songLength + '</td>'
        + '</tr>'
        ;
        $('.posts').html($commentsTemplate);
});


// User Story 3: when a user clicks the 'x' next to a comment, it should delete it
$('remove').on('click', function() {
    $('li').find(this).remove();
    // if (e.target.hasClass('remove')) {
    // }
});

// User Story 4: when a user fills out the two comment inputs and clicks "Post Comment", it should immediately add the comment to the list of comments


// User Story 5: when a user clicks 'remove' above a post, it should remove the post, too


 /* ----------------
 Below is alternative User Story 1 without jQuery:

var button = document.getElementsByClassName('btn')[0]; //variable for the button

button.addEventListener('click', function(e) { //the listener won't listen until button is clicked

    e.preventDefault(); //
    var post = document.getElementById('message').value; //create a variable for the post
    var userName = document.getElementById('name').value; //create a variable for the username associated with the post
    var messageString = "<div>" + post + "<br>" + "Posted By: " + userName + "<hr />" + "</div>";

    document.getElementsByClassName('posts')[0].innerHTML += messageString;
}); 
- - - - - - - - - - - - - -
alternative to User Story 1 with JQuery and a render function: (prints cumulative posts each time post is pressed)

$('button').on('click', function(e) {
    e.preventDefault();
    
    var $postContent = $('#message').val();
    var $userName = $('#name').val();

    var post = {
        postContent: $postContent,
        userName: $userName
    }
 
    postsList.push(post); 
    

    console.log("When 'Post' is clicked, array posts becomes:", postsList);
}); 
    var renderPosts = function () {
        var dt = new Date(); //use moment.js (figure out how to download) to refactor timestamp
        var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds(); 
        
        var $posts = '';
    
        //add post and username to posts div
        for (var i = 0; i < postsList.length; i++) {
            $posts += '<div> <a href="#" class="remove-link"><i class="fa fa-trash" aria-hidden="true"></i></a>' + ' ' + '<a href="#" class="comment-link" data-name="comments"><i class="fa fa-comments" aria-hidden="true"></i></a>' +'<br>' + $postContent + '<br>' + 'Posted by: ' + $userName + ' at ' + time + '<hr /> </div>';
        }
        
        $('.posts').prepend($posts); 
    };

    renderPosts();

});  
*/    
