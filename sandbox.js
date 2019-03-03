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
      ✔︎ -use Bootstrap 3 or 4
      ✖︎ -write clean and pretty html, css, and javascript (hr tag to separate posts)
      ✖︎ -use correct comments (with intent) and logging; (refer to Sean's powerpoint)
      ✖︎ -utilize patterns to organize javascript if necessary
      ✔︎ -use JQuery

        functionality:
      ✔︎ add post (Requires name and input) (.posts div in html file)
      ✔︎ add comment
      ✔︎ all posts will go to page, newer ones above

    Part 2
      ✖︎ -We now want users to be able to leave comments on each post. When a user clicks 'comments' (above each post) it should toggle the comments and input box visible/hidden.
      ✔︎ -When a user clicks the 'x' next to a comment, it should delete it.
      ✖︎ -When a user fills out the two comment inputs and clicks 'Post Comment' it should immediately add the comment to the list of comments.
      ✔︎ -when a user clicks 'remove' above a post, it should remove the post, too.

        to consider:
        this
        data-names
        render comments or render posts?
    
    Additions:
        -post timestamp
        -comment timestamp
        -reddit navbar

    Edge Cases:
        -can you add an empty post?/without a username
        -can you add an empty comment?/without a username
        -what happens if I comment on a post and then make a new post? (stuff is deleted);
    
    Bugs:
        -can't seem to remove post from the array
        -if all posts are deleted and then I submit a new post, all preview posts return
        -if I comment on a post and then submit a new post, the comment input box and comment disappears
        -comments do not toggle
*/

    // create template for comments form
var $commentsForm =
'<div class="comments-section"><form style class="margin-top:30px">'
+ '  <div class="form-group"> ' + '<input id="commenter" type="text" class="form-control-sm" placeholder="Username"></input>'
+ '<input id="commentcontent" type="text" class="form-control-sm" placeholder="Comment Text"></input>'
+ '<button type="submit" class="btn-secondary commentbutton">Post Comment</button></div></form> <hr /> </div>';
var $upVotes = 0;
var $downVotes = 0;

var Post = function () {
        //USER STORY 1: when a user fills out the two post inputs and clicks "Post", it should immediately add the post to the posts section, with username and message
    $('button').on('click', function(e) {
        e.preventDefault();
    
            //grab the post and username input from the form fields
        var $postContent = $('#message').val();
        var $userName = $('#name').val();
        
            //create timestamp for the post
        var dt = new Date(); //use moment.js (figure out how to download) to refactor timestamp
        var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds(); 
    
            //create what the post will look like
        var newPost = '<div class="post">' + $postContent + ' <a href="#" class="remove-link"><i class="fa fa-trash" aria-hidden="true"></i></a>' + ' ' + '<a href="#" class="comment-link" data-name="comments"><i class="fa fa-comments" aria-hidden="true"></i></a> ' + '<button class="btn-success btn-xs"><i class="fa fa-thumbs-up"> ' + $upVotes + '</i></button> <button class="btn-danger btn-xs"><i class="fa fa-thumbs-down"> ' + $downVotes + '</i></button> <br> Posted by: ' + '<strong>' + $userName + '</strong> at ' + time + ' </div> <br>';
 
            //add the new post to the posts div
        $('.posts')[0].innerHTML += newPost;
            
        //When the thumbs up or thumbs down buttons are clicked, their value will increase
        // $('.fa-thumbs-up').on('click', function(){
        //     $(this).$upVotes += 1;
        //     console.log("This is the number of upvotes this post has:", $upVotes);
        // });

        // $('.fa-thumbs-down').on('click', function() {
        //     $(this).$downVotes += 1;
        //     console.log("This is the number of downvotes this post has:", $downVotes);
        // });
        
    Post();
    deletePost();
});    
    
   // USER STORY 5: when a user clicks 'remove' above a post, it should remove the post, too 
var deletePost = function () {    
        //when the trashcan is clicked, the post should be removed
    $('.fa-trash').on('click', function() {
        $(this).closest(".post").remove();
    });

    deletePost();
};   

        // USER STORY 2: when a user clicks "comments" (above each post), it should toggle the comments and input box visible/hidden
    $('.fa-comments').on('click', function(e) { 
        e.preventDefault();
            //the commentsform should toggle visible/hidden
        $(this).closest(".post").toggleClass("show");

            //if the post that was clicked has the show class it should show the commentsForm
        if ($(this).closest(".post").hasClass('show')) {
            $(this).closest(".post").append($commentsForm);
        };
           
            // USER STORY 4: when a user fills out the two comment inputs and clicks "Post Comment", it should immediately add the comment to the list of comments
        $(".commentbutton").on('click', function(e){
            e.preventDefault();
            
                // when the user inputs their name and comment into the form, it should be referenced in these variables
            var $commentContent = $(this).closest('.post').find('#commentcontent').val();
            var $commenter = $(this).closest('.post').find('#commenter').val();

            var newComment = '<div class="comment text-muted">' + $commentContent + ' Posted by: <strong>' + $commenter + '</strong> <a href="#" class="remove-comment"><i class="fa fa-times" aria-hidden="true"></i></a> </div>';

            // the new comment should be added to the comments section
            $(this).closest('.comments-section').prepend(newComment);

            console.log("this is the comment the user entered:", $commentContent);
            console.log("This is the user who entered the comment:", $commenter);

                // USER STORY 3: when a user clicks the 'x' next to a comment, it should delete it
            $(".fa-times").on('click', function(){
                $(this).closest(".comment").remove();
            })
        });
    });
};

Post();

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
