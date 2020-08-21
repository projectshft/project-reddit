$('button').click(function() {
    let input = $('#my-input').val();
    $('ul').append('<li>' + input + '</li>')
    
  })
  
  $('.students').on('click', 'li', function () {
    $(this).remove();
  })