//Create page with functions postPost and yourName to add post to the DOM and tie postPost to the clickEvent on the "Post" button. I used .append to add the .val of the filled in forms to the page and created a blank comment button.
 
var deletePost = function() {
  console.log("deletePost");

};

//All the vars relating to the post are in the function because we need to define them when the function runs. Outside of this will return undefined. 
var postedPostsSelector = $('.postedPosts');
var createPost = function () {
  var postText = $('#postText').val();
  var postName = $('#postName').val();
  var template= "<div> <hr> <a href='#' id='delete'>delete </a>" +  postText + "<br> Posted By: <b>" + postName + "</b></br></hr></div>";
  // console.log(template);
  // Appending the template to postedPosts jQuery element. 
  postedPostsSelector.append(template);
  $('#delete').on("click", deletePost);
};
//Apply clickhandler to DOM by running createPost.
$('#postButton').on("click", createPost);
// Delete Posts


//Now I need to get the post comments to work within the individual posts. 



  // var commentButton = '<button id="comment-button">comment</button>';




// var createSongRow = function (songNumber, songName, songLength) {
// var template =
// '<tr class="album-view-song-item">'
// + '  <td class="song-item-number" data-song-number="' + songNumber + '">' + songNumber + '</td>'
// + '  <td class="song-item-title">' + songName + '</td>'
// + '  <td class="song-item-duration">' + songLength + '</td>'
// + '</tr>'
// };


//passing through the postPost callback function to click function which is triggered on jQuery Button.


//I need to create a  






//I need to make a Class of posts. Posts within posts are comments. 





//I need to put a comment function within the post. But in order to the comment form, I need to create an event handler for the "show comment button". The button will be created when I create the comment form. I will also need to add a button for Remove. 

// I need to figure out how to delete a comment and post. 

  

// We now want users to be able to leave comments on each post. When a user clicks 'comments' (above each post) it should toggle the comments and input box visible/hidden.

//Needs box visible/hidden. Must use a OnClick listener and then. Use $('.postText').each


// When a user fills out the two comment inputs and clicks 'Post Comment' it should immediately add the comment to the list of comments.

// When a user clicks the 'x' next to a comment, it should delete it.
// ---Create an button x tag in the html and connect it to what the user has already submitted. Need to use .html or .attr to put in the information. 



// Lastly, when a user clicks 'remove' above a post, it should remove the post too.


// That's all! To get started, fork and clone this repo. There's nothing in it but a README.md file, but we want you to fork/clone so you can leave a pull request when you're done for review. Enjoy!
