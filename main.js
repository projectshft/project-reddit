$(document).ready(function() {
  $('#submit').click(function(){
    var input = $('#name').val();
    var message = $('#message').val()
    $('.posts').append(`
      <div id="post">
        <p id="post1">${message}</p>
        <p id="postedBy">Posted by: '${input}</p>
        <a id="remove"><button type="button" class="btn btn-danger">remove</button></a>
        <hr></hr>
      </div>
    `)
  });
  $(document).on('click', '#remove', function() {
    $(this).parent().remove();
  });
});









