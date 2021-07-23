var posts = [{author: 'Zach', text: 'Blah blah', comments:[]}];


$("#submit-post").click(function () {  
  var author = $("#post-author").val();
  var text = $("#post-text").val();
  var postData = {'author': author, 'text': text, comments: []};

  posts.push(postData);
  
  $("#post-author").html('Your Name');
  $("#post-text").html('Post Text');

  
  // showPosts(); Will need to show all posts after new one is submitted
});

var showPosts = function(posts){};//iterate through posts array and update html
