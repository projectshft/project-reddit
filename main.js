//Create function that takes in input in text fields when clicked 
var $postButtonClicked = function() { 
	var $postText = $('#postText').val();
    var $yourName = $('#your-name').val();
    

    //Variable that takes in the users inputs
    var addPost = [{
    Name: $yourName,
    Post: $postText
  	}];

// console.log(addPost);

	var $postDisplay = $('.added-post').append($postText);
	var $postNameDisplay = $('.user-name').append('Posted By: ' + '<b>' + $yourName + '</b>');


  //   var addPost = 
		// console.log($postText);
		// console.log('Posted By: ' + $yourName);
};

// Click listener that invokes postButtonClicked variable 
$('#postbtn').click($postButtonClicked);



	


// var $pushPost = addPost.push($postText, $yourName);

// console.log($pushPost);

////////////////////////////////////////////////////////////

//console.log('the value =' + '' + postText + yourName);

// var postBtn= $("#postbtn").click(function() {
// 	var postText= $('.form-control').val();

// // 	console.log("the value of the post text is ", postText, postBtn );
// });



//HTML + CSS 
// Add a post
	//click function on post button 
	// collect values from form 
	//put values in a posts array 
	//clear text boxes 
// display posts
//add commit to post 
// display comments 
//delete a comment ]
// toggle comments box show/hide 
//delete a post 





