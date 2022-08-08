var $submitButton = $('#submit');


$submitButton.click(function (event) {
  addComment();
});


var addComment = function () {
  var userName = $('#name').val();
  var userMessage = $('#message').val();

  var innerHTMLString = 
  `<li class='list-group-item'>
    ${userMessage} - <strong> Posted By</strong>: ${userName}
      <button type="button" id="delete" class="btn btn-default btn-xs">
        <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>Delete
      </button>
    </li>`;

  $('.list-group').append(innerHTMLString);

  deleteComment();
}

var deleteComment = function( ){
  var $deleteButton = $('.list-group-item');

  $deleteButton.on('click','#delete',function() {
   $(this).closest('li').remove();
  });
}








//add comments button
/*<button type="button" id='add' class="btn btn-default btn-xs"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span>comments</button>*/

