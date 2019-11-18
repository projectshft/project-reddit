
$('#submit-post').on('click', function () {

		var $postText = $('#post-text').val();
		var $userName = $('#post-user').val();
		
		var newpostContainer = 
		'<div class="post">' +
		'<a href="#" class="remove-link" role="button">Remove</a>' + '<div>' + 
		'<a href="#" class="comment-link" role="button">Add Comment</a>' + 
		'<div class="page-header">' +
		'<div class="new-post">' + $postText + '</div>' +
		'Posted By: ' + '<b>' + $userName + '</b>' + '</div>';
		'<form class="comment-form">' +
		'<div class="comment">' +
        '<input class="comment-text" type="text" placeholder="Enter Comment">' +
        '<input class="comment-name" type="text" placeholder="Username">' +
		'<button class="btn btn-primary comment-button" type="button">New Comment</button>' +
		'</form>' +'<div>' +
		'</div>'
		//the posts are appended here
		
	$('#posts').prepend(newpostContainer);
	$('#post-text').val('');
	$('#post-user').val('');


  });

commentClick = function(event) {
	  
	if ($(event.target).hasClass("comment-button")) {
		let $commentText = $('.comment-text').val()
		let $commentName = $('.comment-name').val()
			
		var newcommentContainer = '<p class="comment">' + $commentText + 'Comment By:' + $commentName + 
								'<a class="btn remove-comment" href="#"><i class="far></i></a></p>';
		$(event.target).prevAll(".comment-text").before(newcommentContainer)
		
	 
		if($(event.target).hasClass('remove-link')) {
		$(event.target).closest('.posts').remove();
	}
}
		$("#posts").on("click", commentClick)	
}
	
$(".btn-comment").click(function() {
  	$(this).parents(".post"); 

  });	  

	  
