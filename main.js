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
		(11)	make sure a user can remove their post
		(11)	review code and assure that, when possible, jQuery syntax is used
		(12)	when necessary, rewrite code to limit verbosity
		(13)	re-arrange the lines of the main code block so that it is easy for the 'reader' to follow
		(14)  revisit #11 

		PART2
		(1)		begin once PART1 is functional

		-BEAUTIFY-
		(1)		check indentation and rename variables so that they are concise yet still descriptive
		(2)		stylize all text
		(3)		stylize background
		(4)		utilize 12-column grid from css.frameworks file
*/


$('button').on('click', function () {
	
	var text = $('#message').val();
	var name = $('#name').val();

	var postsDiv = $('.posts');
	var newPostDiv = $('<div/>', {id: "newness"});

	var buttonRemove = document.createElement('button');
	buttonRemove.id = 'someId';
	var removeNode = document.createTextNode('remove');
	buttonRemove.appendChild(removeNode);
	
	var newPost = document.createElement('span');
	var newPostNode = document.createTextNode(text);
	newPost.appendChild(newPostNode);
	
	var newName = document.createElement('span');
	var newNameNode = document.createTextNode(' -Posted By: ' + name);
	newName.appendChild(newNameNode);
	
	var newPostHR = document.createElement('hr');

	newPostDiv.append(buttonRemove);
	newPostDiv.append(newPost);
	newPostDiv.append(newName);
	newPostDiv.append(newPostHR);

	postsDiv.append(newPostDiv);
	document.getElementById('name').value = '';
	document.getElementById('message').value = '';	
	
	function clearMessage() {
		$('#newness').remove();
	}
	
	buttonRemove.addEventListener('click', function () {
		clearMessage();
	});
});







	


