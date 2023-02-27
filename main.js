$('button').on('click', function(){ 
    var post = $('#Message').val(); 
    var person = $('#Name').val(); 

    $('.remove-comments').append('<li><u>' + 'Remove Comment' + '</u></li>'); 
    $('.comments').append('<li>' + post +' - Posted By : ' + '<b>' + person + '<b/>' + '</li>' ); 
    bindEvents();

})

$('.remove-comments').on('click', 'li', function(e) {
    var $element = $(e.target); 

    $element.remove();
})