postArray = [];

var createPost = function(counter) {
  var template =	'<a href="">remove </a><h6 class="post font-weight-light" data-post="'+counter+'">'+ postArray[counter-1].postBody +'</h6>'
                  + '<div>'
                  + '<h6 class="user" >Posted By: <strong>'+ postArray[counter-1].postUser +'</strong></h6>'
                  + '</div class="border-bottom">'

var $post = $('.postBox');
$post.append(template)
}

$(".btn").click(function() {
  post = $('#postFormBody').val();
  name = $('#postFormName').val();
  postArray.push({postBody: post, postUser: name});
  createPost(postArray.length);
});

$('document').ready(function () {
});
