 //creating a base html for each post. The function takes in the post text and author name and adds formats them within an html element including a removeand comment button
 var createPost = function(userName, userText) {
   var postTemplate = '<div id = "all-post-content"><button type = "button" class ="attached-buttons" id = "remove-button">remove</button><button type = "button" class = "attached-buttons" id = "comment-button">comment</button><div id = "post-box">' + userText + '<br>' + 'Posted By: ' + userName + '</div></div>'

   var commentFormTemplate = '<form class = "commentBox" id ="commentform"><input id = "comment-text" type = "text" placeholder= "Comment Text"><input id = "comment-name" type = "text" placeholder = "User Name"><button type = "button" id ="post-comment-button" class = "btn btn-primary">Post Comment</button></form>'


   $posts = $(postTemplate);



   //set a function which changes the text color to navy and adds underline when hovered over
   var onHover = function() {
     $(this).css('color', 'navy');
     $(this).css('text-decoration', 'underline');
   }

   //return the text to the standard color and removing the underline (resetting the differences made in onHover)
   var offHover = function() {
     $(this).css('color', ' #007bff')
     $(this).css('text-decoration', 'none')
   };

   //when the comment button is a comment and username input boxes appear under the post along with a post comment button
   //one the comment button is clicked again the form to add a comment is toggled off
   var commentClick = function() {
     $posts.find('#post-box').after(commentFormTemplate);
     $posts.find('#comment-button').on('click', function () {
       $posts.find('.commentBox').toggle();
       $
     });
     //when the post-comment button is clicked the post comment funciton runs
     $posts.find('#post-comment-button').on('click', postComment)
     //toggling the display





   };

   //when the remove button is clicked the post is then removed
   var removeClick = function () {
     $('#all-post-content').remove();
   };

   //when post comment button is clicked the comment and then username of commenter is posted direclty underneath the post
   var postComment = function () {
     console.log('test');
     var commentText = $('#comment-text').val();
     var commentName = $('#comment-name').val();
     var commentTextTemplate = '<p class = "commentBox" id = "comment">' + commentText + ' Posted By: ' + commentName + '</p>';
     $posts.find('#post-box').after(commentTextTemplate);





   };

   $posts.find('#remove-button').hover(onHover, offHover);
   $posts.find('#comment-button').hover(onHover, offHover);
   $posts.find('#comment-button').on('click', commentClick);
   $posts.find('#remove-button').on('click', removeClick);


   return $posts;

 };

 //when the post button is clicked a function is run which finds and stores the post text and author name  and adds it within the post-area section of the page
 $('.post-button').on('click', function() {
   var postText = $('#post-text').val();
   var postName = $('#post-name').val();
   $('.post-area').prepend(createPost(postName, postText));
 });



 //when comment is clicked on post after it is made, a toggle box
 //pops up which allows someone to add comment and usder name and a button as well

 //have to click a specific post(it neds to be wrapped in something)




 //when someone clicks the x the comment is removed

 //when someone clicks the remove button the entire post is deleted
