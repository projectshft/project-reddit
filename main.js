$('.submit-post').on('click', function () {
  var $input = $('#input-post').val();
  var $name = $('#input-name').val();

  $('.posts').append('<div> <button type="button" class="btn btn-link comment">comment</button> <button type="button" class="btn btn-link remove">remove</button>' + $input + ' -Posted by: ' + $name + '</div><div class="comment-section" style="display: none"><div class="comments"></div><input type="text"class="form-control input-area"id="input-comment"placeholder="Your comment"/> <input type="text"class="form-control input-area"id="input-name2" placeholder="Your name"/> <button type="button" class="btn btn-primary submit-comment"> Submit Comment </button></div><hr />');
});

$('.posts').on('click', '.comment', function () {
  var $comments = $('.comment-section');
  $comments.toggle();
});

$('.posts').on('click','.submit-comment', function () {
  var $commentInput = $('#input-comment').val();
  var $commentName = $('#input-name2').val();
  $('.comments').append('<button type="button" class="btn btn-link remove">remove</button>' + $commentInput + ' -Posted by: ' + $commentName + '</div>');
})

$('.posts').on('click', '.remove', function () {
  var $comments = $('.comment-section');
  $comments.hide();
});
