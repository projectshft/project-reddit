 //creating a base html for each post. The function takes in the post text and author name and adds formats them within an html element including a removeand comment button
 var createPost = function(userName, userText) {
   var postTemplate = '<p><button type = "button" class ="attached-buttons" id = "remove-button">remove</button><button type = "button" class = "attached-buttons" id = "comment-button">comment</button>' +
     userText + '<br>' + 'Posted By: ' + userName + '</p>'

   //set a function which changes the text color to navy and adds underline when hovered over
   var onHover = function() {
     $(this).css('color', 'navy');
     $(this).css('text-decoration', 'underline');
   }

   //return the text to the standard color and removing the underline (resetting the differences made in onHover)
   var offHover = function() {
     $(this).css('color', ' #007bff')
     $(this).css('text-decoration', 'none')
   }


   $posts = $(postTemplate)
   $posts.find('#remove-button').hover(onHover, offHover);
   $posts.find('#comment-button').hover(onHover, offHover);


   return $posts;

 };

 //when the post button is clicked a function is run which finds and stores the post text and author name  and adds it within the post-area section of the page
 $('.post-button').on('click', function() {
   var postText = $('#post-text').val();
   var postName = $('#post-name').val();
   $('.post-area').prepend(createPost(postName, postText));
 });

 //setting an underline and darker text to appear when hoering over the remove and comments button
 $('attached-buttons').mouseover(function() {
   console.log(4444);
   $(this).style.css('color', "navy");
 });


 //when comment is clicked on post after it is made, a toggle box
 //pops up which allows someone to add comment and usder name and a button as well

 //have to click a specific post(it neds to be wrapped in something)




 //when someone clicks the x the comment is removed

 //when someone clicks the remove button the entire post is deleted