var $posts = $('.posts');
var $submitButton = $('#submit-button');

var addPost = function() {
	var $userName = $('#name').val();
	var $userMessage = $('#message').val();


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

	$removeButton.click(removePost);
	$commentButton.click(addComment);
}


var addComment = function () {
	var $parent = $(this).parent();

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

var removePost = function() {
	var $parent = $(this).parent();
	$parent.remove();	
}

$submitButton.click(addPost);