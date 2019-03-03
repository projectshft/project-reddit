postArray = [];

var createPost = function(counter) {
  var template =	 '<div class="border-bottom pb-3">'
                  + '<div class="d-inline">'
                  + '<button type="button" id="postRemove" class="btn btn-link p-0">remove </button>'
                  + '<button type="button" id="postComments" class="btn btn-link p-0">comments </button>'
                  + '<h6 class="post font-weight-light">'+ postArray[counter-1].postBody +'</h6>'
                  + '</div>'
                  + '<h6 class="user">Posted By: <strong>'+ postArray[counter-1].postUser +'</strong></h6>'
                  + '<div class="commentBox">'
                  + '<form class="form-inline">'
                  + '<input type="text" class="form-control w-25" id="commentFormBody" placeholder="Comment Text">'
                  + '<input type="text" class="form-control w-25" id="commentFormName" placeholder="Your Name">'
                  + '<button type="button" class="btn btn-primary w-25">Post Comment</button>'
                  + '</form>'
                  + '</div>'
                  + '</div>'

                             



  var $post = $('.postBox');
  $post.prepend(template);
}

var createComments = function(counter) {

  var template = '<div data-comment="1">'
                + '<h6>test comment</h6>'
                + '</div>'

  var $comment = $('.commentBox');
  $comment.prepend(template);
}

$(".btn").click(function() { //post button click event handler
  post = $('#postFormBody').val(); 
  name = $('#postFormName').val();
  if (post != "" && name != "") {
    postArray.push({postBody: post, postUser: name});
    $("#postFormBody").val("");
    $("#postFormName").val("");
    createPost(postArray.length);
  }
});

$(document).on("click", '#postRemove',function() {
  $(this).parent().parent('div').remove();
});

$(document).on("click", '#postComments',function() {
  $(this).parent().siblings(".commentBox").toggle();
});

$('document').ready(function () {
});
