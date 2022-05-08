console.log('load main.js')

$('.submit-post').on('click', function (e) {
  var postTextInput = $('#post-text-input').val()
  var postNameInput = $('#post-name-input').val()
  
  var date = new Date();
  
  var dayOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  var currentDay = new Intl.DateTimeFormat('en-US', dayOptions).format(date);
  
  var timeOptions = { hour: 'numeric', minute: 'numeric' };
  var currentTime = new Intl.DateTimeFormat('en-US', timeOptions).format(date);   
  
  $('#posts').last().append(`
    <div class="post">
      <p>${postTextInput}</p>
      <p class="small">
        <a href="#" class="remove">remove</a>
        | Posted by <strong>${postNameInput}</strong> on ${currentDay} at ${currentTime}
      </p>
      <hr />
    </div>
  `)

  $('#post-text-input').val('')
  $('#post-name-input').val('')
});

$('body').on('click', '.remove', function () {
  $(this).closest('.post').remove();
});