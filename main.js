 //creating a base html for each post. The function takes in the post text and author name and adds formats them within an html element including a removeand comment button
 var createPost = function(userName, userText) {
   var postTemplate = '<div id = "all-post-content"><button type = "button" class ="attached-buttons" id = "remove-button">remove</button><button type = "button" class = "attached-buttons" id = "comment-button">comment</button><div id = "post-box">' + userText + '<br>' + 'Posted By: ' +'<b>' + userName + '</b></div></div>'

   var commentFormTemplate = '<div id = "beforecommentform"><form class = "commentBox" id ="commentform"><input id = "comment-text" class="comment-input" type = "text" placeholder= "Comment Text"><input id = "comment-name" class = "comment-input" type = "text" placeholder = "User Name"><button type = "button" id ="post-comment-button" class = "btn btn-primary">Post Comment</button></form></div>'


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
     $(this).parent('#all-post-content').after(commentFormTemplate);

     //when the post-comment button is clicked the post comment funciton runs
     $('#post-comment-button').on('click', postComment)





   };

   //when the remove button is clicked the post is then removed
   var removeClick = function () {
     $('#all-post-content').remove();
   };

   //when post comment button is clicked the comment and then username of commenter is posted direclty underneath the post
   var postComment = function () {
     console.log('test comment button')
     var commentText = $('#comment-text').val();
     var commentName = $('#comment-name').val();
     var commentTextTemplate = '<p class = "commentBox" id = "comment">' + commentText + ' Posted By: ' + '<b>' + commentName + ' ' + '</b><i class="fas fa-trash-alt"></i></p>';

     //adds individual comment underneath each posts
     $(this).closest('#beforecommentform').prepend(commentTextTemplate);
     //once someone clicks the "post comment" the input form is then toggled off
     //I had tried to make it so when the "comment" button is clicked that the input form is toggled off, but did not have time to complete sufficiently. My code for this attempt is commented at the bottom of the file
     $('#commentform').toggle();


     //when the trash icon is clicked the comment closest to it is deleted
     $('#comment').find('i').on('click', function() {
     $(this).closest('#comment').remove();
   })
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


 // toggle feature stil needs to be worked on (it works the first time)
 // $(this).on('click', function () {
 //   console.log("toggle check");
 //   $this.closest('#commentform').toggle();//ends up deleting all form need to get id
 //
 // });
