var $posts = $('.posts');
var $submitButton = $('#submit-button');

// add post function that is called when submit button is clicked
var addPost = function() {

	// get the users name and message
	var $userName = $('#name').val();
	var $userMessage = $('#message').val();

	// create necessary elements to be append to page
	var $holder = $('<div/>',{
		class: 'holder'
	}); 

	var $commentButton = $('<button/>',{
		class: 'btn btn-info',
		html: "Comment"
	});
	
	var $removeButton = $('<button/>',{
		class: 'btn btn-danger',
		html: "Remove Post",
		style: 'margin: 10px'
	});

	var $userPosted = $('<div/>', {
		class: 'newPost',
		html: $userMessage + ' - Posted By: ' + $userName
	});

	$holder.append($userPosted, $commentButton, $removeButton);
	$posts.append($holder);

	// functions called on events
	$removeButton.click(removePost);
	$commentButton.click(addComment);
}

// add comment to correct post
var addComment = function () {
	var $parent = $(this).parent();

	// again build necessary elements
	var 
	$newForm = $('<form> </form>'),

	$formDiv = $('<div/>', {
		class: 'form-Div'
		
	}),

	$commentName = $('<input/>', { 
		id: 'comment-Name',
		type: 'text', 
		placeholder: 'Your name',
		style: 'width:65%' 
	}),

	$commentMessage = $('<input/>', { 
		id: 'Comment-Message',
		type: 'text', 
		placeholder: 'Your comment', 
		style: 'width:65%' 
	}),

	$commentHere = $('<button/>', {
		class: 'btn btn-primary',
		html: "Submit Comment"
		
	});

	var $commentSection = $('<div/>', {
		class: 'comments-section',
		style: 'width: 200px'
	});


	$formDiv.append($commentName, $commentMessage, $commentHere);
	$newForm.append($formDiv);
	$parent.append($newForm);

	// here we need to build an additional div and remove comment button for every submitted comment
	$commentHere.click(function (e) {
		var $commentList = $('<div/>', {
			class: 'comments-List',
		});

		var $removeComment = $('<button/>',{
			class: 'btn btn-danger',
			html: "Remove Comment",
			style: 'height: 25px;  margin-right: 20px; font-size: 10px;'
		});

		e.preventDefault();
		var $userCommented = $('<div/>', {
			class: 'newPost',
			html: $commentMessage.val() + ' - Posted By: ' + $commentName.val()
		});

		$commentList.append($userCommented, $removeComment);
		$commentSection.append($commentList);
		$parent.append($commentSection);

		$removeComment.click(removePost);
	});	
}

// simple function to remove either posts or comments
var removePost = function() {
	var $parent = $(this).parent();
	$parent.remove();	
}

$submitButton.click(addPost);