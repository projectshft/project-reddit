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
    var addPost = [{
    Name: $yourName,
    Post: $postText
  	}];

//Variables that are able to take in and display the data that was previously stored in the array
	var $postDisplay = $('.added-post').prepend($postText);
	var $postNameDisplay = $('.user-name').prepend('Posted By: ' + '<b>' + $yourName + '</b>');

	// var newPost = $postDisplay

};

// Click listener that invokes postButtonClicked function when click is heard
$('#postBtn').click($postButtonClicked);


// function that resets form after submission
$(document).ready(function(){
    $("#postBtn").click(function(){
        $("#configform").trigger("reset");
    });
});







//HTML + CSS ----------------------------check
// Add a post----------------------------check
	//click function on post button -----check
	// collect values from form ---------check 
	//put values in a posts array -------check 
	//clear text boxes ------------------check
// display posts
//add comment to post 
// display comments 
//delete a comment 
// toggle comments box show/hide 
//delete a post 





