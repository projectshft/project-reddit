//Receive name and post-text inputs and output them to the "new post viewer" section of the html.
$('#post-button').on('click', function() {
  var $nameOutput = $('#name-input').val();
  var $textOutput = $('#post-body-input').val();

  console.log('$nameOutput is: ', $nameOutput);
  console.log('$textOutput is: ', $textOutput);

  // Create variable to hold html and text to be reinserted to index.html
  var $postIt = "`<p>${$textOutput}</p><p>Posted by: <b>${$nameOutput}</b></p><div class="border-bottom my-3"></div>`";

  $('#post-view').append($postIt);

  // Do the above without a variable, just in case
  // $('#post-view').append(
  //   `<p>${$textOutput}</p><p>Posted by: <b>${$nameOutput}</b></p><div class="border-bottom my-3"></div>`
  // );
  
  $('#name-input').val('');
  $('#post-body-input').val('');
});
