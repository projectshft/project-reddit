//create post functionality
$('button').click(function(){
  var $postText = $('#user-post-text').val();
  var $userName = $('#user-post-name').val();
  $('.list-group-flush').append('<li class = "list-group-item">'+ $postText + '<br>' + "Posted By: " + '<b>'+$userName +'</b>'+'</li>');
});

//add commenting functionality
