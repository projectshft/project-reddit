//Create function that takes in input in text fields when clicked and alerts user if fields are empty
var $postButtonClicked = function() { 
	var $postText = $('#postText').val();
		if ($postText.length < 1) {
			alert('Please enter a new post')
			return false;
	};
    var $yourName = $('#your-name').val();
    	if ($yourName.length < 1) {
			alert('Please enter your name')
			return false;
	};
   
//Variable that stores in the users inputs
   //  var addPost = [{
   //  Name: $yourName,
   //  Post: $postText
  	// }];

//Variables that are able to take in and display the data that was previously stored in the array
  var template = '<p>';
   template += '  <div class="added-post">' + $postText + '</div>';
   template += '  <div class="pb-3 mt-4 mb-2 border-bottom">' + 'Posted By: ' + '<b>' + $yourName + '</b>' + '</div>';
   template += '	<form class="navbar-form navbar-left" id="config-comment" role="search">';
   template += '  <div class="form-group"></div>';
   template += '	<input type="text" class="comment-text" placeholder="Comment Text">';
   template += '	<input type="text" class="usernameInput" placeholder="Username">';
   template += '  <button type="button" class="btn btn-primary" id="commentBtn">Post Comment</button>';
   template += '	</form>'
   template += '</p>' ;

	
//This invokes the template variable and prepends the data to the site
   $('.post-display').prepend(template);
   $('#commentBtn').click($commentOnPost);
};

// Click listener that invokes postButtonClicked function when click is heard
$('#postBtn').click($postButtonClicked);


// function that resets form after submission
$(document).ready(function(){
    $("#postBtn").click(function(){
        $("#configform").trigger("reset");
    });
});

//function for add comment events 
var $commentOnPost = function () {
	var $commentText = $('.comment-text').val();
    	if ($commentText.length < 1) {
			alert('Please enter text')
			return false;
	};
	var $usernameInput = $('.usernameInput').val();
    	if ($usernameInput.length < 1) {
			alert('Please enter username')
			return false;
		}
 	  var templateComment = '<p>'
   + '	<div class="add-post"></div>'
   + '  <div class="added-post">' + $commentText + '</div>'
   + '  <div class="pb-3 mt-4 mb-2 border-bottom">' + 'Posted By: ' + '<b>' + $usernameInput + '</b>' + '</div>';
   + '  <div class="container">';
   + '</p>' ;


   	$('form').prepend(templateComment);
 	};


// form reset for comment buttons 
$(document).ready(function(){
    $("#commentBtn").click(function(){
        $("#config-comment").trigger("reset");





});
});


  // var template = '<p>'
  //  + '	<form class="navbar-form navbar-left" role="search">';
  //  + '  <div class="form-group"></div>';
  //  + '  <div class="added-post">' + $postText + '</div>';
  //  + '  <div class="pb-3 mt-4 mb-2 border-bottom">' + 'Posted By: ' + '<b>' + $yourName + '</b>' + '</div>';
  //  + '	<input type="text" class="form-control" placeholder="Search">';
  //  + '  <button type="button" class="btn btn-primary">Primary</button>';
  //  + '	</form>'
  //  + '</p>' ;

  // var template = '<p>'
  //  + '  <div class="added-post">' + $postText + '</div>'
  //  + '  <div class="pb-3 mt-4 mb-2 border-bottom">' + 'Posted By: ' + '<b>' + $yourName + '</b>' + '</div>';
  //  + '  <div class="container">';
  //  + '</p>' ;



//HTML + CSS ----------------------------check
// Add a post----------------------------check
	//click function on post button -----check
	// collect values from form ---------check 
	//put values in a posts array -------check 
	//clear text boxes ------------------check
// display posts-------------------------check
//add comment to post 
// display comments 
//delete a comment 
// toggle comments box show/hide 
//delete a post 





