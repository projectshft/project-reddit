/* <pseudo>
//  -PART1-
		(1)		create click handler using qJuery syntax
		(2)		define name and text- set equal to the values that are inputted by user
		(3)		define variable (newPost) to store the creation of a new span element for each post (aka text/user message)
		(4)		define variable (newName) to store the creation of a new span element for each name (aka user name) 
		(5)		define variable (newPostNode) to store the creation of new node for the text (message) that is wrapped in span element
		(6)		define variable (newNameNode) to store the creation of new node for the name (user name) that is wrapped in span element 
		(7)		user input needs to be placed in the nodes mentioned above...use appendChild method for this
		(8)		user input must be rendered on page upon triggering event (i.e. button), so...specify the location of such rendering by declaring variables that are associated with the appropriate elements (i.e. posts div and new posts div)
		(9)		new posts should be rendered on separate rows. Declare a variable that stores the creation of a new element (i.e. row)
		(10)	clear input fields upon click event (i.e. submit button)
		(11)	make sure a user can remove their post (i.e. remove button-link)
		(11)	review code and assure that, when possible, jQuery syntax is used
		(12)	when necessary, rewrite code to limit verbosity
		(13)	re-arrange the lines of the main code block so that it is easy for the reader to follow
		

		-BEAUTIFY-
		(1)		check indentation and rename variables so that they are concise yet still descriptive
		(2)		stylize all text
		(3)		stylize background
		(4)		utilize 12-column grid from css.frameworks file
*/

$('button').on('click', function () {
  var text = $('#message').val();
  var name = $('#name').val();
  if (text == '' || name == '') {
    return alert('Post and Name are required');
  }
  var both = text + ' -Posted By: ' + name;

  var removeButton = document.createElement('button');
  removeButton.innerHTML = 'remove';
  removeButton.id = 'oneId';

	var currentPost = $('<p></p>')
	$('.posts').append(currentPost);
	currentPost.id = 'new';
	currentPost.append(removeButton);
	currentPost.append(both);
	currentPost.append('<hr>');

	$('#message').val('');
	$('#name').val('');
  
	function clearMessage() {
		console.log('This button fires at the appropriate time');
		$('.posts').children(this.currentPost).remove();
	}

	removeButton.addEventListener('click', function () {	
		clearMessage();
		
  });
});









	


