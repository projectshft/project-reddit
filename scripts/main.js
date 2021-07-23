$('#submit').on('click', function () {
  var authorName = $('#authorName').val().trim();
  var postMessage = $('#postMessage').val().trim();
  if (authorName === '' || postMessage === '') {
    alert('Need to add a value!');
  } else {
    $('.posts').append("<div><a class='removePost' href = '#'>Remove</a> <a class='comments' href = '#'>Comments</a> " + postMessage + " - Posted By: " + authorName + "</div>");
  }
  
});



var commentInputTemplate = '<form style="margin-top:30px;" onsubmit="event.preventDefault();">\
<h3>Add a new post</h3>\
<div class="form-group">\
  <input id="postMessage" type="text"\
    class="form-control"\
    placeholder="Post Text"></input>\
</div>\
<div class="form-group">\
  <textarea id="authorName" type="text"\
  class="form-control"\
  placeholder="Your Name"></textarea>\
</div>\
<button id="submit" class="btn btn-primary">Submit Post</button>\
</form>';

