var userName = $('#name').val();
var post = $('#message').val();



var clicked = function () {
    alert('clicked');
    //post the post
}

$('#submit-post').on('click', clicked);

