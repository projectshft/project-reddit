$('button').on('click', function () {
	var name = $('#name').val();
	var text = $('#message').val();

	var postsDiv = $('.posts');

	var newPostDiv = $('<div>');

	var newPostTextSpan = document.createElement('span');
	var newPostTextNode = document.createTextNode(text);
	newPostTextSpan.appendChild(newPostTextNode);

	var newPostNameSpan = document.createElement('span');
	var newPostNameNode = document.createTextNode(' -Posted By: ' + name);
	newPostNameSpan.appendChild(newPostNameNode);

	var newPostHR = document.createElement('hr');

	newPostDiv.append(newPostTextSpan);
	newPostDiv.append(newPostNameSpan);
	newPostDiv.append(newPostHR);

	postsDiv.append(newPostDiv);
});


	


