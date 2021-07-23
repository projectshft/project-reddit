var posts = [];
var id = 1;


$("#submit-post").click(function () { 
   
  var author = $("#post-author").val();
  var text = $("#post-text").val();
  var postData = {'id': id, 'author': author, 'text': text, comments: []};

  posts.push(postData);

  $("#post-author").html('Your Name');
  $("#post-text").html('Post Text');

  var remove = '<button class="remove">Remove</button>';
  var comments = '<button>Comments</button>';
  
  $("#new-post").append('<p>' + remove + comments + text + " - Posted By: " + author + '<hr>'+ '</p>');

  id += 1;
});

$(document).on('click','.remove',  function() {  
  $(this).parent().next("hr").remove();
  $(this).closest('p').remove();

});


//click comments link then show html section with comments associated with post. 