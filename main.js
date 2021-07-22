$('.submit-post').on('click', function () {
  var $input = $('#input-post').val();
  var $name = $('#input-name').val();

  $('.posts').append('<div> <button type="button" class="btn btn-link comment">comment</button> <button type="button" class="btn btn-link remove">remove</button>' + $input + ' -Posted by: ' + $name + '<div class="comment-section" style="display: none"> <div class="comments"> </div> <div ="comment-input-area"> <input type="text"class="form-control input-area input-comment" placeholder="Your comment"/> <input type="text"class="form-control input-area input-name2" placeholder="Your name"/> <button type="button" class="btn btn-primary submit-comment"> Submit Comment </button> </div>  </div> <hr /> </div> ');
  bindRemove();
});

$('.posts').on('click', '.comment', function () {
  var $commentSection =  $(this).closest('div').find('.comment-section');
  if ($commentSection.css('display') ==='none') {
    $commentSection.show();
  }else {
    $commentSection.hide();
  }
});

$('.posts').on('click', '.submit-comment', function () {
  var $commentInput = $(this).closest('.comment-section').find('.input-comment').val();
  var $commentName = $(this).closest('.comment-section').find('.input-name2').val();
  $(this).closest('.comment-section').find('.comments').append('<div> <button type="button" class="btn btn-link remove">remove</button>' + $commentInput + ' -Posted by: ' + $commentName + '</div>');
  bindRemove();
})


var bindRemove = function () {
  $('.remove').on('click', function () {
    $(this).closest('div').remove();
  });  
};
