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
     '<div class="user-post grey-separator">'
   + '  <p class="post-content"> ' + postContent + ' </p>'
	 + '  <h5 class="post-name">Posted By: <em>' + userName + '</em> </h5>'
   + '</div>'
   ;

   return postTemplate;
};


	//onHover function that displays the 'x' to delete a post or edit post or post comments

	//function that handles posting deletion

	//EXTENSION: function that enables users to edits

	//function that handles comment creation

	//function that handles comment deletion





//EXTENSION: function that displays posts in a "new" screen, with comments below.