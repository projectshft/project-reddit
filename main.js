
$('#submit-post').on('click', function () {

		var $postText = $('#post-text').val();
		var $userName = $('#post-user').val();
		
		var newpostContainer = 
		'<div class="new-post">' + $postText + '</div>' +
		'Posted By: ' + '<b>' + $userName + '</b>' + '</div>';

	$('.posts').prepend(newpostContainer);
	$('#post-text').val('');
	$('#post-user').val('');

	
  });

// 	var newcommentContainer = 
// 		'<p>' + 
// 		'<div class="comments-container">' + '<div class=comments-list></div>' +
// 		'<input type="text" class="comment-name" placeholder="Post Comment">' + '<input type="text" class="comment-user">' +
// 		'<input type="text" class="post-user" placeholder="Username">' + '<input type="text" class="comment-user">'+
// 		'<button type="button" class="btn btn-primary" id="commentButton">Post Comment</button>' + '</form>' +
// 		'<p>';
  

// 	$('.post-form').prepend(newpostContainer);
// 	$('#submit-post').click($postButtonClicked);
// 	$('.comment-form').prepend(newcommentContainer);
// 	$('#commentButton').click($commentOnPost);
// };