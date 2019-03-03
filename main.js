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

var postsList = [];
var postID = 0;
var commentID = 0;

    //USER STORY 1: when a user fills out the two post inputs and clicks "Post", it should immediately add the post to the posts section, with username and message

$('button').on('click', function(e) {
    e.preventDefault();
    
        //grab the input from the form fields
    var $postContent = $('#message').val();
    var $userName = $('#name').val();


    postID += 1;
        //creates object of the post and username
    var post = {
        postContent: $postContent,
        userName: $userName,
        id: postID
    };
    
        //adds post objects to the postsList array
    postsList.push(post);
  
    var dt = new Date(); //use moment.js (figure out how to download) to refactor timestamp
    var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds(); 
    
        //if the posts div has any posts, clear them out so that posts aren't duplicated in the prepend process
    if ( $('.posts').children().length > 0 ) {
        $('.posts').empty(); 
    };
    
    for (var i = 0; i < postsList.length; i++) {
        $('.posts').prepend('<div class="post"> <a href="#" class="remove-link"><i class="fa fa-trash" aria-hidden="true"></i></a>' + ' ' + '<a href="#" class="comment-link" data-name="comments"><i class="fa fa-comments" aria-hidden="true"></i></a> <br>' + postsList[i].postContent + '<br> Posted by: ' + postsList[i].userName + ' at ' + time + '<hr /> </div>');
    }
        //checks to make sure each new post is added to postsList
    console.log("When 'Post' is clicked, array posts becomes:", postsList);
    
        // USER STORY 5: when a user clicks 'remove' above a post, it should remove the post, too
    $('.fa-trash').on('click', function() {
    
        //remove the post object from the array
        postsList = postsList.filter(function (index) {
            if (index.id != $(this).closest(".post")) {
                return true;
            };
            console.log("this is what the postsLists array looks like when I delete the post:", postsList);
        });
                //remove the post from the page
             $(this).closest(".post").remove();
        
           //checks to make sure each deleted post is removed from postsList
        console.log("When remove is clicked, the array posts becomes:", postsList);
    });
    

        // USER STORY 2: when a user clicks "comments" (above each post), it should toggle the comments and input box visible/hidden

    $('.fa-comments').on('click', function() { // look at hipster shopping/jason's message. need if else statement, hasClass, add class, toggle
           // $( ".comments" ).toggle();

            // create template for comments form
        var $commentsTemplate =
            '<form style class="margin-top:30px">'
            + '  <div class="form-group"> ' + '<input id="commenter" type="text" class="form-control-sm" placeholder="Name"></input>' + '<input id="comment-content" type="text" class="form-control-sm" placeholder="Comment"></input> <button type="submit" class="btn-secondary commentbutton">Post Comment</button></form>';
        
            //when comments link is clicked, comments form appears and the name and comment are inserted into the template
        $(this).closest(".post").append('<div class="comments">' + $commentsTemplate + '</div>');
    
        console.log("This is what the template looks like:", $commentsTemplate);
            
            // //get values of text input - is currently only returning undefined
        var $commentContent = $(this).find('#comment-content').val();
        var $commenter = $(this).find('#commenter').val();

        console.log("this is what the comment's content is:", $commentContent);
        console.log("This is what the commenter's name is:", $commenter);
    
        // // //if the comments div has DOM elements, clear them
         // // if ( $('.comments').children().length > 0 ) {
        // //     $('.comments').empty(); 
        // // };

            
            // USER STORY 4: when a user fills out the two comment inputs and clicks "Post Comment", it should immediately add the comment to the list of comments
        $(".commentbutton").on('click', function(){

            commentID += 1;

            $(this).closest('.post').append('<div class="comment">' + $commentContent + ' Posted by: ' + $commenter + ' <a href="#" class="remove-comment"><i class="fa fa-times" aria-hidden="true"></i></a> <hr /> </div>');
            
                // USER STORY 3: when a user clicks the 'x' next to a comment, it should delete it
            $(".fa-times").on('click', function(){
                $(this).closest(".comment").remove();
            })
        });

            //add comments as a key with the comment content and commenter name as it's value to the post array
        post.comments = ({commentContent: $commentContent, commenter: $commenter, id: commentID});

        console.log("this is what post array looks like:", post);
    });
});



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
