$( "#post-form" ).submit(function( event ) {
	$postItems = $('#post-items');
	postText = $('#postText').val();
	userName = $('#userName').val();
	//console.log(postText, userName);
	var newPost = createPost(postText, userName);
  //alert( "Handler for post .submit() called." );
  console.log(newPost);

  //need to add inner html here somehow
  $postItems.append(newPost);
  event.preventDefault();
});

//function that handles posting creation
var createPost = function (postContent, userName){
	var postTemplate =
     '<div class="user-post grey-separator top-padded">'
   + '  <p class="post-content"> ' + postContent + ' </p>'
   + '<div class="post-comments"></div>'
	 + '  <p class="post-name"><b>Posted By:</b> <em>' + userName + '</em> </p>'
   + '</div>'
   ;

   return postTemplate;
};


	//onHover function that displays the 'x' to delete a post or edit post or post comments

	//function that handles posting deletion

	//EXTENSION: function that enables users to edits

	//function that handles comment creation
	var createComment = function (commentContent, userName){
	var commentTemplate =
     '<div class="user-comment grey-separator top-padded">'
   + '  <p class="comment-content"> ' + commentContent + '	<b>Commented By:</b><em>' + userName + '</em></p>'
   + '</div>';

   return commentTemplate;
};
	//function that handles comment deletion





//EXTENSION: function that displays posts in a "new" screen, with comments below.